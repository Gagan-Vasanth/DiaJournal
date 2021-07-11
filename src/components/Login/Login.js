import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loader from '../../reuseables/Loading/Loader';
import './Login.css';

function Login() {

    const [state, setState] = useState({
        email: "",
        password: "",
    });


    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const submitHandler = async (e) => {
        e.preventDefault();
        const user = {
            email: state.email,
            password: state.password
        }
        dispatch(login(user));
       console.log(auth.error);
       setState({
           email: "",
           password: ""
       })
    }

    if(auth.authenticated) {
        return(<Redirect to="/moveon" />);
    }

    return (
        <div className="login_layout">
        
        <div className="login_container">

                
                <form onSubmit={submitHandler} className="l_form">
                    
                    <h1 className="login_title">Login</h1>

                    <p className="login_text">Please login to write and View your daily Journals</p>

                    { auth.error ? <p className="login_text error">Invalid Credentials</p> : null}

                    <div className="login_form">
                        
                        
                        <input type="email" className="login_mail" value={state.email} onChange={ (e) => setState({...state, email: e.target.value})} placeholder="Enter your mail" required/>

                        <input type="password" className="login_pass" value={state.password} onChange={ (e) => setState({...state, password: e.target.value})} placeholder="Enter your password" required/>
                        
                        <button type="submit" className={state.email && state.password ? "login_btn_enabled" : "login_btn_disabled" } disabled={!state.email || !state.password}>Login</button>
                        
                        <p className="login_signup">Create your Account <Link className="signin_link" to="/signin">SignIn</Link></p> 
                        
                    </div>

                </form>
            </div>
            { auth.loading ? <Loader msg="Verifying your credentials" /> : null}
        </div>
    )
}

export default Login
