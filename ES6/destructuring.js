// const settings = {
// notification: {
//     follow : true,
//     alerts : true,
//     unfollow: false
// },
//   color: {
//     theme: 'dark',
//   },
//   great: {},
// };

// const follow = settings.notification.follow
// let {
//   notification: { follow },
//   color,
// } = settings;
// console.log(follow);

// let { notification } = settings;
// console.log(notification);

// const { notification: { follow = false } = {} } = settings;
// console.log(follow);

// const {
//   great: { abc = 'cde' },
// } = settings;
// console.log(abc);

// const days = () => ['Mon', 'Tue', 'Wed'];

// const [mon, tue, wed, thu = 'Thu'] = days();

// console.log(mon, tue, wed, thu);

// const settings = {
//     color: {
//         chosen_color: "dark"
//     }
// };

// let chosenColor = "blue";

// ({
//     color: { chosen_color: chosenColor = "light" }
// } = settings);

// console.log(chosen_color)

// function saveSettings({ notifications, color: { theme } }) {
//   console.log(notifications, theme);
// }

// saveSettings({
//   notifications: {
//     follow: true,
//     alert: true,
//     mkt: false,
//   },
//   color: { theme: 'blue' },
// });

// const follow = checkFollow();
// const alert = checkAlert();

// const settings = {
//     Notifications: {
//         follow,
//         alert
//     }
// }

// let mon = "Sat";
// let sat = "Mon";

// [sat, mon] = [mon, sat];

// const days = () => ['Mon', 'Tue', 'Wed'];

// const [, , , thu = 'Thu'] = days();
