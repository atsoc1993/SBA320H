import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import DebtSearchBar from './pages/debt/DebtSearchBar';
import DividendSearchBar from './pages/dividends/DividendSearchBar';
import './App.css'
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/debt' element={<DebtSearchBar />} />
        <Route path='/page-2' element={<DividendSearchBar />} />
      </Routes>
    </div>
  )
}

export default App;