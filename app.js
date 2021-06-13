// when user clicks to generate infographics from the form, 
// the grid will appear and the form will be hidden

// generate 3x3 grid of tiles with human in the center
// each tile has an image, specie's name and a fact
// for human tile => name and no fact
const dinosData = {
    "Dinos": [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
}

const compareBtn = document.getElementById('btn');
const grid = document.getElementById('grid');
const gridItem = document.createElement('div');
// gridItem.className = 'grid-item'; //doesn't work

// Create Dino Constructor
function Dino(species, weight, height, diet) {
    return {
        species,
        weight,
        height,
        diet
    }
}

// Create Human Object
function Human(name, height, weight, diet) {
    return {
        name,
        height,
        weight,
        diet
    }
}

const compareByWeight = (dinoName, dinoWeight, humanName, humanWeight) => {
    // Dino's weight in lbs
    const times = dinoWeight / humanWeight;
    dinoWeight > humanWeight ? 
    console.log(`${dinoName} is heavier ${times} times than ${humanName}`) : 
    console.log(`${dinoName} is heavier ${times} times than ${humanName}`)
}

const compareByHeight = (dinoName, dinoHeight, humanName, humanHeight) => {
    // Dino's height in inches
    const times = dinoHeight / humanHeight;
    dinoHeight > humanHeight ?
        console.log(`${dinoName} is higher ${times} times than ${humanName}`) :
        console.log(`${dinoName} is lower ${times} times than ${humanName}`);
}

const compareByDiet = (dinoName, dinoDiet, humanName, humanDiet) => {
    console.log(`${dinoName} is ${dinoDiet} and ${humanName} is ${humanDiet}`);
}

const calcUserHeightInInches = () => {
    let userFeet = document.getElementById('feet').value;
    let userInches = document.getElementById('inches').value;
    return (userFeet * 12) + parseInt(userInches);
    
}

compareBtn.addEventListener('click', function() {
    let userName = document.getElementById('name').value;
    let userWeight = document.getElementById('weight').value;
    let userDiet = document.getElementById('diet').value;

    let humanInfo = Human(userName, calcUserHeightInInches(), parseInt(userWeight), userDiet);

    compareByWeight(dinosData.Dinos[0].species, dinosData.Dinos[0].weight, userName, userWeight);
    compareByHeight(dinosData.Dinos[0].species, dinosData.Dinos[0].height, userName, calcUserHeightInInches());
    compareByDiet(dinosData.Dinos[0].species, dinosData.Dinos[0].diet, userName, userDiet);
    
});
