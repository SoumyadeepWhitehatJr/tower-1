class Ground1{

    constructor(x,y,width,height){
    var options={
    isStatic:false
    
    
    }
    this.x=x
    this.y=y
    this.height=height
    this.width=width
    this.body=Bodies.rectangle(x,y,width,height,options)
    
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
    fill("red")
    
    }
    
    
    
    }