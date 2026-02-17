const slider = new SnapTouch('slider');
slider.create();
slider.setActiveIndex(3);
slider.easeTowardsTarget();

const sliderElement = document.getElementById('slider');
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

sliderElement.addEventListener('mousedown', handleInteractionStart);
sliderElement.addEventListener('touchstart', handleInteractionStart, {passive: true});
window.addEventListener('mouseup', handleInteractionEnd);
window.addEventListener('touchend', handleInteractionEnd, {passive: true});
