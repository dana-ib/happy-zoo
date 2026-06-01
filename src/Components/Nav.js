import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav.css';
const Nav = () => {
    return(
        <nav>
<Link to="/">Home</Link>
<Link to="/anm">Animals</Link>
<Link to="/emp">Employees</Link>


 

        </nav>
    );
}
export default Nav;