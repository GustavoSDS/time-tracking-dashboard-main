console.log('hola');

let page = document.querySelector('#page');
let monthly = document.querySelector('#monthly');
let weekly = document.querySelector('#weekly');

monthly.addEventListener('click', function () {
    document.querySelector('.year1').classList.toggle('hidden');
    document.querySelector('.week1').classList.toggle('hidden');

    document.querySelector('.year2').classList.toggle('hidden');
    document.querySelector('.week2').classList.toggle('hidden');

    document.querySelector('.year3').classList.toggle('hidden');
    document.querySelector('.week3').classList.toggle('hidden');

    document.querySelector('.year4').classList.toggle('hidden');
    document.querySelector('.week4').classList.toggle('hidden');

    document.querySelector('.year5').classList.toggle('hidden');
    document.querySelector('.week5').classList.toggle('hidden');

    document.querySelector('.year6').classList.toggle('hidden');
    document.querySelector('.week6').classList.toggle('hidden');

    // document.querySelector('#weekly').classList.toggle('color-white');
    document.querySelector('#weekly').classList.toggle('color-pale-blue');

    document.querySelector('#monthly').classList.toggle('color-pale-blue');
    document.querySelector('#monthly').classList.toggle('color-white');
});

weekly.addEventListener('click', function () {
    document.querySelector('.year1').classList.toggle('hidden');
    document.querySelector('.week1').classList.toggle('hidden');

    document.querySelector('.year2').classList.toggle('hidden');
    document.querySelector('.week2').classList.toggle('hidden');

    document.querySelector('.year3').classList.toggle('hidden');
    document.querySelector('.week3').classList.toggle('hidden');

    document.querySelector('.year4').classList.toggle('hidden');
    document.querySelector('.week4').classList.toggle('hidden');

    document.querySelector('.year5').classList.toggle('hidden');
    document.querySelector('.week5').classList.toggle('hidden');

    document.querySelector('.year6').classList.toggle('hidden');
    document.querySelector('.week6').classList.toggle('hidden');

    // document.querySelector('#weekly').classList.toggle('color-white');
    document.querySelector('#weekly').classList.toggle('color-pale-blue');

    document.querySelector('#monthly').classList.toggle('color-pale-blue');
    document.querySelector('#monthly').classList.toggle('color-white');
});
