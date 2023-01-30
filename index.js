// referencias 

const contenedorResultado = document.querySelector('header');
const operadores = document.querySelectorAll('.btn-success');
const valores = document.querySelectorAll('.btn-light');
const botonCalcular = document.querySelector('.btn-danger');
const botonReiniciar = document.querySelector('.btn-warning');


// funciones 

const actualizarValor = (valor) => {
    const valorActual = contenedorResultado.innerText;
    let nuevoValor = "";

    if( valorActual == 0 ) nuevoValor = valor;
    else if( valorActual === 'Syntax ERROR' ){
        nuevoValor = "0";
    }
    else nuevoValor = valorActual + valor;

    contenedorResultado.innerText = nuevoValor.replaceAll(' ', '');
}

const calcularValor = () => {
    const valorActual = (contenedorResultado.innerText).replaceAll('x', '*');
    try {
        const valorCalculado = eval( valorActual );
        contenedorResultado.innerText = valorCalculado;
    } 
    catch (error) {
        contenedorResultado.innerText = 'Syntax ERROR';        
    }
}


// eventos 


operadores.forEach( btn => {
    btn.addEventListener('click', () => {
        const texto = btn.textContent;
        actualizarValor(texto);
    })
});


valores.forEach( btn => {
    btn.addEventListener('click', () => {
        const texto = btn.textContent;
        actualizarValor(texto);
    })
});

botonReiniciar.addEventListener( 'click', () => {
    contenedorResultado.innerText = 0;
})

botonCalcular.addEventListener( 'click', () => {
    calcularValor();
})





