import * as db from './firebase.js';

document.getElementById("s1").addEventListener("click",()=>Avaliar(0))
document.getElementById("s2").addEventListener("click",()=>Avaliar(1))
document.getElementById("s3").addEventListener("click",()=>Avaliar(2))
document.getElementById("s4").addEventListener("click",()=>Avaliar(3))
document.getElementById("s5").addEventListener("click",()=>Avaliar(4))

function Avaliar(nun){
    console.log(nun)
let st1 = document.getElementById("s1")
let st2 = document.getElementById("s2")
let st3 = document.getElementById("s3")
let st4 = document.getElementById("s4")
let st5 = document.getElementById("s5")
let str = document.getElementById("rating").innerText = nun + 1

//st1.setAttribute('src', 'star1.png.webp');
let conjunt = [st1,st2,st3,st4,st5]
 for (let index = 0; index < 5; index++) {
   if(nun < index){
    conjunt[index].src= "star0.png.webp"}
   else{conjunt[index].src= "star1.png.webp"}
}      
}

const bntenviar = document.getElementById("enviarComent")
bntenviar.addEventListener('click',()=> {Enviar()})

function Enviar(){

console.log("enviar1")
let nome = document.getElementById("nome")
let comentario = document.getElementById("comentario")
let rating = document.getElementById("rating")

if(nome!= null && comentario != null){
    console.log("enviar2")
    console.log(nome.value)
    console.log(comentario.value)
    db.Insert(nome.value,comentario.value,rating.innerText, 1 )
}

}
CarregarComentarios();
async function CarregarComentarios(){
    let coments =  await db.getData();
    console.log("t1 " + coments[0][0])
   
    for (let index = 0; index < coments.length; index++) {
        let nome = document.createElement("p")
    let comentario = document.createElement("p")
    nome.innerText = coments[index][0];
    comentario.innerText = coments[index][1]
    let pai = document.getElementById("comentdiv")
    pai.appendChild(nome)
    //carregarStar(coments[index][2],pai)
    carregarStar(5)
    pai.appendChild(comentario)
    }   
  

}
function carregarStar(numstar){
if(numstar == null){numstar = 0}

let pai = document.getElementById("comentdiv")
for (let index = 0; index < 5 ; index++) {
    if(numstar > index){
        let star1 = document.createElement("img")
        star1.src= "star1.png.webp"
        pai.appendChild(star1)}
        else{
            let star0 = document.createElement("img")
            star0.src= "star0.png.webp"
            pai.appendChild(star0)}
    
}

}

