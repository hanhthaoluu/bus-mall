'use strict';

///get three img tags from the DOM tree to manipulate them
var firstImgEl = document.getElementById('first-image');
console.log(firstImgEl.src);
var secondImgEl = document.getElementById('second-image');
var thirdImgEl = document. getElementById('third-image');

///create the Image constructor
function Image(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  this.elementId = '';

}
/*
var images = {
  new Image();
  new Image();
}
*/

///create new instances of Image
var bag = new Image('bag', './assets/bag.jpg');
var banana = new Image('banana', './assets/banana.jpg');
var bathroom = new Image('bathroom', './assets/bathroom.jpg');
var boots = new Image('boots', './assets/boots.jpg');
var breakfast = new Image('breakfast', './assets/breakfast.jpg');
var bubblegum = new Image('bubblegum', './assets/bubblegum.jpg');
var chair = new Image('chair', './assets/chair.jpg');
var cthulhu = new Image('cthulhu', './assets/cthulhu.jpg');
var dogDuck = new Image('dog-duck', './assets/dog-duck.jpg');
var dragon = new Image('dragon', './assets/dragon.jpg');
var pen = new Image('pen', './assets/pen.jpg');
var petSweep = new Image('pet-sweep', './assets/pet-sweep.jpg');
var scissors = new Image('scissors', './assets/scissors.jpg');
var shark = new Image('shark', './assets/shark.jpg');
var sweep = new Image('sweep', './assets/sweep.png');
var tauntaun = new Image('tauntaun', './assets/tauntaun.jpg');
var unicorn = new Image('unicorn', './assets/unicorn.jpg');
var usb = new Image('usb', './assets/usb.gif');
var waterCan = new Image('water-can', './assets/water-can.jpg');
var wineGlass = new Image('wine-glass', './assets/wine-glass.jpg');

//store all images in an array labeled as "names"
var names = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

/*////with trials and errors this is how I manage to change the source of an image
//I googled how to change the source of an image using js and I found something similar like this
firstImgEl.src='./assets/dragon.jpg';
//I need to console.log firstImgEl to test my code, to make sure the path is correct and the image is correct
console.log(firstImgEl);
//this code works, now I don't want to type out the path again.  I can just use the .path property from the Image constructor
/*firstImgEl.src=dragon.path;
//now I need to make the image source/path dynamic by using the array called "names"
firstImgEl.src=names[9].path;
//now I need to randomize the index by generating a random number
*/


///I need to generate 3 different random numbers between 1 and 20;
//FRIST: GENERATE A RANDOM NUMBER FUNCTION
function randomIndex () {
  return Math.floor(Math.random() * (20-1)) + 1;
}

///now generate AND store 3 random numbers into 3 different variables


///now I need to make sure the 3 generated numbers are not the same bc I want 3 different images side by side

///while any number of the 3 generated number is equal to each other, I need to regenerate all 3 random numbers to get new random numbers
function threeDifferentRandomNumbers(){

  var randomNumberOne = randomIndex();
  var randomNumberTwo = randomIndex();
  var randomNumberThree = randomIndex();
  while ((randomNumberOne == randomNumberTwo)|| (randomNumberOne == randomNumberThree) || (randomNumberTwo == randomNumberThree)){
  randomNumberOne = randomIndex();
  randomNumberTwo = randomIndex();
  randomNumberThree = randomIndex();
  }
///test my dynamic image source with random index
firstImgEl.src=names[randomNumberOne].path;
names[randomNumberOne].elementId = firstImgEl.id;

secondImgEl.src = names[randomNumberTwo].path;
names[randomNumberTwo].elementId = secondImgEl.id;
thirdImgEl.src = names[randomNumberThree].path;
names[randomNumberThree].elementId = thirdImgEl.id;
}
///NEXT STEP:  when I click on an image, it needs to regenerate 3 different images
//read chapter Events in the Jon Duckett textbook page 263 EVENT LISTENER WITH PARAMETERS

var show = 0;
var click = 0;
var allSelectedImages = [];



function handleClick(event) {
  if (click > 24){
    return;
  }
  click++;
  /*event.preventDefault();*/
  ///target is the html element
  ///get the id of what I just clicked
  var selectedImageId = event.target.id;
  console.log(selectedImageId);

  for(var i = 0; i < names.length; i++){
    if(names[i].elementId === selectedImageId){
       names[i].clicked++;

    }
    console.log(names[i]);
    names[i].elementId = '';
  }

  console.log('This is what I clicked. The selectedImageId is ' + selectedImageId);

  threeDifferentRandomNumbers();

  printSelections();
}

threeDifferentRandomNumbers();

firstImgEl.addEventListener('click', handleClick, false);
secondImgEl.addEventListener('click', handleClick, false);
thirdImgEl.addEventListener('click', handleClick, false);



function printSelections(){
  var ulEl = document.getElementById('generated-list');
  ulEl.textContent= '';

  var liEl = document.createElement('li');
  liEl.textContent = names.clicked;
  ulEl.appendChild(liEl);

  for(var i = 0; i < names.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = names[i].clicked;
    ulEl.appendChild(liEl);

    var results = names[i].clicked + ' votes for ' + names[i].name;
    console.log(results);
  }
}


///NEXT STEP:
