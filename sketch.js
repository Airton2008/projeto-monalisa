function setup() {
  createCanvas(400, 400);
}

let olhoX;
let olhoY;

function draw() {
  background(220);
  fill('rgb(52,31,3)')
  rect(40, 30, 313, 180, 30);
  fill('rgb(251,209,166)') 
  square(60, 60, 270, 30);
  line(150, 250, 250, 245);
  fill('white')
  circle(150, 150, 70);
  circle(250, 150, 70);
  line(220, 105, 290, 120);
  line(110, 120, 180, 105);
  fill('rgb(90,57,11)')
  // circle(150, 150, 30); // pupila esquerda
  // circle(250, 150, 30); // pupila direita

olhoX = map(mouseX, 0, 400, 130, 170);
olhoY = map(mouseY, 0, 400, 130, 170);

circle(olhoX, olhoY, 18); // nova pupila esquerda
circle(olhoX + 100, olhoY, 18); //nova pupila direita
  textSize(36);
  text('C', 173, 215);
  
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}

