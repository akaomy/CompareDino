// when user clicks to generate infographics from the form, 
// the grid will appear and the form will be hidden

// generate 3x3 grid of tiles with human in the center
// each tile has an image, specie's name and a fact
// for human tile => name and no fact
const compareBtn = document.getElementById('btn');
const grid = document.getElementById('grid');
const gridItem = document.createElement('div');
gridItem.className = 'grid-item';

// Create Dino Constructor
function Dino (species, weight, height, diet) {
    return {
        species,
        weight,
        height,
        diet
    }
}

// Create Human Object
function Human (name, height, weight, diet) {
    return {
        name,
        height,
        weight,
        diet
    }
}

// compare Dino and human by weight
const compareByWeight = (dinoName, dinoWeight, humanName, humanWeight) => {
    const times = dinoWeight / humanWeight;
    console.log(`${dinoName} is heavier ${times} times than ${humanName}`);
}

const compareByHeight = (dinoName, dinoHeight, humanName, humanHeight) => {
    // Dino's height in inches
    const times = dinoHeight / humanHeight;
    if (dinoHeight > humanHeight) {
        console.log(`${dinoName} is heavier ${times} times than ${humanName}`);
    } else {
        console.log(`${dinoName} is lighter ${times} times than ${humanName}`);
    }
}

const compareByDiet = (dinoName, dinoDiet, humanName, humanDiet) => {
    console.log(`${dinoName} is ${dinoDiet} and ${humanName} is ${humanDiet}`);
}

// todo
// get user input and put it into a new human object

compareBtn.addEventListener('click', function() {
    let userName = document.getElementById('name').value;

    // convert userFeet into inches and add it to userInches
    let userFeet = document.getElementById('feet').value;
    let userInches = document.getElementById('inches').value;
    let userHeightInInches = (userFeet * 12) + parseInt(userInches);

    let userWeight = document.getElementById('weight').value;

    // create a new human object to display on the page

    compareByWeight('Dino', 100, userName, userWeight);
    compareByHeight('Dino', 120, userName, userHeightInInches);
    compareByDiet('Dino', 'carnivor', userName, 'herbavor');
    
    grid.appendChild(gridItem);
});
