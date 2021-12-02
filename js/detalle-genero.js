//obtengo los valores que vienen por query string
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const genero = urlParams.get('genero');
const tipo = urlParams.get('tipo');
let url;

if(tipo == 'series') {
    url = 'https://api.themoviedb.org/3/discover/tv?api_key=819b7c86c8607512f0fdebc52441505d&with_genres=' + id;
}

if(tipo == 'peliculas') {
    url = 'https://api.themoviedb.org/3/discover/movie?api_key=819b7c86c8607512f0fdebc52441505d&with_genres=' + id;
}

const titulo = document.querySelector('.h1dgenero');

titulo.innerText = genero;

//consultar los datos en la api

fetch(url)
    .then(function( resp ){
        return resp.json();
    })
    .then(function( resp ){
        
        let listado = document.querySelector('.uldetallegenero');
            
        for(let i = 0; i < resp.results.length; i++) {

            if(resp.results[i].backdrop_path != null) {

                let id = resp.results[i].id;
                let foto = 'https://image.tmdb.org/t/p/w342' + resp.results[i].backdrop_path;
                let nombre;

                //pregunto si es serie o pelicula entonces saco el nombre del objeto
                if(tipo == 'series') {
                    nombre = resp.results[i].name;
                }
                
                if(tipo == 'peliculas') {
                    nombre = resp.results[i].title;
                }
                
                listado.innerHTML += `
                    <li>
                        <a href="./detalle-${ tipo }.html?id=${ id }">
                            <img class="imgh" src="${ foto }" alt="">
                        </a>
                        <h3 class="h3clase">${ nombre }</h3>
                    </li>`;
            }
        }

    })
    .catch(function( error ){
        alert("Intentelo mas tarde")
    })
