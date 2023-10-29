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
        // return prop in target ? target[prop] : '***';
        return prop
    },
    set : (target, prop, value, receiver) => {
        console.log('set', prop, value)
    }
};

const filter = new Proxy(userObj, userFilter);


