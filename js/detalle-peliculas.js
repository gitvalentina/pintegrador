window.addEventListener("load" , function(){
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let movie_id = queryStringObj.get('id');

    let movies = document.querySelector('.mainclase')
    let listaFavoritos = []

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
        <section>
        <h1 class= h1detalles>${tituloMovie}</h1>
        <div class="div2"><img class="imgclase" src="https://image.tmdb.org/t/p/w342${imagenMovie}"></div>
        <ul class="hdetalles">
        <li>Sinopsis: ${overviewMovie}</li>
        <li>Fecha de Estreno: ${releaseMovie}</li>
        <li>Duracion: ${runtimeMovie}</li>
        <li>Rating: ${ratingMovie}</li>
        <a href="./generos.html?id=${idMovie}"><li>Generos: ${genreMovie}</li></a>
        <button class= "fav"> Agregar a Favoritos</button>
        </ul>
        </section>`

            //Recuperso datos del storage
//set item agrega una propiedad y sus valores a obj literal
//para ver si habia algo
let recuperoStorage= localStorage.getItem('favoritosPeliculas');
console.log(recuperoStorage)
//en el caso de que haya elementos en storage. Osea no sea nulo,
if (recuperoStorage != null){
    //transformo el string en array
    //parse transforma a json en obj literal
    listaFavoritos=JSON.parse(recuperoStorage)//Parse toma cadena de texto en JSON y lo transforma en objeto literal
}
// Me fijo si el id de la canción esta en la lista
//si esta cambio el texto para sacar
//includes servia para ver si está o no
if (listaFavoritos.includes(movie_id)){
document.querySelector(".fav").innerHTML=`<button>Agregar a Favoritos</button></a>`
console.log(listaFavoritos);
}
//Agregar a favs
let agregarAFav= document.querySelector('.fav');
agregarAFav.addEventListener('click', function(){
    //si esta en la lista
    if (listaFavoritos.includes(movie_id)){
        //lo localizo en array INDEXOF-->LOCALIZAR
        let sacarID= listaFavoritos.indexOf(movie_id);
        //y lo saco SPLICE-->SACAR
        listaFavoritos.splice(sacarID, 1);
        //Si ya lo saque --> cambio el texto de link
        agregarAFav.innerHTML=`Agregar a Favoritos`
        console.log(listaFavoritos)
    }
    //si no esta en mi lista
   else {
        //se agrega la canción actual
        listaFavoritos.push(movie_id);
        //si ya lo agregué-->cambio texto 
        agregarAFav.innerHTML = `Quitar de Favoritos`

    }
    //guardo el array actualizado como string
    let trackAStorage= JSON.stringify(listaFavoritos);
    //Guardo el string en local storage
    localStorage.setItem('favoritosPeliculas', trackAStorage)
    //chequeo*/
    console.log(localStorage)
})
})
.catch(function (error) {
    console.log(error)
})
})
