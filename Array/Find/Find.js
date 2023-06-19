// Find works by finding a string of that include the word that you have searched for
const video = [
    "Kashmir is beautiful",
    "I love Kenya",
    "Radhe Radhe"
]


const newVideo = video.find(function(video){
    return video.includes("Kashmir");
});

console.log(newVideo);