var stbutton = document.getElementById("stbutton")
var circle = document.getElementsByClassName("circle")
var circle1 = document.getElementById("circle1")
var circle2 = document.getElementById("circle2")
var circle3 = document.getElementById("circle3")
var circle4 = document.getElementById("circle4")
var single = document.getElementById("single")
var double = document.getElementById("double")
var triple = document.getElementById("triple")
var quadraple = document.getElementById("quadraple")
var flex;
var players = [];
allSet = true;

var detailsLink = {
    circle1 : "single",  circle2 : "double",  circle3 : "triple",  circle4 : "quadraple",
}

var playersLink = {
    single : "1pdetails",  double : "2pdetails", triple : "3pdetails", quadraple : "4pdetails",
}

for (let i=0; i<circle.length; i++) {
    circle[i].addEventListener("click", e=> {
        single.style.display = "none";   circle1.style.backgroundColor = "unset";
        double.style.display = "none";   circle2.style.backgroundColor = "unset";
        triple.style.display = "none";   circle3.style.backgroundColor = "unset";
        quadraple.style.display = "none";  circle4.style.backgroundColor = "unset";
        document.getElementById("psUpdate").innerHTML = "PROCEED";
        document.getElementById(e.target.id).style.backgroundColor = "green";
        document.getElementById(e.target.id).style.opacity = 0.3;
        flex = document.getElementById(detailsLink[e.target.id]).id;
        console.log(flex)
    }
    )
}

stbutton.addEventListener("click", mainButton)
 function mainButton() {
    document.getElementById(flex).style.display = "flex";
    if(document.getElementById("psUpdate").textContent=="START") {
        if(flex=="single") {
            console.log(true)
            location.reload()
        } else {
            var getDetails = document.getElementsByClassName(playersLink[flex]);
            allSet=true;
            for (let i=0; i<getDetails.length; i++) {
                if (getDetails[i].value==="") {
                    allSet=false;
                    let alertDisplay = "Enter Player"+(i+1)+"'s name"
                    alert(alertDisplay)
                }
            }

            if(allSet==true) {
                var getDetails = document.getElementsByClassName(playersLink[flex]);
                for (let i=0; i<getDetails.length; i++) {
                    players.push((getDetails[i]).value)
                }
                sessionStorage.setItem("Participants",JSON.stringify(players));
                window.open("./game.html","_self");
            }
        }
    }
    document.getElementById("psUpdate").innerHTML = "START";
}


