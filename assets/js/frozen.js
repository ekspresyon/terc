function Bubble2(tempX, tempY) {

  let mvmt = 2
  let xc = constrain(this.x, mvmt, mvmt);
  let yc = constrain(this.y, mvmt, mvmt);
  this.x = tempX;
  this.y = tempY;
  this.r = 10;
  //this.col = color(255);


  this.display = function() {

    stroke(255);
    //fill(this.col, 100);
    ellipse(xc, yc, this.r * 2, this.r * 2);
    //console.log(xc)

  }

  this.update = function() {
    this.x -= random(-1, 1);
    this.y -= random(-1, 1);
 
  }
} 

var bubbles2 = [];

function setup() {
  createCanvas(400, 400);
    //there's a "b" for every "a"
  for (var a = 10; a < width; a += 27) {
    for (var b = 10; b < height; b += 27) {
      //add the circles to the array at x = a and y = b
      bubbles2.push(new Bubble2(a, b));
    }
  }

}

function draw() {
  background(0);

  for (var b = 0; b < bubbles2.length; b++) {

    bubbles2[b].update();
    bubbles2[b].display();

    }
}

// var circles = [];

// function setup() {
//   createCanvas(300, 300);
//   //there's a "b" for every "a"
//   for (var a = 10; a < width; a += 27) {
//     for (var b = 10; b < height; b += 27) {
//       //add the circles to the array at x = a and y = b
//       circles.push(new Bubble2(a, b));
//     }
//   }
//   console.log(circles.length);

// }

// function draw() {
//   background(50);
//   for (var b = 0; b < circles.length; b++) {
//     circles[b].show();
//   }
// }

// function Circle(x, y) {
//   this.x = x;
//   this.y = y;

//   this.show = function() {
//     fill(255);
//     noStroke();
//     ellipse(this.x, this.y, 20, 20);
// }}