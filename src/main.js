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

    const moviepreview = document.querySelector(".movie-preview");
    moviepreview.innerHTML = ""
    const divtransparent = document.createElement('div');
    divtransparent.classList.add('transparent');
    const imgpreview = document.createElement('img');
    imgpreview.alt = movies[0].title;
    imgpreview.src = "https://image.tmdb.org/t/p/w500"+ movies[0].poster_path; 
    moviepreview.appendChild(imgpreview);
    moviepreview.appendChild(divtransparent);
    
    const section = document.querySelector(".trending");
    section.innerHTML = ""
    const h2 = document.createElement('h2');
    h2.innerHTML = `Trending<span class="material-symbols-outlined">local_fire_department</span>`;
    section.appendChild(h2);
    const div = document.createElement('div');

    movies.forEach(movie => {
        const img = document.createElement('img');
        img.alt = movie.title;
        img.src = "https://image.tmdb.org/t/p/w500"+ movie.poster_path; 

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