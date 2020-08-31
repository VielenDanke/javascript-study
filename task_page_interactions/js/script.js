"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const epmptyString = "";

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll(".promo__adv img");
    const poster = document.querySelector(".promo__bg");
    const genre = poster.querySelector(".promo__genre");

    genre.textContent = "ДРАМА";

    // different types of backtics
    const movieList = document.querySelector(".promo__interactive-list");
    const titleForm = document.querySelector("form.add");
    const addElement = titleForm.querySelector(".adding__input");
    const checkBox = titleForm.querySelector("[type='checkbox']");

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    const removeAllFromList = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    removeAllFromList(adv);

    const movieDisplaying = (films, movieList) => {
        movieList.innerHTML = "";

        films.sort();

        films.forEach((film, index) => {
            const incrIndex = 1;
        
            movieList.innerHTML += `<li class="promo__interactive-item">${index + incrIndex} ${film}
                                        <div class="delete"></div>
                                    </li>`;
        });

        document.querySelectorAll(".delete").forEach((deleteBtn, index) => {
            deleteBtn.addEventListener("click", (event) => {
                deleteBtn.parentElement.remove();
                films.splice(index, 1);
                movieDisplaying(films, movieList);
            });
        });
    };

    movieDisplaying(movieDB.movies, movieList);

    titleForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const movieLengthConstraint = 21;
        let addedMovie = addElement.value;

        if (addedMovie == epmptyString || addedMovie == null) {
            return;
        } else if (addedMovie.length > movieLengthConstraint) {
            addedMovie = `${addedMovie.substring(0, 22)}...`;
        } else if (checkBox.checked) {
            console.log(`The loviest film is ${addedMovie}`);
        }
        movieDB.movies.push(addedMovie);

        event.target.reset();

        movieDisplaying(movieDB.movies, movieList);
    });

    movieDB.movies.forEach(item => {
        console.log(item);
    });
});