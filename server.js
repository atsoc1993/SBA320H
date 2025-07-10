import express from 'express'
import cors from 'cors'
import axios from 'axios'
import 'dotenv/config'

let app = express();
const PORT = 3000
app.use(cors());


app.get('/cikSearch/:text', async (req, res) => {
    let response = await axios.get(`https://financialmodelingprep.com/api/v3/cik-search/${req.params.text}?apikey=${process.env.API_KEY}`)
    let data = response.data
    return res.json(data)
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
            if (data.length === 0) {
                return res.send('No Data Available')
            }
            return res.send(data)
        } catch {
            return res.send('No Data Available')
        }
})

app.get('/nameSearch/:text', async (req, res) => {
    let text = req.params.text
    let response = await axios.get(`https://financialmodelingprep.com/stable/search-name?query=${text}&apikey=${process.env.API_KEY}`)
    let data = response.data
    return res.send(data)
})
app.get('/getDividends/:ticker', async (req, res) => {
    try {

        let ticker = req.params.ticker
        let response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${ticker}?apikey=${process.env.API_KEY}`)
        let data = response.data['historical']
        if (data.length === 0) {
            return res.send('No Data Available')
        }
        return res.send(data)
    } catch {
        return res.send('No Data Available')

    }
})
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})