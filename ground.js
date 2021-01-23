class Ground{
    constructor() {
      var options = {
          isStatic: true,
          friction:0.3
      }
      
      
      this.body = Bodies.rectangle(500,900,1000,20,options);
      World.add(world, this.body);
    }
    display(){
    
      rectMode(CENTER);
      fill("brown");
      rect(500,900,1000,20);
    }
  };
