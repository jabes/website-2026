class VideoPlayer {
    constructor(popupSelector = '#videoPopup') {
        this.videoPopup = document.querySelector(popupSelector);
        this.closeBtn = this.videoPopup.querySelector('.video-popup-close');
        this.overlay = this.videoPopup.querySelector('.video-popup-overlay');
        this.videoTriggers = document.querySelectorAll('.video-trigger');

        this.player = null;
        this.playerReady = false;

        this.init();
    }

    init() {
        // Set up global YouTube API callback
        window.onYouTubeIframeAPIReady = () => {
            this.playerReady = true;
        };

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

        if (this.playerReady) {
            this.createPlayer(videoId);
        } else {
            // Wait and retry
            setTimeout(() => this.createPlayer(videoId), 100);
        }
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
    }

    onPlayerStateChange(event) {
        const availableQualities = event.target.getAvailableQualityLevels();
        if (availableQualities.includes('hd1080')) {
            event.target.setPlaybackQuality('hd1080');
        }
    }

    closePopup() {
        this.videoPopup.classList.remove('active');

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
