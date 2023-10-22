// const buttons = document.querySelectorAll('.btn');

// const ar = Array.from(buttons);

// ar.forEach((buttons) => {
//   buttons.addEventListener('click', () => console.log('I ve been clicked'));
// });

// const friends = Array.of('a', 'b', 'c', 'd', 'e');
// console.log(buttons);

const friends = [
  'nico@gmail.com',
  'lynn@naver.com',
  'dal@yahoo.com',
  'mark@hotmail.com',
  'flynn@gorea.com',
  'fillarray@korea.com',
];

const check = () => friends.findIndex((friend) => friend.includes('gorea.com'));

let target = check();

if (target !== -1) {
  console.log(target);

  const username = friends[target].split('@')[0];

  const email = 'korea.com';

  friends[target] = `${username}@${email}`;

  target = check();
}
console.log(friends);

const check2 = () => friends.findIndex((friend) => friend.includes('fill'));
target = check2();

if (target !== -1) {
  friends.fill('*'.repeat(5), target);
}
console.log(friends);

friends.fill('*'.repeat('5'), 1, 3);
console.log(friends);

console.log(friends.includes('nico@gmail.com'));
