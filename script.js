// Überprüfung ob PDF geladen werden kann
document.addEventListener('DOMContentLoaded', function() {
    const pdfViewer = document.getElementById('pdf-viewer');
    
    // Fallback-Nachricht, falls PDF nicht direkt angezeigt werden kann
    pdfViewer.addEventListener('error', function() {
        const container = document.querySelector('.pdf-viewer-container');
        container.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 40px; text-align: center;">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0d7377" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
                <h3 style="margin-top: 20px; color: #0d7377;">PDF-Vorschau nicht verfügbar</h3>
                <p style="color: #666; margin-top: 10px;">Ihr Browser unterstützt keine direkte PDF-Anzeige. Bitte laden Sie das Dokument herunter, um es anzuzeigen.</p>
            </div>
        `;
    });

    // Smooth Scroll für interne Links (falls später hinzugefügt)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
