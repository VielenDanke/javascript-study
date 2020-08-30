"use strict";

let numberOfMovies;

function start() {
    numberOfMovies = +prompt("How many movies have you already seen?", "");

    while(numberOfMovies == "" || numberOfMovies == null || isNaN(numberOfMovies)) {
        numberOfMovies = +prompt("How many movies have you already seen?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Just a few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are classical movie-guy");
    } else if (personalMovieDB.count >= 30){
        alert("You are movie addicted");
    } else {
        alert("Something went wrong");
    }
}

detectPersonalLevel();

const showMyDB = (hidden) => {
    if (hidden == null) {
        return;
    }
    if (!hidden) {
        console.log(personalMovieDB);
    }
};

showMyDB(personalMovieDB.private);

const writeYourGenres = function() {
    for (let i = 1; i < 4; i++) {
        const lovelyGenre = prompt(`Your lovely genre on number ${i}?`, "");

        personalMovieDB.genres[--i] = lovelyGenre;
    }
};

writeYourGenres();

console.log(personalMovieDB);