import React from 'react';
import { useSelector } from 'react-redux';
import './Loader.css';

function Loader(props) {
    const auth = useSelector(state => state.auth);
    const journal = useSelector(state => state.journal);
    console.log(auth.loading);
    console.log(journal.lodaing);
    return (
        <div>
            { auth.loading || journal.loading ? <div className="spinner">
                                                    <h2>{props.msg}</h2>
                                                    <p className="dot"></p> </div> : null}
        </div>
    )
}

export default Loader;
