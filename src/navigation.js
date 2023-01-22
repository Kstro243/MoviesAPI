for (let i = 0; i < returnHome.length; i++) {
    returnHome[i].addEventListener('click', () => {
            location.hash = "#home="
          })  
};

// document.addEventListener("click", function(e){
//     const target = e.target.closest(".este"); // Or any other selector.
//     if(target){
//       this.location.hash = "#trending=";
//     }
// });

// document.addEventListener("click", function(e){
//     const target = e.target.closest(".detail"); // Or any other selector.
//     if(target){
//       this.location.hash = "#detail=";
//     }
// });
// for (let i = 0; i < imgR.length; i++) {
//     // imgR[i].addEventListener('click', () => {
//     //         // location.hash = "#detail="
//     //         console.log('click');
//     //       })  
//     imgR[i].onclick = console.log('click');
// }

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({location});
    
    if (location.hash.startsWith('#action=')){
        actionPage();
    } else if (location.hash.startsWith('#detail=')) {
        MovieDetailPage();
    } else if (location.hash.startsWith('#trending=')) {
        TrendingPage();
    } else if (location.hash.startsWith('#series=')) {
        seriesPage();
    } else {
        homePage();
    }
}

function actionPage(){
    console.log('Action!');
}

function MovieDetailPage() {
    MoviePreview.classList.add('inactive');
    TrendingMovies.classList.add('inactive');
    TrendingSeries.classList.add('inactive');
    TrendingMoviesPage.classList.add('inactive');
    MovieDetail.classList.remove('inactive');
    console.log('Search!');
}

function TrendingPage() {
    MoviePreview.classList.add('inactive');
    TrendingMovies.classList.add('inactive');
    TrendingSeries.classList.add('inactive');
    TrendingMoviesPage.classList.remove('inactive');
    MovieDetail.classList.add('inactive');
    console.log('Trending!');
}

function seriesPage() {
    console.log('Series!');
}

function homePage() {
    console.log('Home!');
    getTrendingPreview();
    getCategories();
    getTrendingSeries();

    MoviePreview.classList.remove('inactive');
    TrendingMovies.classList.remove('inactive');
    TrendingSeries.classList.remove('inactive');
    TrendingMoviesPage.classList.add('inactive');
    MovieDetail.classList.add('inactive');
}