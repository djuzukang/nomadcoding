// // const friends = ['me', 'lynn', 'dal', 'mark'];
// // const newFriends = [...friends, 'dal'];

// const lastName = prompt('Last name');

// // const user = {
// //   username: 'nico',
// //   age: 24,
// //   //   lastName: lastName !== '' ? lastName : undefined,
// //   ...(lastName !== '' && { lastName }),
// // };

// // console.log(user);

// const infiniteArgs = (...kimchi) => console.log(kimchi);

// infiniteArgs("1", 2, true, "lalala", [1, 2, 3, 4], "asdasd")

// const bestFriendMaker = (firstOne, ...rest) => {
//     console.log(`My best friend is ${firstOne}`)
//     console.log(rest)
// };

// bestFriendMaker("nicolas", "lynn", "dal", "flynn", "mark");

// const killPassword = ({ password, ...rest }) => rest;

// const cleanUser = killPassword(user);

// console.log(cleanUser);

// const setCountry = ({ country = 'KR', ...rest }) => ({ country, ...rest });

// console.log(setCountry(user));

const user = {
  name: 'nico',
  age: 24,
  password: 12345,
};

const rename = ({ name: firstName, ...rest }) => ({ firstName, ...rest });

console.log(rename(user));
