noseX = 0;
noseY = 0;
difference = 0;
leftwristX = 0;
rightwristX = 0;

function setup() {
    canvas = createCanvas(550,550);
    canvas.position(600,150);
    video = createCapture(VIDEO);
    video.size(500,500);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function draw() {
    background("darkblue");
    document.getElementById("text_size").innerHTML = "Size of the text will be " + difference + "px"
    text("Kaustubh",noseX,noseY);
    textSize(difference);
    fill("white")
    
}
function modelloaded() {
    console.log("poseNet is intialized",noseX,noseY)
}


function gotposes(result) {
    if (result.length > 0) {
        console.log(result)
        noseX = result[0].pose.nose.x 
        noseY = result[0].pose.nose.y
        console.log("noseX = " + noseX+"noseY = " + noseY)
        leftwristX = result[0].pose.leftWrist.x
        rightwristX = result[0].pose.rightWrist.x
        difference = floor(leftwristX - rightwristX)
        console.log(leftwristX,rightwristX)
    }
}