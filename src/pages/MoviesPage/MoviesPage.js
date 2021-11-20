import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'query-string';
import Section from '../../components/Section';
import Container from '../../components/Container';
import MoviesList from '../../components/MoviesList';
import { getMoviesByKeywords } from '../../services/moviesApi';
import s from './MoviesPage.module.css';

function MoviesPage() {
    const [input, setInput] = useState('');
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (!location.search) return;

        const { query } = qs.parse(location.search);

        getMoviesByKeywords(query)
            .then(setMovies)
            .catch(e => console.log(e.message));
    }, [location.search]);

    const handleInputChange = e => setInput(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        history.push({
            ...location,
            search: `query=${input}`,
        });

        setInput('');
    };

    return (
        <Section>
            <Container>
                <form className={s.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        required
                        placeholder="Type movie name"
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Search</button>
                </form>

                {Boolean(movies.length) && (
                    <MoviesList
                        movies={movies}
                        goBackLabel="Go back to movies search"
                    />
                )}
            </Container>
        </Section>
    );
}

export default MoviesPage;
