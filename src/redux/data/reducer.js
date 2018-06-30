import {DATA_ACTIONS} from './actions';
import {Map} from 'immutable';

// reducer with initial state
const initialState = new Map({
    fetching: false,
    data: null,
    error: null,
    isLoggedIn:null,
    username:null,
    register:false,
    failed:null,
    add:null
});

export default function datareducer(state = initialState, action) {
    switch (action.type) {
       
        case DATA_ACTIONS.LOGIN_SUCCESS:
            return state.set('isLoggedIn', action.token).set('username',action.username);
        case DATA_ACTIONS.API_LOGOUT:
            return state.set('isLoggedIn', null).set('username',null);
        case DATA_ACTIONS.LOGIN_FAILURE:
            return state.set('failed', true);
        case DATA_ACTIONS.LOGIN_FAILURE_RESET:
            return state.set('failed', null);
        case DATA_ACTIONS.ADD:
            return state.set('add', true);
        case DATA_ACTIONS.ADD_RESET:
            return state.set('add', null);
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