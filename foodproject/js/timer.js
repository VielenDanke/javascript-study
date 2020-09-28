"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const deadline = "2020-11-11";

    function getTimeRemaining(endTime) {
        const differenceBetweenEndAndTodayDate = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(differenceBetweenEndAndTodayDate / (1000 * 60 * 60 * 24)),
            hours = Math.floor((differenceBetweenEndAndTodayDate / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((differenceBetweenEndAndTodayDate / 1000 / 60) % 60),
            seconds = Math.floor((differenceBetweenEndAndTodayDate / 1000) % 60);

        return {
            "total": differenceBetweenEndAndTodayDate,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function showCorrectClockFormat(time) {
        if (time == null) {
            return;
        }
        if (time >= 0 && time < 10) {
            const appendBefore = 10;

            return time < appendBefore ? `0${time}` : time;
        } else {
            return time;
        }
    }

    function setClock(selector, endTime) {
        const dateTimer = document.querySelector(selector),
              days = dateTimer.querySelector("#days"),
              hours = dateTimer.querySelector("#hours"),
              minutes = dateTimer.querySelector("#minutes"),
              seconds = dateTimer.querySelector("#seconds"),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();      

        function updateClock() {
            const expiredTime = getTimeRemaining(endTime);

            days.innerHTML = showCorrectClockFormat(expiredTime.days);
            hours.innerHTML = showCorrectClockFormat(expiredTime.hours);
            minutes.innerHTML = showCorrectClockFormat(expiredTime.minutes);
            seconds.innerHTML = showCorrectClockFormat(expiredTime.seconds);

            if (expiredTime.total <= 0) {
                clearInterval(timeInterval);
            }
        }      
    }
    setClock(".timer", deadline);
});