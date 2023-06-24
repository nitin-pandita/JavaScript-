// A pointer -> It referes to an object 

// const hey = { // hey -> object
//     name : 'Nitin',
//     // sayHey() { // method
//     //     console.log(hey.name)
//     // }
//     class : '45th'
// }

// const namaste = {
//     name : 'Namasta',
//     class: '12th'
// }

// function Hello() {
//     console.log(this.class.toUpperCase());
// }

// hey.hi = Hello;
// namaste.hi = Hello;
// // hey.sayHey();


// hey.hi();
// namaste.hi();


// ------ Example 2 --- 

const lists = document.querySelectorAll('li');

lists.forEach(pq =>{
    pq.addEventListener('click', function(){
        console.log(pq);
    })
})

const user = {
    name : 'Kartik',
    videos : ["Happy","Love aaj kal","Raone","Khasa ho"],
    greet(){
        console.log(`Hello world ${this.name}`);

        this.videos.forEach(videos => {
            console.log(videos)
        })
        const Myvideos = () => {
            console.log(`The number of video you have ${this.videos.length} videos` );
        }
        Myvideos()
    }
}

user.greet();