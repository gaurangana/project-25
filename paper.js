class Paper{
    constructor(x,y){
      
     var option = {
         restitution: 1,
         friction: 0.5 ,
         density: 1.2
   
     }
     this.image = loadImage("sprites/paper.png")
     this.body =   Bodies.circle(x,y,30,option)
     this.radius = 70;
     
    
       World.add(myworld,this.body)
    }
   
    display (){
        var p = this.body.position
        var angle = this.body.angle
        push()
        translate(p.x, p.y)
        angleMode(RADIANS)
        rotate(angle)
        imageMode(CENTER)
       
        image(this.image,0,0 , this.radius, this.radius);
        //p.x = mouseX
      //  p.y = mouseY
        pop()
    }
   }