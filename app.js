'use strict';

const tank = document.querySelector('.tank');
const damage = document.querySelector('.damage');
const heals = document.querySelector('.heals');
const imgToon = document.querySelector('.imgToon');
const heroDisplay = document.querySelector('#hero-display');





tank.addEventListener('click', () => {
    getRandomHero(tankHeros);
});

damage.addEventListener('click', () => {
    getRandomHero(damageHeros);
});

heals.addEventListener('click', () => {
    getRandomHero(healerHeros);
});



let isRolling = false;

function displayHero(hero) {
    heroDisplay.textContent = hero.heroes;
    imgToon.src = hero.heroimg;
    imgToon.alt = hero.heroes;
    imgToon.hidden = false;
    imgToon.style.display = 'block';
}

function getRandomHero(heroArray) {

    // Prevent multiple rolls at the same time
    if (isRolling) return;

    isRolling = true;

    let rollCount = 0;
    const maxRolls = 15;

    function roll() {

        // Pick a random hero
        const random = Math.floor(Math.random() * heroArray.length);
        const selectedHero = heroArray[random];

        // Display the hero
        displayHero(selectedHero);

        rollCount++;

        if (rollCount < maxRolls) {

            // Gradually slow down the animation
            const delay = 60 + (rollCount * 15);

            setTimeout(roll, delay);

        } else {

            // Rolling has finished
            isRolling = false;

        }
    }

    roll();
}
