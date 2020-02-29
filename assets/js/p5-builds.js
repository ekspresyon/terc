var xyrand = ''

class Bubble {
	
  constructor(x, y, rad, col, xyrand) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(xyrand, 1);
    this.ySpeed = random(xyrand, 1);
    this.rad = rad;
    this.col = col;
    this.switched = false;

  }
  move() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }
  display() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.rad * 2, this.rad * 2);
  }
  bounce() {
    if (this.x <= 0 || this.x >= width) {
      this.xSpeed = this.xSpeed * -1;
    }
    if (this.y <= 0 || this.y >= height) {
      this.ySpeed = this.ySpeed * -1;
    }

  }
  grow() {
    if (this.x <= 500 && this.rad < 5) {
      this.rad++;
    }
  }
  shrink() {
    if (this.y <= 200 || this.y >= 400) {
      this.rad--;
    }
  }
  changeColor() {
    if (this.switched) {
      this.col = color(255, 255, 255);
    } else {
      this.col = color(255, 0, 0);
    }
  }

  changeDirection() {
    this.xSpeed = this.xSpeed * -1;
    this.ySpeed = this.ySpeed * -1;
  }
  //the 'intersects' function has a parameter of other.  It compares the distance
  //of 'this' bubble with another bubble where the x/y is being passed in
  intersects(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    if (distance <= this.rad + other.rad) {

      return true;
    } else {
      return false;
    }

  }
}


let bubbles = [];
var bubbleColr = parseInt('243, 78, 84')
let air = []
var airnmbr = 0
var aircolor = parseInt('203, 7, 64')

function setup(airnmbr,aircolor,bubbleColr, xyrand) {

  let partcanvas = createCanvas(250, 250);
  partcanvas.parent('50degcanvas')
  
  for (let i = 0; i < 200; i++) {
    bubbles[i] = new Bubble(random(width), random(height), 10, color(243, 78, 84));
  }
  // for (let j = 0; j < 3; j++) {
  //   air[j] = new Bubble(random(width), random(height), 10, color(aircolor));
  // }

}

function draw(xyrand) {
  background(255);
  console.log(xyrand)
  //outer loop sets rules for initial balls
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
    bubbles[i].bounce();

  }
  for (let j = 0; j < air.length; j++) {
    air[j].move();
    air[j].display();
    air[j].bounce();
  }
}