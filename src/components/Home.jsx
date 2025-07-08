import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import SearchResultsContainer from "./SearchResults";

function Home() {

    // const defaultCompanies = []
    const searchBar = useRef();
    const [searchResults, setSearchResults] = useState(null)


    async function search() {
        let response = await axios.get(`https://financialmodelingprep.com/api/v3/cik-search/${searchBar.current.value}?apikey=YNrEbeq5E60bBHbB2eDgmlCGieUQDYKe`)
        let data = response.data
        setSearchResults(data)
    }
    return (
        <div>
            <Link to='/' />
            <h1>Home</h1>
            <input ref={searchBar}type="text"></input>
            <button onClick={search}>Search</button>
            {searchResults ? <SearchResultsContainer data={searchResults}/>: null}
        </div>
    )
}

export default Home;