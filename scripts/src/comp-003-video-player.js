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
