class Bob {
    constructor(x, y, radius){
        let options = {
            restitution:0.3,
            friction:0,
            density:1.2,
            isStatic:true
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);

    }
    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        fill("pink");
        circle(0, 0, this.radius);
        pop();

    }
}