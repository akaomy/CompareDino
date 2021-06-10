// when user clicks to generate infographics from the form, 
// the grid will appear and the form will be hidden

// generate 3x3 grid of tiles with human in the center
// each tile has an image, specie's name and a fact
// for human tile => name and no fact
const compareBtn = document.getElementById('btn');

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
    const times = dinoHeight / humanHeight;
    console.log(`${dinoName} is heavier ${times} times than ${humanName}`);
}

const compareByDiet = (dinoName, dinoDiet, humanName, humanDiet) => {
    console.log(`${dinoName} is ${dinoDiet} and ${humanName} is ${humanDiet}`);
}

compareBtn.addEventListener('click', function() {
    compareByWeight('Dino', 100, 'human', 25);
    compareByHeight('Dino', 120, 'human', 20);
    compareByDiet('Dino', 'carnivor', 'human', 'herbavor');
    
});
