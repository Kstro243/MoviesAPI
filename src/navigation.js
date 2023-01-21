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

function trendPage(){
    console.log('Trends!');
}

function searchPage() {
    console.log('Search!');
}

function moviePage() {
    console.log('movie!');
}

function categoryPage() {
    console.log('Categories!');
}

function homePage() {
    console.log('Home!');
    getTrendingPreview();
    getCategories();
}