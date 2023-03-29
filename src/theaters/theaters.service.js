const knex = require("../db/connection");

function list() {
  return knex("theaters").select("*");
}
function getMovies(theater) {
  return knex("theaters")
    .join(
      "movies_theaters",
      "theaters.theater_id",
      "movies_theaters.theater_id"
    )
    .join("movies", "movies_theaters.movie_id", "movies.movie_id")
    .select("movies.*")
    .where("theaters.theater_id", "=", theater.theater_id);
  //still need to get the movies where is_showing = true
}
function listByMovieId(movie_id) {
  return knex("theaters")
    .join(
      "movies_theaters",
      "theaters.theater_id",
      "movies_theaters.theater_id"
    )
    .join("movies", "movies_theaters.movie_id", "movies.movie_id")
    .select("theaters.*", "movies.movie_id")
    .where("movies.movie_id", "=", movie_id);
}
module.exports = {
  list,
  getMovies,
  listByMovieId,
};
