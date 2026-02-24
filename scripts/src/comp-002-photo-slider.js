let isInteracting = false;

const handleInteractionStart = () => {
    isInteracting = true;
    document.body.style.overflow = 'hidden';
};

const handleInteractionEnd = () => {
    if (isInteracting) {
        isInteracting = false;
        document.body.style.overflow = '';
    }
};

window.addEventListener('mouseup', handleInteractionEnd);
window.addEventListener('touchend', handleInteractionEnd, {passive: true});
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

document.addEventListener('DOMContentLoaded', () => {

    const sliderElement = document.getElementById('slider');
    sliderElement.addEventListener('mousedown', handleInteractionStart);
    sliderElement.addEventListener('touchstart', handleInteractionStart, {passive: true});

    const script = document.createElement('script');
    script.src = window.location.origin + '/scripts/lib/snap-touch-1.0.6.min.js';
    script.addEventListener('load', () => {

        const slider = new SnapTouch('slider');
        slider.create();
        slider.setActiveIndex(3);
        slider.easeTowardsTarget();

    });

    document.head.appendChild(script);

});
