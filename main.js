
function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    
}

function take_snapshot() {
    save('myFilterImage.png');
}
