import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js'
import { getDatabase, ref , set ,push ,get, child , remove } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js'

var firebaseConfig = {
    apiKey: "AIzaSyCfzG_N5TwGF5EU-VoZdboJffWi7QUtaaI",
    authDomain: "site-receitas-a9726.firebaseapp.com",
    databaseURL: "https://site-receitas-a9726-default-rtdb.firebaseio.com",
     projectId: "site-receitas-a9726",
    storageBucket: "site-receitas-a9726.appspot.com",
    messagingSenderId: "531785778020",
    appId: "1:531785778020:web:545732fb30d9b6f9a6f071",
    measurementId: "G-78RKWGBLD4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

 export function Insert(nome,comentario,star,idReceita){
    push(ref(db,"comentarios/"+ idReceita),{
        
        name:nome,
        comentario:comentario,
        star:star
    }).then(()=>{
        alert("Envidado com sucello")
    }).catch((error)=>
        alert(error)
    )
 }
 export async function getData(receita){
    let snaps1 = [];
    const dpref = ref(db);
    if(receita == null){ receita = 1}
    await get(child(dpref,`comentarios/${receita}`)).then((snapshot)=>{
        if(snapshot.exists()){ 
            console.log(snapshot.val())
            snapshot.forEach(function(childSnapshot) { 
                console.log("t3-"+childSnapshot.child("name").val())
                let key = childSnapshot.key;
                let valu = childSnapshot.child("name").val();
                let valu2 = childSnapshot.child("comentario").val();
                let valu3 = childSnapshot.child("star").val();
                console.log(valu)
                console.log(valu2)
                snaps1.push([valu.toString(),valu2.toString(),valu3])
                console.log("t2-"+snaps1[0][0])
                console.log(snaps1.length)
           }
           )
           
           
        }else{alert("sem data");
    }
    })
    console.log("t2,5-"+snaps1.length)
    return snaps1;
    
    }
export async function AddReceita (nome,tiporeceita,temporeceita,ingredientes,preparos,dicas){

let proxima = await proximareceitaid()
push(ref(db,`receitas/${proxima+1}`),{
    nome, 
    tiporeceita,
    temporeceita,   
    ingredientes,
    preparos,
    dicas
}).then(()=>{
    alert("Envidado com sucello")
}).catch((error)=>
    alert(error)
)


}
export async function VerificarReceitas(){
    let cont = 0
    let resumoreceitas=[]
    const dpref = ref(db);
    await get(child(dpref,`receitas/`)).then((snapshot)=>{
        if(snapshot.exists()){ 
            console.log(snapshot.val())
            snapshot.forEach(function(childSnapshot) { 
                cont+=1
                
                let valu = childSnapshot.child("name").val();
                let valu2 = childSnapshot.child("ingredientes").val();
                let valu3 = childSnapshot.val();
               //console.log(valu)
               //console.log(cont)
               childSnapshot.forEach(function(granchild){
                let valu4 = granchild.child("nome").val();
                let valu5 = granchild.child("tiporeceita").val();
                let valu6 = granchild.child("temporeceita").val();
                resumoreceitas.push({nome:valu4,tiporeceita:valu5,temporeceita:valu6})
                console.log(valu4)
                
               })
           }
           )
           
           
        }else{alert("sem data");
    }
    
    
    })
    return resumoreceitas
}
export async function proximareceitaid(){

    let cont = 0
    console.log("cont proxima "+cont)
    const dpref = ref(db);
    await get(child(dpref,`receitas/`)).then((snapshot)=>{
        if(snapshot.exists()){ 
            snapshot.forEach(element => {
           
            cont +=1;
            })}
            console.log("cont proxima "+cont)
            

    })
    return cont
}
