import React, { useState } from 'react';

import navItems from "../../utility/navItems";
import { BiDownArrow } from "react-icons/all";

import './Nav.css';

export default function Nav() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [itemSelected, setItemSelected] = useState('');

    const handleNavCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    const handleItemSelect = (item) => {
        setItemSelected(item);
        setIsCollapsed(false);
    }

    console.log(itemSelected)
    return (
        <nav className="Nav">
            <div className={`NavLogo ${itemSelected==="Home" ? 'Active' : ''}`}>
                <button
                    type="button"
                    onClick={() => handleItemSelect("Home")}
                >
                    PetCare
                </button>
            </div>
            <ul className={`NavItems ${isCollapsed ? 'NavCollapsed' : ''}`}>
                {
                    navItems.map((item, i) => (
                        <li
                            key={i}
                            className={`NavItem ${itemSelected === item.name ? 'Active' : ''}`}
                        >
                            <button
                                type="button"
                                onClick={() => handleItemSelect(item.name)}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <button className={`NavToggle ${isCollapsed ? "NavToggleRotate" : ""}`} type="button" onClick={handleNavCollapse}>
                 <BiDownArrow />
            </button>
        </nav>
    )
}
