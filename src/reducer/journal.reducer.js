import { journalConstants } from "../actions/journalConstants";

const initialState = {
    journals: [],
    loading: false,
};

const reducer = (state=initialState, action) => {
    switch (action.type) { 
        case `${journalConstants.GET_JOURNALS}_REQUEST` : return {...state, journals: action.payload, loading: true};

        case `${journalConstants.GET_JOURNALS}_SUCCESS` : return {...state, journals: action.payload, loading: false};

        case `${journalConstants.GET_JOURNALS}_FAILURE` : return {...state, journals: action.payload, loading: false, error: action.payload.error};

        default: return state;
    }
}

export default reducer;