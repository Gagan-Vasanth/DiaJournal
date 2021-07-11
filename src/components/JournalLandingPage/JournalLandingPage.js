import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getJournals } from '../../actions/journal.action';
import './Landing.css';

function JournalLandingPage() {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const watchMyJournals = async () => {
        const user = {
            email: auth.email
        }
        await dispatch(getJournals(user));
    }

    return (
        <div className="landing_page">
            <h1 className="wish">Hello {auth.name}, what would you like to do?</h1>
            <button className="btn1"><Link className="links" to="/journal">Write a New Journal</Link></button>
            <button className="btn2" onClick={watchMyJournals}><Link className="links" to="/updates">Watch your Journals</Link></button>
            <p className="note">The upcoming pages will only looks good when the device scale is high</p>
        </div>
    )
}

export default JournalLandingPage;
                                                                                                       