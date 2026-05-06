let games = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  games = [
    { name: "GTA Vice City", url: "https://weak.daybits.net/assets/iframe/652.html" },
    { name: "Jetpack Joyride", url: "https://weak.daybits.net/assets/iframe/7.html" },
    { name: "Geometry Dash LITE", url: "https://weak.daybits.net/assets/iframe/27.html" },
    { name: "Subway Surfers", url: "https://weak.daybits.net/assets/iframe/12.html" },
    { name: "Stickman Hook", url: "https://weak.daybits.net/assets/iframe/11.html" },
    { name: "Temple Run 2", url: "https://weak.daybits.net/assets/iframe/10.html" },
    { name: "Bowmasters", url: "https://weak.daybits.net/assets/iframe/0.html" },
    { name: "Gladihoppers", url: "https://weak.daybits.net/assets/iframe/4.html" },
    { name: "Granny", url: "https://weak.daybits.net/assets/iframe/90.html" },
    { name: "Coreball", url: "https://weak.daybits.net/assets/iframe/83.html" },
    { name: "Cluster Rush", url: "https://weak.daybits.net/assets/iframe/81.html" },
    { name: "Basket Random", url: "https://weak.daybits.net/assets/iframe/66.html" },
    { name: "Bitlife", url: "https://weak.daybits.net/assets/iframe/70.html" },
    { name: "Ragdoll Hit", url: "https://weak.daybits.net/assets/iframe/44.html" },
    { name: "FNAF 1", url: "https://weak.daybits.net/assets/iframe/38.html" },
    { name: "FNAF 2", url: "https://weak.daybits.net/assets/iframe/39.html" },
    { name: "Drive Mad", url: "https://weak.daybits.net/assets/iframe/35.html" },
    { name: "Retro Bowl", url: "https://weak.daybits.net/assets/iframe/33.html" },
    { name: "Snow Rider 3D", url: "https://weak.daybits.net/assets/iframe/119.html" },
    { name: "Minecraft 1.21.4", url: "https://weak.daybits.net/assets/iframe/183.html" }
  ];

  for (let g of games) {
    g.w = 220;
    g.h = 70;
    g.btnW = 80;
    g.btnH = 30;
  }
}

function draw() {
  background(0);

  drawStars();

  fill(255);
  textAlign(CENTER);
  textSize(32);
  text("🌌 USG", width / 2, 50);

  drawGrid();
}

function drawStars() {
  stroke(255);
  for (let i = 0; i < 90; i++) {
    point(random(width), random(height));
  }
}

function drawGrid() {
  let cols = floor(width / 260);
  let spacingX = 260;
  let spacingY = 120;

  for (let i = 0; i < games.length; i++) {
    let col = i % cols;
    let row = floor(i / cols);

    let x = 50 + col * spacingX;
    let y = 100 + row * spacingY;

    let g = games[i];

    g.x = x;
    g.y = y;

    // card
    fill(20);
    rect(x, y, g.w, g.h, 12);

    fill(255);
    textSize(14);
    text(g.name, x + 110, y + 25);

    // play button
    g.btnX = x + 70;
    g.btnY = y + 40;

    fill(0, 200, 255);
    rect(g.btnX, g.btnY, g.btnW, g.btnH, 8);

    fill(0);
    textSize(12);
    text("PLAY", g.btnX + 40, g.btnY + 20);
  }
}

function mousePressed() {
  for (let g of games) {
    if (
      mouseX > g.btnX &&
      mouseX < g.btnX + g.btnW &&
      mouseY > g.btnY &&
      mouseY < g.btnY + g.btnH
    ) {
      window.open(g.url, "_blank");
    }
  }
}