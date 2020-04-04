class ConstraintLog{
    constructor(body1,body2){
var options = {
bodyA:body1,
bodyB:body2,
stiffness:0.04,
length:10
    }
    this.qwerty=constraint.create(options)
    World.add(world,this.qwerty)
    
}
display(){
    line(this.qwerty.bodyA.position.x,this.qwerty.bodyA.position.y,this.qwerty.bodyB.position.x,this.qwerty.bodyB.position.y)
} 
   }