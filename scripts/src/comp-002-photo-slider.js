console.log('👋 Built by Justin Bull');

const slider = new SnapTouch('slider');
slider.create();
slider.setActiveIndex(3);
slider.easeTowardsTarget();

const sliderElement = document.getElementById('slider');
let isInteracting = false;

sliderElement.addEventListener('mousedown', () => {
    isInteracting = true;
    document.body.style.overflow = 'hidden';
});

sliderElement.addEventListener('touchstart', () => {
    isInteracting = true;
    document.body.style.overflow = 'hidden';
}, {passive: true});

window.addEventListener('mouseup', () => {
    if (isInteracting) {
        isInteracting = false;
        document.body.style.overflow = '';
    }
});

window.addEventListener('touchend', () => {
    if (isInteracting) {
        isInteracting = false;
        document.body.style.overflow = '';
    }
}, {passive: true});
