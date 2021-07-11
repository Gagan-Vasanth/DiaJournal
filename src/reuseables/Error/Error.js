import React from 'react'
import { Link } from 'react-router-dom';
import './Error.css';

function Error() {

    return (
        <div className="error_container">
            <h1 className="error_status">404</h1>
            <p className="error_msg">Page Not Found</p>
            <Link to="/" className="error_btn" >Get Back</Link>
        </div>
    )
}

export default Error;
