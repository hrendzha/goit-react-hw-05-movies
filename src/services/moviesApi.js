import axios from 'axios';

const AUTH_TOKEN = 'e51fa7aa1819bb081f9c2dbbae1f5e9d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

function getTrendingMovies() {
    return axios(`/trending/movie/week?api_key=${AUTH_TOKEN}`).then(
        ({ data }) => data.results,
    );
}

function getMoviesByKeywords(keywords) {
    return axios(`/search/movie?api_key=${AUTH_TOKEN}&query=${keywords}`).then(
        ({ data }) => data.results,
    );
}

function getMovieDetailsById(id) {
    return axios(`/movie/${id}?api_key=${AUTH_TOKEN}`).then(({ data }) => data);
}

function getMovieCast(id) {
    return axios(`/movie/${id}/credits?api_key=${AUTH_TOKEN}`).then(
        ({ data }) => data.cast,
    );
}

function getMovieReviews(id) {
    return axios(`/movie/${id}/reviews?api_key=${AUTH_TOKEN}`).then(
        ({ data }) => data.results,
    );
}

export {
    getTrendingMovies,
    getMoviesByKeywords,
    getMovieDetailsById,
    getMovieCast,
    getMovieReviews,
};
