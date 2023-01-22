const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

async function getTrendingPreview() {
    const {data} = await api("trending/movie/day");
    const movies = data.results;
    console.log(movies);

    //Movie preview poster
    const moviepreview = document.querySelector(".movie-preview");
    moviepreview.innerHTML = ""
    const divtransparent = document.createElement('div');
    divtransparent.classList.add('transparent');
    const imgpreview = document.createElement('img');
    imgpreview.alt = movies[0].title;
    imgpreview.src = "https://image.tmdb.org/t/p/w500"+ movies[0].poster_path; 
    moviepreview.appendChild(imgpreview);
    moviepreview.appendChild(divtransparent);
    
    //Trending movies
    const section = document.querySelector(".trending-movies");
    section.innerHTML = "";

    const divTexto = document.createElement('div');
    divTexto.classList.add('Trending-Texto');
    const h2 = document.createElement('h2');
    h2.innerHTML = `Trending movies <span class="material-symbols-outlined">local_fire_department</span>`;
    const vermas = document.createElement('h2');
    vermas.innerHTML = "Ver más";
    vermas.classList.add('este');
    vermas.addEventListener('click', () =>{
        location.hash = "#trending="
    })

    divTexto.appendChild(h2);
    divTexto.appendChild(vermas);
    section.appendChild(divTexto);

    const div = document.createElement('div');
    div.classList.add('tre');

    movies.forEach(movie => {
        const img = document.createElement('img');
        img.alt = movie.title;
        img.src = "https://image.tmdb.org/t/p/w500"+ movie.poster_path; 
        img.addEventListener('click', () =>{
            location.hash = "#detail="
        })

        div.appendChild(img);
    });

    section.appendChild(div);
}

async function getTrendingSeries() {
    const {data} = await api("trending/tv/day");
    const series = data.results;
    console.log(series);
    
    //Trending series
    const section = document.querySelector(".trending-series");
    section.innerHTML = ""
    const h2 = document.createElement('h2');
    h2.innerHTML = `Trending series <span class="material-symbols-outlined">local_fire_department</span>`;
    section.appendChild(h2);
    const div = document.createElement('div');

    series.forEach(serie => {
        const img = document.createElement('img');
        img.alt = serie.title;
        img.src = "https://image.tmdb.org/t/p/w500"+ serie.poster_path; 

        div.appendChild(img);
    });

    section.appendChild(div);
}

async function getCategories() {
    const {data} = await api("genre/movie/list");

    const categories = data.genres;
    console.log(categories);

    const categoriesdiv = document.querySelector('.categories');
    categoriesdiv.innerHTML = "";

    categories.forEach(category => {
        const h4 = document.createElement('h4');
        h4.innerHTML = category.name;
        categoriesdiv.appendChild(h4);
    })
}