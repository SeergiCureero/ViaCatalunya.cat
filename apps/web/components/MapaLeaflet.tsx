'use client'

import { useEffect, useRef } from 'react'
import type { CapaMapa } from './MapaSection'
import styles from './MapaLeaflet.module.css'

// Coordenades esquemàtiques de nodes clau (lat, lng)
const NODES: Record<string, [number, number]> = {
  barcelona:  [41.385, 2.173],
  girona:     [41.983, 2.824],
  lleida:     [41.614, 0.624],
  tarragona:  [41.119, 1.245],
  manresa:    [41.728, 1.827],
  vic:        [41.930, 2.255],
  mataro:     [41.537, 2.445],
  tortosa:    [40.812, 0.521],
  puigcerda:  [42.431, 1.926],
  laseu:      [42.356, 1.456],
  berga:      [41.845, 1.846],
  olot:       [42.183, 2.490],
  igualada:   [41.579, 1.619],
}

// Línies actuals (Rodalies + FGC esquemàtic)
const LINIES_ACTUALS: Array<{ punts: [number, number][]; nom: string }> = [
  { nom: 'R1 Costa', punts: [NODES.girona, NODES.mataro, NODES.barcelona] },
  { nom: 'R2 Interior', punts: [NODES.lleida, NODES.barcelona] },
  { nom: 'R3 Vic', punts: [NODES.vic, NODES.barcelona] },
  { nom: 'R4 Manresa', punts: [NODES.manresa, NODES.barcelona] },
  { nom: 'R14 Tarragona', punts: [NODES.barcelona, NODES.tarragona] },
  { nom: 'R15 Tortosa', punts: [NODES.tarragona, NODES.tortosa] },
  { nom: 'Cremallera/Puigcerdà', punts: [NODES.barcelona, NODES.puigcerda], dashArray: '6 4' },
]

// Nous eixos proposats
const EIXOS_PROPOSATS: Array<{ punts: [number, number][]; nom: string; color: string }> = [
  {
    nom: 'Eix Pirinenc',
    color: '#1D9E75',
    punts: [NODES.laseu, NODES.puigcerda, NODES.olot, NODES.girona],
  },
  {
    nom: 'Eix Central',
    color: '#0F6E56',
    punts: [NODES.lleida, NODES.berga, NODES.manresa, NODES.vic, NODES.girona],
  },
  {
    nom: "Eix de l'Ebre",
    color: '#5DCAA5',
    punts: [NODES.lleida, NODES.tarragona, NODES.tortosa],
  },
  {
    nom: 'Eix Penedès-Igualada',
    color: '#9FE1CB',
    punts: [NODES.barcelona, NODES.igualada, NODES.lleida],
  },
]

const NODES_PRINCIPALS = ['barcelona', 'girona', 'lleida', 'tarragona']

interface Props {
  capa: CapaMapa
}

export default function MapaLeaflet({ capa }: Props) {
  const mapaRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const liniesActualsRef = useRef<any[]>([])
  const eixosRef = useRef<any[]>([])

  useEffect(() => {
    if (typeof window === 'undefined' || !mapaRef.current) return

    const init = async () => {
      const L = (await import('leaflet')).default
      await import('leaflet/dist/leaflet.css')

      if (mapInstanceRef.current) return

      const map = L.map(mapaRef.current!, {
        center: [41.7, 1.5],
        zoom: 8,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 13,
      }).addTo(map)

      mapInstanceRef.current = map

      // Línies actuals
      LINIES_ACTUALS.forEach((linia) => {
        const l = L.polyline(linia.punts, {
          color: '#888780',
          weight: 2.5,
          opacity: 0.7,
          dashArray: (linia as any).dashArray,
        }).addTo(map)
        l.bindTooltip(linia.nom, { sticky: true })
        liniesActualsRef.current.push(l)
      })

      // Eixos proposats (ocults per defecte)
      EIXOS_PROPOSATS.forEach((eix) => {
        const l = L.polyline(eix.punts, {
          color: eix.color,
          weight: 3.5,
          opacity: 0,
          dashArray: '10 5',
        }).addTo(map)
        l.bindTooltip(`<strong>${eix.nom}</strong> — proposta Via Catalunya`, { sticky: true })
        eixosRef.current.push(l)
      })

      // Nodes / marcadors
      Object.entries(NODES).forEach(([id, coords]) => {
        const esPrincipal = NODES_PRINCIPALS.includes(id)
        const nom = id.charAt(0).toUpperCase() + id.slice(1).replace('laseu', "La Seu d'Urgell").replace('puigcerda', 'Puigcerdà').replace('mataro', 'Mataró').replace('berga', 'Berga').replace('igualada', 'Igualada').replace('olot', 'Olot').replace('tortosa', 'Tortosa').replace('vic', 'Vic').replace('manresa', 'Manresa')

        const icon = L.divIcon({
          className: '',
          html: `<div style="
            width: ${esPrincipal ? 12 : 8}px;
            height: ${esPrincipal ? 12 : 8}px;
            border-radius: 50%;
            background: ${esPrincipal ? '#1D9E75' : '#5DCAA5'};
            border: 2px solid white;
            box-shadow: 0 1px 4px rgba(0,0,0,0.25);
          "></div>`,
          iconSize: [esPrincipal ? 12 : 8, esPrincipal ? 12 : 8],
          iconAnchor: [esPrincipal ? 6 : 4, esPrincipal ? 6 : 4],
        })

        L.marker(coords, { icon })
          .addTo(map)
          .bindTooltip(nom, { permanent: esPrincipal, direction: 'top', offset: [0, -6] })
      })
    }

    init()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
        liniesActualsRef.current = []
        eixosRef.current = []
      }
    }
  }, [])

  // Canviar visibilitat de capes quan canvia la prop
  useEffect(() => {
    if (!mapInstanceRef.current) return

    if (capa === 'actual') {
      liniesActualsRef.current.forEach((l) => l.setStyle({ opacity: 0.7 }))
      eixosRef.current.forEach((l) => l.setStyle({ opacity: 0 }))
    } else {
      liniesActualsRef.current.forEach((l) => l.setStyle({ opacity: 0.2 }))
      eixosRef.current.forEach((l) => l.setStyle({ opacity: 0.85 }))
    }
  }, [capa])

  return <div ref={mapaRef} className={styles.mapa} aria-label="Mapa interactiu de la xarxa ferroviària de Catalunya" />
}
