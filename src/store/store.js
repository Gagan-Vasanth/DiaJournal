import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from '../reducer/auth.reducer';
import journalReducer from '../reducer/journal.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
    journal: journalReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;