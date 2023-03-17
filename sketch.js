//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variaveis da raquete inimiga
let xRaqueteOponente = 586;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do game
let raquetada;
let ponto;
let trilha;

 function preload(){
   trilha = loadSound("trilha.mp3")
   ponto = loadSound("ponto.mp3")
   raquetada = loadSound("raquetada.mp3")
 }

 function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

 function draw() {
  background(0);
  mostraBolinha();
  //movimentaBolinha();
  verificarcolisaoborda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  //verificaColisaoRaquete();
  verificacolisaoRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificacolisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

 function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro)
 }

 function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function bolinhaNaoFicaPresa(){
    if (xBolinha + raio < 0){
    console.log('bolinha ficou presa');
    xBolinha = 300;
    }
}

 function verificarcolisaoborda(){
   if (xBolinha + raio > width || 
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
  }
   
 function mostraRaquete(x,y){
   rect(x, y, comprimentoRaquete, alturaRaquete);
 }

   
 function movimentaRaqueteOponente(){
   if (keyIsDown (UP_ARROW)){
     yRaqueteOponente -= 10;
   }
   
   if (keyIsDown (DOWN_ARROW)){
     yRaqueteOponente += 10;
   }
 }

 function verificaColisaoRaquete(){
   if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete + alturaRaquete){
     velocidadeXBolinha *= -1;
     raquetada.play();
   }
 }

 function verificacolisaoRaquete(x, y){
   colidiu = collideRectCircle(x,y,comprimentoRaquete,alturaRaquete,xBolinha,yBolinha, raio);
   if (colidiu ){
     velocidadeXBolinha *= -1;
     raquetada.play();
   }
 }

 function movimentaRaquete(){
   if (keyIsDown (87)){
     yRaquete -= 10;
   }
   
   if (keyIsDown (83)){
     yRaquete += 10;
   }
 }

 function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(0,255,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(0,255,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
  
}

 function marcaPonto(){
   if (xBolinha > 585){
     meusPontos += 1;
     ponto.play();
   }
   if (xBolinha < 13){
     pontosOponente += 1;
     ponto.play();
   }
 }

