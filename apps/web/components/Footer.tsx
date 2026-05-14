import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.esquerra}>
          <span className={styles.logo}>Via<span>Catalana</span></span>
          <span className={styles.desc}>Proposta ciutadana oberta per a la xarxa ferroviària del segle XXI</span>
        </div>
        <div className={styles.dreta}>
          <a
            href="https://github.com/via-catalana/via-catalana"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a href="mailto:hola@viacatalana.cat" className={styles.link}>
            Contacte
          </a>
        </div>
      </div>
    </footer>
  )
}
