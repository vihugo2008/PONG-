let xb = 300;
let yb = 200;
let diametro = 15;
let raio = diametro / 2;
let vxb = 6;
let vyb = 6;

let xr = 5;
let yr = 150;
let lr = 7;
let ar = 80;

let xri = 585;
let yri = 150;

let colidiu = false;

let meuspontos = 0;
let pontosoponente = 0;

let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function draw() {
  background("black");
  mostrabola();
  mostraraquete(xr, yr, color("pink"));
  mostraraquete(xri, yri, color("lightblue"));
  mexebola();
  quicabola();
  mexeraquete();
  mexeraqueteinimiga();
  quicaraquetebola(xr, yr);
  quicaraquetebola(xri, yri);
  pontos();
  placar();
  letras();
  stroke("grey");
  rect(300, 0, 1, 400);
}

function mostrabola() {
  circle(xb, yb, diametro);
}

function mostraraquete(x, y, color) {
  fill(color);
  rect(x, y, lr, ar);
}

function mexebola() {
  xb += vxb;
  yb += vyb;
}

function quicabola() {
  if (xb + raio > width || xb - raio < 0) {
    vxb *= -1;
  }
  if (yb + raio > height || yb - raio < 0) {
    vyb *= -1;
  }
}

function mexeraquete() {
  if (keyIsDown(UP_ARROW)) yr -= 10;

  if (keyIsDown(DOWN_ARROW)) yr += 10;
}

function mexeraqueteinimiga() {
  if (keyIsDown(87))
    //s
    yri -= 10;

  if (keyIsDown(83))
    //w
    yri += 10;
}

function quicaraquetebola(x, y) {
  colidiu = collideRectCircle(x, y, lr, ar, xb, yb, raio);

  if (collidiu) {
    vxb *= -1;
  }
}

function placar() {
  stroke("white");
  textAlign(CENTER);
  textSize(18);
  fill("violet");
  rect(150, 10, 40, 20);
  fill("black");
  text(meuspontos, 170, 13);

  fill("#BFDFEE");
  rect(430, 10, 40, 20);
  fill("black");
  text(meuspontos, 450, 13);
}

function quicaraquetebola(x, y) {
  colidiu = collideRectCircle(x, y, lr, ar, xb, yb, raio);

  if (colidiu) {
    vxb *= -1;
    raquetada.play();
  }
}
 function pontos () {
  if (xb > 590) {
    meuspontos += 1;
    ponto.play();
  }
  if (xb < 11) {
    pontosoponente += 1;
    raquetada.play();
    ponto.play();
  }
}

function letras() {
  let frase = "MEUS PONTOS";
  let frase2 = "PONTOS OPONENTE";
  textSize(20);
  textAlign(LEFT, TOP);
  fill("white");
  text(frase, 90, 40);

  textSize(20);
  textAlign(LEFT, TOP);
  fill("white");
  text(frase2, 335, 40);
}
