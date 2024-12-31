import './../../css/NavBar.css'

import { Link } from 'react-router-dom'

var NavBar=()=>{
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/useref' >UseRef </Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><Link to='/useeffect' >UseEffect </Link></li>
                    <li><Link to='/usecon' >UseContext </Link></li>
                    
                </ul>
            </nav>
        </header>
    )
}
export default NavBar