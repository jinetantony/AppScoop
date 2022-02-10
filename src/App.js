import './App.css';
import { useEffect, useState } from 'react';
import { HeadingSection } from './Components/HeadingSection';
import { SearchMovies } from './Components/SearchMovies';
import { SearchMoviesResults } from './Components/SearchMoviesResults';
import { Nominations } from './Components/Nominations';

function App() {
  const [search, setSearch] = useState('');
  const [movieDetails, setMovieDetails] = useState([]);
  const [results, setResults] = useState('');
  const [nominations, setNominations] = useState([]);
  const [IDs, setIDs] = useState([]);
  const [deleteBanner, setDeleteBanner] = useState(false);


  const getMovies = async () => {
    let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=340fc99a&s=${search}&r=json`);
    let jsonResponse = await response.json();
    setResults(jsonResponse)

    if (jsonResponse.Search !== undefined) {
      let imdbIDs = jsonResponse.Search.map(element => element.imdbID);
      return getMovieDetails(imdbIDs);
    }
  }

  const getMovieDetails = async (IDs) => {
    let data = IDs.map(ID => getMovieDetailsAPI(ID));
    let dataArray = Promise.all(data)
    return dataArray;
  }

  const getMovieDetailsAPI = async (ID) => {
    let response = await fetch(`https://www.omdbapi.com/?apikey=340fc99a&i=${ID}`);
    let jsonResponse = await response.json();
    return jsonResponse;
  }
  
  useEffect(() => {
      getMovies().then(data => setMovieDetails(data));
  }, [search]);


  let banner;
  if (deleteBanner == false && nominations.length == 5) {
    banner = (<div id='movieLimit' onClick={() => setDeleteBanner(true)} >
      <h3 class="limitReached">Nomination Limit Reached</h3>
      <h4 class="thanksForVoting">Thank you for voting</h4>
      <h5 class="hideBanner">(Click Banner To Hide)</h5>
    </div>);
  }
  // if (deleteBanner == true && nominations.length == 5) {
  //   banner = <div></div>;
  // }

  return (
    <div className="App">
      <div className="pageWrapper">
        <HeadingSection />
        <SearchMovies setSearch={setSearch} />
        {banner}
        <div className="Wrapper">
          {results.Response == 'True' ? <SearchMoviesResults nominations={nominations} search={search} setNominations={setNominations} IDs={IDs} setIDs={setIDs} movieDetails={movieDetails} /> : <h2 id="errorContainer">{results.Error}</h2>}
          <Nominations nominations={nominations} setNominations={setNominations} setDeleteBanner={setDeleteBanner} />
        </div>
      </div>
    </div>
  );
}

export default App;
