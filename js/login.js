"use strict";


//LISTA DE USUÁRIOS
let listaDeUsuarios = [

 {
   nomeCompleto:"jose das couves",
   nomeusuario: "jose",
   senhaUsuario : "123456"

 }

,

{
    nomeCompleto:"joao Paulino",
    nomeusuario: "joao",
    senhaUsuario : "123456"
 
  }

  ,
 {
    nomeCompleto:"Maria tomaite",
    nomeusuario: "maria",
    senhaUsuario : "123456"
 
  }
  ,

  
  {
    nomeCompleto:"Paulo da Selva",
    nomeusuario: "paulo",
    senhaUsuario : "123456"
 
  }

];


localStorage.setItem("listaUser",JSON.stringify (listaDeUsuarios));



addEventListener("click", (evento)=>{
     
    let userInput = document.querySelector("#idUser"); 
    let passInput = document.querySelector("#idPass"); 

     //MOSTRAR SENHA 
        
    //     const eyePass = document.querySelector(".fa-eye");

          //MOSTRAR SENHA NO OLHINHO 

         if(evento.target.className == "fa fa-eye"|| evento.target.className =="fa fa-eye-slash"){

         evento.target.setAttribute("style", "cursor:pointer")

         if(passInput.getAttribute("type")== "password"){
            passInput.setAttribute("type","text");
            evento.target.setAttribute("class","fa fa-eye-slash");
            
         }else{
            evento.target.setAttribute("class", "cursor:pointer"); 
            evento.target.setAttribute("class", "fa fa-eye");
            passInput.setAttribute("type","password");
           }

         }

         let listaDeUsuariosRecuperada = JSON.parse (localStorage.getItem("listUser"));
         
        if(evento.target.id == "btnSubmit"){
        
        try{
                listaDeUsuariosRecuperada.forEach((usuario)=>{

                    if(userInput.value == usuario.nomeUsuario && passInput.value == usuario.senhaUsuario){
                        throw "USUÁRIO VALIDADO!";
                    }
                });

                throw "USUÁRIO OU SENHA INCORRETOS!";

    }catch(msg){
        if(msg == "USUÁRIO VALIDADO!"){
            //Redirect
            window.location.hrer = "../js/sucesso.html";
        
        }else{
            console.log("USUÁRIO OU SENHA INCORRETOS!");
        }
    }

  }
});