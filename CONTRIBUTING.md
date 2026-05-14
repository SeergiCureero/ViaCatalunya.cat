# Com contribuir a Via Catalana

Gràcies per voler participar. Via Catalana és un projecte obert i necessitem persones de perfils molt diversos: no cal saber programar per contribuir-hi de manera valuosa.

---

## Tipus de contribució

### Desenvolupament web
Treballem amb Next.js + React + Leaflet.js. Si saps de frontend o vols aprendre, hi ha tasques per a tots els nivells. Busca les issues etiquetades `web`.

### Dades i recerca
Necessitem persones que ajudin a localitzar, descarregar, netejar i documentar datasets. No cal ser programador — moltes fonts són descàrregues directes. Busca les issues etiquetades `dades` o `recerca`.

### Disseny
La web ha de ser clara, professional i persuasiva. Si tens ull per al disseny o experiència en comunicació visual, les issues etiquetades `disseny` són per a tu.

### Proposta política i argumentari
Redacció de documents per a grups parlamentaris, benchmarks internacionals, argumentari econòmic. Busca les issues etiquetades `proposta`.

### Comunicació
Difusió del projecte a xarxes socials, contacte amb associacions civils i mitjans. Issues etiquetades `comunicació`.

---

## Flux de treball (Kanban)

El projecte s'organitza en un Kanban amb cinc columnes:

| Columna | Significat |
|---|---|
| **Backlog** | Tasques identificades, pendents de prioritzar |
| **Todo** | Tasques prioritzades, llestes per agafar |
| **Doing** | En curs — assigna-te-la i mou-la aquí |
| **Revision** | Acabada, pendent de revisió per un maintainer |
| **Done** | Revisada, aprovada i integrada |

Quan agafes una tasca, assigna-te-la al Trello i obre una branca al GitHub amb el format `tipus/nom-curt` (per exemple `feat/mapa-leaflet` o `data/geojson-comarques`).

---

## Etiquetes d'issues

| Etiqueta | Significat |
|---|---|
| `prioritat alta` | Bloqueja altres tasques, fer primer |
| `prioritat mitjana` | Aquesta setmana |
| `prioritat baixa` | Quan hi hagi temps |
| `web` | Afecta l'aplicació web |
| `dades` | Fonts, GeoJSON, datasets |
| `proposta` | Document polític |
| `disseny` | UI/UX, gràfics, identitat visual |
| `recerca` | Benchmarks, estudis, casos internacionals |
| `comunicació` | Xarxes, premsa, grups parlamentaris |
| `bloquejat` | Espera resposta o recurs extern |
| `bon primer issue` | Recomanat per a nous col·laboradors |
| `urgent` | Cal resoldre'l avui |

---

## Pas a pas per fer una contribució de codi

1. **Fork** del repositori a GitHub.
2. Clona el teu fork localment:
   ```bash
   git clone https://github.com/el-teu-usuari/via-catalana.git
   cd via-catalana
   ```
3. Instal·la les dependències:
   ```bash
   cd apps/web
   npm install
   ```
4. Crea una branca nova des de `dev`:
   ```bash
   git checkout dev
   git checkout -b feat/nom-de-la-funcionalitat
   ```
5. Fes els canvis, commiteja amb missatges clars en català o anglès:
   ```bash
   git commit -m "feat: afegeix capa GeoJSON de comarques al mapa"
   ```
6. Puja la branca i obre un **Pull Request** cap a `dev` (no a `main`).
7. Un maintainer revisarà el PR. Pot demanar canvis o aprovació directa.

---

## Convencions de commits

Seguim [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     nova funcionalitat
fix:      correcció d'error
data:     afegir o actualitzar datasets
docs:     documentació
style:    canvis de format, sense lògica
refactor: refactorització sense canvi funcional
chore:    tasques de manteniment
```

---

## Branques

| Branca | Ús |
|---|---|
| `main` | Producció. Només s'hi mergeja des de `dev` amb aprovació. |
| `dev` | Integració. Tots els PRs van aquí primer. |
| `data` | Actualitzacions de datasets sense tocar la web. |

---

## Codi de conducta

Aquest projecte és un espai de col·laboració respectuosa. Acceptem contribucions de persones de qualsevol procedència, nivell tècnic o posició política, sempre que el to sigui constructiu i el contingut s'ajusti als objectius del projecte.

No s'acceptaran contribucions que distorsionin les dades, que siguin ofensives o que desviin el projecte del seu objectiu: una proposta ferroviària seriosa, basada en evidències i orientada al bé comú.

---

## Dubtes

Les contribucions de codi s'alliberen sota **EUPL-1.2**, les de dades sota **CC BY 4.0** i les de documents sota **CC BY-SA 4.0**, d'acord amb el directori on es trobin. En fer una contribució acceptes aquestes condicions.

---

## Dubtes

Obre un issue amb l'etiqueta `pregunta` o participa a GitHub Discussions. No hi ha preguntes estúpides.
