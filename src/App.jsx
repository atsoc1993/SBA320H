import { Route, Routes, Router } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Home from './Home';
import WeatherPage from './WeatherPage';
import Page2 from './Page2';


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