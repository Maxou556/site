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

export default function Carte() {
  return (
    <section className="section carte" id="carte">
      <div className="container container--narrow">
        <div className="ardoise">
          <p className="illustration-badge illustration-badge--chalk">
            Menu d&apos;illustration — fictif
          </p>
          <header className="ardoise__header">
            <ChalkTitle text="La carte du jour" />
            <p>
              Ces plats et prix sont inventés pour le mock-up du site. Ce n&apos;est
              pas la vraie carte du restaurant.
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
            Sur place, seuls comptent l&apos;ardoise du jour et les suggestions
            de l&apos;équipe.
          </p>
        </div>
      </div>
    </section>
  )
}
