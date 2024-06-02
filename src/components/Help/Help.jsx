import React from 'react';
import './Help.css';
import "./responsive.css"
import skoolLogo from '../assets/images/10001.svg';
import { useNavigate } from "react-router-dom";


function Help() {
    
    const navigate = useNavigate();

    return (
        <>
            <div className="help-container">
                <header className="help-sec">
                    <div className="help-svg">
                        <img src={skoolLogo} />
                    </div>
                    <div className="nav-links">
                        <a onClick={() => navigate('/')} className="nav-link">Home</a>
                        <a onClick={() => navigate('/login')} className="nav-link">Login</a>
                    </div>
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
            <div className="article-sec">
                <div className="article-sec1">
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                </div>
                <div className="article-sec1">
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                </div>
                <div className="article-sec1">
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                </div>
                <div className="article-sec1">
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                    <div className="a1">
                        <h3 className="article-h3">Group basics</h3>
                        <p className='article-p'>Name, artwork, URL, public/private</p>
                        <a className='article-a'>5 articles</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Help;
