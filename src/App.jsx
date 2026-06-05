import { Link, Outlet } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
     <nav>
        <Link to="/student">Student</Link>
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </>
  )
}

export default App;
