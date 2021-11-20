window.addEventListener("load" , function(){
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let tvid = queryStringObj.get('id');
    let movie_id = queryStringObj.get('id');

    let recuperoStorage= localStorage.getItem("fav");
    let series1 = document.querySelector('.series1')
    let peliculas1 = document.querySelector('.peliculas1')

    if (recuperoStorage != null){
        listaFavoritos=JSON.parse(recuperoStorage)
        console.log(listaFavoritos)
    }

    for(let i=0; i<listaFavoritos.length; i++){
        let tvid= listaFavoritos[i];
    fetch(`https://api.themoviedb.org/3/tv/${tvid}?api_key=e815c822e45566d0a81a08ab74a27687`)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos);

        let imagenSerie = datos.poster_path
        let tituloSerie = datos.original_name
        let idSerie = datos.id
    
    
        series1.innerHTML +=`
        <article>
        <ul class="contenedor-favoritos">
        <li class="items-fav">
        <h1 class= h1detalles>${tituloSerie}</h1>
        <img src="https://image.tmdb.org/t/p/w342${imagenSerie}">
        <a href="detalle-series.html?id=${idSerie}"></a>
        </li>
        </ul>
        </article>`

    })
    .catch(function (error) {
        console.log(error)
    })
    }
   
    // for(let i=0; i<listaFavoritos.length; i++){
    //     let movie_id= listaFavoritos[i];
    // fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=e815c822e45566d0a81a08ab74a27687`)
    // .then(function(response){
    //     return response.json()
    // })
    // .then(function(datos){
    //     console.log(datos);

    //     let imagenMovie = datos.poster_path
    //     let tituloMovie = datos.original_title
    //     let idMovie = datos.id
    
    
    //     peliculas1.innerHTML +=`
    //     <article>
    //     <ul class="contenedor-favoritos">
    //     <li class="items-fav">
    //     <h1 class= h1detalles>${tituloMovie}</h1>
    //     <img class="imgclase" src="https://image.tmdb.org/t/p/w342${imagenMovie}">
    //     <a href="detalle-peliculas.html?id=${idMovie}"></a>
    //     </li>
    //     </ul>
    //     </article>`
    // })
    // .catch(function (error) {
    //     console.log(error)
    // }) 
})
