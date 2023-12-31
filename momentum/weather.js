const API_KEY = 'fce4f325f6269a44b02df89eca8f9f91';
onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`You live in ${position}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((Response) =>
    Response.json().then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    }),
  );
};
onGeoError = () => {
  alert("Can't find you No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
