window.addEventListener('load', function(){

fetch("https://api.themoviedb.org/3/movie/popular?api_key=184353d8f8f15b5e8908b2560e49a9f3")
 .then(function(response){
    return response.json();
 })

 .then(function(datos){
     
    console.log(datos.results);

     for (let i = 0; i < 6; i++) {
         document.querySelector('.pelis-populares').innerHTML += ` 
         <article>
            <a href="detalle-peliculas.html?id=${datos.results[i].id}" class="items-main"><img class="imghome"
            src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="big hero">
            </a>
            <p>${datos.results[i].title}</p>
            <p>${datos.results[i].release_date} </p>
         </article> 
         `;
        }
     })
 .catch(function(error){
    console.log(`El error fue: ${error}`);
 })
})

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=184353d8f8f15b5e8908b2560e49a9f3")
 .then(function(response){
    return response.json();
 })

 .then(function(datos){
     
    console.log(datos.results);

     for (let i = 0; i < 6; i++) {
         document.querySelector('.mas-visto').innerHTML += `
         <article>
            <a href="detalle-peliculas.html?id=${datos.results[i].id}" class="items-main"><img class="imghome"
               src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="big hero">
            </a>
            <p>${datos.results[i].title}</p>
            <p>Puntaje: ${datos.results[i].vote_average} </p>
         </article> 
         `;
        }
     })
 .catch(function(error){
    console.log(`El error fue: ${error}`);
})


fetch("https://api.themoviedb.org/3/tv/popular?api_key=184353d8f8f15b5e8908b2560e49a9f3")
 .then(function(response){
    return response.json();
 })

 .then(function(datos){
     
    console.log(datos.results);

     for (let i = 0; i < 6; i++) {
         document.querySelector('.series-populares').innerHTML += `
         <article>
            <a href="detalle-series.html?id=${datos.results[i].id}" class="items-main"><img class="imghome"
            src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="big hero">
            </a>
            <p>${datos.results[i].name}</p>
            <p>${datos.results[i].first_air_date} </p>
         </article> 
         `;
        }
     })
 .catch(function(error){
    console.log(`El error fue: ${error}`);
 })
