// const path = require('path'); // Node.js path module for file paths
// import path from 'path';
// const getMoviesAsync = async () => {
//   const proxy = 'http://127.0.0.1:8080'
//   const url = 'https://yts.am/api/v2/list_movies.json';


//   const response = await fetch(proxy + url);
//   console.log(response);
// };

// getMoviesAsync();
// const getMoviesAsync = async () => {
//   try {
//     const response = await fetch('/getMovies'); // Make a request to your Express.js endpoint
//     console.log(response);
//     console.log(typeof response)
//     response.json().then(data => console.log(data))
    
//     // const data = await response.json();
//     // console.log(data);
//     // console.log(typeof data)
//   } catch (error) {
//     console.error(error);
//   }
// };

// getMoviesAsync();
// path.join(__dirname, 'index.html')
// console.log(__dirname);
// const axios = require('axios');
import axios from 'axios';


const getMoviesAsync = async () => {
  // const targetUrl = 'https://yts.am/api/v2/list_movies.json';
  // const targetUrl = 'https://localhost';
  const getmovieURL = '/getMovies';
  const suggestMoviesURL = '/suggestMovies';

  try {
    const [getMovies,suggestMovies] = await Promise.all([
      axios(getmovieURL),
      axios(suggestMoviesURL)
    ]);

    // const [getMoviesJson,suggestMoviesJson] = await Promise.all([
    //   getMovies.json(),
    //   suggestMovies.json()]);

    console.log(getMovies,suggestMovies);
    // throw Error("this is an error");
    // return data.data.movies;
  } catch (error) {
    // console.error('Error fetching data:', error);
    // console.log('Error fetching data:', error);
    console.log('Error json data:', error);
  } finally {
    console.log('Finally');
  }

};

getMoviesAsync();
