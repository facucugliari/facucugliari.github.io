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
    function num(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.ceil(Math.random()* max);
    }
    let i=0;
    let array1=[], array2=[], array3=[], array4=[];
    for(i=0;i<1;i++){
        let res = num(1000,9999);
        array1.push(res);
        res = num(1000,9999);
        array2.push(res);
        res = num(1000,9999);
        array3.push(res);
        res = num(1000,9999);
        array4.push(res);
    }
    for(i=0;i<1;i++){ 
        let codigoDesc=array1[i]+'-'+array2[i]+'-'+array3[i]+'-'+array4[i];
        console.log(codigoDesc);
        localStorage.setItem("vouchers", {voucher:codigoDesc});
        document.getElementById("codigo").innerHTML = codigoDesc;
        localStorage.getItem("vouchers");
        console.log(localStorage.getItem("vouchers")[0]);
    }
}
}

