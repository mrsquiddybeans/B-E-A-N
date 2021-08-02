var ISSImg, SPACE, Bean1,Bean2,Bean3,Bean4
var Iss, Bean, Dock=false
function preload(){
  ISSImg=loadImage("iss.png")
  SPACE=loadImage("spacebg.jpg")
  Bean1=loadImage("spacecraft1.png")
  Bean2=loadImage("spacecraft2.png")
  Bean3=loadImage("spacecraft3.png")
  Bean4=loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(800,400);
  Bean=createSprite(285, 240);
  Bean.addImage(Bean1)
  Bean.scale=0.15
  Iss=createSprite(330, 130);
  Iss.addImage(ISSImg)
  Iss.scale=0.65
}

function draw() {
  background(SPACE);  
  if (!Dock){
    Bean.x=Bean.x+random(-1,1)
    if(keyDown(UP_ARROW)){
      Bean.y=Bean.y-1
      Bean.addImage(Bean2)
    }
    if(keyDown(DOWN_ARROW)){
      text(" ( ͡° ͜ʖ ͡°)",200,300)
    }
    if(keyDown(LEFT_ARROW)){
      Bean.y=Bean.x-1
      Bean.addImage(Bean4)
    }
    if(keyDown(RIGHT_ARROW)){
      Bean.y=Bean.x+1
      Bean.addImage(Bean3)
    }
      
  }
  if(Bean.y<=(Iss.y+70)&Bean.x<=(Iss.x-10)){
  Dock=true
  textSize(25)
  fill("White")
  text("BEAN",200,300)
}
  drawSprites();
}