import axios from 'axios'
import { useState } from 'react'
export default function SearchResultsContainer({ data }) {

    const [debtHistory, setDebtHistory] = useState({})
    async function getCompanyDebtHistory({ cik }) {
        let response = await axios.get(`http://localhost:3000/getEarningsByCIK/${cik}`)
        let data = response.data

        let formattedData;

        if (data === 'No Data Available') {
            formattedData = data
        } else {
            formattedData = data.units.USD.map((debtLog) => {
                return [debtLog.end, debtLog.val]
            })
        }

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
                <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', borderBlockEnd: '1px solid gray'}}>
                    <h1 style={{ width: 'fit-content' }}>{company.name} CIK#: {company.cik}</h1>
                    <button style={{ width: 'fit-content', height: 'fit-content', marginLeft: '25px' }} onClick={() => getCompanyDebtHistory({ cik: company.cik })}>Get Documents</button>
                </div>
                {debtHistory[company.cik] ?
                    <>
                        <button style={{ marginTop: '10px'}} onClick={() => setDebtHistory((previousData) => {
                            let newCompanyData = previousData[company.cik]
                            newCompanyData.show = !newCompanyData.show;
                            return ({ ...previousData, [company.cik]: newCompanyData })
                        })}>
                            {debtHistory[company.cik].show ? 'Minimize' : 'Expand'} </button>
                        {debtHistory[company.cik].show && debtHistory[company.cik].history !== 'No Data Available' ? (
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5px' }}>
                                <strong>Outstanding Debt | Date Reported </strong>
                                {debtHistory[company.cik].history.map((debtItem, i) => {
                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'row', borderBlockEnd: '0.5px solid gray', width: 'fit-content'}} key={debtItem[0] + i}>
                                            <p>${debtItem[1].toLocaleString()}</p>
                                            <p style={{ marginLeft: '30px' }}>{debtItem[0]}</p>
                                        </div>

                                    )
                                })}
                            </div>
                        ) : debtHistory[company.cik].history === 'No Data Available' ? <p>No data Available</p> : null}

                    </>
                    : null
                }

            </>
        </div >
    ))
    return (
        <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', borderRadius: '10px', padding: '30px', margin: '20px'}}>
            {companies}
        </div>
    )
}