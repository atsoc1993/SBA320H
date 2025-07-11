# Visit Website
https://super-torrone-9c2e5f.netlify.app/

# U.S. Securities and Exchange Commission Outstanding Debt Reports & Stock Dividend Data Application

- The concept for this SBA revolves around getting publicly available, formal documents that businesses submit to the SEC regarding outstanding debt and respective stock dividend data provided by https://financialmodelingprep.com —both entities provide free APIs.

# SEC & Financial Modeling Prep API
- For the Outstanding Debt search bar implementation, the getter endpoint provided by the SEC (https://data.sec.gov/api/xbrl/companyconcept/CIK######) is used and highly dependent on FMP's (Financial Modeling Prep[s]) CIK endpoint (https://financialmodelingprep.com/api/v3/cik-search/search-name?text); the SEC does not publically disclose CIK #'s per company without an official company account, although CIK#'s are public. After searching for the respective company by name, a CIK# can be obtained from FMP, which can then be used as part of the URL for the get request to the SEC.

- For the Dividend search bar implementation, only FMP's API is used: a ticker is required for a dividend search (https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${ticker}) which we can obtain results for through a company name search through another FMP getter endpoint (https://financialmodelingprep.com/stable/search-name?text)

# Display & Animations
- A sidebar is present containing 3 page links made accessible through the 'react-router-dom' library: Home, Outstanding Debt, and Dividends
- The Outstanding Debt & Dividends pages are highly interchangeable, and their logic moreso differs in back-end implementations, very much less so in front-end integration.
- The home page link, which discloses the nature of the website, currently hosted using netlify @ https://super-torrone-9c2e5f.netlify.app/debt
- There is a carousel with rotating models I created myself in Blender and integrated into the React application with the three-js library. The Apple, Microsoft, and Nvidia logo meshes are cloned from their components in the meshes folder for each render, and the scene is rendered in the Outstanding Debt and Dividend search pages when search bar results are inactive.