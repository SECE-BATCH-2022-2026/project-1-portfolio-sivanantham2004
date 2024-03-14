const counter = document.getElementById('counter');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const lap = document.getElementById("lap");

var count =0;
var hours = 0;
var minutes = 0;
var intervalId;
var isstart = false;

const funcStart = ()=>{
  counter.innerText = ' : '+count+' Sec ';
  hour.innerText = hours+" Hour ";
  minute.innerText = ' : '+minutes+" Minute ";
  count+=1;
  if(count===60) {
    count=0;
    minutes++;
  }
  if(minutes===60){
    hours++;
  }
}

start.onclick = ()=>{
  if(!isstart){
    intervalId =  setInterval(funcStart,100);
    isstart =true;
  }

}

stop.onclick = ()=>{
  clearInterval(intervalId);
  lap.innerText = ''+hours+' : '+minutes+" : "+(count-1);
  isstart =false;
}

reset.onclick = ()=>{
  count = 0;
  hours = 0;
  minutes = 0;
  counter.innerText = ' : '+count+' Sec ';
  hour.innerText = hours+" Hour ";
  minute.innerText = ' : '+minutes+" Minute ";
  clearInterval(intervalId);
  isstart = false; 
}