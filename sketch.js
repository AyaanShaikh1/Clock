var SecAngle,MinAngle,HrAngle;

function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES);

  

}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  hr = hour();
  min = minute();
  sec = second();



  SecAngle = map(sec,0,60,0,360);
  push();
  rotate(SecAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  MinAngle = map(min,0,60,0,360);
  push();
  rotate(MinAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  HrAngle = map(hr%12,0,12,0,360);
  push();
  rotate(HrAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  
  strokeWeight(10);
  noFill();
  
  stroke("red");
  arc(0,0,300,300,0,SecAngle);

  stroke("blue");
  arc(0,0,280,280,0,MinAngle);

  stroke("yellow");
  arc(0,0,260,260,0,HrAngle);
}