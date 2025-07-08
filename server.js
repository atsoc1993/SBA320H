import express from 'express'
import cors from 'cors'
import axios from 'axios'

let app = express();
const PORT = 3000
app.use(cors());

app.get('/getEarningsByCIK/:cik', async (req, res) => {
        let cik = req.params.cik
        console.log(cik)
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
})
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})