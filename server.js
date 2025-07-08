import express from 'express'
import cors from 'cors'
import axios from 'axios'
import 'dotenv/config'

let app = express();
const PORT = 3000
app.use(cors());


app.get('/search/:text', async (req, res) => {
    console.log("Called")
    console.log(`Text: ${req.params.text}`)
    let response = await axios.get(`https://financialmodelingprep.com/api/v3/cik-search/${req.params.text}?apikey=${process.env.API_KEY}`)
    let data = response.data
    console.log(data)
    res.json(data)
    
})
app.get('/getEarningsByCIK/:cik', async (req, res) => {
        let cik = req.params.cik
        try {
            let response = await axios.get(
                `https://data.sec.gov/api/xbrl/companyconcept/CIK${cik}/us-gaap/AccountsPayableCurrent.json`,
                {
                    headers: {
                        'User-Agent': "Leo Costa; atsoc1993@gmail.com"
                    }
                }
            )
            let data = response.data
            res.send(data)
        } catch {
            res.send('No Data Available')
        }
})
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})