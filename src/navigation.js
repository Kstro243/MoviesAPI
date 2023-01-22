for (let i = 0; i < returnHome.length; i++) {
    returnHome[i].addEventListener('click', () => {
            location.hash = "#home="
          })  
};

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({location});
    
    if (location.hash.startsWith('#category=')){
        categoryPage();
    } else if (location.hash.startsWith('#detail=')) {
        MovieDetailPage();
    } else if (location.hash.startsWith('#trending=')) {
        TrendingPage();
    } else if (location.hash.startsWith('#popular=')) {
        PopularPage();
    } else {
        homePage();
    }
}

function categoryPage(){
    MoviePreview.classList.add('inactive');
    TrendingMovies.classList.add('inactive');
    PopularMovies.classList.add('inactive');
    TrendingMoviesPage.classList.remove('inactive');
    MovieDetail.classList.add('inactive');

    const [_, categoryInfo] = location.hash.split('=');
    const [categoryId, categoryName] = categoryInfo.split('-');
    getMovieByCategory(categoryId, categoryName);

    console.log('Categories!');
}

function MovieDetailPage() {
    MoviePreview.classList.add('inactive');
    TrendingMovies.classList.add('inactive');
    PopularMovies.classList.add('inactive');
    TrendingMoviesPage.classList.add('inactive');
    MovieDetail.classList.remove('inactive');
    console.log('Search!');
}

function TrendingPage() {
    MoviePreview.classList.add('inactive');
    TrendingMovies.classList.add('inactive');
    PopularMovies.classList.add('inactive');
    TrendingMoviesPage.classList.remove('inactive');
    MovieDetail.classList.add('inactive');

    const [_, tipo] = location.hash.split('=');
    getGenericList(tipo);
    console.log('Trending!');
}

function PopularPage() {
    MoviePreview.classList.add('inactive');
    TrendingMovies.classList.add('inactive');
    PopularMovies.classList.add('inactive');
    TrendingMoviesPage.classList.remove('inactive');
    MovieDetail.classList.add('inactive');

    const [_, tipo] = location.hash.split('=');
    getGenericList(tipo);
    console.log('Popular!');
}

function homePage() {
    console.log('Home!');
    getTrendingPreview();
    getCategories();
    getPopularMovies();

    MoviePreview.classList.remove('inactive');
    TrendingMovies.classList.remove('inactive');
    PopularMovies.classList.remove('inactive');
    TrendingMoviesPage.classList.add('inactive');
    MovieDetail.classList.add('inactive');
}