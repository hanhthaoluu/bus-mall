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

//store all images in an array labeled as "images"
var images = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

/*////with trials and errors this is how I manage to change the source of an image
//I googled how to change the source of an image using js and I found something similar like this
firstImgEl.src='./assets/dragon.jpg';
//I need to console.log firstImgEl to test my code, to make sure the path is correct and the image is correct
console.log(firstImgEl);
//this code works, now I don't want to type out the path again.  I can just use the .path property from the Image constructor
/*firstImgEl.src=dragon.path;
//now I need to make the image source/path dynamic by using the array called "images"
firstImgEl.src=images[9].path;
//now I need to randomize the index by generating a random number
*/


///I need to generate 3 different random numbers between and including 0 and 20 for the zero indexed array called images;
//FRIST: GENERATE A RANDOM NUMBER FUNCTION
function randomIndex () {
  return Math.floor((Math.random() * 20));
}
///now generate AND store 3 random numbers into 3 different variables
///now I need to make sure the 3 generated numbers are not the same bc I want 3 different images side by side
///while any number of the 3 generated number is equal to each other, I need to regenerate all 3 random numbers to get new random numbers
function threeDifferentRandomNumbers(){

  var randomNumberOne = randomIndex();
  var randomNumberTwo = randomIndex();
  var randomNumberThree = randomIndex();
///make sure the 3 generated numbers are not the same bc I want 3 different images side by side
  while ((randomNumberOne == randomNumberTwo)|| (randomNumberOne == randomNumberThree) || (randomNumberTwo == randomNumberThree)){
  randomNumberOne = randomIndex();
  randomNumberTwo = randomIndex();
  randomNumberThree = randomIndex();
  }
///test my dynamic image source with random index
///think of ImgEl as a picture frame. Currently there are 3 empty picture frames. Every round I take 3 pictures out and insert 3 new pictures in. Which pictures get inserted is determined by randomization/randomIndex
firstImgEl.src=images[randomNumberOne].path;
//the SOURCE of an image is the PATH to that image
images[randomNumberOne].shown++;
///everytime an image is shown, mark it as being shown with ++; ++ means incrementing with 1 check
images[randomNumberOne].elementId = firstImgEl.id;
///this randomized

secondImgEl.src = images[randomNumberTwo].path;
images[randomNumberTwo].shown++;
images[randomNumberTwo].elementId = secondImgEl.id;

thirdImgEl.src = images[randomNumberThree].path;
images[randomNumberThree].shown++;
images[randomNumberThree].elementId = thirdImgEl.id;

}
///NEXT STEP:  when I click on an image, it needs to regenerate 3 different images
//read chapter Events in the Jon Duckett textbook

//According to the design of the research, the user is to click 25 times. So I need to keep track the number of clicks by declaring the var click.
//At the beginning, the user has not clicked on any images yet, so var click = 0.
var click = 0;
//when the user makes the first click (click is the set event) then the handleClick function is triggered or called.
function handleClick(event) {
    //when the user makes the 26th click, no more images will be shown, halting the handleClick function
    //it's 24 instead of 25 because the initial click, which is the EVENT that triggers the handleClick function, was not part of or was not inside of the handleClick function
  if (click > 24){
    //return; this command ends the handleClick function.
    return;
  }
  //as soon as the user clicks, keep track of the number of click right away by incrementing with click++
  click++;
  ///target is the html element
  ///get the id of what I just clicked
  var selectedImageId = event.target.id;
  console.log(selectedImageId);

  for(var i = 0; i < images.length; i++){
    if(images[i].elementId === selectedImageId){
      //if the id of the selectedImageId, the image that the user just selected, matches the id of the images array, then mark the image in the array as being clicked with clicked++, clicked ++ means incrementing by 1 check for the property of .clicked in the constructor
       images[i].clicked++;
    }

    console.log(images[i]);
    images[i].elementId = '';
    ///let's say images[randomNumberThree].elementId = (is currently equal to) thirdImgEl.id;
    //the empty string is to take out the current picture off the picture frame/wiping out the current 3 pictures, so the new 3 pictures can be placed into the picture frames; placing the old picture back into the array pool
  }

  console.log('This is what I clicked. The selectedImageId is ' + selectedImageId);
///console.log this step is very important to make sure the codes are doing what you want
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
  liEl.textContent = images.clicked;
  ulEl.appendChild(liEl);

  for(var i = 0; i < images.length; i++){

    var liEl = document.createElement('li');
    liEl.textContent = results;
    ulEl.appendChild(liEl);



    var percentage = 0;

      if (images[i].shown !== 0){
        percentage = Math.ceil((images[i].clicked/images[i].shown)*100);
      }

    var percentageItemClicked = ' The percentage of times that an item was clicked when it was shown: ' + percentage + '%';

    var results = images[i].clicked + ' votes for ' + images[i].name + '.' + percentageItemClicked + '.';
    console.log(results);
  }



}




///NEXT STEP:
