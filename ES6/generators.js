// function* listPeople(){
//     yield 'dal';
//     yield 'flynn';
//     yield 'mark';
//     yield 'godkimchi';
//     yield 'japanguy';
// }

// const listG = listPeople();

const userObj = {
    username: 'nico',
    age:12,
    password: 'XXXX'
}

const userFilter = {
    get : (target, prop, receiver) => {
        return prop in target ? target[prop] : '***';
    },
    set : (target, prop, value, receiver) => {
        console.log('set', prop, value)
    },
    deleteProperty : (target,prop) => {
        if(prop === 'password'){
            return;
        } else {
            target[prop] = 'DELETED';
        }
    }
};

const filter = new Proxy(userObj, userFilter);


const object = {
    username: 'nico',
    age:12,
    password: 'XXXX'
}

// Object기능
// console.log(Object.values(object));
// Object.values(object).forEach(value => console.log(value));
// console.log(Object.entries(object));
// Object.entries(object).forEach(value => console.log(value));

// Object.fromEntries(Object.entries(object).filter(([key,value]) => key !== 'password'));

const confusedArray = [1,2,[3,4],5,[6,[7,8],9],10];
console.log(confusedArray.flat(2));
console.log(confusedArray.flatMap(i => i + 'hello'));