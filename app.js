'use strict';

var firstImgEl = document.getElementsByClassName('first-image')[0];
var secondImgEl = document.getElementsByClassName('second-image')[0];
var thirdImgEl = document.getElementsByClassName('third-image')[0];

function Image(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
}

var images = {
  new Image();
  new Image();
}

var bag = new Image('bag', './assets/bag.jpg');
var banana = new Image('banana', './assets/banana.jpg');
var bathroom = new Image('bathroom', './assets/bathroom.jpg');
var boots = new Image('boots', './assets/boots.jpg');
var breakfast = new Image('breakfast', './assets/breakfast.jpg');
var bubblegum = new Image('bubblegum', './assets/bubblegum.jpg');
var chair = new Image('chair', './assets/chair.jpg');
var cthulhu = new Image('cthulhu', './assets/cthulhu.jpg');
var dog-duck = new Image('dog-duck', './assets/dog-duck.jpg');
var dragon = new Image('dragon', './dragon.jpg');
var pen = new Image('pen', './pen.jpg');
var pet-sweep = new Image('pet-sweep', './pet-sweep.jpg');
var scissors = new Image('scissors', './scissors.jpg');
var shark = new Image('shark', './shark.jpg');
var sweep = new Image('sweep', './sweep.png');
var tauntaun = new Image('tauntaun', './tauntaun.jpg');
var unicorn = new Image('unicorn', './unicorn.jpg');
var usb = new Image('usb', './usb.gif');
var water-can = new Image('water-can', './water-can.jpg');
var wine-glass = new Image('wine-glass', './wine-glass.jpg');
