class Animator {
    constructor(selector) {
        this.selector = document.querySelector(selector);
    }
    fadeout(time) {
        this.selector.style.color = 'red';
        this.selector.style.transition =  `all ${time}s ease`;
        this.selector.style.opacity = 0;
    }
    clickMe() {
        this.selector.addEventListener('click', () => {
            const h1 = document.querySelector('h1');
            h1.style.fontSize = '1
            20px';
        })
        
    }
}

const intro = new Animator("button")

intro.clickMe()

