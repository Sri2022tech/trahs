class Trashcan {
    constructor(x, y) {
      var options = {
          isStatic:true
      }
      this.width = 200;
      this.height = 100;
      this.thickness = 20;
      this.x = x
      this.y = y
      this.angle=0;
      this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
      this.leftBody = Bodies.rectangle(this.x-100, this.y-50, this.thickness, this.height,options)
      Matter.Body.setAngle(this.leftBody, this.angle)
      this.rightBody = Bodies.rectangle(this.x+100,this.y-50, this.thickness, this.height,options)
      Matter.Body.setAngle(this.rightBody, -1*this.angle)
      this.image = loadImage("trashcan.png")
      
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
    }
    display(){
      var posBottom = this.bottomBody.position;
      var posLeft = this.leftBody.position;
      var posRight = this.rightBody.position;
      
      push();
      translate(posLeft.x,posLeft.y);
      rotate(this.angle);
      rectMode(CENTER);
      fill(255);
      rect(0,0,this.thickness,this.height);
      pop();

      push();
      translate(posRight.x,posRight.y);
      rotate(-1*this.angle);
      rectMode(CENTER);
      fill(255);
      rect(0,0,this.thickness,this.height);
      pop();

      push();
      translate(posBottom.x,posBottom.y);
      rectMode(CENTER);
      fill(255);
      rect(0,0,this.width,this.thickness);
      pop();

      //image(this.image, 0, 0, this.width, this.height);
      rect(0,0,this.width,this.thickness);
      pop();
    }
  }