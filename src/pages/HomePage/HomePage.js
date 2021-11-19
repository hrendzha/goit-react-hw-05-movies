import { useState, useEffect } from 'react';
import Container from '../../components/Container';
import Section from '../../components/Section';
import MoviesList from '../../components/MoviesList';
import { getTrendingMovies } from '../../services/moviesApi';
import s from './HomePage.module.css';

function HomePage() {
    console.log('render HomePage ' + Date.now());

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies()
            .then(setMovies)
            .catch(e => console.log(e.message));
    }, []);

    return (
        <Section>
            <Container>
                <h2 className={s.title}>Trending today</h2>

                {Boolean(movies.length) && <MoviesList movies={movies} />}
            </Container>
        </Section>
    );
}

export default HomePage;
