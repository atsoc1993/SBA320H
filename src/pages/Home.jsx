
function Home() {

    return (
        <div style={{ display: 'flex', flex: '1', justifyContent: 'center', textAlign: 'center', marginTop: '100px', marginLeft: '240px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '30px', maxWidth: '1000px' }}>
                <h1>Home</h1>
                <h3>What is the purpose of this website?</h3>
                <p>This web application was a skill-based assessment for my, Leo Costa's, bootcamp program. It uses the Securities & Exchange Commission's public API to aggregate
                    history about companies registered with the SEC: eg; Nvidia, Apple, Microsoft, and most other US-based companies.

                </p>
                <br />
                <p>
                    There are two main features on this site:
                </p>
                <ul>
                    <li style={{listStylePosition: 'inside'}}>
                        The Outstanding Debt Search which provides all history of reported outstanding debts owed companies
                    </li>
                    <li style={{listStylePosition: 'inside'}}>
                        Current Dividend Payouts & History
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;