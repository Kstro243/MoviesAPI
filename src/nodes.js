const MoviePreview = document.querySelector('.movie-preview');
const TrendingMovies = document.querySelector('.trending-movies');
const PopularMovies = document.querySelector('.popular-movies');
const MovieDetail = document.querySelector('.movie-detail');
const TrendingMoviesPage = document.querySelector('.trending-page');
const HomeNav = document.querySelector('.HomeNav');
const Search = document.querySelector('.Search');
const SearchPage = document.querySelector('.SearchPage');
const SearchValue = document.querySelector('input');

const SpanAside = document.querySelector('.sidebar-div span');
const SideBar = document.querySelector('.sidebar');
const Menu = document.querySelector('.menu');
const categories = document.querySelector('.categories');
const CategoriesDeploy = document.querySelector('.categories-deploy');
const OpenCategoriesIcon = document.querySelector('.open');
const CloseCategoriesIcon = document.querySelector('.close');

const returnHome = document.getElementsByClassName('return');

SearchPage.addEventListener('click', () => {
    location.hash = "#search=" + SearchValue.value;
})
Menu.addEventListener('click', toggleSideBar);
SpanAside.addEventListener('click', toggleSideBar);
CategoriesDeploy.addEventListener('click', toggleCategories);

function toggleSideBar() {
    const isasideclosed = SideBar.classList.contains('inactive');

    if (!isasideclosed) {
        SideBar.classList.add('inactive');
        categories.classList.add('inactive');
        CloseCategoriesIcon.classList.add('inactive');
        OpenCategoriesIcon.classList.remove('inactive');
    } else{
        SideBar.classList.remove('inactive');
    }
};

function toggleCategories(){
    const iscategoriesclosed = categories.classList.contains('inactive');

    if (!iscategoriesclosed) {
        categories.classList.add('inactive');
        OpenCategoriesIcon.classList.remove('inactive');
        CloseCategoriesIcon.classList.add('inactive');
    } else{
        categories.classList.remove('inactive');
        OpenCategoriesIcon.classList.add('inactive');
        CloseCategoriesIcon.classList.remove('inactive');
    }
}

function toggleSearchBar(){
    const isSearchingBarclosed = Search.classList.contains('inactive');

    if (!isSearchingBarclosed) {
        Search.classList.add('inactive');
        HomeNav.classList.remove('inactive');
    } else {
        Search.classList.remove('inactive');
        SearchValue.value = "";
        HomeNav.classList.add('inactive');
    }
}