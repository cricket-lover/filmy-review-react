// const details = require('./movies.json');
// const tenFilms = details.slice(0, 10);
// console.log(tenFilms[0]);
// const movieDetails = tenFilms.map((film) => {
//   return { title: film.title, releaseDate: film.release_date };
// });

// console.log(movieDetails);

const fetch = require('node-fetch');
// const getMovieList = () => {
//   return new Promise((resolve, reject) => {
//     fetch(
//       'https://api.themoviedb.org/3/discover/movie?api_key=c8a55fc70f7471cbfac2525dafac9891'
//     )
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res.results[0].poster_path);
//         resolve('hello');
//       });
//   });
// };

// fetch(
//   'https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=tt2935510&type=get-movie-details',
//   {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
//       'x-rapidapi-key': '519ef1e7a4msh56a92ac53bbc3e2p10204cjsn42eaf6c1a1da',
//     },
//   }
// )
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fetch(
  'https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=%3Crequired%3E&type=get-movies-images-by-imdb',
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
      'x-rapidapi-key': '519ef1e7a4msh56a92ac53bbc3e2p10204cjsn42eaf6c1a1da',
    },
  }
)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
