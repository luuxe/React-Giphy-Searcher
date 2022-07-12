import './App.css';
import './index.css'
import SearchForm from './Components/SearchForm'
import SearchResults from './Components/SearchResults'
import SearchHeader from './Components/SearchHeader'
import { useState, useEffect } from 'react'


function App() {

  const [images, setImages] = useState([])
  const [searchString, setSearchString] = useState('minions')
  const [lastSearch, setLastSearch] = useState('')

  const searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    limit: 25,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  };

  useEffect(() => {
    getImages();
  }, []);


  function getImages(searchString) {

    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
        setLastSearch(searchString);
        setSearchString('')
      })
      .catch(console.err)
  }

  function handleChange(event) {
    setSearchString(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    getImages(searchString)
  }

  return (
    <div className="App">
      <SearchHeader lastSearch={lastSearch} />
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <SearchResults
        images={images}
      />
    </div>
  );
}

export default App;
