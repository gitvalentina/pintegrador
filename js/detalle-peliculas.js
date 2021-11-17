window.addEventListener("load" , function(){
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let movie_id = queryStringObj.get('id');

    let movies = document.querySelector('.mainclase')

    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=e815c822e45566d0a81a08ab74a27687`)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos);

        let imagenMovie = datos.poster_path
        let tituloMovie = datos.original_title
        let ratingMovie = datos.vote_average
        let releaseMovie = datos.release_date
        let runtimeMovie = datos.runtime
        let overviewMovie = datos.overview
        let genreMovie = datos.genres.length
        let idMovie = datos.id
    
    
        movies.innerHTML +=`
        <article>
        <h1 class= h1detalles>${tituloMovie}</h1>
        <div class="div2"><img class="imgclase" src="https://image.tmdb.org/t/p/w342${imagenMovie}"></div>
        <ul class="hdetalles">
        <li>Sinopsis: ${overviewMovie}</li>
        <li>Fecha de Estreno: ${releaseMovie}</li>
        <li>Duracion: ${runtimeMovie}</li>
        <li>Rating: ${ratingMovie}</li>
        <a href="./generos.html?id=${idMovie}"><li>Generos: ${genreMovie}</li></a>
        <a href="./fav.html?id=${idMovie}"><li>Agregar a Favoritos</li></a>
        </ul>
        </article>`

    })
    .catch(function (error) {
        console.log(error)
    })
    

   

    

})