function setup(){
video = createCaprute(VIDEO);
video.size(550, 500);


canvas = createCanvas(550, 550);
canvas.position(560, 150);
poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
if(results.length > 0){

console.log(results);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
}
}

function draw() {
background('#3edced');
textSize(difference);
fill('#e85189');
text('Anushka', 50, 400);
}