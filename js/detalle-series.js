window.addEventListener("load" , function(){
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let tv_id = queryStringObj.get('id');

    let series = document.querySelector('.mainclase')

    fetch(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=e815c822e45566d0a81a08ab74a27687`)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos);

        let imagenSerie = datos.poster_path
        let tituloSerie = datos.original_title
        let ratingSerie = datos.vote_average
        let releaseSerie = datos.first_air_date
        let overviewSerie = datos.overview
        let genreSerie = datos.genres.length
        let idSerie = datos.id
    
    
        series.innerHTML +=`
        <section>
        <h1 class= h1detalles>${tituloSerie}</h1>
        <div class="div2"><img class="imgclase" src="https://image.tmdb.org/t/p/w342${imagenSerie}"></div>
        <ul class="hdetalles">
        <li>Sinopsis: ${overviewSerie}</li>
        <li>Fecha de Estreno: ${releaseSerie}</li>
        <li>Rating: ${ratingSerie}</li>
        <a href="./generos.html?id=${idSerie}"><li>Generos: ${genreSerie}</li></a>
        <a href="./fav.html?id=${idSerie}"><li>Agregar a Favoritos</li></a>
        </ul>
        </section>`

    })
    .catch(function (error) {
        console.log(error)
    })
    

   

    

})