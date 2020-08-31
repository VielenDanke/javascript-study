"use strict";
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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

adv.forEach(item => {
    item.remove();
});

// different types of backtics
poster.style.backgroundImage = 'url("img/bg.jpg")';

const promoInteractive = document.querySelector(".promo__interactive");

const movieList = promoInteractive.querySelector(".promo__interactive-list");

console.log(movieList);

movieList.innerHTML = "";

movieDB.movies.sort();

const title = document.querySelector(".add");

const approveButton = title.querySelector("button");

const movieDisplaying = () => {
    movieList.innerHTML = "";

    movieDB.movies.forEach((film, index) => {
        const incrIndex = 1;
    
        movieList.innerHTML += `<li class="promo__interactive-item">${index + incrIndex} ${film}
                                    <div class="delete"></div>
                                </li>`;
    });
};

approveButton.addEventListener("click", (event) => {
    event.preventDefault();

    const movieLengthConstraint = 20;
    const addElement = title.querySelector(".adding__input");
    let addedMovie = addElement.value;

    if (addedMovie == epmptyString || addedMovie == null) {
        alert("Please insert some new movie");
        return;
    } else if (addedMovie.length > movieLengthConstraint) {
        addedMovie = addedMovie.slice(0, movieLengthConstraint).concat("...");
    }
    movieDB.movies.push(addedMovie);
    addElement.value = epmptyString;
    movieDisplaying();
});

document.querySelectorAll("delete");

movieDB.movies.forEach(item => {
    console.log(item);
});

movieDisplaying();