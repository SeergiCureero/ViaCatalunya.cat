'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'El problema', href: '#problema' },
  { label: 'La proposta', href: '#mapa' },
  { label: 'El futur', href: '#visio' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuObert, setMenuObert] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo} aria-label="Via Catalana — inici">
          Via<span>Catalana</span>
        </a>

        <nav className={styles.links} aria-label="Navegació principal">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={styles.link}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#uneix" className={styles.cta}>
          Uneix-t'hi
        </a>

        <button
          className={styles.burger}
          aria-label={menuObert ? 'Tancar menú' : 'Obrir menú'}
          aria-expanded={menuObert}
          onClick={() => setMenuObert(!menuObert)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuObert && (
        <nav className={styles.mobileMenu} aria-label="Menú mòbil">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={() => setMenuObert(false)}
            >
              {label}
            </a>
          ))}
          <a href="#uneix" className={styles.mobileCta} onClick={() => setMenuObert(false)}>
            Uneix-t'hi
          </a>
        </nav>
      )}
    </header>
  )
}
