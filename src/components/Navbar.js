import {Link} from 'react-router-dom';
import '../styles/Navbar.css'
function Navbar(){
    return (
        <ul className='nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/scan">Scan</Link></li>
        </ul>
    )
}

export default Navbar;