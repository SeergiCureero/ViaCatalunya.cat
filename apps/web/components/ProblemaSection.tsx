import styles from './ProblemaSection.module.css'

const PROBLEMES = [
  {
    id: 'accidents',
    num: '30×',
    color: 'perill',
    titol: 'Més risc a la carretera',
    desc: 'Cada desplaçament en vehicle privat és trenta vegades més perillós que el mateix trajecte en tren. La dependència del cotxe mata més de 230 persones a l'any a Catalunya.',
  },
  {
    id: 'habitatge',
    num: '+62%',
    color: 'alerta',
    titol: 'Crisi d'habitatge estructural',
    desc: 'El preu del lloguer a Barcelona ha pujat un 62% en deu anys. Sense connectivitat ferroviària, els municipis petits no poden absorbir la demanda i el problema s'intensifica.',
  },
  {
    id: 'territori',
    num: '26/42',
    color: 'neutre',
    titol: 'Desigualtat territorial',
    desc: '26 de les 42 comarques catalanes no tenen accés ferroviari. Sense tren, queden fora del circuit econòmic i les seves indústries no poden connectar amb la xarxa europea.',
  },
  {
    id: 'emissions',
    num: '26%',
    color: 'neutre',
    titol: 'Emissions del transport',
    desc: 'El transport per carretera genera el 26% de les emissions de CO₂ a Catalunya. El tren emet fins a deu vegades menys per viatger i quilòmetre.',
  },
]

export default function ProblemaSection() {
  return (
    <section className={styles.seccio} id="problema" aria-labelledby="problema-titol">
      <div className="container">
        <div className={styles.capcalera}>
          <p className={styles.etiqueta}>El problema</p>
          <h2 id="problema-titol" className={styles.titol}>
            Catalunya, atrapada<br />a la carretera
          </h2>
          <p className={styles.intro}>
            La manca d'infraestructura ferroviària no és un problema de mobilitat —
            és un problema econòmic, social i de seguretat que afecta tot el territori.
          </p>
        </div>

        <div className={styles.grid}>
          {PROBLEMES.map((p) => (
            <article key={p.id} className={`${styles.card} ${styles[p.color]}`}>
              <div className={styles.num} aria-hidden="true">{p.num}</div>
              <h3 className={styles.cardTitol}>{p.titol}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
