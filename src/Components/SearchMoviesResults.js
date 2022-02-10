import Button from 'react-bootstrap/Button'
import React from 'react'
export function SearchMoviesResults(props) {
    return (
        <div className="searchResultsWrapper">
            <p class="resultsSearchTerm">Results for '{props.search}'</p>
            <div className="results">
                {props.movieDetails !== undefined && props.movieDetails.map((movie, index) => {
                    
                    let checkArray = props.nominations.map(element => element.imdbID == movie.imdbID)
                    let disabledButton = checkArray.includes(true) ? true : false;
                    let rating = movie.imdbRating / 2;
                    const addToNomination = () => {
                        props.setNominations([...props.nominations, {
                            Title: movie.Title,
                            Poster: movie.Poster,
                            Year: movie.Year,
                            imdbID: movie.imdbID,
                            Actors: movie.Actors,
                            Director: movie.Director,
                            Genre: movie.Genre,
                            Plot: movie.Plot,
                            Released: movie.Released,
                            Runtime: movie.Runtime,
                        }])
                    }

                    return (<div className="display_movies" key={index}>
                        <div className="movieInfo">
                            <p className="movieTitle">{movie.Title}</p>
                            <p className="yearAndGenre">{movie.Year} | {movie.Genre}</p>
                            <p className="rating">IMDB Rating:{movie.imdbRating}</p>
                        </div>
                        <Button id="nominateButton" onClick={addToNomination}
                            disabled={disabledButton || props.nominations.length == 5} >
                            Nominate
                        </Button>
                    </div>);
                })}
            </div>
        </div>
    );
}
