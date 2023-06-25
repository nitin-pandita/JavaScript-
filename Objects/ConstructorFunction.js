// Constructor function

// -- Important point to remember most whenever the function name starts with a capital it is most probabily a constructor function


function Todo(task,completed) {
    this.task = task;
    this.completed = completed;
}
    // this.getName = function() {
    //     console.log(this.task)
    // }
Todo.prototype.getName = function() {
    console.log(this.name);
} 


const todo = new Todo("Buy Milk","True");
const todo2 = new Todo("Take a Bath","False");

todo2.getName();
console.log(todo,todo2)
// todo2.getName();

// console.log(todo,todo2)