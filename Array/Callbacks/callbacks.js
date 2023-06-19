
// /---- ForEach Loop ----/ 
const names = ['Nitin','Kartik','Krish','Rohit']

// names.forEach(function(name) { // function(name) ---> callback function
//     console.log(name)
// })


// /--- Map Function ---/ 

const newNames = names.map(function(name){  //map ---> allows us copy and to make changes in the array during iteration
    // in "map" we need to return
    return name.toLowerCase()
    return name.toUpperCase()
    
})

console.log(newNames)