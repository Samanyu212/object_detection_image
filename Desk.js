img="";
Status="";
object=[];
function preload(){
img=loadImage("Desk.jpg")
}

function setup(){
canvas=createCanvas(640,420)
canvas.center();
objectDetector=ml5.objectDetector("cocoSSD",modelLoaded)
}

function draw(){
image(img,0,0,540,320);
if( Status!=""){
    for(var i=0; i<object.length;i++){
        fill("red");
        stroke("yellow");
        text(object[i].label,object[i].x,object[i].y);
        noFill();
        rect(object[i].x, object[i].y, object[i].width, object[i].height-75);
        document.getElementById("status").innerHTML="object detected"; 
    }
    }


}

function modelLoaded(){
    console.log("model is loaded");
    Status=true;
    objectDetector.detect(img,getResults);
}

function getResults(error,results){
    if(error){
        console.log(error);

        
    }
    else{
        console.log(results);
        object=results
    }
}