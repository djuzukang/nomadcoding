// const express = require('express');
// const axios = require('axios'); // Node.js fetch library

// const app = express();
// const port = 3000; // You can choose any available port

// app.use((req, res, next) => {
//   // Allow requests from your domain (replace with your actual domain)
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// // Route to proxy the external API request
// app.get('/getMovies', async (req, res) => {
//   try {
//     const url = 'https://yts.am/api/v2/list_movies.json';
//     const response = await axios(url);
//     // Axios already parses JSON, so you can directly access the data property.
//     const data = response.data;
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const axios = require('axios'); // Node.js fetch library
const path = require('path'); // Node.js path module for file paths

const app = express();
const port = 3000; // You can choose any available port

// Allow CORS for your frontend
app.use((req, res, next) => {
  // Allow requests from your domain (replace with your actual domain)
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.static(__dirname));

// Serve your HTML file when accessing the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to proxy the external API request
app.get('/getMovies', async (req, res) => {
  try {
    const url = 'https://yts.am/api/v2/list_movies.json';
    const response = await axios(url);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/suggestMovies', async (req, res) => {
  try {
    const url = 'https://yts.mx/api/v2/movie_suggestions.json?movie_id=100';
    const response = await axios(url);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
