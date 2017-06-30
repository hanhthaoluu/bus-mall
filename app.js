'use strict';

var user = prompt('Hello there! What is your name?');
var takeSurvey = alert ('HELLO ' + user + '! Since you are stuck on this bus for another hour anyway, this catalog will definitely entertain you! Innovative products that will blow you away! You will be the first to see them. Take this interesting BUS-MALL SURVEY. It only takes few minutes to complete. Are you ready to take the survey?'
);

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

//declare images
var images;

if (localStorage.images) {
  var stringifiedData = localStorage.images;
  console.log('There are stored data ' + stringifiedData);

  images = JSON.parse(stringifiedData);


} else {
  //store all images objects in an array labeled as "images"
  images = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

  console.log('There are no data stored in localStorage. Got into the else statement');

}

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
function threeDifferentRandomNumbers(){

  var randomNumberOne = randomIndex();

  var randomNumberTwo = randomIndex();
  var randomNumberThree = randomIndex();
///make sure the 3 generated numbers are not the same bc I want 3 different images side by side
///while any number of the 3 generated number is equal to each other, I need to regenerate all 3 random numbers to get new random numbers
  while ((randomNumberOne == randomNumberTwo)|| (randomNumberOne == randomNumberThree) || (randomNumberTwo == randomNumberThree)){
    randomNumberOne = randomIndex();
    randomNumberTwo = randomIndex();
    randomNumberThree = randomIndex();

    console.log(randomNumberOne, randomNumberTwo, randomNumberThree);
  }

  return ([randomNumberOne, randomNumberTwo, randomNumberThree]);
  //return this array
}

///test my dynamic image source with random index
///think of ImgEl as a picture frame. Currently there are 3 empty picture frames. Every round I take 3 pictures out and insert 3 new pictures in. Which pictures get inserted is determined by randomization/randomIndex

function displayThreeImages(randomNumbers){
  console.log('randomNumbers zero index is ' + randomNumbers[0]);
  console.log('images[randomNumbers[0]] ' + images[randomNumbers[0]]);
  console.log('images are ' + images);
  firstImgEl.src=images[randomNumbers[0]].path;
  //the SOURCE of an image is the PATH to that image
  images[randomNumbers[0]].shown++;
  ///everytime an image is shown, mark it as being shown with ++; ++ means incrementing with 1 check
  images[randomNumbers[0]].elementId = firstImgEl.id;
  ///this randomized

  secondImgEl.src = images[randomNumbers[1]].path;
  images[randomNumbers[1]].shown++;
  images[randomNumbers[1]].elementId = secondImgEl.id;

  thirdImgEl.src = images[randomNumbers[2]].path;
  images[randomNumbers[2]].shown++;
  images[randomNumbers[2]].elementId = thirdImgEl.id;
}

//read chapter Events in the Jon Duckett textbook

//According to the design of the research, the user is to click 25 times. So I need to keep track the number of clicks by declaring the var click.
//At the beginning, the user has not clicked on any images yet, so var click = 0.
var click = 0;
if (localStorage.numberOfClicks){
  click = JSON.parse(localStorage.numberOfClicks);
}
//when the user makes the first click (click is the set event) then the handleClick function is triggered or called.
function handleClick(event) {

    //as soon as the user clicks, keep track of the number of click right away by incrementing with click++
  click++;
  console.log('I have clicked ' + click + 'times.');
    //when the user makes the 26th click, no more images will be shown, halting the handleClick function
    //it's 24 instead of 25 because the initial click, which is the EVENT that triggers the handleClick function, was not part of or was not inside of the handleClick function
  if (click > 25){
    alert('You are done with this survey. Click "ok". Then scroll down to see the complete list of products and your votes for each product. Thank you for completing this survey! Have a nice day!')
    //return; this command ends the handleClick function.
    printSelections();
    return;
  }

  saveStatsToLocalStorage(images, click);
  console.log('Saved into localStorage ' + saveStatsToLocalStorage);
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

///NEXT STEP:  when I click on an image, it needs to regenerate 3 different images. So I need to get 3 new different random numbers.
  var newRandomNumbers = threeDifferentRandomNumbers();
//////old random numbers(imageIndexesToDisplay) CANNOT equal to the new random numbers(newRandomNumbers) SO DO THIS WHILE LOOP. So if they are equal then regenerate to get newRandomNumbers
  while( (newRandomNumbers[0]===imageIndexesToDisplay[0]) || (newRandomNumbers[0]===imageIndexesToDisplay[1]) || (newRandomNumbers[0]===imageIndexesToDisplay[2]) || (newRandomNumbers[1]===imageIndexesToDisplay[0])  || (newRandomNumbers[1]===imageIndexesToDisplay[1]) || (newRandomNumbers[1]===imageIndexesToDisplay[2]) ||
  (newRandomNumbers[2]===imageIndexesToDisplay[0]) || (newRandomNumbers[2]===imageIndexesToDisplay[1]) || (newRandomNumbers[2]===imageIndexesToDisplay[2]) ) {
    newRandomNumbers = threeDifferentRandomNumbers();
  }
/////to update/replace the old random numbers(imageIndexesToDisplay) set imageIndexesToDisplay = newRandomNumbers
  imageIndexesToDisplay = newRandomNumbers;/////this step is extremely important. I need to update the 3 newRandomNumbers to display new images so that
  displayThreeImages(imageIndexesToDisplay);
}


//////don't change the var name of imageIndexesToDisplay!!!!!!!!!
//////don't change these 2 lines of codes below (var imageIndexesToDisplay = threeDifferentRandomNumbers(); displayThreeImages(imageIndexesToDisplay);) because I need to keep track of them as generating the old random numbers.  I need to compare these old random numbers to new random numbers to make sure they are not equal to each other
////these three random images are being displayed before the user clicks on any one image to trigger the handleClick function


var imageIndexesToDisplay = threeDifferentRandomNumbers();
displayThreeImages(imageIndexesToDisplay);

firstImgEl.addEventListener('click', handleClick, false);
secondImgEl.addEventListener('click', handleClick, false);
thirdImgEl.addEventListener('click', handleClick, false);

///this printSelections function is ONLY being called after the user made 25 clicks and is called inside the handleClick function
function printSelections(){
  var ulEl = document.getElementById('generated-list');
  ulEl.textContent= '';

  var liEl = document.createElement('li');
  liEl.textContent = images.clicked;
  ulEl.appendChild(liEl);

  //BAR GRAPH FOR THE VOTES
  document.getElementById('votes-bar-graph').width = 50;

  var context = document.getElementById('votes-bar-graph').getContext('2d');

  var dataSet = [];
  var itemNames = [];
  var chartColors= ['blue', 'yellow', 'silver', 'brown', 'red', 'pink', 'black', 'orange', 'yellow', 'red', 'green', 'indigo', 'blue', 'white', 'indigo', 'red', 'orange', 'green', 'yellow', 'pink'];


  for(var i = 0; i < images.length; i++){

    var percentage = 'not shown yet';

      if (images[i].shown !== 0){
        percentage = Math.ceil((images[i].clicked/images[i].shown)*100) + '%';
      }

    var percentageItemClicked = ' The percentage of times that an item was clicked when it was shown: ' + percentage;

    var results = images[i].clicked + ' votes for ' + images[i].name + '.' + percentageItemClicked + '.';
    console.log(results);

    var liEl = document.createElement('li');
    liEl.textContent = results;
    ulEl.appendChild(liEl);

    //for the BAR GRAPH save the images.clicked into a variable named votes then push the variable votes into the dataSet array
    var votes = images[i].clicked;
    dataSet.push(votes);
    //FOR THE BAR GRAPH save the images[i].name into a variable called product then push the product into the var itemNames in the chart constructor below
    var product = images[i].name;
    itemNames.push(product);
  }


  var votesBarGraph = new Chart(context, {
    type: 'bar',
    data: {
      labels: itemNames,
      datasets: [{
        label: '# of Votes',
        data: dataSet,
        backgroundColor: chartColors
      }]
     },
     options:{
       scales: {
         yAxes: [{
           ticks:{
             beginAtZero: true
           }
         }]
       }
     }
  });

}

//javascript object notation
//JSON.parse() can parse any objects, not just object literal
//local storage is an empty object. It can only store strings.
//local storage is unique to each page

//Function saves stats to the local storage
// there are two inputs or parameters:
// stats - this is my image data.  Its an array of Image objects
// rounds - this is the number of clicks.  It is an integer

//saveStatestoLocalStorage(stats=images, rounds=click)

function saveStatsToLocalStorage(stats, rounds){
  var statsString = JSON.stringify(stats);
  var clicks = JSON.stringify(rounds);
  console.log('This is where I left off ' + statsString);
  //save the stringified version of the stat array as clicks
  localStorage.images = statsString;
  localStorage.numberOfClicks = clicks;
}
