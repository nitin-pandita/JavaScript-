// Primitives types
// --------

// const bank = 250;

// bank  = 100 // error

// Reference types : array and objects

const names = ["Ed","Bubzy","Drake"]

// if we create new array and make it equal to names

const NewArray = names

NewArray.push("Nitin")


// names[1] = "Nitin"

// names.push("Kartik")

console.log(NewArray) // 

console.log(names) // the value will also get updated for names array as it's a reference variable
