import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

function MoviesList({ movies }) {
    const location = useLocation();

    return (
        <ul>
            {movies.map(({ id, title }) => (
                <li key={id}>
                    <Link
                        to={{
                            pathname: `movies/${id}`,
                            state: {
                                from: location,
                            },
                        }}
                    >
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default MoviesList;
