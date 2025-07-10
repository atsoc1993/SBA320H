import { useRef, useState } from "react";
import DebtSearchResults from "./DebtSearchResults.jsx";
import StockNameThreeScene from '../../components/StockNameThreeScene.jsx'
import axios from 'axios'

export default function DebtSearchBar() {
    const searchBar = useRef();
    const [searchResults, setSearchResults] = useState(null)


    async function search() {
        let response = await axios.get(`http://localhost:3000/cikSearch/${searchBar.current.value}`)
        let data = response.data
        setSearchResults(data)
    }
    return (
        <div style={{ display: 'flex', flex: '1', flexDirection: 'column', alignItems: 'center', marginLeft: '240px'}}>
            <div style={{display: 'flex', flexDirection: 'column', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '30px', justifyContent: 'center'}}>
                <h1 style={{ textAlign: 'center'}}>Outstanding Debt Search</h1>
                <p style={{ textAlign: 'center'}}><i>Try searching for popular companies like Nvidia, Apple, or Microsoft</i></p>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                <input placeholder='Enter a company name!' style={{marginRight: '20px'}}ref={searchBar} type="text"></input>
                <button onClick={search}>Search</button>
                </div>
            </div>
            {searchResults ? <DebtSearchResults data={searchResults} /> : <StockNameThreeScene/>}
        </div>
    )
}