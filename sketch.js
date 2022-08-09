const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var bola, quadra, bolaImg;
var ground;
var jogador1;
var jogador;
var bola;
var cesta;
var tabela;
var corda;

function preload(){
  quadra = loadImage("assets/quadra.jpeg");
  bolaImg = loadImage("assets/bola.png");
  jogador = loadImage("assets/um.png");

  
}

function setup() {
  
  createCanvas(1000, 640);

  engine = Engine.create()
  world = World.create()

 
 ground = Bodies.rectangle(500, 500, 1000, 1, {isStatic: true});
 World.add(world, ground);

 cesta = Bodies.rectangle(915, 245, 50, 55, {isStatic: true});
 World.add(world, cesta);

bola = Bodies.circle(490, 250, 25, {restitution: 0.8});
World.add(world, bola);

jogador1 = createSprite(500, 400);
jogador1.addImage(jogador);
jogador1.scale = 0.4;

corda = new Corda(this.bola, {x: 490, y: 250});

}

function draw() {
  background(quadra); 

Engine.update(engine);



drawSprites();

corda.mostrar();

imageMode(CENTER);
image(bolaImg, bola.position.x, bola.position.y, 50, 50);
}

function mouseDragged() {
Matter.Body.setPosition(this.bola,{x: mouseX, y: mouseY})
}

function mouseReleased() {
  corda.lancar()
}



