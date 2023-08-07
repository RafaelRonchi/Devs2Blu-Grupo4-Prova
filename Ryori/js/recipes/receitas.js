import * as db from './firebase.js';

CarregarResumos()
async function CarregarResumos(){
    let resumos = await db.VerificarReceitas()
    console.log("carregar resumos")

    resumos.forEach(element => {
    let divPai = document.getElementById("divcards")
    let div = document.createElement("div")
    let link = document.createElement("a")
    let img = document.createElement("img")
    let h4 = document.createElement("h4")
    let div2 = document.createElement('div')
    let ptempo = document.createElement("p")
    let ptipo = document.createElement("p")
    div.classList.add("recipe-card")
    div.classList.add(`${element.tiporeceita}`)
    div.classList.add("show")
    link.href = "#"
    h4.classList.add("recipe-name")
    h4.innerText = element.nome
    img.src="../../img/recipes/receitas/sushi.jpg"
    img.classList.add("recipe-img")
    div2.classList.add("recipe-info")
    ptempo.classList.add("recipe-duration")
    ptempo.innerText = element.temporeceita
    ptipo.classList.add("recipe-type")
    ptipo.innerText = element.tiporeceita
    divPai.appendChild(div)
    div.appendChild(link)
    link.appendChild(img)
    link.appendChild(h4)
    link.appendChild(div2)
    div2.appendChild(ptempo)
    div2.appendChild(ptipo)
    });
    
/*
<div class="recipe-card acompanhamento">
                  <a href="#">
                      <img src="../../img/recipes/receitas/sushi.jpg" alt="img" class="recipe-img">
                      <h4 class="recipe-name">Nome da receita</h4>
                      <div class="recipe-info">
                          <p class="recipe-duration">99min</p>
                          <p class="recipe-type">Acompanhamento</p>
                      </div>
                  </a>
              </div>*/



}
