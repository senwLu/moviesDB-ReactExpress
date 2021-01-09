const { API_KEY } = require('../../prConfig.js');
const axios = require('axios');

module.exports = {
   getGenres: (req, res) => {
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(function(result) {
         res.send(result.data);
      })
      .catch(function(err) {
         res.status(500).send(err);
      })
   },
   getSearch: (req, res) => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}` + 
                `&language=en-US&sort_by=popularity.desc&include_adult=false` + 
                `&include_video=false&page=1&with_genres=878`)
      .then(function(result) {
        console.log(result.data)
        res.send(result.data);
      })
      .catch(function(err) {
        res.status(500).send(err);
      })
   }
}