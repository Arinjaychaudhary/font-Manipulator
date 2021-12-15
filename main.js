noseX=0;
noseY=0;

rightWristX=0;
leftWristX=0;
difference=0;

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
    fill("#FF0000")
    text("Hello",noseX,noseY);
    textSize(difference);


}

function modelLoaded() {
    console.log("Model loaded successfully");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        console.log("Nose X = "+noseX+" Nose Y = "+noseY);
        rightWristX=result[0].pose.rightWrist.x;
        leftWristX=result[0].pose.leftWrist.x;
        console.log("Right Wrist x = "+rightWristX+" Left Wrist X = "+leftWristX);
        difference=floor(rightWristX-leftWristX);
    }
}