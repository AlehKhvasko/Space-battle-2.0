function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function alienShip(hull,attack,acc)  {
    this.hull = randomInteger(3,6);
    this.attack = randomInteger(2,4);
    this.acc = randomInteger(6,8) / 10;
};

let aliensShip1 = new alienShip();
let aliensShip2 = new alienShip();
let aliensShip3 = new alienShip();
let aliensShip4 = new alienShip();
let aliensShip5 = new alienShip();
let aliensShip6 = new alienShip();

let battleCruiser = {
    hull: 20,
    attack:  5,
    acc: 0.7
};

let aliens = [aliensShip1,aliensShip2,aliensShip3,aliensShip4,aliensShip5,aliensShip6];

let k = 0;


function game () {
    while (battleCruiser.hull > 0) {

    let usersChoice = prompt('Enter A to attack!  '  + "Retreat!  ", 'a');

    if (usersChoice == 'a') {
        if (Math.random() <= battleCruiser.acc) {
            aliens[k].hull -= battleCruiser.attack;
            console.log('%c We attacked enemy ship ', 'font-style: italic; color: coral; font-size: 0.7rem;');
            console.log('%c Alien ship : ','font-weight: bold; color: green; font-size: 0.7rem;');
            console.log(aliens[k]);
            console.log('%c Your ship : ','font-weight: bold; color: green; font-size: 0.7rem;');
            console.log(battleCruiser);
        }

        if (aliens[k].hull > 0) {

            if (Math.random() <= aliens[k].acc) {
                battleCruiser.hull -= aliens[k].attack;
                console.log('%c Our ship is under attack !!! ','font-style: italic; color: red; font-size: 0.7rem;');
                console.log(battleCruiser);
            }

        } 
        if (battleCruiser.hull <= 0) {
                console.log(`%c You died like a hero!`,'font-style: italic; color: black; font-size: 1.5rem;');
                break;
        }            
        else {
            console.log(`%c You destroyed enemies ship. ${5 - k} left. Don't give up!`,'font-style: italic; color: black; font-size: 1rem;');
            k++;
            if (k > 5) {
                console.log(`%c Winner! Defender of Earth! You have ${battleCruiser.hull} of hull hardness left.` ,'font-style: italic; color: black; font-size: 1.7rem;' );
               break; 
            }

        }
    } else {
        console.log(`%c Loser! You have ${battleCruiser.hull} of hull hardness left.` ,'font-style: italic; color: blue; font-size: 1.5rem;' );
        break;
    }
}
}
