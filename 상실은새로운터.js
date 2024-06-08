let w=350; let h=2000; let fr=60; let t=0; 

let str1_num=37; let r1=w*(2/5); let s1; 
let str1="빈 공간을 아는 사람은 그것을 알기 전과는 전혀 다른 사람이 된다.";
let seatxPos1=[]; let seatyPos1=[];
let speedX=0; let speedY=0;


let str2_num=46; let r2=w*(2/5); let s2; 
let str2="어떤 상실은 빈 자리에 서서 하염없이 빈 공간을 응시하는 새로운 영혼을 불어넣는다.";
let seatxPos2=[]; let seatyPos2=[];
let speedX2=0; let speedY2=0;


function setup() {
  let canvas = createCanvas(360, 2000);
  canvas.parent("sketch-holder");
  canvas.touchStarted(start);

  textSize(12); fill(200);
  
  /* set a precise position for each seats */
  for(let s1=0; s1<2*str1_num; s1++){
    if(s1<str1_num){
      seatxPos1[s1] = w/2-180-10*s1;
      seatyPos1[s1] = 30;
    }
    if(s1>=str1_num){
      seatxPos1[s1] = w/2+200+1.7*r1*sin( radians(360- (360*(s1/str1_num))) );
      seatyPos1[s1] = 0.8*r1*cos( radians(360*(s1/str1_num)) )+200;
    }
  }
  for(let s2=0; s2<2*str2_num; s2++){
    if(s2<str2_num){
      seatxPos2[s2] = w/2-90-10*s2;
      seatyPos2[s2] = 45;
    }
    if(s2>=str2_num){
      seatxPos2[s2] = w/2+200+2*r2*sin( radians(360- (360*(s2/str2_num))) );
      seatyPos2[s2] = r2*cos( radians(360*(s2/str2_num)) )+200;
    }
  }
}

function draw() {
  background(238, 242, 255);
  start();
}
function start(){
  time_count();
  translate(w/2,h/2); rotate(HALF_PI);
  translate(-w/2,-200);
  circulating_str1();
  circulating_str2();
  print(t);
}

function time_count(){
  if(frameCount%fr==0){
    t=t+1;
  }
}
function circulating_str1(){
  if(t<5){
    for (let i=0; i<str1_num; i++){
      text(str1.charAt(i), seatxPos1[36-i], seatyPos1[36-i]);
    }
  }
  if(t>=5 && t< str1_num+5){
    for(let i=0; i<str1_num; i++){
      text(str1.charAt(i), seatxPos1[31+t-i], seatyPos1[31+t-i]);
    }
  }
  if(t>= str1_num+5){
    speedX = speedX+1;
    //speedY = speedY+10;
    for(let i=0; i<str1_num; i++){
      posX1 = seatxPos1[2*str1_num-1-i]+speedX;
      posY1 = seatyPos1[2*str1_num-1-i]+speedY;
      if(posY1<=h){speedY *= -1;}
      text(str1.charAt(i), posX1, posY1);
    }
  }
}
function circulating_str2(){
  if(t<45){
    for (let i=0; i<str2_num; i++){
      text(str2.charAt(i), seatxPos2[45-i], seatyPos2[45-i]);
    }
  }
  if(t>=45 && t< str2_num+45){
    for(let i=0; i<str2_num; i++){
      text(str2.charAt(i), seatxPos2[t-i], seatyPos2[t-i]);
    }
  }
  if(t>= str2_num+45){
    speedX2 = speedX2+1;
    //speedY = speedY+10;
    for(let i=0; i<str2_num; i++){
      posX2 = seatxPos2[2*str2_num-1-i]+speedX2;
      posY2 = seatyPos2[2*str2_num-1-i]+speedY2;
      if(posY2<=h){speedY2 *= -1;}
      text(str2.charAt(i), posX2, posY2);
    }
  }
}