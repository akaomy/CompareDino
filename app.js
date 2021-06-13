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

function Dino(species, weight, height, diet) {
    return {
        species,
        weight,
        height,
        diet
    }
}

function Human(name, height, weight, diet) {
    return {
        name,
        height,
        weight,
        diet
    }
}

const compareByWeight = (dino, human) => {
    // Dino's weight in lbs
    const times = dino.weight / human.weight;
    dino.weight > human.weight ? 
        console.log(`${dino.species} is heavier ${times} times than ${human.name}`) : 
        console.log(`${dino.species} is heavier ${times} times than ${human.name}`)
}

const compareByHeight = (dino, human) => {
    // Dino's height in inches
    const times = dino.height / human.height;
    dino.height > human.height ?
        console.log(`${dino.name} is higher ${times} times than ${human.name}`) :
        console.log(`${dino.name} is lower ${times} times than ${human.name}`);
}

const compareByDiet = (dino, human) => {
    console.log(`${dino.name} is ${dino.diet} and ${human.name} is ${human.diet}`);
}

const calcUserHeightInInches = () => {
    let userFeet = document.getElementById('feet').value;
    let userInches = document.getElementById('inches').value;
    return (userFeet * 12) + parseInt(userInches);
    
}

// todo
// [] untangle human and dino object from this function
// [] add human's card into the grid
// [] add info into the cards
// fix undefined instead of dino's name
const generateCards = () => {
    const grid = document.getElementById('grid');
    let userName = document.getElementById('name').value;
    let userWeight = document.getElementById('weight').value;
    let userDiet = document.getElementById('diet').value;

    const human = Human(userName, calcUserHeightInInches(), parseInt(userWeight), userDiet);

    for (let i = 0; i < 8; i ++) {

        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        const img = document.createElement("img");
        img.src = `./images/${dinosData.Dinos[i].species}.png`;

        grid.appendChild(gridItem);
        gridItem.appendChild(img);

        const dino = Dino(dinosData.Dinos[i].species, dinosData.Dinos[i].weight, dinosData.Dinos[i].height, dinosData.Dinos[i].diet);

        console.log(human);
        console.log(dino);
        compareByWeight(dino, human);
        compareByHeight(dino, human);
        compareByDiet(dino, human);
    }

}

const compareBtn = document.getElementById('btn');
compareBtn.addEventListener('click', function() { generateCards() });
