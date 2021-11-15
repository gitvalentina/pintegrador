let formulario = document.querySelector('.buscador')
let campoBuscador = document.querySelector(".campo-buscar");
formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    if (campoBuscador.value == "") {
        alert('Ingrese una pelicula/serie')
    } 
    else if(campoBuscador.value.length< 3 ){
        alert('Ingrese al menos 3 letras')
    }
    else {
        this.submit()
    }
});