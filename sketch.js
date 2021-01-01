
var secAngle, sec;
var minAngle, min;
var hrAngle, hr;

function setup() {
    createCanvas(800, 400);
    
}

function draw() {
    background(0);  

    hr = hour();
    sec = second();
    min = minute();

    push();
    fill('black');
    stroke('red');
    strokeWeight(5);
    arc(0, 0, 330, 330, -90, secAngle - 90);
    pop();

    push();
    fill('black');
    stroke('green');
    strokeWeight(5);
    arc(0, 0, 300, 300, -90, minAngle - 90);
    pop();

    push();
    fill('black');
    stroke('blue');
    strokeWeight(5);
    arc(0, 0, 270, 270, -90, hrAngle - 135);
    pop();

    angleMode(DEGREES);
    secAngle = map(sec, 0, 60, 0, 360);
    minAngle = map(min, 0, 60, 0, 360);
    hrAngle = map(hr, 0, 24, 0, 360);

    push();
    rotate(secAngle-90);
    stroke(255, 0, 0);
    strokeWeight(7);
    line(0, 0, 150, 0);  
    pop();

    push();
    rotate(minAngle-90);
    stroke(0, 255, 0);
    strokeWeight(7);
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(hrAngle - 135);
    stroke(0, 0, 255);
    strokeWeight(7);
    line(0, 0, 50, 0);
    pop();


    
    camera.position.x = 0;
    camera.position.y = 0;

    drawSprites();
}