import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import s from './MovieCard.module.css';

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    from: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

function MovieCard({ movie, from }) {
    const { url } = useRouteMatch();

    return (
        <>
            <article className={s.movieCard}>
                <img
                    className={s.poster}
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    alt={movie.title}
                    width="342"
                    height="513"
                />
                <div className={s.wrapper}>
                    <h1 className={s.mb}>
                        {movie.title} ({movie.release_date.substring(0, 4)})
                    </h1>
                    <p className={s.mb}>Users score: {movie.vote_average}</p>
                    <p>
                        <b>Overview:</b>
                    </p>
                    <p className={s.mb}>{movie.overview}</p>
                    <p>
                        <b>Genres:</b>
                    </p>
                    <p>
                        {movie.genres.reduce(
                            (acc, { name }) => `${acc} ${name}`,
                            '',
                        )}
                    </p>
                </div>
            </article>

            <div className={s.addInf}>
                <p>Additional information:</p>
                <ul>
                    <li>
                        <Link
                            to={{
                                pathname: `${url}/cast`,
                                state: {
                                    from,
                                },
                            }}
                        >
                            Cast
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: `${url}/reviews`,
                                state: {
                                    from,
                                },
                            }}
                        >
                            Reviews
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MovieCard;
