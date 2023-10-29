// class User{
//     constructor(){
//         this.username = 'Nico'
//     }

//     sayHello(){
//         console.log('Hello')
//     }
// }

// const user = new User();
// console.log(user.username)

// const sexyUser = new User();
// const uglyUser = new User();
// sexyUser.sayHello();
// uglyUser.sayHello();

// console.log(new User().username)

// const baseObject = {
//     username : "Nico",
//     sayHello: function() {
//         console.log(`Hello i'm nico`);
//     }
// }

// const uglyUser = baseObject
// const sexyUser = baseObject
// sexyUser.sayHello();
// uglyUser.sayHello();

// class User {
//     constructor(options) {
//         this.username = options.username;
//         this.lastName = options.lastName;
//         this.email = options.email;
//         this.password = options.password;
//     }
//     sayHello() {
//         console.log(`Hello i'm ${this.username}`);
//     }
//     getProfile(){
//         console.log(`Username: ${this.username}, LastName: ${this.lastName}, Email: ${this.password}`);
    
//     }
//     updatePassword(newPassword,currentPassword){
//         if(currentPassword === this.password){
//             this.password = newPassword;
//         } else {
//             console.log("Passwords are not the same");
//         }
//     }
// }

// const sexyUser = new User({
//     username: "XXXX", lastName: "Ruiz", email: "XXXXXXXXXXXXXX", password: "123"});

// console.log(sexyUser);
// // sexyUser.updatePassword("abcdaf", "123");
// // console.log(sexyUser.password);

// class Admin extends User
// {
//     constructor({username, lastName, email, password, superAdmin, isActive}) {
//         super({username,lastName,email,password});
//         this.superAdmin = superAdmin ;
//         this.isActive = isActive ;
//     }
//     deleteWebsite(){
//         console.log("Website deleted");
//     }
// }

// const sexyAdmin = new Admin({
//     username:'DJ',
//     lastName:'Ruiz',
//     email:'XXXXXXXXXXXXXXXX',
//     password:'123',
//     superAdmin:true,
//     isActive:true});

// console.log(sexyAdmin);
// sexyAdmin.deleteWebsite()
// console.log(sexyAdmin.role);


class Counter {
    constructor({counterId,plusId,minusId}) {
        console.log(this)
        this.counterId = document.getElementById(counterId);
        this.plusId = document.getElementById(plusId);
        this.minusId = document.getElementById(minusId);
        this.addEventListeners();
    }
    addEventListeners() {
        console.log(this)
        this.plusId.addEventListener('click', () => this.counterId.innerText = parseInt(this.counterId.innerText) + 1);
        this.minusId.addEventListener('click', () => this.counterId.innerText = parseInt(this.counterId.innerText) - 1);
    }
}

new Counter({counterId:'count',plusId:'add',minusId:'minus'})

