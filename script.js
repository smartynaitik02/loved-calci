function calculateLove(){

let name1 = document.getElementById("name1").value.toLowerCase().trim();
let name2 = document.getElementById("name2").value.toLowerCase().trim();

if(name1=="" || name2==""){
    alert("Please enter both names");
    return;
}

/* combine both names */
let combined = name1 + name2;

/* convert names into number */
let total = 0;

for(let i=0;i<combined.length;i++){
    total += combined.charCodeAt(i);
}

/* love percentage */
let loveScore = (total % 100) + 1;

let resultText = name1 + " ❤️ " + name2 + " = " + loveScore + "%";

document.getElementById("result").innerHTML = resultText;

}
