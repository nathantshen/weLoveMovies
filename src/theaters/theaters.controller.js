const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const { movieId } = req.params;
  if (movieId === undefined) {
    const theaters = await service.list();

    const dataArray = theaters.map(async (theater) => {
      return { ...theater, movies: await service.getMovies(theater) };
    });
    //   const theater = { theater_id: 1 };
    const data = await Promise.all(dataArray);
    //   const movies = await service.getMovies(theater);

    res.json({ data });
  } else {
    let movie_id = Number(movieId);
    const theaters = await service.listByMovieId(movie_id);
    res.json({ data: theaters });
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
};