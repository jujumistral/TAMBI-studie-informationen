# Studieninformation Website

Eine professionelle Website zur Bereitstellung von Studieninformationen und Datenschutzerklärungen für Versuchspersonen.

## Features

- 📄 PDF-Viewer zur direkten Anzeige des Studiendokuments
- ⬇️ Download-Funktion für das PDF
- 📱 Vollständig responsive (Mobile, Tablet, Desktop)
- 🎨 Professionelles, modernes Design
- ✉️ Kontaktbereich für Rückfragen

## Installation und Deployment auf GitHub Pages

### Schritt 1: Repository erstellen

1. Erstellen Sie ein neues Repository auf GitHub
2. Name: z.B. `studie-information` (kann beliebig sein)
3. Setzen Sie es auf "Public" (erforderlich für GitHub Pages bei kostenlosen Accounts)

### Schritt 2: Dateien hochladen

Laden Sie folgende Dateien in Ihr Repository hoch:

```
repository/
├── index.html
├── styles.css
├── script.js
├── studieninformation.pdf  (Ihr PDF-Dokument)
└── README.md
```

**Wichtig:** Benennen Sie Ihr PDF-Dokument als `studieninformation.pdf` oder passen Sie den Dateinamen in `index.html` an (Zeile 33 und 37).

### Schritt 3: Anpassungen vornehmen

Bearbeiten Sie `index.html` und ersetzen Sie die Platzhalter:

- `[Ihr Name]` → Ihr Name
- `[Ihre Institution]` → Name Ihrer Institution
- `[ihre.email@beispiel.de]` → Ihre E-Mail-Adresse
- `[Ihre Telefonnummer]` → Ihre Telefonnummer
- `[Straße und Hausnummer]` → Ihre Adresse
- `[PLZ Ort]` → Ihre Postleitzahl und Stadt
- `[Land]` → Ihr Land

### Schritt 4: GitHub Pages aktivieren

1. Gehen Sie in Ihrem Repository zu "Settings"
2. Navigieren Sie zu "Pages" (linkes Menü)
3. Unter "Source" wählen Sie "Deploy from a branch"
4. Unter "Branch" wählen Sie "main" (oder "master") und "/" (root)
5. Klicken Sie auf "Save"

### Schritt 5: Website aufrufen

Nach wenigen Minuten ist Ihre Website verfügbar unter:

```
https://[ihr-github-username].github.io/[repository-name]/
```

Beispiel: `https://johndoe.github.io/studie-information/`

## Git-Befehle (alternativ zum Upload über die GitHub-Website)

Falls Sie Git lokal verwenden:

```bash
# Repository klonen
git clone https://github.com/[ihr-username]/[repository-name].git
cd [repository-name]

# Dateien hinzufügen
git add .

# Commit erstellen
git commit -m "Initiale Version der Studieninformation-Website"

# Zu GitHub pushen
git push origin main
```

## Dateistruktur

- **index.html** - Haupt-HTML-Datei mit Struktur der Website
- **styles.css** - Styling und Design
- **script.js** - JavaScript für Interaktivität und Fallbacks
- **studieninformation.pdf** - Ihr Studiendokument (selbst hinzufügen!)
- **README.md** - Diese Anleitung

## Anpassungsmöglichkeiten

### Farben ändern

In `styles.css` können Sie die Farbverläufe anpassen:

```css
/* Hauptfarbverlauf (aktuell: Lila/Blau) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Andere Farbideen: */
/* Grün: #11998e 0%, #38ef7d 100% */
/* Blau: #2193b0 0%, #6dd5ed 100% */
/* Orange: #f46b45 0%, #eea849 100% */
```

### PDF-Höhe anpassen

In `styles.css`, Zeile 96:

```css
.pdf-viewer-container {
    height: 600px; /* Ändern Sie diese Zahl */
}
```

## Browser-Kompatibilität

- Chrome/Edge: ✅ Vollständige Unterstützung
- Firefox: ✅ Vollständige Unterstützung
- Safari: ✅ Vollständige Unterstützung
- Mobile Browser: ✅ Responsive Design

## Support

Bei Fragen oder Problemen:
- Überprüfen Sie die GitHub Pages Dokumentation: https://docs.github.com/en/pages
- Stellen Sie sicher, dass das Repository "Public" ist
- Warten Sie einige Minuten nach der Aktivierung von GitHub Pages

## Lizenz

Frei verwendbar für wissenschaftliche Studien.
