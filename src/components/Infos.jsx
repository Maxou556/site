export default function Infos() {
  return (
    <section className="section infos" id="infos">
      <div className="container">
        <div className="infos__panel">
          <div>
            <p className="section-kicker reveal-up">Infos pratiques</p>
            <h2 className="section-title reveal-up">Venez nous voir</h2>
            <p className="lead reveal-up">
              Au 13 de la Rue du Hautbois, on vous attend pour un déjeuner, un
              dîner ou un apéro qui déborde un peu.
            </p>

            <dl className="infos__list">
              <div className="infos__row reveal-up">
                <dt>Adresse</dt>
                <dd>
                  Rue du Hautbois 13
                  <br />
                  7000 Mons, Belgique
                  <a
                    className="map-link"
                    href="https://www.google.com/maps/search/?api=1&query=Rue+du+Hautbois+13+7000+Mons"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ouvrir dans Maps →
                  </a>
                </dd>
              </div>

              <div className="infos__row reveal-up">
                <dt>Horaires</dt>
                <dd>
                  <div className="infos__hours">
                    <span>
                      <em>Mar – Jeu</em>
                      <span>12h–14h30 · 18h–22h</span>
                    </span>
                    <span>
                      <em>Ven – Sam</em>
                      <span>12h–14h30 · 18h–23h</span>
                    </span>
                    <span>
                      <em>Dimanche</em>
                      <span>12h–15h · soir selon agenda</span>
                    </span>
                    <span>
                      <em>Lundi</em>
                      <span>Fermé</span>
                    </span>
                  </div>
                </dd>
              </div>
            </dl>
          </div>

          <aside className="infos__cta-box reveal-fade">
            <h3>Une table pour ce soir ?</h3>
            <p>
              Réservez votre place en terrasse ou à l&apos;intérieur — on garde
              aussi quelques places pour les chanceux qui passent.
            </p>
            <a
              className="btn btn--primary"
              href="mailto:bonjour@lesfillesaula.be?subject=Réservation%20—%20Les%20Filles%20au%20La"
            >
              Réserver par e-mail
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.google.com/maps/search/?api=1&query=Les+Filles+au+La+Rue+du+Hautbois+13+Mons"
              target="_blank"
              rel="noreferrer"
            >
              Voir sur Google
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
