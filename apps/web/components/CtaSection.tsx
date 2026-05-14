import styles from './CtaSection.module.css'

export default function CtaSection() {
  return (
    <section className={styles.seccio} id="uneix" aria-labelledby="cta-titol">
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.etiqueta}>Suma-t'hi</p>
          <h2 id="cta-titol" className={styles.titol}>
            Una proposta oberta<br />per a tothom
          </h2>
          <p className={styles.desc}>
            Via Catalunya és un projecte de codi obert. El codi, les dades i els
            documents de proposta són públics i col·laboratius. Pots contribuir
            com a desenvolupador, investigador, dissenyador o simplement
            compartint la proposta.
          </p>

          <div className={styles.accions}>
            <a
              href="https://github.com/via-catalana/via-catalana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimari}
            >
              GitHub del projecte →
            </a>
            <a
              href="mailto:hola@viacatalunya.cat"
              className={styles.btnSecundari}
            >
              Contactar
            </a>
          </div>

          <div className={styles.llicencies}>
            <span>Codi: EUPL-1.2</span>
            <span aria-hidden="true">·</span>
            <span>Dades: CC BY 4.0</span>
            <span aria-hidden="true">·</span>
            <span>Documents: CC BY-SA 4.0</span>
          </div>
        </div>
      </div>
    </section>
  )
}
