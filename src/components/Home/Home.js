import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div>
            <div className="home_container">
                <h1 className="home_heading">Hello and Welcome to DiaJournal</h1>
                <p>This web application allows you to write your daily journals from anywhere</p>
                <Link className="home_login" to="/login">Login</Link>
                <Link className="home_signin" to="/signin">Sign in</Link>
            </div>
        </div>
    )
}

export default Home
