//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
	dog.loadImage(images/dogImg1);
}

function setup() {
	createCanvas(500, 500);
  dog.creatSprite(250,250,20,20);
  dog.addImage=(images/dogImg1);

  foodStock=database.ref('Food');
  foodStock=on("value",readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here
textSize(25);
fill();
stroke();

}


function readStock(data){
  foodS=data.val();
}


function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}