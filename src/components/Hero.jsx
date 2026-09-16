import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const enter = (delay = 0) =>
    reduceMotion
      ? { initial: false, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="hero" id="top" aria-label="Accueil">
      <div className="hero__media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
          alt=""
          width={2000}
          height={1333}
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__content">
        <motion.h1 className="hero__brand" {...enter(0)}>
          Les Filles au La
        </motion.h1>

        <motion.p className="hero__tagline" {...enter(0.2)}>
          Guinguette culturelle au cœur de Mons — cuisine créative, terrasse
          conviviale et soirées qui s&apos;étirent sous les parasols.
        </motion.p>

        <motion.div className="hero__actions" {...enter(0.4)}>
          <a className="btn btn--primary" href="#infos">
            Réserver
          </a>
          <a className="btn btn--ghost" href="#carte">
            Voir la carte
          </a>
        </motion.div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Descendre en terrasse</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
