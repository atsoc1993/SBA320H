import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function Home() {

    useEffect(() => {
        const getHomeInfo = async () => {
            let response = axios.get('https://api.edgarfiling.sec.gov/status')
            let data = response.data
            console.log(data)
        }

        getHomeInfo();
    }, [])
    return (
        <div>
            <Link to='/' />
            <h1>Home</h1>
        </div>
    )
}

export default Home;