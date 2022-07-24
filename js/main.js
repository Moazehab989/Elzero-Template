let countDownDate = new Date("Dec, 31, 2022, 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    // get time units
    let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
    let minuts = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60);
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML =
        hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minuts").innerHTML =
        minuts < 10 ? `0${minuts}` : minuts;
    document.querySelector(".seconds").innerHTML =
        seconds < 10 ? `0${seconds}` : seconds;
    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);

let scrollToTop = document.querySelector(".scroll-to-top");
let section = document.querySelector(".landing");
let skillsSection = document.querySelector(".our-skills");
let progress = document.querySelectorAll(".progress-bar");
let statsSection = document.querySelector(".stats");
let statsNumber = document.querySelectorAll(".stats .box .number");
let started = false;

scrollToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

window.onscroll = () => {
    // give scroll-to-top display:block;
    if (window.scrollY >= 600) {
        scrollToTop.style.display = "block";
    } else if (window.scrollY <= 600) {
        scrollToTop.style.display = "none";
    }

    // give the width to progress
    if (window.scrollY >= skillsSection.offsetTop - 130) {
        progress.forEach((progress) => {
            progress.style.width = progress.dataset.width;
        });
    }

    // Increase number from 0 to gool
    if (window.scrollY >= statsSection.offsetTop - 130) {
        if (!started) {
            statsNumber.forEach((i) => startCount(i));
        }
        started = true;
    }
};

function startCount(el) {
    let gool = el.dataset.gool;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == gool) {
            clearInterval(count);
        }
    }, 2000 / gool);
}