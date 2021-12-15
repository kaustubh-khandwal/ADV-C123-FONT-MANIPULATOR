function setup() {
    canvas = createCanvas(550,550);
    canvas.position(600,150);
    video = createCapture(500,500)
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}

function modelloaded() {
    console.log("poseNet is intialized")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
    }
}