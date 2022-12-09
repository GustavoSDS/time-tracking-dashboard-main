'use strict';
import data from '../data.json' assert {type: 'json'};

window.addEventListener('load', function() {

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);

let bgColors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)',
]

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');
let secondSection = document.querySelector('.second-section');

drawElements(dailyArray);
dailyBtn.className = 'main-card__frequency--active';

dailyBtn.addEventListener('click', () => {
    drawElements(dailyArray);
    toggle(dailyBtn, true);
    toggle(weeklyBtn, false);
    toggle(monthlyBtn, false);
});
weeklyBtn.addEventListener('click', () => {
    drawElements(weeklyArray);
    toggle(dailyBtn, false);
    toggle(weeklyBtn, true);
    toggle(monthlyBtn, false);
});
monthlyBtn.addEventListener('click', () => {
    drawElements(monthlyArray);
    toggle(dailyBtn, false);
    toggle(weeklyBtn, false);
    toggle(monthlyBtn, true);
});


function toggle(btn, validate) {
    if (validate) {
        btn.className = 'main-card__frequency--active';
    }else{
        btn.className = 'main-card__frequency';
    }
}

function drawElements(array) {
    secondSection.innerHTML = "";
    array.forEach( (element,index) => {
        let titleImg = data[index].title.toLowerCase().replace(/\s/g, '-');
        secondSection.innerHTML +=
        `
        <div class="card">
            <div class="card__background" style="background-color: ${bgColors[index]};">
            <img class="card__image" src="./images/icon-${titleImg}.svg" alt="icon-work">
            </div>

            <div class="card__details">
            <div class="card__activity">
                <p class="card__title">${data[index].title}</p>
                <img class="card__dots" src="./images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>

            <div class="card__times">
                <p class="card__hours">${element.current}hrs</p>
                <p class="card__previous">Last Week - ${element.previous}hrs</p>
            </div>
            </div>
        </div>
    `;
    });
}

});