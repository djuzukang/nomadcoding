// const getMoviesAsync = async () => {
//   const proxy = 'http://127.0.0.1:8080'
//   const url = 'https://yts.am/api/v2/list_movies.json';

//   const response = await fetch(proxy + url);
//   console.log(response);
// };

// getMoviesAsync();
const getMoviesAsync = async () => {
  try {
    const response = await fetch('/getMovies'); // Make a request to your Express.js endpoint
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getMoviesAsync();


// getMoviesAsync()

// const getMoviesAsync = async () => {
//   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//   const targetUrl = 'https://yts.am/api/v2/list_movies.json';

//   try {
//     const response = await fetch(proxyUrl + targetUrl);
//     const data = await response.json();
//     console.log(data);
//     // return data.data.movies;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// getMoviesAsync();
