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

const compareByWeight = (dino, humanName, humanWeight) => {
    // Dino's weight in lbs
    const times = dino.weight / humanWeight;
    dino.weight > humanWeight ? 
        console.log(`${dino.species} is heavier ${times} times than ${humanName}`) : 
        console.log(`${dino.species} is heavier ${times} times than ${humanName}`)
}

const compareByHeight = (dino, humanName, humanHeight) => {
    // Dino's height in inches
    const times = dino.height / humanHeight;
    dino.height > humanHeight ?
        console.log(`${dino.name} is higher ${times} times than ${humanName}`) :
        console.log(`${dino.name} is lower ${times} times than ${humanName}`);
}

const compareByDiet = (dino, humanName, humanDiet) => {
    console.log(`${dino.name} is ${dino.diet} and ${humanName} is ${humanDiet}`);
}

const calcUserHeightInInches = () => {
    let userFeet = document.getElementById('feet').value;
    let userInches = document.getElementById('inches').value;
    return (userFeet * 12) + parseInt(userInches);
    
}

const getUserInput = () => {
    let userName = document.getElementById('name').value;
    let userWeight = document.getElementById('weight').value;
    let userDiet = document.getElementById('diet').value;

    return { userName, userWeight, userDiet };
}

// blin I gotta use those Dino and Human objects
const generateCards = () => {
    
    const grid = document.getElementById('grid');
    for (let i = 0; i < 8; i ++) {

        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        const img = document.createElement("img");
        img.src = `./images/${dinosData.Dinos[i].species}.png`;

        grid.appendChild(gridItem);
        gridItem.appendChild(img);

        // compare objects here
        // const human = Human(getUserInput().userName, calcUserHeightInInches(), parseInt((getUserInput().weight)), getUserInput().diet);
        const dino = Dino(dinosData.Dinos[i].species, dinosData.Dinos[i].weight, dinosData.Dinos[i].height, dinosData.Dinos[i].diet);
        // fix it console.log(human);
        // console.log(dino);
        compareByWeight(dino, getUserInput().userName, getUserInput().userWeight);
        compareByHeight(dino, getUserInput().userName, calcUserHeightInInches()); // doesn't show the name
        compareByDiet(dino, getUserInput().userName, getUserInput().userDiet); // doesn't show the name
    }

}

const compareBtn = document.getElementById('btn');
compareBtn.addEventListener('click', function() { generateCards() });
