//VARIABLES
let toggle = false;
let eyeOpen = true;

let eyeW = 40;
let eyeH = 30;
let pupilW = 15;
let pupilH = 20;

let bodyColor = [255,120, 40];
let chestColor = [255,240,200];
let innerEarColor = [255,220, 180];

let mouthColorOpen = [0]; 
let mouthColorSmile = [0, 200, 0]; // green

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
  background(255, 249, 226);
  angleMode(DEGREES);
  rectMode(CENTER);
}

/* DRAW LOOP REPEATS */
function draw() {
  background(255, 249,226);

  //Body
  fill(bodyColor);
  ellipse(200,300,150, 180);

  //Chest
  fill(chestColor);
  ellipse(200,320, 80,100);

  //Tail
  fill(bodyColor);
  ellipse(300,320,100, 60);
  fill(chestColor);
  ellipse(340, 320,40, 40);

  //Head
  fill(bodyColor);
  ellipse(200,160, 120,110);

  //Ears
  fill(bodyColor);
  ellipse(150, 100, 30,60);
  ellipse(250,100,30, 60);
  fill(innerEarColor);
  ellipse(150, 105, 15, 40);
  ellipse(250, 105, 15, 40);

  //Eyes
  if (toggle == true) {
    //One eye closed (wink)
    fill(255);
    ellipse(220,160,eyeW,eyeH); 
    fill(0);
    ellipse(220,160,pupilW,pupilH); 
    fill(0);
    ellipse(180, 160, eyeW, 5);
  } else if (toggle == false) {
    //Both open
    fill(255);
    ellipse(180, 160,eyeW, eyeH);
    ellipse(220,160, eyeW, eyeH);
    fill(0);
    ellipse(180, 160,pupilW, pupilH);
    ellipse(220,160, pupilW, pupilH);
  }

  //Nose
  fill(0);
  ellipse(200, 185, 10, 8);

  //MOuth
  strokeWeight(2);
  if (toggle == true) {
    // Smiling
    stroke(mouthColorSmile);
    noFill();
    arc(190, 195,15, 15,0, 180);
    arc(210, 195,15, 15,0, 180);
  } else if (toggle == false) {
    stroke(mouthColorOpen);
    noFill();
    arc(190, 195, 15, 15,0, 180);
    arc(210, 195,15, 15, 0, 180);
  }

  // Reset stroke so drawing isn’t full green
  stroke(0);

  //Legs
  fill(bodyColor);
  rect(160,370,20, 40); 
  rect(240,370, 20, 40); 

  fill(0);
  rect(160,390, 20,10); 
  rect(240, 390, 20, 10); 

  //text
  fill(0);
  textSize(15);
  textAlign(CENTER);
  text("Click to see me wink and smile!",width/2,30);
}

/* FUNCTIONS */
function mousePressed() {
  // Toggle
  toggle = !toggle;
}