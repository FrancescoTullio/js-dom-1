const lampadina = document.getElementById("lamp")
const bottone = document.getElementById("btn")


bottone.addEventListener("click", function(){
    if(lampadina.classList.contains("acceso")){
        lampadina.src = "./img/white_lamp.png";
        lampadina.alt ="lampadina spenta";
        lampadina.classList.remove("acceso")
        bottone.innerHTML = "Premimi per spegnere la luce!";
    } else {
        lampadina.src = "./img/yellow_lamp.png";
        lampadina.alt ="lampadina spenta";
        lampadina.classList.add("acceso")
        bottone.innerHTML = "Premimi per spengere la luce!";
    }
})