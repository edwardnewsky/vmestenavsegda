Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});

const videoElement = document.getElementById('video');
    videoElement.addEventListener('suspend', () => {
        // suspend invoked
        // show play button
    });

    videoElement.addEventListener('play', () => {
        // video is played
        // remove play button UI
    });

document.body.on('click touchstart', function () {
        const videoElement = document.getElementById('video');
        if (videoElement.playing) {
            // video is already playing so do nothing
        }
        else {
            // video is not playing
            // so play video now
            videoElement.play();
        }
});