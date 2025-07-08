import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home';
import OutstandingDebtSearch from './components/OutstandingDebtSearch';
import Page2 from './components/Page2';
import './App.css'

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{display: 'flex', position: 'fixed', flexDirection: 'column', height: '100vh', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', paddingRight: '40px', alignContent: 'center'}}>
        <ul>
          <li>
          <Link to='/'>Home</Link>
          </li>
        </ul>
        <ul>
          <li>
          <Link to='/debt'>Outstanding Debt Search</Link>
          </li>
        </ul>
        <ul>
          <li>
          <Link to='/page-2'>Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/debt' element={<OutstandingDebtSearch />} />
        <Route path='/page-2' element={<Page2 />} />
      </Routes>
    </div>
  )
}

export default App;