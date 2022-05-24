const lista = [ 100,200,300,500];

/*

function calcularMediaAritmetica(lista){
    let sumarLista1 = 0;


    for(let i = 0; i < lista.length; i++){
        sumarLista1 = sumarLista1 + lista[i];
    
    }
    
    const promediolista1 = sumarLista1 / lista.length
    
    return promediolista1;
}

*/


// OBTENER EL PROMEDIO
function calcularMediaAritmetica(lista){

    const sumarLista1 = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
}



// MEDIANA

const lista1 = [ 100,200,300,500, 900];
 