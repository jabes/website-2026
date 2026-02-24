/* -------------------------------------------------------------------------------- */
/* scripts/src/comp-001-particles.js                                                */
/* -------------------------------------------------------------------------------- */

class ParticleSystem {
    constructor(canvas) {
        this.particleCount = 25000;
        this.particleVelocities = [];
        this.canvas = canvas;
        this.bodyHeight = document.body.offsetHeight;
        this.animationId = null;
        this.onResizeBound = () => this.onResize();
        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.createParticles();
        this.addEventListeners();
        this.animate();
    }

    initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);
        this.scene.fog = new THREE.Fog(0x000000, 5, 25);
    }

    initCamera() {
        const fov = 75;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 1000;
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.set(0, 0, 5);
    }

    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
    }

    createParticles() {
        this.particlesGeometry = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(this.particleCount * 3);

        for (let i = 0; i < this.particleCount; i++) {
            particlePositions[i * 3] = (Math.random() - 0.5) * 30;
            particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
            particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30;

            this.particleVelocities.push({
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02,
            });
        }

        this.particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x00ff00,
            size: 0.08,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
        });

        this.particles = new THREE.Points(this.particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);
    }

    addEventListeners() {
        window.addEventListener('resize', this.onResizeBound);
        window.addEventListener('load', () => {
            this.bodyHeight = document.body.offsetHeight;
        });
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.bodyHeight = document.body.offsetHeight;
    }

    updateParticles() {
        const positions = this.particlesGeometry.attributes.position.array;

        for (let i = 0; i < this.particleCount; i++) {
            positions[i * 3] += this.particleVelocities[i].x;
            positions[i * 3 + 1] += this.particleVelocities[i].y;
            positions[i * 3 + 2] += this.particleVelocities[i].z;

            if (Math.abs(positions[i * 3]) > 15) {
                positions[i * 3] *= -1;
            }

            if (Math.abs(positions[i * 3 + 1]) > 15) {
                positions[i * 3 + 1] *= -1;
            }

            if (Math.abs(positions[i * 3 + 2]) > 15) {
                positions[i * 3 + 2] *= -1;
            }
        }

        this.particlesGeometry.attributes.position.needsUpdate = true;
    }

    updateCamera() {
        const scrollRange = this.bodyHeight - window.innerHeight;
        this.camera.position.x = 0;
        this.camera.position.y = scrollRange > 0
            ? (window.scrollY / scrollRange) * 5
            : 0;
        this.camera.lookAt(this.scene.position);
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        this.updateParticles();
        this.updateCamera();
        this.renderer.render(this.scene, this.camera);
    }

    destroy() {
        window.removeEventListener('resize', this.onResizeBound);
        cancelAnimationFrame(this.animationId);
        this.renderer.domElement.remove();
        this.renderer.dispose();
        this.particlesGeometry.dispose();
        this.particles.material.dispose();
    }
}

if (window.innerWidth > 1024) {

    const script = document.createElement('script');
    script.src = window.location.origin + '/scripts/lib/three-r128.min.js';
    script.addEventListener('load', () => {
        requestIdleCallback(() => {
            const canvas = document.getElementById('particleCanvas');
            new ParticleSystem(canvas);
        });
    });

    document.head.appendChild(script);

}

/* -------------------------------------------------------------------------------- */
/* scripts/src/comp-002-photo-slider.js                                             */
/* -------------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------------- */
/* scripts/src/comp-003-video-player.js                                             */
/* -------------------------------------------------------------------------------- */

class VideoPlayer {
    constructor(popupSelector = '#videoPopup') {
        this.videoPopup = document.querySelector(popupSelector);
        if (!this.videoPopup) {
            return;
        }

        this.closeBtn = this.videoPopup.querySelector('.video-popup-close');
        this.overlay = this.videoPopup.querySelector('.video-popup-overlay');
        this.videoTriggers = document.querySelectorAll('.video-trigger');
        this.player = null;

        this.init();
    }

    init() {
        // Add click handlers to all video triggers
        this.videoTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const videoId = trigger.getAttribute('data-video-id');
                this.openVideo(videoId);
            });
        });

        // Close handlers
        this.closeBtn.addEventListener('click', () => this.closePopup());
        this.overlay.addEventListener('click', () => this.closePopup());

        // ESC key handler
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.videoPopup.classList.contains('active')) {
                this.closePopup();
            }
        });
    }

    openVideo(videoId) {
        this.videoPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.createPlayer(videoId);
    }

    createPlayer(videoId) {
        // Destroy existing player if it exists
        if (this.player) {
            this.player.destroy();
        }

        // Create new player
        this.player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'modestbranding': 1,
                'rel': 0,
            },
            events: {
                'onReady': (event) => this.onPlayerReady(event),
                'onStateChange': (event) => this.onPlayerStateChange(event),
            }
        });
    }

    onPlayerReady(event) {
        event.target.playVideo();
        event.target.setPlaybackQuality('hd1080');
        console.log('playerReady', event);
    }

    onPlayerStateChange(event) {
        console.log('playerStateChange', event);
        const availableQualities = event.target.getAvailableQualityLevels();
        const currentQuality = event.target.getPlaybackQuality();
        const desiredQuality = 'hd1080';
        console.log('availableQualities', currentQuality);
        console.log('currentQuality', currentQuality);
        if (availableQualities.includes(desiredQuality) && currentQuality !== desiredQuality) {
            event.target.setPlaybackQuality(desiredQuality);
        }
    }

    closePopup() {
        this.videoPopup.classList.remove('active');
        document.body.style.overflow = '';

        // Stop and destroy player
        if (this.player) {
            this.player.stopVideo();
            this.player.destroy();
            this.player = null;
        }
    }

    destroy() {
        this.closePopup();
    }
}

window.onYouTubeIframeAPIReady = () => {
    new VideoPlayer();
};

if (!window.YT) {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
}

/* -------------------------------------------------------------------------------- */
/* scripts/src/comp-004-aos.js                                                      */
/* -------------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    const link = document.createElement('link');
    const script = document.createElement('script');

    link.rel = 'stylesheet';
    link.href = window.location.origin + '/styles/lib/aos-2.3.4.min.css';
    script.src = window.location.origin + '/scripts/lib/aos-2.3.4.min.js';

    script.addEventListener('load', () => {
        AOS.init();
    });

    document.head.appendChild(link);
    document.head.appendChild(script);

});

/* -------------------------------------------------------------------------------- */
/* scripts/src/main.js                                                              */
/* -------------------------------------------------------------------------------- */

console.log(
    '       .---.\n' +
    '      /     \\\n' +
    '      \\.@-@./\n' +
    '      /`\\_/`\\\n' +
    '     //  _  \\\\\n' +
    '    | \\     )|_\n' +
    '   /`\\_`>  <_/ \\\n' +
    '   \\__/\'---\'\\__/\n'
)
console.log('👋 Built by Justin Bull');

