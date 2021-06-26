class Chain {
    constructor(bodyA, pointB) {

        let options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.0,
            length:1.0
        }

        this.bodyA = bodyA;
        this.pointB = pointB;

        this.body = Constraint.create(options);
        World.add(world, this.body);

    }

    display() {

        let posA = this.body.bodyA.position;
        let posB = this.pointB;

        line(posA.x, posA.y, posB.x, posB.y);

    }
}