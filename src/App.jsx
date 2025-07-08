import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home';
import OutstandingDebtSearch from './components/OutstandingDebtSearch';
import Page2 from './components/Page2';
import './App.css'

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <ul>
          <Link to='/'>Home</Link>
        </ul>
        <ul>
          <Link to='/debt'>Outstanding Debt Search</Link>
        </ul>
        <ul>
          <Link to='/page-2'>Page 2</Link>
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