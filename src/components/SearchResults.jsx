import axios from 'axios'
import { useState } from 'react'
export default function SearchResultsContainer({ data }) {

    const [debtHistory, setDebtHistory] = useState({})
    async function getCompanyDebtHistory({ cik }) {
        let response = await axios.get(`http://localhost:3000/getEarningsByCIK/${cik}`)
        let data = response.data.units.USD

        let formattedData = data.map((debtLog) => {
            return [debtLog.end, debtLog.val]
        })
        let CompanyObject = {
            history: formattedData,
            show: true
        }
        setDebtHistory((previousDebtHistory) => ({ ...previousDebtHistory, [cik]: CompanyObject }))
        console.log(debtHistory)

    }

    let companies = data.map((company) => (
        <div key={company.cik}>
            <>
                <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center' }}>
                    <h1 style={{ width: 'fit-content' }}>{company.name} CIK#: {company.cik}</h1>
                    <button style={{ width: 'fit-content', height: 'fit-content', marginLeft: '25px' }} onClick={() => getCompanyDebtHistory({ cik: company.cik })}>Get Documents</button>
                </div>
                {debtHistory[company.cik] ?
                    <>
                        <button onClick={() => setDebtHistory((previousData) => {
                            let newCompanyData = previousData[company.cik]
                            newCompanyData.show = !newCompanyData.show;
                            return ({ ...previousData, [company.cik]: newCompanyData })
                        })}>
                            {debtHistory[company.cik].show ? 'Minimize' : 'Expand'} </button>
                        {debtHistory[company.cik].show ? debtHistory[company.cik].history.map((debtItem, i) => {
                            return (
                                <div style={{ display: 'flex', flexDirection: 'row' }} key={debtItem[0] + i}>
                                    <p><strong>End:</strong> {debtItem[0]}</p>
                                    <p style={{ marginLeft: '5px' }}><strong>Val:</strong> ${debtItem[1].toLocaleString()}</p>
                                </div>

                            )
                        }) : null}

                    </>
                    : null
                }

            </>
        </div >
    ))
    return companies
}