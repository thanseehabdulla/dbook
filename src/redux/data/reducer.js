import {DATA_ACTIONS} from './actions';
import {Map} from 'immutable';

// reducer with initial state
const initialState = new Map({
    fetching: false,
    data: null,
    error: null,
    isLoggedIn:null,
    username:null,
    register:false
});

export default function datareducer(state = initialState, action) {
    switch (action.type) {
       
        case DATA_ACTIONS.LOGIN_SUCCESS:
            return state.set('isLoggedIn', action.token).set('username',action.username);
        case DATA_ACTIONS.GET_SUCCESS:
            return state.set('userdata', action.userdata);
        case DATA_ACTIONS.GET_SALESSUCCESS:
            return state.set('salesdata', action.salesdata);
        case DATA_ACTIONS.GET_PURCHASESUCCESS:
            return state.set('purchasedata', action.purchasedata);
        case DATA_ACTIONS.REGISTER_SUCCESS:
            return state.set('register', true);
        default:
            return state;
    }
}