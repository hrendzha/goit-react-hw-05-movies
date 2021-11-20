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
    goBackLabel: PropTypes.string,
};

function MoviesList({ movies, goBackLabel }) {
    const location = useLocation();

    return (
        <ul>
            {movies.map(({ id, title }) => (
                <li key={id}>
                    <Link
                        to={{
                            pathname: `movies/${id}`,
                            state: {
                                from: {
                                    location,
                                    label: goBackLabel,
                                },
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
