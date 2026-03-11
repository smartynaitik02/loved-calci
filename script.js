function calculateLove(){

let name1 = document.getElementById("name1").value;
let name2 = document.getElementById("name2").value;

if(name1=="" || name2==""){
    alert("Please enter both names");
    return;
}

let loveScore = Math.floor(Math.random()*100)+1;

let resultText = name1 + " ❤️ " + name2 + " = " + loveScore + "%";

document.getElementById("result").innerHTML = resultText;

}
