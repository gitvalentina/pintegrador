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

        let genres =""
        for (let i =0; i < datos.genres.length; i++ ){
            genres += `<a href="detail-genres.html?idGenero=${datos.genres[i].id}">${datos.genres[i].name} </a>`
        }
    
        series.innerHTML +=`
        <section>
        <h1 class= h1detalles>${datos.original_name}</h1>
        <div class="div2"><img class="imgclase" src="https://image.tmdb.org/t/p/w342${datos.poster_path}"></div>
        <ul class="hdetalles">
        <li>Sinopsis: ${datos.overview}</li>
        <li>Fecha de Estreno: ${datos.first_air_date}</li>
        <li>Rating: ${datos.vote_average}</li>
        <a href="./generos.html?id=${datos.id}"><li>Generos:${genres}</li></a>
        <button class= "fav"> Agregar a Favoritos</button>
        </ul>
        </section>`



let recuperoStorage= localStorage.getItem('favoritosSeries');
console.log(recuperoStorage)


if (recuperoStorage != null){
    listaFavoritos=JSON.parse(recuperoStorage)
}

if (listaFavoritos.includes(tvid)){
document.querySelector(".fav").innerHTML=`<button>Quitar de Favoritos </button>`
console.log(listaFavoritos);
}else{
    document.querySelector(".fav").innerHTML=`<button>Agregar a Favoritos</button>`
    console.log(listaFavoritos);
    }

let agregarAFav= document.querySelector('.fav');
agregarAFav.addEventListener('click', function(){
    if (listaFavoritos.includes(tvid)){
        let sacarID= listaFavoritos.indexOf(tvid);
        listaFavoritos.splice(sacarID, 1);
        agregarAFav.innerHTML=`Agregar a Favoritos`
        console.log(listaFavoritos)
    }
   else {
        listaFavoritos.push(tvid);
        agregarAFav.innerHTML = `Quitar de Favoritos`

    }
    let Storage= JSON.stringify(listaFavoritos);
    localStorage.setItem('favoritosSeries', Storage)
    console.log(localStorage)
})
})
.catch(function (error) {
    console.log(error)
})
})
   
    