import React from 'react';
import './Help.css';
import skoolLogo from '../assets/images/10001.svg'; // Adjust the path accordingly

function Help() {
    return (
        <div className="help-container">
            <header className="help-header">
                <img src={skoolLogo} alt="Skool Logo" className="skool-logo" />
                <nav className="help-nav">
                    <a href="/">Community</a>
                    <a href="/">Support</a>
                </nav>
            </header>
            <main className="help-main">
                <h1 className="help-title">How can we help?</h1>
                <div className="help-search">
                    <input 
                        type="text" 
                        placeholder="Search the knowledge base" 
                        className="help-search-input" 
                    />
                    <button className="help-search-button">Search</button>
                </div>
                <div className="help-toggle">
                    <button className="help-toggle-button active">Member</button>
                    <button className="help-toggle-button">Admin</button>
                </div>
            </main>
        </div>
    );
}

export default Help;
