// const hello = fetch(); // fetch is a function

// const amISexy = new Promise((resolve, reject) => {
//   //   //   setTimeout(resolve, 3000, 'Yes you are!');
//   //   setTimeout(reject, 3000, 'You are ugly');
//   //   resolve(2);
//   reject(2);
// });

// const timesTwo = (number) => number * 2;

// amISexy
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(() => {
//     throw Error('Something is wrong');
//   })
//   .then((lastNumber) => console.log(lastNumber))
//   .catch((error) => console.log(error));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(reject, 1000, 'First');
// })
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e))
//   .finally(() => console.log('Im Done'));

// fetch('http://127.0.0.1:8080/')
// fetch('https://yts.mx/api/v2/list_movies.json')
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((json) => console.log(json))
//   .catch((e) => console.log(`❌ ${e}`));
