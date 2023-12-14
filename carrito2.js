// Verificación de la edad del cliente
let edadCliente = parseInt(prompt('Ingrese su edad'));

const MAYOR_EDAD = 18;
const EDAD_MAXIMA = 65;

if (edadCliente >= MAYOR_EDAD && edadCliente <= EDAD_MAXIMA) {
    alert('Para continuar con su compra ingrese su producto.');
} else {
    alert('La página es solamente para usuarios de entre 18 y 65 años, entrada DENEGADA.');
}

// Array para almacenar los productos en el carrito
const carrito = [];


const nombreProductoInput = document.getElementById('nombreProducto');
const precioProductoInput = document.getElementById('precioProducto');
const cantidadProductoInput = document.getElementById('cantidadProducto');
const agregarProductoBtn = document.getElementById('agregarProductoBtn');
const listaCarrito = document.getElementById('lista-carrito');
const totalElement = document.getElementById('total');

// Evento al hacer clic en el botón "Agregar al Carrito"
agregarProductoBtn.addEventListener('click', () => {
    const nombreProducto = nombreProductoInput.value;
    const precioProducto = parseFloat(precioProductoInput.value);
    const cantidadProducto = parseInt(cantidadProductoInput.value);

    if (isNaN(precioProducto) || isNaN(cantidadProducto)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    agregarProducto(nombreProducto, precioProducto, cantidadProducto);
});

function agregarProducto(nombre, precio, cantidad) {
    carrito.push({ nombre, precio, cantidad });
    actualizarCarritoEnDOM();
}

function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
}

function aplicarDescuento(total, cantidad) {
    if (cantidad >= 5) {
        return total * 0.8;
    }
    return total;
}


const limpiarCarritoBtn = document.getElementById('limpiarCarritoBtn');

// Evento al hacer clic en el botón "Limpiar Carrito"
limpiarCarritoBtn.addEventListener('click', () => {
    carrito.length = 0;  // Limpiar el array del carrito
    actualizarCarritoEnDOM();
});


function actualizarCarritoEnDOM() {
    // Limpiar el contenido actual del carrito en el DOM
    listaCarrito.innerHTML = '';

    // Actualizar la lista del carrito en el DOM con los productos actuales
    carrito.forEach(producto => {
        const nuevoProducto = document.createElement('li');
        nuevoProducto.textContent = `${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad}`;
        listaCarrito.appendChild(nuevoProducto);
    });

    // Actualizar el total en el DOM
    totalElement.textContent = `Total: $${calcularTotal().toFixed(2)}`};

    function obtenerCarrito() {
        return JSON.parse(localStorage.getItem('carrito')) || [];
      }
      
      // Función para agregar un producto al carrito
      function agregarAlCarrito(producto) {
        // Obtener el carrito actual desde el almacenamiento local
        let carrito = obtenerCarrito();
      
        // Agregar el nuevo producto al carrito
        carrito.push(producto);
      
        // Actualizar el almacenamiento local con el carrito actualizado
        localStorage.setItem('carrito', JSON.stringify(carrito));
      
        console.log('Producto agregado al carrito:', producto);}

        