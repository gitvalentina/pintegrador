window.addEventListener("load" , function(){
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let tvid = queryStringObj.get('id');

    let series = document.querySelector('.mainclase');
    let listaFavoritos = [];

    fetch(`https://api.themoviedb.org/3/tv/${tvid}?api_key=e815c822e45566d0a81a08ab74a27687`)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos);

        let imagenSerie = datos.poster_path
        let tituloSerie = datos.original_name
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
        <button class= "fav"> Agregar a Favoritos</button>
        </ul>
        </section>`
     //Defino array para guardar lista de favoritos


//Recuperso datos del storage
//set item agrega una propiedad y sus valores a obj literal
//para ver si habia algo
let recuperoStorage= localStorage.getItem('favoritosSeries');
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
if (listaFavoritos.includes(tvid)){
document.querySelector(".fav").innerHTML=`<button>Agregar a Favoritos</button></a>`
console.log(listaFavoritos);
}
//Agregar a favs
let agregarAFav= document.querySelector('.fav');
agregarAFav.addEventListener('click', function(){
    //si esta en la lista
    if (listaFavoritos.includes(tvid)){
        //lo localizo en array INDEXOF-->LOCALIZAR
        let sacarID= listaFavoritos.indexOf(tvid);
        //y lo saco SPLICE-->SACAR
        listaFavoritos.splice(sacarID, 1);
        //Si ya lo saque --> cambio el texto de link
        agregarAFav.innerHTML=`Agregar a Favoritos`
        console.log(listaFavoritos)
    }
    //si no esta en mi lista
   else {
        //se agrega la canción actual
        listaFavoritos.push(tvid);
        //si ya lo agregué-->cambio texto 
        agregarAFav.innerHTML = `Quitar de Favoritos`

    }
    //guardo el array actualizado como string
    let trackAStorage= JSON.stringify(listaFavoritos);
    //Guardo el string en local storage
    localStorage.setItem('favoritosSeries', trackAStorage)
    //chequeo*/
    console.log(localStorage)
})
})
.catch(function (error) {
    console.log(error)
})
})
   
    