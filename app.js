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

function Dino(species, weight, height, diet, fact) {

    return {
        species,
        fact,
        weight,
        height,
        diet,
        // compares dino's weight in lbs against user's weight in lbs
        compareByWeight: function (human) {
            const times = Math.round((this.weight / human.weight) * 10) / 10;
            if (this.species === 'Pigeon') {
                return `${this.fact}`
            } else {
            const result = this.weight > human.weight ?
                `${this.species} is heavier ${times} times than ${human.name}` :
                `${this.species} is ligher ${times} times than ${human.name}`;
                return result;
            }
        },
        // compares dino's height in inches against user's weight in inches
        compareByHeight: function (human) {
            const times = Math.round((this.height / human.height) * 10) / 10;
            if (this.species === 'Pigeon') {
                return `${this.fact}`
            } else {
            const result = this.height > human.height ?
                `${this.species} is higher ${times} times than ${human.name}` :
                `${this.species} is shorter ${times} times than ${human.name}`;
                return result;
            }
        },
        // returns sentence that annonces dino's diet vs user's diet
        compareByDiet: function (human) {
            return `${this.species} is ${this.diet} and ${human.name} is ${human.diet.toLowerCase()}`;
        }
    }
}

function Human() {
    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;
    const height = Math.round((parseInt(document.getElementById('feet').value) * 12) 
    / parseInt(document.getElementById('inches').value)) ;
    
    return { name, height, weight, diet } 
}

// creates spearate function where dino's information 
// about its compared weight, height and diet with human's info
// is returned as an array of random facts
const randomizeDinoFacts = (dino, human) => {
    let dinosFactsArr = [];
    dinosFactsArr.push(dino.compareByWeight(human), dino.compareByHeight(human), dino.compareByDiet(human), dino.fact);
    return dinosFactsArr[Math.floor(Math.random() * 4)];
}


const createCard = (dino, randomFacts) => {
    const gridItem = document.createElement('div');
    const dinoImg = document.createElement('img');
    const dinoName= document.createElement('h3');

    dinoName.textContent= dino.species;
    gridItem.className = 'grid-item';
    dinoImg.src = `./images/${dino.species ? dino.species : dino.name}.png`;
    
    gridItem.appendChild(dinoName);
    gridItem.appendChild(dinoImg);

    const itemLabel = randomFacts;
    const fact = document.createElement('p')
    fact.textContent = itemLabel;
    gridItem.appendChild(fact); 

    return gridItem;
}

// extra: 
// [] add back button that will hide grid and reveal empty form
// [] randomize the Dinos + Pigeon positions

document.getElementById('btn').addEventListener('click', function(e) { 
    e.preventDefault();
    document.getElementById('dino-compare').style.display = 'none';

    const grid = document.getElementById('grid');
    const human = Human();
    let finalGrid = [];

    const humanCard = document.createElement('div');
    const humanImage = document.createElement('img');
    const humanName = document.createElement('h3');

    humanName.textContent = human.name;
    humanCard.className = 'grid-item';
    humanImage.src = `./images/human.png`;

    humanCard.appendChild(humanName);
    humanCard.appendChild(humanImage);

    let dinosaur = undefined;
    let gridItems = undefined;
    dinosData.Dinos.forEach((dino) => {
        dinosaur = Dino(dino.species, dino.weight, dino.height, dino.diet, dino.fact);
        gridItems = createCard(dinosaur, randomizeDinoFacts(dinosaur, human));
        finalGrid.push(gridItems);
    });

    const fragment = document.createDocumentFragment();
    finalGrid.splice(4, 0, humanCard);

    for (item of finalGrid) {
        fragment.appendChild(item);
    }
    grid.appendChild(fragment); 

});
