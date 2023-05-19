

//LISTA DE USUÁRIOS
let listaDeUsuarios = [

  {
      nomeCompleto : "José das Couves",
      nomeUsuario : "jose",
      senhaUsuario : "123456"
  }
  ,
  {
      nomeCompleto : "João Paulino",
      nomeUsuario : "joao",
      senhaUsuario : "123456"
  }
  ,
  {
      nomeCompleto : "Maria Tomaite",
      nomeUsuario : "maria",
      senhaUsuario : "123456"
  }
  ,
  {
      nomeCompleto : "Paulo da Selva",
      nomeUsuario : "paulo",
      senhaUsuario : "123456"
  }
];

localStorage.setItem("listaUser" ,JSON.stringify(listaDeUsuarios));



addEventListener("click", (evento)=>{
   
  let userInput = document.querySelector("#idUser"); 
  let passInput = document.querySelector("#idPass"); 
      
      //MOSTRA SENHA NO OLHINHO
      if(evento.target.className == "fa fa-eye" || evento.target.className == "fa fa-eye-slash"){

          evento.target.setAttribute("style","cursor:pointer")

          if(passInput.getAttribute("type") == "password"){
              passInput.setAttribute("type","text");
              evento.target.setAttribute("class","fa fa-eye-slash")  
          }else{
              evento.target.setAttribute("style","cursor:pointer");
              evento.target.setAttribute("class","fa fa-eye");  
              passInput.setAttribute("type","password"); 
          }

      }

      //usuario que representa os dados que chegam do formulario 

      const usuarioLogado = {
        nomeUsuarioLogado: userInput.value,
        senhaUsuarioLogado: passInput.value

      }

      // USUARIO QUE VAI VAI REPRESENTAR OS DADOS VALIDADOS 

      let usuarioValidado = {};

      let listaDeUsuariosRecuperada = JSON.parse(localStorage.getItem("listaUser"));

      if(evento.target.id == "btnSubmit"){
      
      try{
              listaDeUsuariosRecuperada.forEach((usuario)=>{

                  if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuarioLogado){
                    usuarioValidado =  usuario;
                    throw "USUÁRIO VALIDADO!";
                  }
              });

              throw "USUÁRIO OU SENHA INCORRETOS!";

  }catch(msg){

    const msgStatus = document.querySelector("#info");

      if(msg == "USUÁRIO VALIDADO!"){
          
        //cria uma mensagem para o usuario =
        msgStatus.setAttribute("style","color:#00ff00");
        msgStatus.innerHTML = '<span><strong>0 usuario ${usuariovalidado.nomeCompleto} realizou o login com SUCESSSO!!</strong></span'
        
        // adcionar o objeto de usuario validado no local storage

        localStorage.setItem("user-validado",JSON.stringify(usuarioValidado));


        //Redirect
         setTimeout(() => {
          window.location.href = "../sucesso.html";
         },3000);
         


      }else{
        // criar uma mensagem para o usuario 
        msgStatus.setAttribute("style","color:#ff0000");
        msgStatus.innerHTML = 'span><strong>Nome de usuario ou senha inválidos...,/strong></span>'
      }
  }

}
});