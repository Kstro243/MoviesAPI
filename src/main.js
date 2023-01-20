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