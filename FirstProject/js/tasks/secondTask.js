"use strict";

const numberOfMovies = +prompt("How many movies have you already seen?", "");

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 3; i++) {
    const personLastMovie = prompt("Last movie you've seen?", "");
    const personLastMovieRating = prompt(`What rating you've estimated for ${personLastMovie}`, "");

    const isPersonalMovieNotValid = personLastMovie == null || 
                                    personLastMovie.length == 0 || 
                                    personLastMovie.length > 50;

    const isRatingNotValid = personLastMovieRating == null || 
                                personLastMovieRating.length == 0 || 
                                personLastMovieRating.length > 50;

    if (isPersonalMovieNotValid || isRatingNotValid) {
        alert("The movie name or rating cannot be empty");
        i--;
    } else {
        personalMovieDB.movies[personLastMovie] = personLastMovieRating;
    }
}

if (personalMovieDB.count < 10) {
    alert("Just a few films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("You are classical movie-guy");
} else if (personalMovieDB.count >= 30){
    alert("You are movie addicted");
} else {
    alert("Something went wrong");
}
console.log(personalMovieDB);