export default function Esprit() {
  return (
    <section className="section esprit" id="esprit">
      <div className="container esprit__grid">
        <div className="esprit__text">
          <p className="section-kicker reveal-up">L&apos;esprit du lieu</p>
          <h2 className="section-title reveal-up">Ni bistrot bâclé, ni resto guindé</h2>
          <p className="lead reveal-up">
            Une guinguette culturelle où l&apos;on vient pour bien manger, rester
            un peu, et parfois tomber sur un concert.
          </p>
          <div className="body-text reveal-up">
            <p>
              Au cœur de Mons, Les Filles au La cultivent une ambiance de terrasse
              d&apos;été : tables en métal, ardoises à la craie, conversations qui
              s&apos;entrelacent. On y mange une cuisine soignée et créative —
              décontractée, mais jamais négligée.
            </p>
            <p>
              Le soir, le lieu s&apos;ouvre à la culture : concerts, événements,
              apéros qui durent. Pas de chichi, juste une maison accueillante où
              l&apos;on se sent bien, entre amis ou en famille.
            </p>
          </div>
          <div className="esprit__meta reveal-up">
            <div className="esprit__meta-item">
              <strong>20–60 €</strong>
              <span>Gamme de prix</span>
            </div>
            <div className="esprit__meta-item">
              <strong>Mons</strong>
              <span>Rue du Hautbois</span>
            </div>
            <div className="esprit__meta-item">
              <strong>Guinguette</strong>
              <span>&amp; culture</span>
            </div>
          </div>
        </div>

        <div className="esprit__visual reveal-fade">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
            alt="Tablée conviviale en terrasse au crépuscule"
            width={1200}
            height={1500}
            loading="lazy"
          />
          <aside className="esprit__note">
            Un soir d&apos;été, un verre à la main, et le bruit doux de la ville
            en fond.
          </aside>
        </div>
      </div>
    </section>
  )
}
