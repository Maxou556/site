const photos = [
  {
    src: '/images/plat-magret.jpg',
    alt: 'Magret laqué, pommes de terre rôties et purée',
    caption: 'Magret & fruits',
    mod: 'a',
    real: true,
  },
  {
    src: '/images/plat-courge.jpg',
    alt: 'Courge rôtie, quinoa et purée dans une assiette artisanale',
    caption: 'Courge & graines',
    mod: 'b',
    real: true,
  },
  {
    src: '/images/plat-confit.jpg',
    alt: 'Confit de canard sur lit de grains épicés',
    caption: 'Confit du jour',
    mod: 'c',
    real: true,
  },
  {
    src: '/images/plat-volaille.jpg',
    alt: 'Volaille rôtie, morilles et crème de potiron',
    caption: 'Volaille & morilles',
    mod: 'd',
    real: true,
  },
]

export default function Ambiance() {
  return (
    <section className="section ambiance" id="ambiance">
      <div className="container">
        <div className="ambiance__intro">
          <p className="section-kicker reveal-up">Ambiance & assiettes</p>
          <h2 className="section-title reveal-up">Ce qu&apos;on met sur la table</h2>
          <p className="lead reveal-up">
            Quelques plats maison pour se faire une idée — le reste se découvre
            sur place, à l&apos;ardoise.
          </p>
        </div>

        <div className="ambiance__grid">
          {photos.map((photo) => (
            <figure
              key={photo.mod}
              className={`ambiance__item ambiance__item--${photo.mod}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={900}
                height={1200}
                loading="lazy"
              />
              <figcaption className="ambiance__caption">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
