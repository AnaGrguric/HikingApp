import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <nav className="nav justify-self-center">
                <h6 className="nav-title"><Link to="/">Samoborsko Gorje</Link></h6>
            </nav>
        )
    }
}
export default Nav;

