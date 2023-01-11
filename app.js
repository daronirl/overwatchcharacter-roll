'use strict';

const tank = document.querySelector('.tank');
const damage = document.querySelector('.damage');
const heals = document.querySelector('.heals');
const imgToon = document.querySelector('.imgToon');
const heroDisplay = document.querySelector('#hero-display');




// Click a button to randomly choose a character
tank.addEventListener('click', getRandomTank);
damage.addEventListener('click', getRandomDamage);
heals.addEventListener('click', getRandomHealer);



function getRandomTank () {
        const random = Math.floor(Math.random() * tankHeros.length);
        heroDisplay.innerHTML = tankHeros[random].heroes;
        imgToon.setAttribute('src', tankHeros[random].heroimg);
        imgToon.style.display = 'block';
    
}

function getRandomDamage () {
        const random = Math.floor(Math.random() * damageHeros.length);
        heroDisplay.innerHTML = damageHeros[random].heroes;
        imgToon.setAttribute('src', damageHeros[random].heroimg);
        imgToon.style.display = 'block';
}

function getRandomHealer () {
        const random = Math.floor(Math.random() * healerHeros.length);
        heroDisplay.innerHTML = healerHeros[random].heroes;
        imgToon.setAttribute('src', healerHeros[random].heroimg);
        imgToon.style.display = 'block';
}



