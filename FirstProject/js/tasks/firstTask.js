const numberOfMovies = +prompt("How many movies have you already seen?", "");

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const personLastMovie = prompt("Last movie you've seen?", "");
const personLastMovieRating = prompt(`What rating you've estimated for ${personLastMovie}`, "");

personalMovieDB.movies[personLastMovie] = personLastMovieRating;

console.log(personalMovieDB);