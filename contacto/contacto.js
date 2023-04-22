
const boton_enviar = document.getElementById("boton_enviar");
boton_enviar.addEventListener("click", function(){
    const email = document.getElementById("emailInput").value;
    if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email)){
        let aviso = "";
        document.getElementById("validacionEmail").innerHTML= aviso;
       } else {
        let aviso = "Ingrese un email valido";
        document.getElementById("validacionEmail").innerHTML= aviso;
       }
})