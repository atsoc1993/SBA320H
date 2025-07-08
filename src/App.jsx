import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home';
import WeatherPage from './components/WeatherPage';
import Page2 from './components/Page2';


function App() {

  return (
    <div>
      <ul>
        <Link to='/'>Home</Link>
      </ul>
      <ul>
        <Link to='/weather-page'>Weather</Link>
      </ul>
      <ul>
        <Link to='/page-2'>Page 2</Link>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/weather-page' element={<WeatherPage />} />
        <Route path='/page-2' element={<Page2 />} />
      </Routes>
    </div>
  )
}

export default App;