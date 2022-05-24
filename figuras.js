
const ladoCuadrado = 5;

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();



function calcularAreaCuadrado(){
    const input = document.getElementById("ImputCuadrado");
    const value = input.value;
    const perimetro =  this.perimetroCuadrado(value);
    alert("El perimetro del cuadrado es :" +perimetro);
}
