import {DATA_ACTIONS} from './actions';
import {Map} from 'immutable';

// reducer with initial state
const initialState = new Map({
    fetching: false,
    data: null,
    error: null,
    isLoggedIn:null,
    username:null,
    userid:null,
    register:false,
    failed:null,
    add:null,
    tax:0,
    net:0
});

export default function datareducer(state = initialState, action) {
    switch (action.type) {
       
        case DATA_ACTIONS.LOGIN_SUCCESS:
            return state.set('isLoggedIn', action.token).set('username',action.username).set('userid',action.userid);
        case DATA_ACTIONS.API_LOGOUT:
            return state.set('isLoggedIn', null).set('username',null).set('userid',null);
        case DATA_ACTIONS.LOGIN_FAILURE:
            return state.set('failed', true);
        case DATA_ACTIONS.AMNT:
            return state.set('amnt', parseFloat(action.amnt));
        case DATA_ACTIONS.VAT:
            return state.set('vat', parseFloat(action.vat));
        case DATA_ACTIONS.TAX:
            return state.set('tax', parseFloat(action.tax));
        case DATA_ACTIONS.NET:
            return state.set('net', parseFloat(action.net));
        case DATA_ACTIONS.CLEAR:
            return state.set('net', 0).set('tax', 0).set('amnt', 0).set('vat', 0);
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