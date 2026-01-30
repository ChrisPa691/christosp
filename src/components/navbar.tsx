import Link from 'next/link';
import React from 'react';
import '@/styles/navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link href="/">Christos</Link>
                </div>
                <div className="navbar-right">
                    <ul className="navbar-menu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    {/* Optional: Uncomment to add theme toggle */}
                    {/* <button className="theme-toggle" aria-label="Toggle theme">
                        <span className="theme-icon">☀️</span>
                    </button> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;