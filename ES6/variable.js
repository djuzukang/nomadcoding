// hoisting
// ###에러가 나지 않음 hoisting하기 떄문
// console.log(myName);
// var myName = 'dj';
// ###에러가 남 hoisting하지 않기 때문
// console.log(myName);
// let myName = 'dj';

// block scope
if (true){
    let hello = "hi"
}

console.log(hello)