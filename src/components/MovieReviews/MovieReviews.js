import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/moviesApi';
import s from './MovieReviews.module.css';

function MovieReviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews(movieId)
            .then(setReviews)
            .catch(e => console.log(e.message));
    }, [movieId]);

    return Boolean(reviews.length) ? (
        <ul>
            {reviews.map(({ id, author, content }) => (
                <li key={id} className={s.item}>
                    <b className={s.author}>Author: {author}</b>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    ) : (
        <p>We don't have any reviews for this movie</p>
    );
}

export default MovieReviews;
