const videoTriggers = document.querySelectorAll('.video-trigger');
const videoPopup = document.getElementById('videoPopup');
const closeBtn = document.querySelector('.video-popup-close');
const overlay = document.querySelector('.video-popup-overlay');

let player;
let playerReady = false;

// YouTube API ready callback
function onYouTubeIframeAPIReady() {
    playerReady = true;
}

videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const videoId = trigger.getAttribute('data-video-id');
        videoPopup.classList.add('active');

        // Wait for API to be ready, then create player
        if (playerReady) {
            createPlayer(videoId);
        } else {
            // Wait and try again
            setTimeout(() => createPlayer(videoId), 100);
        }
    });
});

function createPlayer(videoId) {
    // Destroy existing player if it exists
    if (player) {
        player.destroy();
    }

    // Create new player
    player = new YT.Player('player', {
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
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    const availableQualities = event.target.getAvailableQualityLevels();
    if (availableQualities.includes('hd1080')) {
        event.target.setPlaybackQuality('hd1080');
    }
}

function closePopup() {
    videoPopup.classList.remove('active');

    // Stop and destroy player
    if (player) {
        player.stopVideo();
        player.destroy();
        player = null;
    }
}

closeBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoPopup.classList.contains('active')) {
        closePopup();
    }
});