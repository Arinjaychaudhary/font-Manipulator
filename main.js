function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.position(100, 130);
    canvas = createCanvas(610, 490);
    canvas.position(800, 130)


    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose", gotPoses);


}

function draw() {
    background("#00FF00");


}

function modelLoaded() {
    console.log("Model loaded successfully");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);

    }
}