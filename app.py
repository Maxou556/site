from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configuration de la base de données
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ghlin_les_bains.db'
db = SQLAlchemy(app)

# Modèle pour les consommations
class Consumption(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    drink_type = db.Column(db.String(50), nullable=False)  # "beer" ou "wine"
    quantity = db.Column(db.Float, default=1.0)

# Modèle pour les utilisateurs
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)

# Crée les tables dans la base de données avec le contexte d'application
with app.app_context():
    db.create_all()

# Route pour ajouter un utilisateur
@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.json
    name = data.get('name')

    if not name:
        return jsonify({'error': 'Name is required!'}), 400

    # Vérifie si l'utilisateur existe déjà
    existing_user = User.query.filter_by(name=name).first()
    if existing_user:
        return jsonify({'message': 'User already exists!'})

    # Ajoute un nouvel utilisateur
    new_user = User(name=name)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User added successfully!'})

# Route pour récupérer tous les utilisateurs
@app.route('/get_users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify({'users': [user.name for user in users]})

# Route pour ajouter une consommation
@app.route('/add_drink', methods=['POST'])
def add_drink():
    data = request.json
    name = data.get('name')
    drink_type = data.get('drink_type')

    if not name or not drink_type:
        return jsonify({'error': 'Name and drink_type are required!'}), 400

    # Ajoute à la base de données
    new_consumption = Consumption(name=name, drink_type=drink_type)
    db.session.add(new_consumption)
    db.session.commit()

    return jsonify({'message': 'Drink added successfully!'})

# Route pour récupérer les totaux
@app.route('/totals', methods=['GET'])
def totals():
    total_beer = db.session.query(db.func.count(Consumption.id)).filter_by(drink_type='beer').scalar()
    total_wine = db.session.query(db.func.count(Consumption.id)).filter_by(drink_type='wine').scalar()
    return jsonify({'beer': total_beer or 0, 'wine': total_wine or 0})

# Route pour le leaderboard
@app.route('/leaderboard', methods=['GET'])
def leaderboard():
    results = db.session.query(Consumption.name, db.func.count(Consumption.id).label('count'))\
                        .group_by(Consumption.name)\
                        .order_by(db.desc('count')).all()
    return jsonify({'leaderboard': [{'name': r[0], 'count': r[1]} for r in results]})

if __name__ == '__main__':
    app.run(debug=True)
