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

async function getPopularMovies() {
    const {data} = await api("movie/popular");
    const popularS = data.results;
    console.log(popularS);
    
    //Popular movies
    const section = document.querySelector(".popular-movies");
    section.innerHTML = ""

    const divTexto = document.createElement('div');
    divTexto.classList.add('Popular-Texto');
    const h2 = document.createElement('h2');
    h2.innerHTML = `Popular movies <span class="material-symbols-outlined">local_fire_department</span>`;
    const vermas = document.createElement('h2');
    vermas.innerHTML = "Ver más";
    vermas.addEventListener('click', () =>{
        location.hash = "#popular="
    })

    divTexto.appendChild(h2);
    divTexto.appendChild(vermas);
    section.appendChild(divTexto);

    const div = document.createElement('div');
    div.classList.add('este');
    popularS.forEach(Popular => {
        const img = document.createElement('img');
        img.alt = Popular.title;
        img.src = "https://image.tmdb.org/t/p/w500"+ Popular.poster_path; 

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
        h4.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`;
            toggleSideBar();
        })

        categoriesdiv.appendChild(h4);
    })
}

async function getMovieByCategory(id, name) {
    const {data} = await api("/discover/movie", {
        params: {
            with_genres: id,
        }
    });

    const categories = data.results;
    console.log(categories);

    const categoriesdiv = document.querySelector('.trending-page');
    categoriesdiv.innerHTML = "";

    const trendingList = document.createElement('div');
    trendingList.classList.add('trending-list');
    const h4 = document.createElement('h4');
    h4.innerHTML = name;
    const span = document.createElement('span');
    span.innerHTML = "arrow_back";
    span.classList.add('material-symbols-outlined');
    span.classList.add('return');
    span.addEventListener('click', () => {
        location.hash = "#home=";
    })
    // trendingList.innerHTML = `<span class="material-symbols-outlined return">arrow_back</span>`
    trendingList.appendChild(h4);
    trendingList.appendChild(span);
    categoriesdiv.appendChild(trendingList);

    const trendingGrid = document.createElement('div');
    trendingGrid.classList.add('trending-grid');

    categories.forEach(category => {
        const img = document.createElement('img');
        img.src = "https://image.tmdb.org/t/p/w500" + category.poster_path;
        img.alt = category.title;

        trendingGrid.appendChild(img);
    })

    categoriesdiv.appendChild(trendingGrid);
}