import styles from './VisiSection.module.css'

const MILLORES = [
  { num: '−40%', titol: 'Morts en carretera', desc: 'Estimació basada en el model suís de modal shift. Cada viatger que passa al tren elimina risc de la carretera.' },
  { num: '+300k', titol: 'Habitants fora de l'AMB', desc: 'Municipis de menys de 20.000 habitants guanyen poder d'atracció quan el temps fins a Barcelona baixa d'una hora.' },
  { num: '−25%', titol: 'Pressió sobre l'habitatge', desc: 'La descentralització demogràfica alleuja la demanda metropolitana sense necessitat d'obra nova massiva.' },
  { num: '×3', titol: 'Polígons industrials actius', desc: 'L'accés ferroviari de mercaderies connecta els polígons de l'interior directament a la xarxa europea de càrrega.' },
  { num: '10×', titol: 'Menys emissions', desc: 'El tren emet deu vegades menys CO₂ per viatger i quilòmetre que el vehicle privat.' },
  { num: '100%', titol: 'Comarques connectades', desc: 'L'objectiu final: cap comarca catalana fora de la xarxa ferroviària en un horitzó de vint anys.' },
]

export default function VisiSection() {
  return (
    <section className={styles.seccio} id="visio" aria-labelledby="visio-titol">
      <div className="container">
        <div className={styles.capcalera}>
          <p className={styles.etiqueta}>El futur</p>
          <h2 id="visio-titol" className={styles.titol}>
            Què guanya Catalunya
          </h2>
          <p className={styles.intro}>
            La xarxa ferroviària no és una infraestructura aïllada —
            és el catalitzador d'una transformació territorial completa.
          </p>
        </div>

        <div className={styles.grid}>
          {MILLORES.map((m) => (
            <div key={m.num} className={styles.item}>
              <div className={styles.num}>{m.num}</div>
              <h3 className={styles.itemTitol}>{m.titol}</h3>
              <p className={styles.itemDesc}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
