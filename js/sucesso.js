const bemVindoEL = document.querySelector("#bemvindo-user");
const botaoLogout = document.querySelector("#btnSair");


// RECUPERANDO O OBEJETO USER-VALIDADO DO LOCAL-STORAGE 
const userValidado = JSON.parse(localStorage.getItem("user-validado"));

bemVindoEL.innerHTML= userValidado.nomeCompleto;

botaoLogout.addEventListener("click", ()=>{
 localStorage.removeItem("user-validado");
 window.location.href = "../"

});