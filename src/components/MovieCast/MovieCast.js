import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/moviesApi';
import s from './MovieCast.module.css';

function MovieCast() {
    console.log('render MovieCast ' + Date.now());

    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieCast(movieId)
            .then(setCast)
            .catch(e => console.log(e.message));
    }, [movieId]);

    return (
        <>
            {Boolean(cast.length) && (
                <ul className={s.list}>
                    {cast.map(({ cast_id, name, profile_path, character }) => (
                        <li key={cast_id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                                alt={name}
                                width="185"
                                height="278"
                            />
                            <span>{name}</span>
                            <p>Character: {character}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default MovieCast;
