function makeBubble(){
    
var clutter="";



for(var i = 1; i<=138; i++ ){

   var rn= Math.floor(Math.random()*10)

   clutter +=  `<div class="bubble">${rn}</div>`;

}

document.querySelector("#pbtm").innerHTML = clutter;

}


var timer = 60;
function runTimer(){
      var timerint = setInterval(function(){

        if(timer>0){
             timer--;
            document.querySelector("#timerval").textContent= timer;
        }
        else{
            clearInterval(timerint)
        }
           
      }, 1000);

}



function getNewHit(){
    var rn=  Math.floor(Math.random()*10);
      document.querySelector("#hitval").textContent = rn;
}

var score = 0;
function scoreIncrease(){
      score += 10;
      document.querySelector("#scoreval").textContent = score;
}

//jispe click kroge wo element par event raise hoga , aur 
//event listener na milne par event element ke parent par
//listener dhundega, waha bhi na milne pr event parent k parent k parent
// pr listener dhundegaa------event bubbling---> bubble ka parent #pbtm haii

document.querySelector("#pbtm").addEventListener("click", function(dets){
    
})




// scoreIncrease();

runTimer();

makeBubble();

getNewHit();