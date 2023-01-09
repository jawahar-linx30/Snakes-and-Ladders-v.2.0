var first = document.getElementById("1st")
var second = document.getElementById("2nd")
var third = document.getElementById("3rd")

var one = sessionStorage.getItem("1")
var two = sessionStorage.getItem("2")
var three = sessionStorage.getItem("3")
var last = sessionStorage.getItem("last")
console.log(one,two,three,last)

first.innerText = one;
if (two==null) {
    second.innerText = last;
} else {
    second.innerText = two;
}
if (three==null && two!=null) {
    third.innerText = last;
} else {
    third.innerText = three;
}

var playAgain = document.getElementById("playAgain")
playAgain.addEventListener("click",playAgainClick)
function playAgainClick() {
    window.open("./index.html","_self")
}