import React from 'react'
import './Forms.css'

function Forms() {
    return (
        <div className="container">
            <div className='forms_conatiner'>
                <div className="sigin-signup">
                    <form className="sigin-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" class="btn solid" />

                       
                    </form>

                </div>

            </div>
            
        </div>
    )
}

export default Forms
