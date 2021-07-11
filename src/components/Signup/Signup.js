import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loader from '../../reuseables/Loading/Loader';
import './Signin.css';

function Signup() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        error: ""
    });

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const submitHandler = (e) => {
        e.preventDefault();
        if ( state.password === state.password2 && state.password.length >= 6) {
            const user = {
                name: `${state.firstName} ${state.lastName}`,
                email: state.email,
                password: state.password
            }
            dispatch(signin(user));
        } else if( state.password.length < 6){
            setState({...state, error: 'The password lenght has to be greater than 6'})
        } else {
            setState({...state, error: 'The passwords are not matched'})
        }

        setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password2: "",
            error: ""
        })
       
    }

    if(auth.authenticated) {
        return(<Redirect to="/moveon" />);
    }



    return (
        <div>
        { auth.loading ? <Loader msg="Taking you in for the first time"/>: 

        <div className="signin_layout">

            <div className="signin_container">

            <form onSubmit={submitHandler} className="s_form">

                <h1 className="signin_title">Signup</h1>

                <p className="signin_text">Please Signup to start writing your online journals</p>

                { state.error !== '' ? <p className="signup_error">{state.error}</p> : null}

                <div className="signin_form">

                   


                    <input type="text" className="signin_name"  value={state.firstName} onChange= { (e) => setState({...state, firstName: e.target.value})} placeholder="Your Firstname" required />

                    <input type="text" className="signin_name"  value={state.lastName} onChange= { (e) => setState({...state, lastName: e.target.value})} placeholder="Your Lastname" required />

                    <input type="email" className="signin_mail" value={state.email} onChange={ (e) => setState({...state, email: e.target.value})} placeholder="Enter your mail" required/>

                    <input type="password" className="signin_pass" value={state.password} onChange={ (e) => setState({...state, password: e.target.value})} placeholder="Enter your password" required/>

                    <input type="password" className="signin_pass" value={state.password2} onChange={ (e) => setState({...state, password2: e.target.value})} placeholder="Confirm Password" required/>

                    <button type="submit" className={state.email && state.password && state.firstName && state.lastName && state.password2 ? "signin_btn_enabled" : "signin_btn_disabled" } disabled={!state.email || !state.password || !state.firstName || !state.lastName || !state.password2 }>
                        Signup
                    </button>

                    <p className="signin_login">Already a User? <Link className="login_link" to="/login">Login</Link></p> 
            
                </div>      
            
        </form> 
        </div>
    </div>}
        </div>
    )
}

export default Signup
