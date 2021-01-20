class Ground{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction:0.3
      }
      
      
      this.body = Bodies.rectangle(500,630,1000,20,options);
      World.add(world, this.body);
    }
    display(){
    
      rectMode(CENTER);
      fill("brown");
      rect(500,630,1000,20);
    }
  };