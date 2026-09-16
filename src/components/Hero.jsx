import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const enter = (delay = 0) =>
    reduceMotion
      ? { initial: false, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="hero" id="top" aria-label="Accueil">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/images/plat-courge.jpg"
          alt=""
          width={1290}
          height={1752}
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__content">
        <motion.div className="hero__logo-wrap" {...enter(0)}>
          <img
            className="hero__logo"
            src="/images/logo.jpg"
            alt="Les Filles au La — Restaurant"
            width={320}
            height={320}
          />
        </motion.div>

        <motion.p className="hero__tagline" {...enter(0.15)}>
          Guinguette culturelle au cœur de Mons — cuisine créative, terrasse
          conviviale et soirées qui s&apos;étirent sous les parasols.
        </motion.p>

        <motion.div className="hero__actions" {...enter(0.3)}>
          <a className="btn btn--primary" href="#infos">
            Réserver
          </a>
          <a className="btn btn--ghost" href="#carte">
            Voir la carte
          </a>
        </motion.div>

        <motion.p className="hero__scroll" {...enter(0.45)} aria-hidden="true">
          <span className="hero__scroll-label">Descendre en terrasse</span>
          <span className="hero__scroll-arrow" />
        </motion.p>
      </div>
    </section>
  )
}
