import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';

const HomePage = lazy(() =>
    import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
    import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
    import(
        './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
    ),
);
const NotFoundPage = lazy(() =>
    import('./pages/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

function App() {
    return (
        <>
            <Header />

            <Suspense fallback={<h1>loading</h1>}>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>

                    <Route path="/movies" exact>
                        <MoviesPage />
                    </Route>

                    <Route path="/movies/:movieId">
                        <MovieDetailsPage />
                    </Route>

                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
}

export default App;
