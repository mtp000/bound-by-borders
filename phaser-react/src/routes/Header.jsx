import React from 'react';
import {Link } from 'react-router-dom';
import "./Header.css"

export default function Header() {

  return (
    <header>
            <div id="header-title">
              <Link to="/">
                {/* Website title linking to homepage */}
                <p className="header-title">BOUND BY BORDERS</p>
                </ Link>
            </div>

            <div className="header-pages">
                <Link to="/survey"> 
                    <p>Survey</p>
                </Link>

                <Link to="/sources"> 
                    <p>Sources</p>
                </Link>
                
                <Link to="/about"> 
                    <p >About</p>
                </Link>
            
                
            </div>
        </header>
  )
}
