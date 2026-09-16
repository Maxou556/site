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
    name: 'Pavé de saumon',
    desc: 'Beurre citronné, légumes de saison',
    price: '26 €',
  },
  {
    name: 'Planche à partager',
    desc: 'Fromages, charcuteries, pickles maison',
    price: '19 €',
  },
  {
    name: 'Tarte du jour',
    desc: 'Selon l’humeur du pâtissier',
    price: '8 €',
  },
]

export default function Carte() {
  return (
    <section className="section carte" id="carte">
      <div className="container">
        <div className="ardoise">
          <header className="ardoise__header">
            <ChalkTitle text="La carte du jour" />
            <p>Quelques plats vedettes — comme sur notre vraie ardoise</p>
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
            La carte change au fil des arrivages — demandez les plats du jour.
          </p>
        </div>
      </div>
    </section>
  )
}
