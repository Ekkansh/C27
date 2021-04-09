class Chain {
    constructor(body1, body2){
        var op ={
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.05,
            length: 10,
        }
        this.chain = Matter.Constraint.create(op);
        World.add(world, this.chain);
    }
    display(){
        var point1= this.chain.bodyA.position;
        var point2= this.chain.bodyB.position;
        line(point1.x, point1.y, point2.x, point2.y);
    }
}