class Stone{
    constructor(x,y){
    var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.x=x;
    this.y=y;
    
    this.body=Bodies.rectangle(x,y,options)
    World.add(world, this.body)
    this.image=loadImage("images/stone.png");
    
    }
   
    display(){
		var angle=this.body.angle;
        
		push()
		rectMode(CENTER);
		rotate(angle)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, this.x,this.y,45,45)
		pop()
    }
}