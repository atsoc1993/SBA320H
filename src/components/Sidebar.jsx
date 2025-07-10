import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
      <div className='sidebar-links' style={{ display: 'flex', position: 'fixed', flexDirection: 'column', height: '100vh', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', paddingRight: '40px', alignContent: 'center'}}>
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
          <Link to='/page-2'>Dividend Information</Link>
          </li>
        </ul>
      </div>
    )
}