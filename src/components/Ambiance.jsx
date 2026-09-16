const photos = [
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80',
    alt: 'Terrasse animée sous les parasols',
    caption: 'Sous les parasols',
    mod: 'a',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
    alt: 'Assiette soignée sur nappe colorée',
    caption: 'Assiettes du jour',
    mod: 'b',
  },
  {
    src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1000&q=80',
    alt: 'Intérieur chaleureux du restaurant',
    caption: 'Salon d’hiver',
    mod: 'c',
  },
  {
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1400&q=80',
    alt: 'Concert et soirée culturelle',
    caption: 'Soirées & concerts',
    mod: 'd',
  },
]

export default function Ambiance() {
  return (
    <section className="section ambiance" id="ambiance">
      <div className="container">
        <div className="ambiance__intro">
          <p className="section-kicker reveal-up">Ambiance</p>
          <h2 className="section-title reveal-up">La vie du lieu</h2>
          <p className="lead reveal-up">
            Terrasse, tablées, assiettes colorées et soirées qui vibrent un peu —
            voilà l&apos;esprit Filles au La.
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
                width={1400}
                height={900}
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
