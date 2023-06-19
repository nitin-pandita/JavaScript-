const video = ["How to become rich",
"How to gain followers", "how to increase your reach"]



const newvideos = video.map(function(videos) {
    return videos.toLocaleLowerCase;
})


console.log(newvideos)