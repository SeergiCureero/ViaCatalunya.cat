# Via Catalunya

**Proposta ciutadana oberta per a una xarxa ferroviària del segle XXI a Catalunya.**

Via Catalunya és un projecte de codi obert que combina dades, cartografia interactiva i argumentari polític per demostrar que la inversió ferroviària és la palanca que pot redistribuir població, feina i capital per tot el territori català.

---

## Per què existeix aquest projecte

Catalunya té el 73% de la seva població concentrada a l'Àrea Metropolitana de Barcelona. 26 de les 42 comarques no tenen accés ferroviari. La dependència del vehicle privat mata més de 230 persones a l'any i genera el 26% de les emissions de CO₂ del transport.

La solució no és complexa: **connectar el territori amb tren transforma-ho tot**. Redistribueix la demanda d'habitatge, activa polígons industrials aïllats, crea oportunitats laborals i estudiantils fora de les grans ciutats, i integra Catalunya a la xarxa de càrrega ferroviària europea.

Aquest projecte visualitza el problema, proposa solucions concretes basades en exemples internacionals i posa les dades a disposició de qualsevol grup parlamentari, associació civil o organisme públic que vulgui fer-les servir.

---

## Estructura del repositori

```
via-catalana/
├── apps/
│   └── web/                  # Aplicació Next.js (web pública)
│       ├── app/              # App Router de Next.js
│       ├── components/       # Components React reutilitzables
│       ├── public/           # Recursos estàtics
│       └── styles/           # CSS global i tokens de disseny
├── data/
│   ├── raw/                  # Dades originals sense processar
│   ├── processed/            # GeoJSON i datasets llestos per usar
│   └── sources.md            # Fonts i llicències de cada dataset
├── docs/
│   ├── proposta/             # Document de proposta per a grups parlamentaris
│   ├── benchmarks/           # Estudis de casos internacionals (Suïssa, Japó...)
│   └── presentacions/        # Materials de presentació
├── scripts/
│   └── data/                 # Scripts de processament de dades (Python)
├── .github/
│   ├── ISSUE_TEMPLATE/       # Plantilles d'issues
│   └── workflows/            # CI/CD amb GitHub Actions
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## Tecnologia

| Capa | Tecnologia |
|---|---|
| Web | Next.js 14 + React |
| Mapes | Leaflet.js + OpenStreetMap |
| Dades geoespacials | GeoJSON (ICGC, IDEC, OSM) |
| Processament de dades | Python + GeoPandas |
| Desplegament | Vercel |
| Llicència codi | EUPL-1.2 |
| Llicència dades | CC BY 4.0 |
| Llicència documents | CC BY-SA 4.0 |

---

## Dades utilitzades

Les dades provenen de fonts oficials obertes:

- **ICGC** — Institut Cartogràfic i Geològic de Catalunya (comarques, municipis)
- **IDEC** — Infraestructura de Dades Espacials de Catalunya (xarxa ferroviària)
- **SCT** — Servei Català de Trànsit (IMD carreteres, accidentalitat)
- **IDESCAT** — Institut d'Estadística de Catalunya (demografia)
- **INCASÒL / Registradors** — preus d'habitatge per municipi
- **ACCIÓ** — polígons industrials de Catalunya
- **EEA** — Agència Europea de Medi Ambient (emissions per mode de transport)

Totes les fonts i les seves llicències estan documentades a [`data/sources.md`](data/sources.md).

---

## Com contribuir

Llegeix [`CONTRIBUTING.md`](CONTRIBUTING.md) per entendre com s'organitza el projecte, quines tasques estan obertes i com pots ajudar independentment de si ets desenvolupador, dissenyador, investigador o simplement creus en la proposta.

---

## Estat del projecte

El projecte és en fase inicial activa. El Kanban públic està disponible al Trello del projecte.

---

## Llicència

| Capa | Llicència | Fitxer |
|---|---|---|
| Codi (`apps/`, `scripts/`) | EUPL-1.2 | [`LICENSE`](LICENSE) |
| Dades (`data/`) | CC BY 4.0 | [`LICENSE-data`](LICENSE-data) |
| Documents (`docs/`) | CC BY-SA 4.0 | [`LICENSE-docs`](LICENSE-docs) |

Pots usar, modificar i redistribuir lliurement qualsevol part d'aquest projecte citant-ne l'origen. La clàusula copyleft de la EUPL garanteix que el codi no pugui fer-se privatiu. La clàusula ShareAlike de la CC BY-SA garanteix que les adaptacions dels documents mantinguin sempre la llicència oberta.

---

## Contacte

Obre un issue o contacta a través de GitHub Discussions per a qualsevol pregunta, proposta o col·laboració institucional.
