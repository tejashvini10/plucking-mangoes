class Tree{
    constructor(x,y){
        
        this.x=x;
        this.y=y;
       this.width=450;
       this.height=600;
       this.thickness=10;
        this.image=loadImage("sprites/tree.png");
        
        World.add(world,this.body);
    }
    display(){

    
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y);
    
    fill(255,0,255);
     imageMode(CENTER);
     
    
     pop();

}
    }