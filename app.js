// when user clicks to generate infographics from the form, 
// the grid will appear and the form will be hidden

// generate 3x3 grid of tiles with human in the center
// each tile has an image, specie's name and a fact
// for human tile => name and no fact

// Create Dino Constructor
function Dino (speciesName, img, fact) {
    return {
        speciesName,
        img,
        fact
    }
}

const imgsArray = [];
const fact = [];

// Create Dino Objects
const Triceraptos = Dino('Triceraptos', imgsArray[0], fact);
const Brontozavr = Dino('Brontozavr', imgsArray[1], fact);

// Create Human Object
function Human (name, height, weight, diet) {
    return {
        name,
        height,
        weight,
        diet
    }
}
const newHuman = Human('Vasya', 180, 160, 'herbavor');