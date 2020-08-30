"use strict";
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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

movieDB.movies.forEach((film, index) => {
    const incrIndex = 1;

    movieList.innerHTML += `<li class="promo__interactive-item">${index + incrIndex} ${film}
                                <div class="delete"></div>
                            </li>`;
});