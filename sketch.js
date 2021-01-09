const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;





function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(400,650,800,20,options);
  World.add(world,ground);

  var ball1 = {
    restitution: 1.0
  }

  ball = Bodies.circle(400,350,20,ball1);
  World.add(world,ball);

}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);

  ellipse(ball.position.x,ball.position.y,20,20);


}