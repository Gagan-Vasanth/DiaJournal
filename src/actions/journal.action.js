import axios from 'axios';
import { journalConstants } from './journalConstants';

export const addJournal = (journal) => {
    return async (dispatch) => {
        console.log("The Thank you" + journal);

        try {
            const response = await axios.post('/api/journals/postJournalsById', journal);
            if(response.status === 200){
                console.log("The Journal Has been submitted! Thank you");
            } else {
                alert('Issue in submitting the journal! Please check your connectivity');
            }
        } catch (error) {
            console.log(error.message);
        }
        
    }
}

export const getJournals = (user) => {
    return async (dispatch) => {
        try {
            dispatch({ type: `${journalConstants.GET_JOURNALS}_REQUEST`});
            try {
                const response = await axios.post('/api/journals/getJournalsById', user);
                const sortedJournals = response.data.journal.sort(function(a,b){
                    return new Date(b.date) - new Date(a.date);
                });
                const updatedJournal = [];
                sortedJournals.map( journal => {
                    const data = journal.data;
                    const element = data.toString();
                    console.log(typeof element);
                    let date = journal.date.split('-');
                    const number = date[2].substring(0,2);
                    date[2] = number;
                    let mydate = new Date(date[0], date[1] - 1, date[2]);
                    mydate = mydate.toDateString();
                    updatedJournal.push({
                        journal: element,
                        date: mydate
                    });
                    return true; 
                });
                console.log(updatedJournal);
                dispatch({ type: `${journalConstants.GET_JOURNALS}_SUCCESS`, payload: updatedJournal});
            } catch(error) {
                console.log(error.message);
            }
        } catch(error) { 
            dispatch({ type: `${journalConstants.GET_JOURNALS}_FAILURE`});
            console.log(error.message);
        }
        
    }
}