// Some and Every

const movie = [
    {title : 'Avatar', rating : 9},
    {title : 'SpiderMan', rating : 8},
    {title: 'John Vick', rating: 8.5}
]


const newMovies = movie.every(function(video){
    return video.rating > 8;
})

const newMovies2 = movie.some(function(video){
    return video.rating >= 8;
})

console.log(newMovies2)
console.log(newMovies)