import React, { useState } from "react";
import { default as MenuIcon } from "../../assets/menu";
import "./index.css";
import { NavLink } from "react-router";


const inIframe = () => {
    try {
        return window.self !== window.top;
    } catch (_e: unknown) {
        console.error(_e);
        return true;
    }
};

const baseItems = [
    { label: "Home", path: "/" },
]

const items = inIframe() ? [
    ...baseItems] : [...baseItems, { label: "Mobile", path: "/mobile" }];

export default function Menu({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((current) => !current);
    };

    return <>
        <nav className="navigation">
            <div className="dropdown-container">
                <button onClick={toggleDropdown} className="dropdown-toggle">
                    <MenuIcon />
                </button>
                {isOpen && (
                    <div className="dropdown-menu" onClick={toggleDropdown}>
                        {items.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index} className="dropdown-item"
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </nav>
        {children}
    </>
}