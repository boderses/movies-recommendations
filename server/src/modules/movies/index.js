const axios = require("axios");
const { Movies } = require("./entities/Movies.js");
const { API_KEY } = require("../../config/index.js");

const getPopular = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return new Movies(result.data);
};

module.exports = {
  getPopular,
};
