import { useRef, useState } from "react";
import SearchResultsContainer from "./SearchResults";
import axios from 'axios'

export default function OutstandingDebtSearch() {
    const searchBar = useRef();
    const [searchResults, setSearchResults] = useState(null)


    async function search() {
        let response = await axios.get(`http://localhost:3000/search/${searchBar.current.value}`)
        let data = response.data
        setSearchResults(data)
    }
    return (
        <div style={{ display: 'flex', flex: '1', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <h1 style={{ textAlign: 'center'}}>Outstanding Debt Search</h1>
                <p style={{ textAlign: 'center'}}><i>Try searching for popular companies like Nvidia, Apple, or Microsoft</i></p>
            </div>
            <div >
                <input ref={searchBar} type="text"></input>
                <button onClick={search}>Search</button>
            </div>
            {searchResults ? <SearchResultsContainer data={searchResults} /> : null}
        </div>
    )
}