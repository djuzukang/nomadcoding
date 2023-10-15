// const names = ['nico','lynn','flynn']

// const hearts = names.map(item => {
//     return item + " heart";
// })
// const hearts = names.map(item =>item + " heart")
// const hearts = names.map((item,index) => item + " heart" + index)
// console.log(hearts)

// const button = document.querySelector('button');

// button.addEventListener('click',() => {
//     // this.style.backgroundColor

//     console.log(this);
//     console.log("i have been clicked")
// })

// const dj = {
//     name: "dj",
//     age: 33,
//     addyear: () => {
//         this.age++;
//     }
// };

// console.log(dj);
// dj.addyear();
// dj.addyear();
// console.log(dj)

const email = [
  'nco@no.com',
  'naver.google.com',
  'lynn@gmail.com',
  'nico@nomad.com',
  'nico@gmail.com',
];

// const foundMail = email.find((element) => element.includes('@gmail.com'))
// const noGmail = email.filter(potato => !potato.includes('@gmail'))
// const cleaned = [];
// email.forEach((email) => cleaned.push(email.split('@')[0]));
// const cleaned = email.map((email, index) => ({
//   username: email.split('@')[0],
//   points: index,
// }));
// console.table(cleaned);

const sayHi = (aName = 'anon') => `hello ${aName}`;
console.log(sayHi());
