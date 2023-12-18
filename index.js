let carrito = [];

function agregarAlCarrito(elemento) {
    const producto = elemento.parentNode;
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.nombre === nombre);

    if (productoExistente) {
        // Incrementar la cantidad si ya está en el carrito
        productoExistente.cantidad++;
    } else {
        // Agregar nuevo producto al carrito
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    // Actualizar la interfaz del carrito
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoElemento = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");

    // Limpiar el contenido previo del carrito
    carritoElemento.innerHTML = "";

    // Calcular y mostrar cada producto en el carrito
    let total = 0;
    carrito.forEach(item => {
        const nuevoItem = document.createElement("li");
        nuevoItem.innerHTML = `${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}`;
        carritoElemento.appendChild(nuevoItem);
        total += item.precio * item.cantidad;
    });

    // Actualizar el total
    totalElemento.textContent = total.toFixed(2);
}

function vaciarCarrito() {
    // Vaciar el carrito
    carrito = [];

    // Actualizar la interfaz del carrito
    mostrarCarrito();
}
