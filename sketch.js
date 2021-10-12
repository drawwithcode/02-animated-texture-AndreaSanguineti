function preload() {
  //carica il font
  font = loadFont("bright.otf");
}

//scelgo la palette
const d = 10;
const colorPalette = ["#e1e5f2", "white", "#0096c7", "#a8dadc", "#ecae6"];

//creo il fiocco di neve
function star(x, y, radius1, radius2, npunti) {
  let angle = 360 / npunti;
  // let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + angle / 2) * radius1;
    sy = y + sin(a + angle / 2) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

//adattare l'animazione alla finestra
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  angleMode(DEGREES);

  //impostazioni del testo
  textFont(font);
  textSize(40);
  textAlign(CENTER, CENTER);
  frameRate(15);
  noCursor();
}

function draw() {
  createCanvas(windowWidth, windowHeight);

  background("#001d3d");

  push();
  for (let x = 0; x < width; x += d * 2) {
    for (let y = 0; y < height; y += d * 2) {
      noStroke();
      star(x, y, 3, 7, 8);

      if (mouseX < windowWidth / 2) {
        let col = random(colorPalette);
        fill(color(col));
      } else {
        if (mouseX > windowWidth / 2 || mouseY < windowHeight / 2) {
          let col = random(colorPalette);
          rotate(random(0, 90));
          fill(color(col));
          star(x, y, 3, 7, 8);
        }
      }
    }
  }

  for (let x = 0; x < width; x += d * 2) {
    for (let y = 0; y < height; y += d * 4) {
      noStroke();

      if (mouseX < windowWidth / 2) {
        let col = random(colorPalette);
      } else {
        if (mouseX > windowWidth / 2 || mouseY < windowHeight / 2) {
          let col = random(colorPalette);
          rotate(random(0, 90));
          fill(color(col));
          star(x, y, 3, 7, 8);
        }
      }
    }
  }
  pop();

  //testo 1
  push();
  translate(width / 2, height / 2.05);
  fill(color("white"));
  text("Move right to start the snowstorm", 0, 0);

  pop();

  //stella
  push();
  noStroke();
  fill(color("white"));
  star(mouseX, mouseY, 10, 30, 8);
  pop();
}

