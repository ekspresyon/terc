// Settings
// What size should the frame be?
const frame_height = 250
const frame_width = 250

// Howmany molecules do you wnat to see?
const water_molecules = 60 // water
const air_molecules = 0 // air

// How big should a molecule be?
const diameter = 20

// Variables
var separation = 30
var wmolnum = water_molecules
var amolnum = air_molecules
var ae = document.getElementById("molcolsel")


var spd = {}
var s = '' // all it needed was the '' marks... Why the fk?
var bnc


var molecules_w = []
var molecules_a = []

function wmolamp(){
  amplitude = temprect.getAttribute("height")
  switch (amplitude){
    case '513':
      s = 0
      bnc = false
      break
    case '293':
      if(chkair == true){
        s = 1.5
        bnc = false
      }else{
        s = 1.5
        bnc = true
      }
      break
    case '218':
      if(chkair == true){
        s = 3
        bnc = false
      }else{
        s = 2
        bnc = true
      }
      break
    case '143':
      s = 2.5
      bnc = true
      break
    case '107':
      s = 3.5
      bnc = true
      break
    case '54':
      s = 6
      bnc = true
      break
  }
}
  
function checkspeed() {
  if (spd.old == s) {
    return

  } else {
    spd.old = s
    refill() // Replenish arrays with new speed value      
  }
}

// Get and display molecule colors on change
function updatecolors() {

  var we = document.getElementById("molcol");
  var wresult = we.options[we.selectedIndex].value;

  switch (wresult) {
    case '1':
      wr = 255
      wg = 0
      wb = 0
      break
    case '2':
      wr = 245
      wg = 121
      wb = 10
      break
    case '3':
      wr = 205
      wg = 0
      wb = 116
      break
  }

  
  if (ae != null){
  var aresult = ae.options[ae.selectedIndex].value;

  switch (aresult) {
    case '1':
      ar = 0
      ag = 238
      ab = 0
      break
    case '2':
      ar = 0
      ag = 0
      ab = 0
      break
    case '3':
      ar = 170
      ag = 120
      ab = 56
      break
  }
}else{
  return
}

}

// draw all the molecules
function drawWaters() {
  for (let i of molecules_w) {
    i.aspect(wr, wg, wb)
    i.move()
    i.bounce()
  }
}

function drawAirs() {
  
  if(ae == null || chkair == true){ 
    console.log("no air!")
    return
  }
  else{
    for (let j of molecules_a) {
      j.aspect(ar, ag, ab)
      j.move()
      j.bounce()
    }
  }
}

function refill() {
  if (chkair == true) {
    wmolnum = water_molecules
    amolnum = air_molecules
  }
  molecules_w = [] // Clear water molecule array
  molecules_a = [] // Clear air molecule array
  for (wm = 0; wm < wmolnum; wm++) {
    molecules_w[wm] = new molecule()
  }
  for (am = 0; am < amolnum; am++) {
    molecules_a[am] = new molecule()
  }
  console.log("Refill complete")
}

function drawmolecules() {
  if (bnc != true) { 
    for (y = random(-s, s); y <= height; y += separation) {
      for (x = random(-s, s); x <= width; x += separation) {
        fill(wr, wg, wb)
        noStroke()
        circle(x, y, diameter)
      }
    }
  } else {
    drawAirs()
    drawWaters()
  }
}

// Runs only once on load
function setup() {
  let partcanvas = createCanvas(frame_width, frame_height);
  partcanvas.parent('degcanvas')
  checkspeed()
  refill()
}

function draw() {
  background(220);
  wmolamp()
  checkspeed()
  updatecolors()
  drawmolecules()
}