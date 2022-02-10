import React from 'react'
import Button from 'react-bootstrap/Button'
export function Nominations(props) {
    return (
        <div className="nominationsWrapper">
            <h3>Nominations</h3>
            <div className="cardWrapper">
                {props.nominations.map((movie, index) => {
                        Image = movie.Poster;
                   

                    const deleteNomination = () => {
                        let newList = props.nominations.filter(removeMovie => removeMovie.imdbID !== movie.imdbID);
                        props.setNominations(newList);
                        props.setDeleteBanner(false);
                    }

                    return (
                        <div className="nomination" key={index}>
                            <img src={Image} className="nominationImage" />
                            <div className="nominationsDetails">
                                <p className="Title">{movie.Title}</p>
                                <p className="Plot">{movie.Plot}</p>
                                <div className="nominationMovieInfoContainer">
                                    <div>
                                        <div className="nominationsInfoSubContainer">
                                            <p id="runtime">{movie.Runtime}</p>
                                            <p id="released">{movie.Released}</p>
                                        </div>
                                        <p id="director">Director: {movie.Director}</p>
                                    </div>
                                    <Button className='btn btn-sm' id="removebutton" onClick={deleteNomination}>
                                        Remove
                                   </Button>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}
