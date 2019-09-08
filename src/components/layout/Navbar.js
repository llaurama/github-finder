import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, tittle }) => {
    return (
        <nav className="navbar bg-primary">
            <i className={icon} /> {tittle}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    tittle: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    tittle: 'Github Finder',
    icon: 'fab fa-github'
};

export default Navbar;
