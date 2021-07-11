import { authConstants } from "../actions/authConstants";

const initialState = {
    id: '',
    name: '',
    email: '',
    authenticating: false,
    authenticated: false,
    error: null,
    token: '',
    loading: false
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case `${authConstants.USER_LOGIN}_REQUEST`      :    return {
                                                                    ...state,
                                                                    authenticating: true,
                                                                    loading: true    
                                                                };

        case `${authConstants.USER_LOGIN}_SUCCESS`      :    return {
                                                                    ...state,
                                                                    id: action.payload.id,
                                                                    name: action.payload.name,
                                                                    email: action.payload.email,
                                                                    authenticating: false,
                                                                    authenticated: true,
                                                                    token: action.payload.token,
                                                                    loading: false   
                                                                };  

        case `${authConstants.USER_LOGIN}_FAILURE`      :    return {
                                                                    ...state,
                                                                    authenticating: false,
                                                                    authenticated: false,
                                                                    error: action.payload,
                                                                    loading: false    
                                                                };

        case (`${authConstants.USER_LOGOUT}_REQUEST`)   : return {...state, loading: true};

        case (`${authConstants.USER_LOGOUT}_SUCCESS`)   : return state={
                                                                    ...initialState,
                                                                    loading: false
                                                                };

        case ( `${authConstants.USER_LOGOUT}_FAILURE`)  : return {
                                                                    ...state,
                                                                    error: action.payload.error
                                                                };

        default:            return state;
    }
}

export default reducer;