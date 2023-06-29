class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll('.pad');
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.playBtn = document.querySelector('.play');
        this.index = 0;
        this.bmp = 200;
        this.isPlaying = null;
    }
    activePad() {
        this.classList.toggle('active')
    }
    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`)
            // loop over the bars
        activeBars.forEach(bars => {
            bars.style.animation = `playTrack 0.3s alternate ease-in-out 2`
            if (bars.classList.contains('active')) {
                if (bars.classList.contains('kick-pad')) {
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play()
                }
                if (bars.classList.contains('snare-pad')) {
                    this.snareAudio.currentTime = 0;

                    this.snareAudio.play()
                }
                if (bars.classList.contains('hihat-pad')) {
                    this.hihatAudio.currentTime = 0;

                    this.hihatAudio.play()
                }
            }
        })
        this.index++;
    }
    updateBtn() {
        if (!this.isPlaying) {

            this.playBtn.innerText = 'Stop';
            this.playBtn.classList.add("active");

        } else {

            this.playBtn.innerText = 'Play';
            this.playBtn.classList.remove("active");
        }
    }
    start() {
        const interval = (60 / this.bmp) * 1000;
        if (!this.isPlaying) {

            this.isPlaying = setInterval(() => {
                this.repeat();
            }, interval);
        } else {
            // here we will remove the interval
            clearInterval(this.isPlaying);
            this.isPlaying = null
        }
    }

}

const drumKit = new DrumKit();

drumKit.pads.forEach(pad => {
    pad.addEventListener('click', drumKit.activePad);
    pad.addEventListener('animationend', function() {
        this.style.animation = "";
    })
})
drumKit.playBtn.addEventListener('click', () => {
    drumKit.updateBtn();
    drumKit.start();
})