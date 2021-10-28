import {data} from './src/data.js';
const cards = document.querySelector('.cards');


console.log(data);


// create a card
const createCard = () => {
    for(let i=0; i<data.length; i++){
        // first creat a card container
        const cardContainer = document.createElement('li');
        cardContainer.classList.add('card');

        // then append all of childs to the card container
        cards.appendChild(cardContainer)
        cardContainer.appendChild(generateName(i))
        cardContainer.appendChild(generateImg(i));
        cardContainer.appendChild(generateInfo(i));
        cardContainer.appendChild(generateGame(i));
    }
}

// generateName function
const generateName = (idx) => {
    const newName = document.createElement('h2');
    newName.classList.add('card--title');
    newName.innerText = `${data[idx].name}`;
    return newName
}

// generateImg function
const generateImg = (idx) => {
    const newImg = document.createElement('img');
    newImg.classList.add('imgCard');
    newImg.src = `${data[idx].sprites.other["official-artwork"].front_default}`;
    newImg.setAttribute("width", "256px");
    // create a data id for img
    newImg.setAttribute('dataId', `${data[idx].id}`)
    // toggle img function
    toggleImg(newImg);
    return newImg
}

// generateInfo function
const generateInfo = (idx) => {
    const newul = document.createElement('ul');
    newul.classList.add('card--text');
    
    for(let stat of data[idx].stats){
        const newLi = document.createElement('li');
        newLi.innerText = `${stat.stat.name} : ${stat.base_stat}`;
        newul.appendChild(newLi);
    }
    return newul
}

// challenge1:=========================================
// generateGame function
const generateGame = (idx) => {
    const newP = document.createElement('p');
    newP.innerText = "Games:";
    for(let i=0; i<data[idx].game_indices.length; i++){
        const newSpan = document.createElement('span');
        newSpan.innerText = `${data[idx].game_indices[i].version.name},`;
        newP.appendChild(newSpan);
    }
    return newP;
}


// challenge2:===========================================
// toggle img by clicking on img
function toggleImg(newImg){
    // get the img id
    const id = newImg.getAttribute('dataId')
    // add eventlistener to img
    newImg.addEventListener('click',function(){
        for(let i=0; i<data.length; i++){
            if(data[i].id === Number(id)){
                newImg.src = `${data[i].sprites.other["dream_world"].front_default}`;
           }
        }   
    })
}


createCard()

