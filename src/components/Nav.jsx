import { useEffect, useState } from 'react'

const links = [
  { href: '#esprit', label: "L'esprit" },
  { href: '#carte', label: 'La carte' },
  { href: '#ambiance', label: 'Ambiance' },
  { href: '#infos', label: 'Infos' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    const mq = window.matchMedia('(max-width: 768px)')
    const onResize = () => {
      setIsMobile(mq.matches)
      if (!mq.matches) setOpen(false)
    }
    onScroll()
    setIsMobile(mq.matches)
    window.addEventListener('scroll', onScroll, { passive: true })
    mq.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      mq.removeEventListener('change', onResize)
    }
  }, [])

  const close = () => setOpen(false)
  const menuHidden = isMobile && !open

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" onClick={close}>
          Les Filles au La
        </a>

        <nav
          className={`nav__links${open ? ' is-open' : ''}`}
          aria-label="Navigation principale"
          inert={menuHidden ? true : undefined}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              tabIndex={menuHidden ? -1 : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav__cta" href="#infos">
          Réserver
        </a>

        <button
          className="nav__toggle"
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
