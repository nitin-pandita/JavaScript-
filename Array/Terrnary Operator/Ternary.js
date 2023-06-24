const games = [
    {title: 'God of War', rating : 6},
    {title : 'GTA', rating : 9},
    {title : 'Vice City', rating : 8}
]


const newGames = games.map(function(game){
    return game.length < 1 ? game : "nope"
})

console.log(newGames)