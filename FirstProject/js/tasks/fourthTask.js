"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    startQuestions: () => {
        let movieCount = +prompt("How many movies have you already seen?", "");

        while(movieCount == "" || 
              movieCount == null || 
              isNaN(movieCount)) {

            movieCount = +prompt("How many movies have you already seen?", "");
        }
        personalMovieDB.count = movieCount;
    },
    rememberFilms: function() {
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
    },
    detectLevel: () => {
        const movieCount = personalMovieDB.count;

        if (movieCount < 10) {
            alert("Just a few films");
        } else if (movieCount >= 10 && movieCount < 30) {
            alert("You are classical movie-guy");
        } else if (movieCount >= 30){
            alert("You are movie addicted");
        } else {
            alert("Something went wrong");
        }
    },
    showMyDB: function(hidden) {
        if (hidden == null) {
            return;
        }
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeGenres: () => {
        let lovelyGenres = prompt("Your lovely genre using ,", "").toLowerCase();

        if (lovelyGenres == null || lovelyGenres === "") {
            alert("Genre cannot be empty");
            lovelyGenres = prompt("Your lovely genre using ,", "");
        } else {
            personalMovieDB.genres = lovelyGenres.split(",");
            personalMovieDB.genres.sort((first, second) => {
                return first.length - second.length;
            });
        }
        // for (let i = 1; i < 4; i++) {
            // const lovelyGenres = prompt(`Your lovely genre on number ${i}?`, "");

            // if (lovelyGenres == null || lovelyGenres === "") {
            //     alert("Genre cannot be empty");
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = lovelyGenres;
            // }
        // }
        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Lovely genre #${index + 1} is ${value}`);
        });
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.private = !personalMovieDB.private;
    }
};