const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var brick, ground;

function setup(){
    canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    var brick_options={     //properties for brick
        restitution: 1
    }
    var ground_options={    //properties for ground
        isStatic: true
    }
    
    brick = Bodies.rectangle(300,300,120,60, brick_options);
    ground = Bodies.rectangle(300,590,600,20,ground_options);
    Composite.add(world, [brick,ground]);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(brick.position.x, brick.position.y, 120, 60);
    fill("green");
    rect(ground.position.x, ground.position.y, 600, 20);
}