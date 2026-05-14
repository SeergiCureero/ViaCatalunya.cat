import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-titol">
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>
          <span className={styles.dot} aria-hidden="true" />
          Proposta ciutadana oberta · Catalunya
        </div>

        <h1 id="hero-titol" className={styles.titol}>
          Catalunya necessita<br />
          una xarxa ferroviària<br />
          <em className={styles.accent}>del segle XXI</em>
        </h1>

        <p className={styles.subtitol}>
          Menys cotxes. Menys accidents. Habitatge accessible.
          Oportunitats arreu del territori. La infraestructura ferroviària
          no és una despesa — és la palanca que redistribueix
          població, feina i capital per tot el país.
        </p>

        <div className={styles.accions}>
          <a href="#mapa" className={styles.btnPrimari}>
            Veure la proposta
          </a>
          <a href="#problema" className={styles.btnSecundari}>
            Els problemes actuals
          </a>
        </div>

        <div className={styles.xifres} aria-label="Xifres clau">
          <div className={styles.xifra}>
            <strong>26</strong>
            <span>comarques sense tren</span>
          </div>
          <div className={styles.divisor} aria-hidden="true" />
          <div className={styles.xifra}>
            <strong>73%</strong>
            <span>de la població a l'AMB</span>
          </div>
          <div className={styles.divisor} aria-hidden="true" />
          <div className={styles.xifra}>
            <strong>234</strong>
            <span>morts en carretera (2023)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
