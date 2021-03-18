const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var Thunder;
var thunderCreatedFrame = 0;

function setup()
{
   var canvas = createCanvas(500,700);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   for(var i = 0; i < maxDrops; i++)
   {
      drops.push(new Drops(random(0,500),random(0,500)));
   }
}

function draw()
{
   Engine.update(engine);
   background('black');

   rand = Math.round(random(1,4));
   if(frameCount%80 === 0)
   {
      thunderCreatedFrame = frameCount;
      Thunder = createSprite(random(10,370),random(10,30),10,10);
      Thunder.scale = 0.7;
   }

   if(thunderCreatedFrame + 10 === frameCount && Thunder)
   {
       Thunder.destroy();
   }
   umbrella.display();

   for(var i = 0; i<maxDrops; i++)
   {
      drops[i].display();
      drops[i].update();
   }
   drawSprites();
}   

