img = "";
status="";
function preload(){
  img =  loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
    object_detector.detect(img,gotResults);
}
function draw(){
    image(img,0,0,640,420);
   fill("red");
   text("dog",25,75);
   noFill();
   stroke("red");
   rect(30,60,500,350);

   fill("red");
   text("cat",350,75)
   noFill();
   stroke("red");
   rect(300,50,280,350);
}

function modelLoaded(){
console.log("MODEL LOADED");
}

function gotResults(error,results){
  if(error){
      console.error(error);
  }
  else{
    console.log("         results                " ,results);
  }
  
}