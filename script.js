// simulador de ecommerce que calcula el total de una compra basada en la cantidad de artículos y su precio, aplicando un descuento si correspond

let articulos = [];
let totalCompra;
let descuentoAplicado;

function entradas() {
    let cantidadArticulos = parseInt(prompt("ingresaa la cantidad de diferentes artículos:"));
    for (let i = 0; i < cantidadArticulos; i++) {
        let nombre = prompt(`ingresa el nombre del articulo ${i + 1}:`);
        let cantidad = parseInt(prompt(`ingresa la cantidad de ${nombre}: +`));
        let precio = parseFloat(prompt(`ingresa el precio de c/u de ${nombre}:`));
        articulos.push({ nombre, cantidad, precio });
    }
}

function calcularTotal(articulos) {
    return articulos.reduce((total, articulo) => total + (articulo.cantidad * articulo.precio), 0);
}

function aplicarDescuento(total) {
    if (total > 100) {
        return total * 0.9; // 10% de descuento
    } else {
        return total;
    }
}

function mostrarResultado(resultado) 
    {
        let resultadosDiv = document.getElementById("resultados");
         resultadosDiv.innerHTML = `<p>El total  es: $${resultado.toFixed(2)}</p>`;
    }

function mostrarArticulos(articulos) 
    {
        let resultadosDiv = document.getElementById("resultados");
        let listaArticulos = articulos.map(articulo => `<li>${articulo.nombre} - Cantidad: ${articulo.cantidad}, Precio unitario: $${articulo.precio.toFixed(2)}</li>`).join("");
        resultadosDiv.innerHTML += `<ul>${listaArticulos}</ul>`;
    }




const tienda = {
        nombre: "WAGON AGENCIA CREATIVA",
        descuento: 0.1
};

const historialCompras = [];

function agregarCompraAlHistorial(compra) {
    historialCompras.push(compra);
}

function buscarComprasPorCantidad(minCantidad) {
    return historialCompras.filter(compra => compra.articulos.some(articulo => articulo.cantidad >= minCantidad));
}

function iniciarSimulador() {
    articulos = [];
    entradas();
    totalCompra = calcularTotal(articulos);
    descuentoAplicado = aplicarDescuento(totalCompra);
    mostrarArticulos(articulos);
    mostrarResultado(descuentoAplicado);
    agregarCompraAlHistorial({ articulos, total: descuentoAplicado });

    console.log("Historial de compras:", historialCompras);
    console.log("Compras con más de 5 artículos:", buscarComprasPorCantidad(5));
}
