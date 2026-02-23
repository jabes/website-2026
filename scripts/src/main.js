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
        const isHiDPI = window.devicePixelRatio > 1;
        document.querySelectorAll('#slider img').forEach(img => {
            img.src = isHiDPI ? img.dataset['src-2x'] : img.dataset['src-1x'];
            img.removeAttribute('data-src-1x');
            img.removeAttribute('data-src-2x');
        });
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(loadSliderImages);
    } else {
        setTimeout(loadSliderImages, 200);
    }
});

window.onYouTubeIframeAPIReady = () => {
    new VideoPlayer();
};

if (!window.YT) {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
}
