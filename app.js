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
