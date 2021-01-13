var canvas;
var music;
var surface,surface2,surface3,surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   

    //create 4 different surfaces
    surface = createSprite(200,550,70,10);
    surface.shapeColor="red"
    surface2 = createSprite(300,550,70,10);
    surface2.shapeColor="blue"
    surface3= createSprite(400,550,70,10);
    surface3.shapeColor="pink"
    surface4 = createSprite(500,550,70,10);
    surface4.shapeColor="yellow"

    //create box sprite and give velocity
    box  =createSprite(400,300,50,50);
    box.shapeColor="blue"
    box.velocityY=5;
    box.velocityX=5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges=createEdgeSprites();
  box.bounceOff(edges);
   
    if( isTouching(box,surface)){
        surface2.shapeColor = "red";
        surface3.shapeColor = "red";
        surface4.shapeColor = "red";
        box.velocityY=0;
        box.velocityX=0;
        
    }
    if( isTouching(box,surface2)){
        surface.shapeColor = "blue";
        surface3.shapeColor = "blue";
        surface4.shapeColor = "blue";
        box.velocityY=0;
        box.velocityX=0;
    }
    if( isTouching(box,surface3)){
        surface2.shapeColor = "pink";
        surface.shapeColor = "pink";
        surface4.shapeColor = "pink";
        box.velocityY=0;
        box.velocityX=0;
    }
    if( isTouching(box,surface4)){
        surface2.shapeColor = "yellow";
        surface3.shapeColor = "yellow";
        surface.shapeColor = "yellow";
        box.velocityY=0;
        box.velocityX=0;
    }




    //add condition to check if box touching surface and make it box
    function isTouching(a,b){
        if (a.x - b.x < b.width/2 + a.width/2
          && b.x - a.x < b.width/2 + a.width/2
          && a.y - b.y < b.height/2 + a.height/2
          && b.y - a.y < b.height/2 + a.height/2) {
       return true;
      }
      else {
       return false;
      }
      }












drawSprites()

}
