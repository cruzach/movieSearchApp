const KEY = '9360baaf';

const processMovie = movie => ({
    key: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
});

export default async function fetchMovies(query) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${KEY}`);
        const results = await response.json();
        return results.Search.map(processMovie);
    } catch (err) {
        return alert('Error retrieving movie information, try a different search query, and be sure not to end your search with a space.');
    }
}