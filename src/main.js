async function getTrendingPreview() {
    const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY);
    const data = await res.json();
    const movies = data.results;
    console.log(movies);

    const moviepreview = document.querySelector(".movie-preview");
    const imgpreview = document.createElement('img');
    imgpreview.alt = movies[0].title;
    imgpreview.src = "https://image.tmdb.org/t/p/w500"+ movies[0].poster_path; 
    moviepreview.appendChild(imgpreview)

    const section = document.querySelector(".trending");
    const div = document.createElement('div');

    movies.forEach(movie => {
        const img = document.createElement('img');
        img.alt = movie.title;
        img.src = "https://image.tmdb.org/t/p/w500"+ movie.poster_path; 

        div.appendChild(img);
    });

    section.appendChild(div);
}
getTrendingPreview();

async function getCategories() {
    const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY);
    const data = await res.json();

    const categories = data.genres;
    console.log(categories);

    const categoriesdiv = document.querySelector('.categories');

    categories.forEach(category => {
        const h4 = document.createElement('h4');
        h4.innerHTML = category.name;
        categoriesdiv.appendChild(h4);
    })
}
getCategories();

const SpanAside = document.querySelector('.sidebar-div span');
const SideBar = document.querySelector('.sidebar');
const Menu = document.querySelector('.menu');
const categories = document.querySelector('.categories');
const CategoriesDeploy = document.querySelector('.categories-deploy');

Menu.addEventListener('click', toggleSideBar);
SpanAside.addEventListener('click', toggleSideBar);
CategoriesDeploy.addEventListener('click', toggleCategories);

function toggleSideBar() {
    const isasideclosed = SideBar.classList.contains('inactive');

    if (!isasideclosed) {
        SideBar.classList.add('inactive');
    } else{
        SideBar.classList.remove('inactive');
    }
};

function toggleCategories(){
    const iscategoriesclosed = categories.classList.contains('inactive');

    if (!iscategoriesclosed) {
        categories.classList.add('inactive');
    } else{
        categories.classList.remove('inactive');
    }
}