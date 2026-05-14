"""
Valida els fitxers GeoJSON del directori data/processed/.
S'executa automàticament al CI quan hi ha canvis a data/.
"""

import sys
import json
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent.parent / "data" / "processed"

REQUIRED_FILES = [
    "comarques.geojson",
    "xarxa-actual.geojson",
    "xarxa-proposada.geojson",
]

errors = []

if not DATA_DIR.exists():
    print(f"⚠️  Directori {DATA_DIR} no existeix encara. Saltant validació.")
    sys.exit(0)

geojson_files = list(DATA_DIR.glob("*.geojson"))

if not geojson_files:
    print("⚠️  No hi ha fitxers GeoJSON a data/processed/. Saltant validació.")
    sys.exit(0)

print(f"Validant {len(geojson_files)} fitxer(s) GeoJSON...\n")

for filepath in geojson_files:
    try:
        with open(filepath, encoding="utf-8") as f:
            data = json.load(f)

        if data.get("type") != "FeatureCollection":
            errors.append(f"  ✗ {filepath.name}: 'type' no és FeatureCollection")
            continue

        features = data.get("features", [])
        if not isinstance(features, list):
            errors.append(f"  ✗ {filepath.name}: 'features' no és una llista")
            continue

        print(f"  ✓ {filepath.name} — {len(features)} feature(s)")

    except json.JSONDecodeError as e:
        errors.append(f"  ✗ {filepath.name}: JSON invàlid — {e}")
    except Exception as e:
        errors.append(f"  ✗ {filepath.name}: Error inesperat — {e}")

print()

if errors:
    print("Errors trobats:")
    for err in errors:
        print(err)
    sys.exit(1)
else:
    print("Tots els fitxers GeoJSON són vàlids.")
    sys.exit(0)
