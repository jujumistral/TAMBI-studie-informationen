# Studieninformation Website

Eine professionelle Website zur Bereitstellung von Studieninformationen und Datenschutzerklärungen für Versuchspersonen.

## Features

- 📄 PDF-Viewer zur direkten Anzeige des Studiendokuments
- ⬇️ Download-Funktion für das PDF
- 📱 Vollständig responsive (Mobile, Tablet, Desktop)
- 🎨 Professionelles, modernes Design
- ✉️ Kontaktbereich für Rückfragen

## Dateistruktur

- **index.html** - Haupt-HTML-Datei mit Struktur der Website
- **styles.css** - Styling und Design
- **script.js** - JavaScript für Interaktivität und Fallbacks
- **studieninformation.pdf** - Studiendokument
- **README.md** - Diese Übersicht

## Anpassungsmöglichkeiten

### Farben ändern

In `styles.css` können die Farbverläufe angepasst werden:

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

## Lizenz

Frei verwendbar für wissenschaftliche Studien.
