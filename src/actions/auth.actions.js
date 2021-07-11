import { authConstants } from "./authConstants";
import axios from 'axios';

export const signin = (user) => {
    return async (dispatch) => {

       dispatch({type: `${authConstants.USER_LOGIN}_REQUEST`});
       try {
            const response = await axios.post('/api/users', user);
            if(response.errors){
                return dispatch({ type: `${authConstants.USER_LOGIN}_FAILURE`, payload: response.errors });
            }
            const token = response.data.token;
            if(token !== ''){
                const user = await axios.get('/api/auth', { //for getting the details from the JWT
                headers: {
                "x-auth-token": token 
                }});
                if (user) {
                    dispatch({ type: `${authConstants.USER_LOGIN}_SUCCESS`, payload: user.data });
                } else {
                    const error = 'Login Failed'
                    dispatch({ type: `${authConstants.USER_LOGIN}_FAILURE`, payload: error });
                }
            } else {
                const error = 'Login Failed'
                dispatch({ type: `${authConstants.USER_LOGIN}_FAILURE`, payload: error });
            }

       } catch (error) {
            dispatch({ type: `${authConstants.USER_LOGIN}_FAILURE`, payload: error })
            console.log(error);
       }
       
    }
}

export const login = (user) => {
    return async (dispatch) => {
       
       dispatch({type: `${authConstants.USER_LOGIN}_REQUEST`});
       try {
            const response = await axios.post('/api/auth/login', user);
            const token = response.data.token;
            if(token !== ''){
                const user = await axios.get('/api/auth', { //for getting the details from the JWT
                headers: {
                "x-auth-token": token 
                }});
                if (user) {
                    dispatch({ type: `${authConstants.USER_LOGIN}_SUCCESS`, payload: user.data });
                } else {
                    const error = 'Login Failed'
                    dispatch({ type: `${authConstants.USER_LOGIN}_FAILURE`, payload: error });
                }
            } else {
                const error = 'Login Failed'
                dispatch({ type: `${authConstants.USER_LOGIN}_FAILURE`, payload: error });
            }

       } catch (error) {
            dispatch({ type: `${authConstants.USER_LOGIN}_FAILURE`, payload: error.message });
            return error;
       }
       
    }
}

export const logout = () => {
        return (dispatch) => {

            dispatch({type:`${authConstants.USER_LOGOUT}_REQUEST`});

            try {

                dispatch({type:`${authConstants.USER_LOGOUT}_SUCCESS`});

            } catch (error) {
                dispatch({type:`${authConstants.USER_LOGOUT}_FAILURE`});
            }

        }
}