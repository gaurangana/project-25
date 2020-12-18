class Dustbin{
    constructor(x,y,w,h){
     
     var option = {
        isStatic: true ,
         friction: 0.7 ,
         density: 0.6
   
     }
   
     //this.image = loadImage("sprites/dustbingreen.png")
      this.wall =   Bodies.rectangle(x,y,w,h,option)
      this.width = w;
      this.height= h;
       World.add(myworld,this.wall)
    }
   
    display (){
        var p = this.wall.position
        var angle = this.wall.angle
        push()
        translate(p.x, p.y)
        angleMode(RADIANS)
        rotate(angle)
        imageMode(CENTER)
        fill(255)
        //image(this.image,0,0 , this.width,this.height);
        pop()
    }
   }