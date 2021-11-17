    let urlSearchParams = new URLSearchParams(location.search)
    let captar = urlSearchParams.get('buscador') //que capte lo que se busco
    console.log(captar); //texto que se busco

    document.querySelector('.peli').innerHTML += `${captar}`
    document.querySelector('.serie').innerHTML += `${captar}`

    let spinner = document.querySelector(".loader");


    fetch('https://api.themoviedb.org/3/search/movie?api_key=184353d8f8f15b5e8908b2560e49a9f3&query=' + captar + '&page=1&include_adult=false')
        .then(function (response) {
            return response.json()
        })

        .then(function (datos) {
            console.log(datos.results);
            spinner.style.display = "none";
            //guardo el array de peliculas
            let arrayPeliculas = datos.results;

            if (arrayPeliculas.length == 0) {
                document.querySelector('section').innerHTML = "<h2 class='resultado-error'> No hay peliculas para tu busqueda </h2>"
            }


            for (let i = 0; i < 6; i++) {
                if (arrayPeliculas[i].poster_path == null) {

                } else {
                    document.querySelector(".pelis-populares").innerHTML += `
                    <article>
                    <a href="detalle-series.html?id=${datos.results[i].id}" class="items-main"><img class="imghome"
                        src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt=""></a>
                        <p>${datos.results[i].title}</p>
                        <p>Puntaje: ${datos.results[i].vote_average} </p>
                    </article>        
              `
                }
            }

        })

        .catch(function (error) {
            console.log('El error fue:' + error);
            spinner.innerHTML = 'Error en el sistema';
        })

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=184353d8f8f15b5e8908b2560e49a9f3&query=${captar}&page=1&include_adult=false`)
        .then(function (response) {
            return response.json()
        })

        .then(function (datos) {
            console.log(datos.results);
            spinner.style.display = "none";
            let arraySeries = datos.results;
            let menorSeis = 6;

            if (arraySeries.length == 0) {
                document.querySelector('.series-populares').innerHTML = "<h2 class='resultado-error'> No hay series para tu busqueda </h2>";
            }
            if (arraySeries.length < 6) {
                menorSeis = arraySeries.length;
            }

            for (let i = 0; i < menorSeis; i++) {
                if (arraySeries[i].poster_path == null) {

                } else {
                    document.querySelector('.series-populares').innerHTML += `
                    <article>
                    <a href="detalle-series.html?id=${datos.results[i].id}" class="items-main"><img class="imghome"
                        src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt=""></a>
                        <p>${datos.results[i].name}</p>
                        <p>Puntaje: ${datos.results[i].vote_average} </p>
                    </article>        
                `;
                }
            }
        })

        .catch(function (error) {
            console.log('El error fue: ' + error);
            spinner.innerHTML = 'Error en la busqueda';
        })
    

  