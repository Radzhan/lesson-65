import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-sm" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container-fluid">
                <span className="navbar-brand">Blog</span>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pages/about" className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pages/history" className="nav-link">
                                History
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pages/quotes" className="nav-link">
                                Quotes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pages/news" className="nav-link">
                                News
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pages/contacts" className="nav-link">
                                Contacts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pages/admin" className="nav-link">
                                Admin
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;