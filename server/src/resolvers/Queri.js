const { getPopular } = require("../modules/movies/index.js");

async function movies(parent, args) {
  const data = await getPopular();
  return data;
}

module.exports = {
  movies,
};
