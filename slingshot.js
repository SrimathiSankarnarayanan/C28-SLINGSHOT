class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null; // to detach bird from the constraint
    }


    display(){
        // null check - which means this.sling.bodyA is not null.
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
        
    }
    
}