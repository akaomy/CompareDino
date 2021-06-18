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
        compareByWeight: function (human) {
            const times = Math.round((this.weight / human.weight) * 10) / 10;
            if (this.species === 'Pigeon') {
                return `${this.fact}`
            } else {
                let result = this.weight > human.weight ?
                `${this.species} is heavier ${times} times than ${human.name}` :
                `${this.species} is ligher ${times} times than ${human.name}`;
                return result;
            }
        },
        compareByHeight: function (human) {
            const times = Math.round((this.height / human.height) * 10) / 10;
            if (this.species === 'Pigeon') {
                return `${this.fact}`
            } else {
            let result = this.height > human.height ?
                `${this.species} is higher ${times} times than ${human.name}` :
                `${this.species} is shorter ${times} times than ${human.name}`;
                return result;
            }
        },
        compareByDiet: function (human) {
            return `${this.species} is ${this.diet} and ${human.name} is ${human.diet.toLowerCase()}`;
        }
    }
}

function Human() {
    let name = document.getElementById('name').value;
    let weight = document.getElementById('weight').value;
    let diet = document.getElementById('diet').value;
    let height = Math.round((parseInt(document.getElementById('feet').value) * 12) 
    / parseInt(document.getElementById('inches').value)) ;
    
    return { name, height, weight, diet } 
}

const randomizeDinoFacts = (dino, human) => {
    let dinosFactsArr = [];
    let dinosaur = Dino(dino.species, dino.weight, dino.height, dino.diet, dino.fact);
    dinosFactsArr.push(dinosaur.compareByWeight(human), dinosaur.compareByHeight(human), dinosaur.compareByDiet(human), dinosaur.fact);
    return dinosFactsArr[Math.floor(Math.random() * 4)];
}

const createCard = (data, randomFacts) => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    // grid.appendChild(gridItem);

    const dinoImg = document.createElement("img");
    dinoImg.src = `./images/${data.species ? data.species : data.name}.png`;
    gridItem.appendChild(dinoImg);

    const itemLabel = document.createTextNode(randomFacts);
    gridItem.appendChild(itemLabel); 

    return gridItem;
}

document.getElementById('btn').addEventListener('click', function(e) { 
    e.preventDefault();
    document.getElementById('dino-compare').style.display = 'none';

    const grid = document.getElementById('grid');
    const human = Human();    

    dinosData.Dinos.forEach(dino => {
        createCard(dino, randomizeDinoFacts(dino, human));
    })

    const cards = Array.from(document.getElementsByClassName('grid-item'))
    const humanCard = document.createElement('div');
    const humanImage = document.createElement('img')
    humanCard.className = 'grid-item';
    humanImage.src = `./images/human.png`;
    humanCard.appendChild(humanImage);

    cards.splice(4, 0, humanCard);

    grid.appendChild(cards)    

});
