// Example 1
const titles = [
    'I love Jammu',
    'I have 5 kittens',
    'Lets rock',
    'Its javascript'
]



// Example 1 - function
const newTitle = titles.filter(function(title) {
    return title.length < 15;
})

console.log(newTitle);

// Example 2
const movies =[{
    title : 'Game of thrones', rating : 8},
    {title : 'John Vick', rating : 6.7},
    { title : 'Koi Mil gya', rating : 7},
    {title : 'Avatar', rating : 8.7}
]

// Example 2 -  function

const newMovie = movies.filter(function(movie){
    return movie.rating > 7;
})

console.log(newMovie)