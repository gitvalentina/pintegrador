let formulario = document.querySelector('.buscador')
let campoBuscador = document.querySelector(".campo-buscar");
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); //evitamos que el form se envie

    if (campoBuscador.value == "") {
        alert('Ingrese una pelicula/serie') //chequeamos que no este vacio
    } 
    else if(campoBuscador.value.length< 3 ){ //chequeamos que al menos tenga 3 letras
        alert('Ingrese al menos 3 letras')
    }
    else { //envia el formulario
        this.submit()
    }
});

//focus

campoBuscador.addEventListener('focus', function(){
    campoBuscador.style.border = '3px solid blue';
})


