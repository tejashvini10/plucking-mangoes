class Mango{
constructor(x,y,diameter){
    var options={
        isStatic:true,
        restitution:0.5,
        friction:1

    }
    this.body=Bodies.circle(x,y,diameter,options);
    
    thisdiameter=diameter;
    this.image=loadImage("mango.png");
    
    World.add(world,this.body);
}
display()
{
    
    var mangopos=this.body.position;
    push();
    translate(mangopos.x,mangopos.y);
    
     imageMode(CENTER);
    image(this.image,0,0,this.diameter);
     pop();

}

}
