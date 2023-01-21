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
        categories.classList.add('inactive');
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