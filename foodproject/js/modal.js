"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const modalTriggerBtns = document.querySelectorAll("[data-modal]");
    const modal = document.querySelector(".modal");
    const modalCloseBtn = document.querySelector("[data-close]");

    modalTriggerBtns.forEach(item => {
        item.addEventListener("click", event => {
            event.preventDefault();
            contactUsModalWindow(
                "show",
                "hide",
                "hidden"
            );
            // clearInterval(modal);
        });
    });

    modalCloseBtn.addEventListener("click", event => {
        event.preventDefault();
        contactUsModalWindow(
            "hide",
            "show",
            ""
        );
    });

    modal.addEventListener("click", event => {
        event.preventDefault();

        if (event.target === modal) {
            contactUsModalWindow(
                "hide",
                "show",
                ""
            );
        }
        document.addEventListener("keydown", event => {
            if (event.code === "Escape" && modal.classList.contains("show")) {
                contactUsModalWindow(
                    "hide",
                    "show",
                    ""
                );
            }
        });
    });

    function contactUsModalWindow(toAdd, toRemove, overflowStyle) {
        modal.classList.add(toAdd);
        modal.classList.remove(toRemove);
        document.body.style.overflow = overflowStyle;
    }

    function showModalWindowWithTimeout() {
        contactUsModalWindow("show", "hide", "hidden");
    }

    // const modalTimerId = setTimeout(showModalWindowWithTimeout, 3000);

    function showByScrollEvent() {
        if ((window.pageYOffset + document.documentElement.clientHeight) >= document.documentElement.scrollHeight) {
            contactUsModalWindow("show", "hide", "hidden");
            window.removeEventListener("scroll", showByScrollEvent);
        }
    }

    window.addEventListener("scroll", showByScrollEvent);

    // Классы для карточек

    class MenuCart {
        constructor(src, alt, title, description, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            if (this.classes.length === 0) {
                this.classes = ["menu__item"];
            }
            const element = createElement("div", this);
            this.parent.append(element);
        }
    }

    function createElement(element, cart) {
        const newElement = document.createElement(element);
        cart.classes.forEach(className => {
            newElement.classList.add(className);
        });
        newElement.innerHTML = `
                <img src=${cart.src} alt=${cart.alt}>
                <h3 class="menu__item-subtitle">${cart.title}</h3>
                <div class="menu__item-descr">${cart.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${cart.price}</span> грн/день</div>
                </div>
        `;
        return newElement;
    }

    new MenuCart(
        "img/tabs/vegy.jpg", 
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд:' +
        ' больше свежих овощей и фруктов. Продукт активных и здоровых людей.' + 
        ' Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        13,
        ".menu .container",
        "menu__item"
    ).render();

    new MenuCart(
        "img/tabs/elite.jpg", 
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, ' + 
        'но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты' + 
        ' - ресторанное меню без похода в ресторан!',
        18,
        ".menu .container",
        "menu__item"
    ).render();

    new MenuCart(
        "img/tabs/post.jpg", 
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов:' + 
        'полное отсутствие продуктов животного происхождения, молоко из миндаля,' +
        'овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        15,
        ".menu .container",
        "menu__item"
    ).render();
});