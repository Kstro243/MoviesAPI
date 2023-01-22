const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    params: {
        'api_key': '0ae676614853eeb3bf3532227553e64b',
    },
});

// HomePage
async function getTrendingPreview() {
    const {data} = await api("trending/movie/day");
    const movies = data.results;

    //Movie preview poster
    const moviepreview = document.querySelector(".movie-preview");
    moviepreview.innerHTML = ""
    const divtransparent = document.createElement('div');
    divtransparent.classList.add('transparent');
    const imgpreview = document.createElement('img');
    const i = Math.floor(Math.random() * movies.length);
    imgpreview.alt = movies[i].title;
    imgpreview.src = "https://image.tmdb.org/t/p/w500"+ movies[i].poster_path; 
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
        location.hash = "#trending=Trending"
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
            location.hash = "#detail=" + movie.id;
        })

        div.appendChild(img);
    });

    section.appendChild(div);
}

async function getPopularMovies() {
    const {data} = await api("movie/popular");
    const popularS = data.results;
    
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
        location.hash = "#popular=Popular"
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
        img.addEventListener('click', () =>{
            location.hash = "#detail=" + Popular.id;
        }) 

        div.appendChild(img);
    });

    section.appendChild(div);
}

function ImgsinDiv(movies, container) {
    movies.forEach(movie => {
        const img = document.createElement('img');
        img.alt = movie.title;
        img.src = "https://image.tmdb.org/t/p/w500"+ movie.poster_path; 
        img.addEventListener('click', () =>{
            location.hash = "#detail=" + movie.id;
        })
        container.appendChild(img);
    });
}
// HomePage

// Sidebar categories
async function getCategories() {
    const {data} = await api("genre/movie/list");

    const categories = data.genres;

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
// Sidebar categories

// Generic list function
function generateGenericList(nombre, data) {
    const movies = data.results;

    const categoriesdiv = document.querySelector('.trending-page');
    categoriesdiv.innerHTML = "";

    const trendingList = document.createElement('div');
    trendingList.classList.add('trending-list');
    const h4 = document.createElement('h4');
    h4.innerHTML = nombre;
    const span = document.createElement('span');
    span.innerHTML = "arrow_back";
    span.classList.add('material-symbols-outlined');
    span.classList.add('return');
    span.addEventListener('click', () => {
        location.hash = "#home=";
    })
    trendingList.appendChild(h4);
    trendingList.appendChild(span);
    categoriesdiv.appendChild(trendingList);

    const trendingGrid = document.createElement('div');
    trendingGrid.classList.add('trending-grid');

    movies.forEach(category => {
        const img = document.createElement('img');
        img.src = "https://image.tmdb.org/t/p/w500" + category.poster_path;
        img.alt = category.title;
        img.addEventListener('click', () =>{
            location.hash = "#detail=" + category.id;
        })

        trendingGrid.appendChild(img);
    })

    categoriesdiv.appendChild(trendingGrid);
}
// Generic list function

// Generic list
async function getMovieByCategory(id, name) {
    // const {data} = await api("/discover/movie", {
    //     params: {
    //         with_genres: id,
    //     }
    // });

    const {data} = await api(`/discover/movie?with_genres=${id}`);

    generateGenericList(name, data);
}

async function getGenericList(type) {
    if (type === "Popular") {
            var {data} = await api("movie/popular");
        } else if (type == "Trending") {
            var {data} = await api("trending/movie/day");
        } else {
            var {data} = await api(`search/movie?query=${type}`);
        }

    generateGenericList(type, data);
}
// Generic list function

// Get the detail of a movie
async function getMovieById(id) {
    const {data} = await api("movie/" + id);

    const PosterMovieDetail = document.querySelector('.poster-movie-detail');
    PosterMovieDetail.innerHTML = "";
    const returnSpan = document.createElement('span');
    returnSpan.classList.add("material-symbols-outlined");
    returnSpan.classList.add("return");
    returnSpan.addEventListener('click', () => {
        history.back();
    })
    returnSpan.innerHTML = "arrow_back";
    const imgMovieDetail = document.createElement('img');
    imgMovieDetail.src = "https://image.tmdb.org/t/p/w500" + data.poster_path;
    imgMovieDetail.alt = data.title;
    const ShadowDiv = document.createElement('div');
    ShadowDiv.classList.add("shadow");
    PosterMovieDetail.appendChild(returnSpan);
    PosterMovieDetail.appendChild(imgMovieDetail);
    PosterMovieDetail.appendChild(ShadowDiv);

    const MovieDetailInfo = document.querySelector('.movie-detail-info');
    MovieDetailInfo.innerHTML = "";
    const DivTitleStar = document.createElement('div');
    DivTitleStar.classList.add("titleandstar");
        const h4 = document.createElement('h4');
        h4.innerHTML = data.title;
        const StarSpan = document.createElement('span');
        StarSpan.classList.add("material-symbols-outlined");
        StarSpan.innerHTML = "star";
        DivTitleStar.appendChild(h4);
        DivTitleStar.appendChild(StarSpan);
    const h5 = document.createElement('h5');
    h5.innerHTML = data.overview;
    MovieDetailInfo.appendChild(DivTitleStar);
    MovieDetailInfo.appendChild(h5);

    getRecommendedMovies(id);
} 

async function getRecommendedMovies(movieId) {
    const {data} = await api(`movie/${movieId}/recommendations`);
    const movies = data.results;

    const MovieDetailInfo = document.querySelector('.movie-detail-info');
    const recommended = document.createElement('div');
    recommended.classList.add('recommended');
    recommended.innerHTML="";
    ImgsinDiv(movies, recommended);
    MovieDetailInfo.appendChild(recommended);
}
// Get the detail of a movie