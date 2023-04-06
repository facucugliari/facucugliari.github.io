// /* 1- Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada.
//       Tiene que crear la lista uno mismo */

// let array = [ 3, 8, 2, 6, 1, 5, 7, 4, 9]
// console.log(ordenar)

//let copiaArray
// ordenar = array.sort()



// -------------------------------------------------------------------------------------------------------------------------------------



// /* Ejercicio 11 */

// const btn_Google = document.getElementById("btn-Google");
// btn_Google.addEventListener("click", () => { cambioHipervinculo ("https://www.google.com/", "Google")});

// const btn_UTN = document.getElementById("btn-UTN");
// btn_UTN.addEventListener("click", () => { cambioHipervinculo ("https://campus.argentinaprograma.utn.edu.ar/", "Campus Virtual Utn")});

// const btn_GitHub = document.getElementById("btn-GitHub");
// btn_GitHub.addEventListener("click", () => { cambioHipervinculo ("https://github.com/", "GitHub")});

// const hipervinculo = document.getElementById("hipervinculo");
// function cambioHipervinculo (href, text) {
//     hipervinculo.href = href
//     hipervinculo.textContent = text
// }



// -------------------------------------------------------------------------------------------------------------------------------------



// /* Ejercicio 12 */

const ocultarTexto = document.querySelectorAll("p strong");

ocultarTexto.forEach((strong) => { strong.addEventListener("click", () => strong.style.display = "none") })



// -------------------------------------------------------------------------------------------------------------------------------------



// /* Ejercicio 13 */


const cambiarTamaño = document.getElementById("cambiarTamaño");
Object.assign (cambiarTamaño.style, {width: "800px", height: "70px", backgroundColor: "red"})
let tamañoOriginal = Object.assign ({}, cambiarTamaño.style)


cambiarTamaño.addEventListener("dblclick", () => {
    if(cambiarTamaño.style.width === tamañoOriginal.width && cambiarTamaño.style.height === tamañoOriginal.height){
        Object.assign (cambiarTamaño.style, {width: "250px", height: "250px"})
    }else {
        Object.assign(cambiarTamaño.style, {width: "800px", height: "70px"})
    }
})