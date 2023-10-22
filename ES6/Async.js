const getMoviesAsync = async () => {
  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  //   const proxyUrl = 'https://aqueous-taiga-78810.herokuapp.com/';
  const url = 'https://yts.am/api/v2/list_movies.json';
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const response = await fetch(url, { headers });
  console.log(response);
  // const response = await fetch('https://yts.am/api/v2/list_movies.json');
  // const json = await response.json();
  // return json.data.movies;
};

getMoviesAsync();

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
