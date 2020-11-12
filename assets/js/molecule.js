class molecule{
  
  constructor(){
    this.x = random(10,240)
    this.y = random(10,240)
    this.d = 20
    this.s = s
    //console.log(this.s)
    this.speed_x = random(-this.s,this.s)
    this.speed_y = random(-this.s,this.s)
    this.w = width - 10
    this.h = height - 10
  }
  
  aspect(r,g,b){
    fill(r,g,b)
    noStroke()
    circle(this.x, this.y, this.d)
  }
  
  // Make the ball travel
  move() {
      this.x += this.speed_x
      this.y += this.speed_y  
  }
  
  // Make the ball bounce against the walls
  bounce() {
    if (this.x > this.w || this.x < 10) {
      this.speed_x = this.speed_x * -1
    }
    if (this.y > this.h || this.y < 10) {
      this.speed_y = this.speed_y * -1
    }  
  }
}