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



        let genres =""
        for (let i =0; i < datos.genres.length; i++ ){
            genres += `<a href="detail-genres.html?idGenero=${datos.genres[i].id}">${datos.genres[i].name} </a>`
        }
    
    
        movies.innerHTML +=`
        <section>
        <h1 class= h1detalles>${datos.original_title}</h1>
        <div class="div2"><img class="imgclase" src="https://image.tmdb.org/t/p/w342${datos.poster_path}"></div>
        <ul class="hdetalles">
        <li>Sinopsis: ${datos.overview}</li>
        <li>Fecha de Estreno: ${datos.release_date}</li>
        <li>Duracion: ${datos.runtime}</li>
        <li>Rating: ${datos.vote_average}</li>
        <a href="./generos.html?id=${datos.id}"><li>Generos: ${genres}</li></a>
        <button class= "fav"> Agregar a Favoritos</button>
        </ul>
        </section>`

let recuperoStorage= localStorage.getItem('favoritosPeliculas');
console.log(recuperoStorage)

if (recuperoStorage != null){
    listaFavoritos=JSON.parse(recuperoStorage)
}

if (listaFavoritos.includes(movie_id)){
document.querySelector(".fav").innerHTML=`<button>Quitar de Favoritos</button>`
console.log(listaFavoritos);
}else{
document.querySelector(".fav").innerHTML=`<button>Agregar a Favoritos</button>`
console.log(listaFavoritos);
}

let agregarAFav= document.querySelector('.fav');
agregarAFav.addEventListener('click', function(){
    if (listaFavoritos.includes(movie_id)){
        let sacarID= listaFavoritos.indexOf(movie_id);
        listaFavoritos.splice(sacarID, 1);
        agregarAFav.innerHTML=`Agregar a Favoritos`
        console.log(listaFavoritos)
    }
   else {
        listaFavoritos.push(movie_id);
        agregarAFav.innerHTML = `Quitar de Favoritos`

    }
    let Storage= JSON.stringify(listaFavoritos);
    localStorage.setItem('favoritosPeliculas', Storage)
    console.log(localStorage)
})
})
.catch(function (error) {
    console.log(error)
})
})
