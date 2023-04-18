const btn = document.getElementsByClassName('boton');
boton.addEventListener("click",tomarDatos);

function tomarDatos(){
    const email = document.getElementById("input1").value;
    const numero = document.getElementById("input2").value;
    let validacion = 0;
    if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email)){
        let aviso = "";
        validacion++;
        document.getElementById("validacionEmail").innerHTML= aviso;
       } else {
        let aviso = "Ingrese un email valido";
        document.getElementById("validacionEmail").innerHTML= aviso;
       }
    let numLargo = numero.length;
    if(numLargo >= 8 && numLargo <= 15) {
        let aviso="";
        validacion++;
        document.getElementById("validacionTel").innerHTML= aviso;
    }else{
        let aviso = "Ingrese un telefono valido";
        document.getElementById("validacionTel").innerHTML= aviso;
    }
    
    if(validacion === 2){

        function num(a, b) {
            return Math.floor(Math.random() * (b - a + 1)) + a;
        }
        
        function generarCodigo(){
            return num(1000,9999)+'-'+num(1000,9999)+'-'+num(1000,9999)+'-'+num(1000,9999);
        }
        
        let codigoDesc = generarCodigo(); //genera el código
        let arrCodigos = localStorage.getItem("codigosUsados") ? JSON.parse(localStorage.getItem("codigosUsados")) : [];
        
        while (arrCodigos.includes(codigoDesc)) { 
            //verifica que no exista hasta el momento. Si ya existe lo genera nuevamente.
            codigoDesc = generarCodigo();
        }
        
        arrCodigos.unshift(codigoDesc);
        
        localStorage.setItem("codigosUsados", JSON.stringify(arrCodigos));
        document.getElementById("codigo").innerHTML = codigoDesc;
        console.log(arrCodigos[0]);

}
}
