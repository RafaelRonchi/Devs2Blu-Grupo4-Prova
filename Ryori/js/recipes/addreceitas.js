import * as db from './firebase.js';

const divingridientes = document.getElementById("ingregientesreceita")
const divpreparo = document.getElementById("preparoreceita")
const divdicas = document.getElementById("dicasreceita")
let ningredientes = 1
let npreparo = 1 
let ndicas = 1
document.getElementById("addingre").addEventListener('click', AddIngredientes)
document.getElementById("addprepa").addEventListener('click', AddPreparo)
document.getElementById("adddica").addEventListener('click', AddDicas)
document.getElementById("btnEnviarreceita").addEventListener('click', EnviarReceita)



function AddIngredientes(){
console.log("add ing")
let label = document.createElement("label")
let input = document.createElement("input")
let btn = document.getElementById("addingre")

label.innerText = `Ingrediente ${ningredientes+1}`
input.id= `ing${ningredientes+1}`
divingridientes.appendChild(label)
divingridientes.appendChild(input)
divingridientes.appendChild(btn)

ningredientes+=1

}
function AddPreparo(){
let label = document.createElement("label")
let input = document.createElement("input")
let btn = document.getElementById("addprepa")
label.innerText = `Preparo ${npreparo+1}`
input.id=`prep${npreparo+1}`
divpreparo.appendChild(label)
divpreparo.appendChild(input)
divpreparo.appendChild(btn)
npreparo+=1
}
function AddDicas(){
let label = document.createElement("label")
let input = document.createElement("input")
let btn = document.getElementById("adddica")
label.innerText = `dica ${ndicas+1}`
input.id= `dica${ndicas+1}`
divdicas.appendChild(label)
divdicas.appendChild(input)
divdicas.appendChild(btn)
ndicas+=1

}
function EnviarReceita(){
    let arringre =[]
    let arrprepa = []
    let arrdicas = []
for (let index = 1; index <= ningredientes; index++) {
    let key = "ingre"+index
    console.log(document.getElementById(`ing${index}`).value)
    arringre.push({[key] : document.getElementById(`ing${index}`).value})
}
for (let index = 1; index <= npreparo; index++) {
    let key = "prep"+index
    arrprepa.push({[key] : document.getElementById(`prep${index}`).value})
    
}
for (let index = 1; index <= ndicas; index++) {
    let key = "dica"+index
    arrdicas.push({[key] : document.getElementById(`dica${index}`).value})
    
}
let nome = document.getElementById("nomereceita").value
let tiporeceita = document.getElementById("tiporeceita").value
let tempo = document.getElementById("temporeceita").value
db.AddReceita(nome,tiporeceita,tempo,arringre,arrprepa,arrdicas)


}
