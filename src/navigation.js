window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({location});
    
    if (location.hash.startsWith('#trends=')){
        trendPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        moviePage();
    } else if (location.hash.startsWith('#category=')) {
        categoryPage();
    } else {
        homePage();
    }
}

function actionPage(){
    console.log('Action!');
}

function searchPage() {
    console.log('Search!');
}

function moviePage() {
    console.log('Movie!');
}

function seriesPage() {
    console.log('Series!');
}

function homePage() {
    console.log('Home!');
    getTrendingPreview();
    getCategories();
    getTrendingSeries();
}