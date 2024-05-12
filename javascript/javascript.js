const abrirBoton = document.getElementById('abrir');
const cuadroTexto = document.getElementById('cuadro');
const cerrarBoton = document.getElementById('cerrar');

abrir.addEventListener('click', () => {
    abrir.style.display = 'none';
    cuadro.style.display = 'block';
    cerrar.style.display = 'block';
});

cerrar.addEventListener('click', () => {
    cuadro.style.display = 'none';
    cuadro.classList.toggle("animcerrar");
    cerrar.style.display = 'none';
    abrir.style.display = 'block';
});


