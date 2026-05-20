// TAMBI Study Website — Interaktivität

document.addEventListener('DOMContentLoaded', function() {
    // PDF Fallback
    const pdfViewer = document.getElementById('pdf-viewer');
    if (pdfViewer) {
        pdfViewer.addEventListener('error', function() {
            const container = document.querySelector('.pdf-viewer-container');
            container.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 40px; text-align: center; background: var(--cream-200);">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1a5538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="12" y1="18" x2="12" y2="12"></line>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                    <h3 style="margin-top: 20px; color: #14422a; font-family: 'Fraunces', serif; font-size: 1.25rem;">PDF-Vorschau nicht verfügbar</h3>
                    <p style="color: #5c6661; margin-top: 10px; max-width: 400px;">Ihr Browser unterstützt keine direkte PDF-Anzeige. Bitte laden Sie das Dokument oben herunter, um es anzuzeigen.</p>
                </div>
            `;
        });
    }

    // Smooth Scroll für interne Links mit Offset für sticky Nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.top-nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Subtle nav shadow on scroll
    const nav = document.querySelector('.top-nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 10) {
            nav.style.boxShadow = '0 1px 3px rgba(15, 46, 28, 0.06)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Intersection Observer für Section-Animationen
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.timeline-step, .contact-card, .signup-step, .comp-option').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            observer.observe(el);
        });
    }
});