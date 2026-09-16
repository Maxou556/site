export default function Avis() {
  return (
    <section className="section section--tight avis" id="avis" aria-label="Avis">
      <div className="container">
        <div className="avis__card reveal-up">
          <div className="avis__stars" aria-hidden="true">
            ★★★★☆
          </div>
          <p className="avis__score">
            4,5<span>/5</span>
          </p>
          <p className="body-text">
            Une note qui se mérite sur le terrain : cuisine soignée, accueil
            chaleureux, terrasse qu&apos;on ne quitte pas facilement.
          </p>
          <blockquote className="avis__quote">
            « On y revient pour l&apos;ambiance autant que pour les assiettes. »
          </blockquote>
          <p className="avis__source">Google · 248 avis</p>
        </div>
      </div>
    </section>
  )
}
