// Global Selections


// FUnctionsdd

function generateHex() {
    const letters = '#0123456789ABCDEF';
    let hash = '#';
    for (let i = 0; i < 6; i++) {
        hash += letters[Math.floor(Math.random() * 16)]
    }

    return hash;
}

let randomHex = generateHex();
console.log(randomHex)