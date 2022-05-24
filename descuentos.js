const price = 100;
const descuento = 0.15;



function calcularPrecioConDescuento(){
    const precio = document.getElementById("precio");
    const descuento = document.getElementById("descuento");

    const valuePrecio = precio.value;
    const valueDescueto =  descuento.value;

    const ResultadoParrafo =  document.getElementById("Result");
    ResultadoParrafo.innerText = "el precio con descuento es de:  $" + valuePrecio * (1 - valueDescueto);

    return valuePrecio * (1 - valueDescueto);
}