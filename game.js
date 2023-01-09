var participantsRaw= sessionStorage.getItem("Participants");
console.log(participantsRaw)
var chance=[];
var dice=[1,2,3,4,5,6];
var num=0;
var position = 1;
var arrturn;   var random;
const p1arrow = document.getElementById("p1a")
const p2arrow = document.getElementById("p2a")
const p3arrow = document.getElementById("p3a")
const p4arrow = document.getElementById("p4a")
const d1=document.getElementById("d1")
const d2=document.getElementById("d2")
const d3=document.getElementById("d3")
const d4=document.getElementById("d4")
const d5=document.getElementById("d5")
const d6=document.getElementById("d6")
var p1Eligibility = false;
var p2Eligibility = false;
var p3Eligibility = false;
var p4Eligibility = false;
var p1results = [];  var p1win = false;
var p2results = [];  var p2win = false;
var p3results = [];  var p3win = false;
var p4results = [];  var p4win = false;
var p1square=0;  var p1img;  var p1squareRem=0;  var p1imgRem;
var p2square=0;  var p2img;  var p2squareRem=0;  var p2imgRem;
var p3square=0;  var p3img;  var p3squareRem=0;  var p3imgRem;
var p4square=0;  var p4img;  var p4squareRem=0;  var p4imgRem;
var participantsArr =[];
const snakesAndLadders = {
    4:21, 13:33, 27:-22, 33:16, 40:-37, 43:-25, 50:19, 54:-23, 62:19, 66:-21, 74:16, 76:-18, 89:-36, 99:-58,
}
console.log(snakesAndLadders)


var participants = participantsRaw.replaceAll("[","").replaceAll("]","").replaceAll('"','');
for(let i=0; i<participants.split(",").length; i++) {
    let update = "pnUpdate"+i;
    let update2 = participants.split(",")[i];
    document.getElementById(update).innerHTML = update2.toUpperCase();
    participantsArr.push(update2.toUpperCase())
    chance.push(i+1)
    sessionStorage.removeItem("1");
    sessionStorage.removeItem("2");
    sessionStorage.removeItem("3");
    sessionStorage.removeItem("last")
}

p1arrow.style.display = 'block';



document.getElementById("diceImg").addEventListener("click", roll)

function roll() {
    p1arrow.style.display = "none";    p2arrow.style.display= "none";   p3arrow.style.display= "none";  p4arrow.style.display="none";
    d1.style.display ="none";  d2.style.display ="none";  d3.style.display ="none";  d4.style.display ="none";  d5.style.display ="none"; d6.style.display ="none";
    let turn = num%chance.length;
    random = dice[Math.floor(Math.random()*dice.length)]
    if (random==1) {
        if(chance[turn]==1){
            p1Eligibility=true
        }else if (chance[turn]==2) {
            p2Eligibility=true
        } else if (chance[turn]==3) {
            p3Eligibility=true
        } else if(chance[turn]==4) {
            p4Eligibility=true
        }
    }
    
    if (chance[turn]==1) {
        if(p1Eligibility==true) {
            p1results.push(random)
        }
    } else if (chance[turn]==2) {
        if(p2Eligibility==true) {
            p2results.push(random)
        }
    } else if (chance[turn]==3) {
        if(p3Eligibility==true) {
            p3results.push(random)
        }
    } else if (chance[turn]==4) {
       if(p4Eligibility==true) {
            p4results.push(random)
       } 
    }


    if(p1square>=0 && p1square<=1000) {
        p1square=0
        p1results.forEach(num => {
            p1square+=num;
            if(p1square>100) {
                p1results.pop()
                p1square-=num;
            }
        });
        if(p1square in snakesAndLadders) {
            let pushNum = snakesAndLadders[p1square]
            p1results.push(pushNum)
            p1square=0;
            p1results.forEach(num => {
                p1square+=num;
            });
        }
    }
    if(p2square>=0 && p2square<=1000) {
        p2square=0
        p2results.forEach(num => {
            p2square+=num;
            if(p2square>100) {
                p2results.pop()
                p2square-=num;
            }
        });
        if(p2square in snakesAndLadders) {
            let pushNum = snakesAndLadders[p2square]
            p2results.push(pushNum)
            p2square=0;
            p2results.forEach(num => {
                p2square+=num;
            });
        }
    }
    if(p3square>=0 && p3square<=1000) {
        p3square=0
        p3results.forEach(num => {
            p3square+=num;
            if (p3square>100) {
                p3results.pop()
                p3square-=num;
            }
        });
        if(p3square in snakesAndLadders) {
            let pushNum = snakesAndLadders[p3square]
            p3results.push(pushNum)
            p3square=0;
            p3results.forEach(num => {
                p3square+=num;
            });
        }
    }
    if(p4square>=0 && p4square<=1000) {
        p4square=0
        p4results.forEach(num => {
            p4square+=num;
            if(p4square>100) {
                p4results.pop()
                p4square-=num;
            }
        });
        if(p4square in snakesAndLadders) {
            let pushNum = snakesAndLadders[p4square]
            p4results.push(pushNum)
            p4square=0;
            p4results.forEach(num => {
                p4square+=num;
            });
        }
    }


    if (chance[turn]==1) {
        if(p1Eligibility==true) {
           p1img = document.createElement("img");
           p1img.src = "./Assets/orange.png"
           document.getElementById(String(p1square)).appendChild(p1img);
           if (p1squareRem!=0) {
            document.getElementById(String(p1squareRem)).removeChild(p1imgRem)
           }
        }
    } else if (chance[turn]==2) {
        if(p2Eligibility==true) {
            p2img = document.createElement("img");
            p2img.src = "./Assets/blue.png"
            document.getElementById(String(p2square)).appendChild(p2img);
            if (p2squareRem!=0) {
             document.getElementById(String(p2squareRem)).removeChild(p2imgRem)
            }
        }
    } else if (chance[turn]==3) {
        if(p3Eligibility==true) {
            p3img = document.createElement("img");
            p3img.src = "./Assets/yellow.png"
            document.getElementById(String(p3square)).appendChild(p3img);
            if (p3squareRem!=0) {
             document.getElementById(String(p3squareRem)).removeChild(p3imgRem)
            }
        }
    } else if (chance[turn]==4) {
       if(p4Eligibility==true) {
        p4img = document.createElement("img");
        p4img.src = "./Assets/pink.png"
        document.getElementById(String(p4square)).appendChild(p4img);
        if (p4squareRem!=0) {
         document.getElementById(String(p4squareRem)).removeChild(p4imgRem)
        }
       } 
    }

    p1squareRem=p1square;  p2squareRem=p2square;  p3squareRem=p3square;  p4squareRem=p4square;
    p1imgRem=p1img;  p2imgRem=p2img;  p3imgRem=p3img;  p4imgRem=p4img;
    // console.log(p1square,p2square,p3square,p4square)
    let dicePic = "d"+random
    document.getElementById(dicePic).style.display= "block"


    if(p1square==100) {
        p1win = true;
        var idx = chance.indexOf(1)
        if(idx != -1) {
            chance.splice(idx,1)
            participantsArr.splice(idx,1)
        }
        p1square="home";
    }
    if(p2square==100) {
        p2win = true;
        var idx = chance.indexOf(2)
        if(idx != -1) {
            chance.splice(idx,1)
            participantsArr.splice(idx,1)
        }
        p2square="home";
    }
    if(p3square==100) {
        p3win = true;
        var idx = chance.indexOf(3)
        if(idx != -1) {
            chance.splice(idx,1)
            participantsArr.splice(idx,1)
        }
        p3square="home";
    }
    if(p4square==100) {
        p4win = true;
        var idx = chance.indexOf(4)
        if(idx != -1) {
            chance.splice(idx,1)
            participantsArr.splice(idx,1)
        }
        p4square="home";
    }


    if (p1win == true) {
        let name1 = participants.split(",")[0].toUpperCase()
        sessionStorage.setItem(position, name1)
        position+=1;
        p1win = false;
    }
    if (p2win == true) {
        let name2 = participants.split(",")[1].toUpperCase()
        sessionStorage.setItem(position, name2)
        position+=1;
        p2win = false;
    }
    if (p3win == true) {
        let name3 = participants.split(",")[2].toUpperCase()
        sessionStorage.setItem(position, name3)
        position+=1;
        p3win = false;
    }
    if (p4win == true) {
        let name4 = participants.split(",")[3].toUpperCase()
        sessionStorage.setItem(position, name4)
        position+=1;
        p4win = false;
    }

    if(chance.length<2) {
        document.getElementById("diceImg").removeEventListener("click", roll)
        let last=participantsArr[0].toUpperCase();
        sessionStorage.setItem("last", last);
        window.open("./result.html","_self");
    }

    if(random!=1 && random!=6 ) {
        arrturn = (num+1)%chance.length;
        let refer = "p"+chance[arrturn]+"a";
        document.getElementById(refer).style.display = "block"
    } else {
        num-=1;
        arrturn = (num+1)%chance.length;
        let refer = "p"+chance[arrturn]+"a";
        document.getElementById(refer).style.display = "block"
    }
    num+=1;
}




var menu = document.getElementById("menu")
var option = document.getElementById("option")
menu.addEventListener("click",menuClick)
function menuClick() {
    option.style.display= "flex";
    document.getElementById("diceImg").removeEventListener("click",roll)
}

var Continue = document.getElementById("continue")
Continue.addEventListener("click", continueClick)
function continueClick() {
    option.style.display="none"
    document.getElementById("diceImg").addEventListener("click", roll)
}

var Restart = document.getElementById("restart")
Restart.addEventListener("click", restartClick)
function restartClick(){
    option.style.display="none";
    window.open("./game.html","_self")
}

var Instructions = document.getElementById("instructions")
var InstructionsDiv = document.getElementById("instructionsDiv")
Instructions.addEventListener("click", instructionsClick)
function instructionsClick() {
    InstructionsDiv.style.display="block"
}

var Back = document.getElementById("back")
Back.addEventListener("click", backClick)
function backClick() {
    InstructionsDiv.style.display="none"
}

var Exit = document.getElementById("exit")
Exit.addEventListener("click",exitClick)
function exitClick() {
    option.style.display="none"
    window.open("./index.html","_self")
}
