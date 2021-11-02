const paragraph = document.getElementById("paragraph");
paragraph.innerHTML = "Programação Web - Cliente";

// nome = window.prompt("Introduza o seu nome: ","");
// window.alert(`Olá ${nome}, seja bem vindo!!`);

document.getElementById("img").style.width = "400px";
document.getElementById("img").style.height = "400px";
document.getElementById("img").style.margin = "auto";
document.getElementById("img").style.display = "block";

function showImage() {
   if(document.getElementById(img).style.visibility == 'hidden'){
       document.getElementById(img).style.visibility = 'visible'
    }
   else{
       document.getElementById(img).style.visibility = 'hidden'}
}