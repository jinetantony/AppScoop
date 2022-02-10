import React from 'react';
export function SearchMovies(props) {
    const handleChange = (e) => {
        props.setSearch(e.target.value);
    }

    return (
        <div className="searchBarContainer">
            <h3>Movie Title</h3>
            <form className="searchInput" onSubmit={e => { e.preventDefault() }} onChange={handleChange} >
                <div>             
                    <input type="text" placeholder="Search.." />               
                </div>
            </form>
        </div>
    );
}