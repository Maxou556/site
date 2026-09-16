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
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80',
    alt: 'Illustration d’une terrasse de restaurant',
    caption: 'Terrasse',
    mod: 'c',
    real: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Illustration d’un intérieur de bar-restaurant',
    caption: 'Intérieur',
    mod: 'd',
    real: false,
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
            Photos de plats du lieu, et quelques vues d&apos;ambiance marquées
            comme illustrations (pas prises sur place).
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
              {!photo.real && (
                <span className="illustration-badge illustration-badge--photo">
                  Image d&apos;illustration
                </span>
              )}
              <figcaption className="ambiance__caption">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
