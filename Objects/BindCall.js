// Function -> Special Objects
// Bind , Call and Apply

const names = {
    firstName : 'Nitin',
    lastName : 'Pandita',
    getname() {
        console.log(this.firstName + this.lastName);
    }
}

function regisiterUser(country, lang) {
    this.getname()
    console.log(`My country name is ${country} and my language is ${lang}`)
}
// Bind method will bind the methods together and we can access it easily
// const register = regisiterUser.bind(names);

// register('india','en');

// --- Using the call method -- 

// regisiterUser.call(names,'India','en');


// --- Using the call method -- 
regisiterUser.apply(names,['India','English']) // in "Apply we use list for arguments"