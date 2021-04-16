song1 = "";
song2 = "";

function preload(){
    song1.loadSound("song_1.mp3");
    song2.loadSound("song_2.mp3");
}

function setup(){
    canvas=createCanvas(370,350);
    canvas.position(500,200);
    video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,370,350);
}