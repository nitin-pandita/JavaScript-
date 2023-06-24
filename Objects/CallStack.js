function sayHi() {
    nickname = "Nitin";
    changeName();
    console.log(`My nickname is:", ${nickname}`);
}

function changeName() {
    nameChange = "Kartik";
    console.log(`Your Name is now ${nameChange}`);
    console.log("Name changes successfully");
}

sayHi();

console.log("End of code");