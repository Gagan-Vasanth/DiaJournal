import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth.actions';
import Card from '../../reuseables/Card.js/Card';
import Loader from '../../reuseables/Loading/Loader';
import './Updates.css';

function Updates() {
    
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const data = useSelector(state => state.journal); 
    console.log(data.journals);

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div className="updates_layout">
           {data.loading ? <Loader msg="Getting your journals" /> : <div className="updates_container"> 
            { data.journals.length > 0 ? <div className="cards"> <h1 className="updates_title">{auth.name}, your journals soo far..</h1> {data.journals.map( data => (<div key={data.journal}><Card  journal={data.journal} date={data.date} /> </div>))} </div>  : <div className="updates_oops"> <h1>Opps!! {auth.name}, You have no journals</h1><button className="start_here"><Link to="/journal" className="start_link">Start writing your first journal</Link></button></div>} </div>}
            <button className="logout_btn" onClick={logoutHandler}>Logout</button>
            <button className="journal_btn2"><Link className="journals_ulink" to="/journal">write more</Link></button>
        </div>
    )
}

export default Updates;
