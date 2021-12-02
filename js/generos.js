//obtengo la url de generos con la api key
let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US';

//consultar los datos en la api

fetch(url)
    .then(function( resp ){
        return resp.json();
    })
    .then(function( resp ){
        colocarGeneros(resp);
    })
    .catch(function( error ){
        alert("Intentelo mas tarde")
    });

function colocarGeneros(resp){

    let listado = document.querySelector('#listadoPeliculas');

    listado.innerHTML = '';

    for(let i = 0; i < resp.genres.length; i++) {
        let id = resp.genres[i].id;
        let nombre = resp.genres[i].name;
        listado.innerHTML += `<article class="generosclase"><a href="./detalle-genero.html?id=${ id }&genero=${ nombre }&tipo=peliculas">${ nombre }</a></article>`;
    }
}

url = 'https://api.themoviedb.org/3/genre/tv/list?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US&page=1';

fetch(url)
    .then(function( resp ){
        return resp.json();
    })
    .then(function( resp ){
        colocarGenerosSeries(resp);
    })
    .catch(function( error ){
        alert("Intentelo mas tarde")
    });

function colocarGenerosSeries(resp){

    let listado = document.querySelector('#listadoSeries');

    listado.innerHTML = '';

    for(let i = 0; i < resp.genres.length; i++) {
        let id = resp.genres[i].id;
        let nombre = resp.genres[i].name;
        listado.innerHTML += `<article class="generosclase"><a href="./detalle-genero.html?id=${ id }&genero=${ nombre }&tipo=series">${ nombre }</a></article>`;
    }

}
