document.addEventListener('DOMContentLoaded', postData)

const data = document.location.search;
const params = new URLSearchParams(data);

const fname = params.get('fname');
const luggage = params.get('luggage');
const weapon = params.get('weapon');
const shelter = params.get('shelter');
const vehicle = params.get('vehicle');
const companion = params.get('companion');
const morale = params.get('morale');

let characters;
let image;
let text;

console.log("luggage;");
console.log(luggage);
console.log("weapon;");
console.log(weapon);
console.log("shelter;");
console.log(shelter);
console.log("vehicle;");
console.log(vehicle);
console.log("companion;");
console.log(companion);
console.log("morale;");
console.log(morale);

console.log(params)



if (luggage == "10%" && weapon == "gun" && shelter == "sewage systems" && vehicle == "No" && companion == "war veteran" && morale == "misery") {
    characters = 'survived';
    image = 'https://pa1.aminoapps.com/7601/3925c98b2f98ee67375410851750cf738b0dd653r1-370-300_hq.gif';
    text='The war veteran has saved you many times!'
} else if (luggage == "15%" && weapon == "machete" && shelter == "abandoned gas station" && vehicle == "Yes" && companion == "childhood friend" && morale == "misery") {
    characters = 'survived';
    image = 'https://i.pinimg.com/originals/a4/88/0c/a4880c510308b3e94b12095efd33dbf1.gif';
    text='Good job! You surived on the food in the gas station and showed no fear on needing to make fatal decisions.'
} else if (luggage == "20%" && weapon == "spiked bat" && shelter == "abandoned homes" && vehicle == "No" && companion == "lover" && morale == "misery") {
    characters = 'survived';
    text='Your deep love for your lover motivated a great warrior inside you!'
    image = 'https://feistelectronics.com/wp-content/uploads/2021/07/212323546ba-colorful-fireworks-animated-gif-pic.gif';
} else if (luggage == "5%" && weapon == "shield" && shelter == "subway station" && vehicle == "No" && companion == "all" && morale == "help") {
    characters = 'died';
    text='You are too kind for your own good.'
    image = 'https://images.squarespace-cdn.com/content/v1/5777ca7346c3c4623fd38986/1467763726144-P3WNV87C3F7VMEWB58N6/pokemon.gif';
} else if (luggage == "25%" && weapon == "all" && shelter == "abandoned gas station" && vehicle == "Yes" && companion == "all" && morale == "help") {
    characters = 'died';
    text='Your selfishness killed you.'
    image = 'https://media.tenor.com/dp9AUuvHoL8AAAAj/this-bag-is-too-heavy-om-nom.gif';
} else if (luggage == "10%" && weapon == "spiked bat" && shelter == "abandoned homes" && vehicle == "Yes" && companion == "no one" && morale == "misery") {
    characters = 'died';
    text='You should learn to make friends.'

} else {
    characters = 'died';
    text='You really have no athletic skills...'
}

//writing html code
function postData() {
    const container = document.getElementById('results');
    container.innerHTML = `<h1> ${fname}, You ${characters}!</h1>
                            <img src="${image}"></img>
                            <h1>${text}</h1>`;
}
