import ChalkTitle from './ChalkTitle'

const plats = [
  {
    name: 'Burrata & légumes grillés',
    desc: 'Huile d’olive, herbes du jardin, pain grillé',
    price: '16 €',
  },
  {
    name: 'Tartare de bœuf revisité',
    desc: 'Câpres, moutarde douce, frites maison',
    price: '22 €',
  },
  {
    name: 'Risotto safran & crevettes',
    desc: 'Crémeux, citron confit, touche iodée',
    price: '24 €',
  },
  {
    name: 'Confit de canard & grains épicés',
    desc: 'Oignon rouge, coriandre, sauce carotte',
    price: '26 €',
  },
  {
    name: 'Volaille rôtie, morilles & potiron',
    desc: 'Crème de courge, romarin',
    price: '27 €',
  },
  {
    name: 'Tarte du jour',
    desc: 'Selon l’humeur du pâtissier',
    price: '8 €',
  },
]

const degustation = [
  'Amuse-bouche du jour',
  'Entrée au choix (ardoise)',
  'Plat signature de saison',
  'Fromage ou pré-dessert',
  'Dessert du chef',
  'Accord mets & vins en option',
]

export default function Carte() {
  return (
    <section className="section carte" id="carte">
      <div className="container carte__layout">
        <div className="ardoise">
          <header className="ardoise__header">
            <ChalkTitle text="La carte du jour" />
            <p>
              Exemples de plats — la vraie ardoise change selon les arrivages
            </p>
          </header>

          <ul className="ardoise__list">
            {plats.map((plat) => (
              <li className="ardoise__item" key={plat.name}>
                <span className="ardoise__name">{plat.name}</span>
                <span className="ardoise__price">{plat.price}</span>
                <span className="ardoise__desc">{plat.desc}</span>
              </li>
            ))}
          </ul>

          <p className="ardoise__footer">
            Demandez les suggestions du jour à table.
          </p>
        </div>

        <aside className="degustation">
          <p className="degustation__kicker">Pour savourer sans se presser</p>
          <h3 className="degustation__title">Menu dégustation</h3>
          <p className="degustation__lead">
            Un parcours en cinq temps, pensé comme une soirée en terrasse —
            créatif, généreux, sans chichi.
          </p>
          <ol className="degustation__list">
            {degustation.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="degustation__price">
            <strong>48 €</strong>
            <span> / personne · sans boissons</span>
          </p>
          <p className="degustation__note">
            Sur réservation · disponible le soir (selon saison)
          </p>
        </aside>
      </div>
    </section>
  )
}
