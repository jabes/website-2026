console.log('👋 Built by Justin Bull');

AOS.init();

if (window.innerWidth > 1024) {
    window.addEventListener('load', () => {
        const script = document.createElement('script');
        script.src = window.location.origin + '/scripts/lib/three-r128.min.js';
        script.addEventListener('load', () => {
            const canvas = document.getElementById('particleCanvas');
            new ParticleSystem(canvas);
        });
        document.body.appendChild(script);
    });
}

window.addEventListener('load', () => {
    const loadSliderImages = () => {
        document.querySelectorAll('#slider img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(loadSliderImages);
    } else {
        setTimeout(loadSliderImages, 200);
    }
});

if (!window.YT) {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.addEventListener('load', () => {
        new VideoPlayer();
    });
    document.head.appendChild(script);
}
