import axios from 'axios'
import { useState } from 'react'

export default function DividendSearchResults({ data }) {

    const [debtHistory, setDebtHistory] = useState({})
    async function getComapnyDividendHistory({ symbol }) {
        let response = await axios.get(`http://localhost:3000/getDividends/${symbol}`)
        let data = response.data
        console.log(data)
        let formattedData;

        if (data === 'No Data Available') {
            formattedData = data
        } else {
            formattedData = data.map((dividendItem) => {
                return [dividendItem.date, dividendItem.dividend]
            })
        }

        let CompanyObject = {
            history: formattedData,
            show: true
        }

        setDebtHistory((previousDebtHistory) => ({ ...previousDebtHistory, [symbol]: CompanyObject }))
        console.log(debtHistory)

    }

    let companies = data.map((company) => (
        <div key={company.symbol}>
            <>
                <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', borderBlockEnd: '1px solid gray' }}>
                    <h1 style={{ width: 'fit-content' }}>{company.name} | Symbol: {company.symbol}</h1>
                    <button style={{ width: 'fit-content', height: 'fit-content', marginLeft: '25px' }} onClick={() => getComapnyDividendHistory({ symbol: company.symbol })}>Get Dividends</button>
                </div>
                {debtHistory[company.symbol] ?
                    <>
                        <button style={{ marginTop: '10px' }} onClick={() => setDebtHistory((previousData) => {
                            let newCompanyData = previousData[company.symbol]
                            newCompanyData.show = !newCompanyData.show;
                            return ({ ...previousData, [company.symbol]: newCompanyData })
                        })}>
                            {debtHistory[company.symbol].show ? 'Minimize' : 'Expand'} </button>
                        {debtHistory[company.symbol].show && debtHistory[company.symbol].history !== 'No Data Available' ? (
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5px' }}>
                                <strong> Dividend/Share | Date Reported </strong>
                                {debtHistory[company.symbol].history.map((debtItem, i) => {
                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'row', borderBlockEnd: '0.5px solid gray', width: 'fit-content' }} key={debtItem[0] + i}>
                                            <p>${debtItem[1].toLocaleString()}</p>
                                            <p style={{ marginLeft: '70px' }}>{debtItem[0]}</p>
                                        </div>

                                    )
                                })}
                            </div>
                        ) : debtHistory[company.symbol].history === 'No Data Available' ? <p>No data Available</p> : null}

                    </>
                    : null
                }
            </>
        </div >
    ))
    return (
        <div style={{ display: 'flex', flexDirection: 'column', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '30px', margin: '20px' }}>
            {companies}
        </div>
    )
}