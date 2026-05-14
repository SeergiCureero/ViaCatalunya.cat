'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import styles from './MapaSection.module.css'

// Leaflet no funciona en SSR — carreguem el mapa només al client
const MapaLeaflet = dynamic(() => import('./MapaLeaflet'), {
  ssr: false,
  loading: () => (
    <div className={styles.mapaPlaceholder} aria-busy="true">
      <span>Carregant el mapa…</span>
    </div>
  ),
})

export type CapaMapa = 'actual' | 'proposada'

export default function MapaSection() {
  const [capa, setCapa] = useState<CapaMapa>('actual')

  return (
    <section className={styles.seccio} id="mapa" aria-labelledby="mapa-titol">
      <div className="container">
        <div className={styles.capcalera}>
          <p className={styles.etiqueta}>La proposta</p>
          <h2 id="mapa-titol" className={styles.titol}>
            Una xarxa que vertebri<br />el territori
          </h2>
          <p className={styles.intro}>
            Nous eixos ferroviaris que connectin les capitals de comarca amb Barcelona
            i entre si, permetent que qualsevol català arribi a un node connectat
            en menys de 20 minuts.
          </p>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Capa del mapa">
          <button
            role="tab"
            aria-selected={capa === 'actual'}
            className={`${styles.tab} ${capa === 'actual' ? styles.actiu : ''}`}
            onClick={() => setCapa('actual')}
          >
            Xarxa actual
          </button>
          <button
            role="tab"
            aria-selected={capa === 'proposada'}
            className={`${styles.tab} ${capa === 'proposada' ? styles.actiu : ''}`}
            onClick={() => setCapa('proposada')}
          >
            Proposta Via Catalana
          </button>
        </div>

        <div className={styles.mapaWrap}>
          <MapaLeaflet capa={capa} />
        </div>

        <p className={styles.nota}>
          Mapa esquemàtic conceptual. Les dades reals i el traçat definitiu
          s'incorporaran a mesura que es validen les fonts oficials (ICGC, IDEC).
          <a href="https://github.com/via-catalana/via-catalana/blob/main/data/sources.md" target="_blank" rel="noopener noreferrer">
            {' '}Fonts de dades →
          </a>
        </p>
      </div>
    </section>
  )
}
