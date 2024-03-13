// const API_KEY = '504b85f6fe0a10a9c7f35945e14e7ddf';
const token = "8qlOkxz4wq";
const requests = {
  fetchNetflixOriginals: `/api/movies/discover/tv?token=${token}`,
  fetchSearch: `/api/movies/search?token=${token}`,
  fetchTrending: `/api/movies/trending?token=${token}`,
  fetchTopRated: `/api/movies/top-rate?token=${token}`,
  fetchActionMovies: `/api/movies/discover?genreId=28&token=${token}`,
  fetchComedyMovies: `/api/movies/discover?genreId=35&token=${token}`,
  fetchHorrorMovies: `/api/movies/discover?genreId=27&token=${token}`,
  fetchRomanceMovies: `/api/movies/discover?genreId=10749&token=${token}`,
  fetchDocumentaries: `/api/movies/discover?genreId=99&token=${token}`,
};

export default requests;
