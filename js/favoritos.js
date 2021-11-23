window.addEventListener("load" , function(){
    let listaFavoritos= []


    let series1 = document.querySelector('.series1')
    let peliculas1 = document.querySelector('.peliculas1')

if (localStorage.getItem('favoritosSeries') != null){
    listaFavoritos = JSON.parse(localStorage.getItem('favoritosSeries'));
    console.log(listaFavoritos);
    
    for(let i=0; i<listaFavoritos.length; i++){
    fetch(`https://api.themoviedb.org/3/tv/${listaFavoritos[i]}?api_key=e815c822e45566d0a81a08ab74a27687`)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos);

        let imagenSerie = datos.poster_path
        let tituloSerie = datos.original_name
        let idSerie = datos.id
    
    
        series1.innerHTML +=`
        <section>
        <ul class="contenedor-favoritos">
        <li class="items-fav">
        <h1 class= h1detalles>${tituloSerie}</h1>
        <img src="https://image.tmdb.org/t/p/w342${imagenSerie}">
        <a href="detalle-series.html?id=${idSerie}"></a>
        </li>
        </ul>
        </section>`

    })
    .catch(function (error) {
        console.log(error)
    })
    }
}



if (localStorage.getItem('favoritosPeliculas') != null){
    listaFavoritos = JSON.parse(localStorage.getItem('favoritosPeliculas'));
    console.log(listaFavoritos);

    for(let i=0; i<listaFavoritos.length; i++){
        let movie_id= listaFavoritos[i];
    fetch(`https://api.themoviedb.org/3/movie/${listaFavoritos[i]}?api_key=e815c822e45566d0a81a08ab74a27687`)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos);

        let imagenMovie = datos.poster_path
        let tituloMovie = datos.original_title
        let idMovie = datos.id
    
    
        peliculas1.innerHTML +=`
        <section>
        <ul class="contenedor-favoritos">
        <li class="items-fav">
        <h1 class= h1detalles>${tituloMovie}</h1>
        <img class="imgclase" src="https://image.tmdb.org/t/p/w342${imagenMovie}">
        <a href="detalle-peliculas.html?id=${idMovie}"></a>
        </li>
        </ul>
        </section>`
    })
    .catch(function (error) {
        console.log(error)
    }) 
    }
}
})

