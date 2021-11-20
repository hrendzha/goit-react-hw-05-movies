import { useState, useEffect, lazy, Suspense } from 'react';
import {
    Route,
    Link,
    useParams,
    useRouteMatch,
    useLocation,
} from 'react-router-dom';
import Section from '../../components/Section';
import Container from '../../components/Container';
import MovieCard from '../../components/MovieCard';
import { getMovieDetailsById } from '../../services/moviesApi';
import s from './MovieDetailsPage.module.css';

const MovieCast = lazy(() =>
    import('../../components/MovieCast' /* webpackChunkName: "movie-cast" */),
);
const MovieReviews = lazy(() =>
    import(
        '../../components/MovieReviews' /* webpackChunkName: "movie-reviews" */
    ),
);

function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const { path } = useRouteMatch();
    const { state } = useLocation();

    useEffect(() => {
        getMovieDetailsById(movieId)
            .then(setMovie)
            .catch(e => console.log(e.message));
    }, [movieId]);

    return (
        <Section>
            <Container>
                {movie && (
                    <>
                        <Link
                            to={state?.from?.location || { pathname: '/' }}
                            className={s.goBackLink}
                        >
                            {state?.from?.label || 'Go back'}
                        </Link>

                        <MovieCard movie={movie} from={state?.from} />
                    </>
                )}

                <Suspense fallback={<h1>loading</h1>}>
                    <Route path={`${path}/cast`}>
                        <MovieCast />
                    </Route>

                    <Route path={`${path}/reviews`}>
                        <MovieReviews />
                    </Route>
                </Suspense>
            </Container>
        </Section>
    );
}

export default MovieDetailsPage;
