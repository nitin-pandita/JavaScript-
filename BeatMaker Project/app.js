class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll('.pad');
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.currentKick = './sound/kick-classic.wav'
        this.currentSnare = './sound/kick-acoustic01.wav'
        this.currenthithat = './sound/hithat-acoustic01.wav'
        this.playBtn = document.querySelector('.play');
        this.index = 0;
        this.bmp = 200;
        this.isPlaying = null;
        this.selects = document.querySelectorAll('select');
        this.muteBtn = document.querySelectorAll('.mute');
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
    changeSound(e) {
        const selectionName = e.target.name;
        const selectionValue = e.target.value;
        switch (selectionName) {
            case "kick-select":
                this.kickAudio.src = selectionValue;
                break;
            case "snare-select":
                this.snareAudio.src = selectionValue;
                break;
            case "hithat-select":
                this.hihatAudio.src = selectionValue;
                break;
        }
    }
    mute(e) {
        const muteIndex = e.target.getAttribute("data-track")
        e.target.classList.toggle('active');
        console.log(muteIndex)
        if (e.target.classList.contains("active")) {
            switch (muteIndex) {
                case "0":
                    this.kickAudio.volume = 0
                case "1":
                    this.snareAudio.volume = 0
                case "2":
                    this.hihatAudio.volume = 0
            }
        } else {
            switch (muteIndex) {
                case "0":
                    this.kickAudio.volume = 1
                case "1":
                    this.snareAudio.volume = 1
                case "2":
                    this.hihatAudio.volume = 1
            }
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

// Event Listener
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

drumKit.selects.forEach(select => {
    select.addEventListener('change', function(e) {
        drumKit.changeSound(e);
    })
})

drumKit.muteBtn.forEach(btn => {
    btn.addEventListener('click', function(e) {
        drumKit.mute(e);
    })
})