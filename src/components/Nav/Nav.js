import React from 'react';

import './Nav.css';

export default function Nav() {
    return (
        <header>
            <nav className="Nav">
                <ul>
                    <li className="NavItem NavLogo">
                        Pet Care
                    </li>
                    <li className="NavItem">
                        <button>About</button>
                    </li>
                    <li className="NavItem">
                        <button>Services</button>
                    </li>
                    <li className="NavItem">
                        <button>Training</button>
                    </li>
                    <li className="NavItem">
                        <button>Accessories</button>
                    </li>
                    <li className="NavItem">
                        <button>Medi-Care</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
