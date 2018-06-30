import {all, call, fork, put, takeLatest} from "redux-saga/effects";
import {DATA_ACTIONS} from './actions';
import * as REQUEST from './../api/crud'
import * as API from './../api/api'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {

    yield takeLatest(DATA_ACTIONS.API_LOGIN, workerLoginSaga);
    yield takeLatest(DATA_ACTIONS.API_GETDATA, workerGetDataSaga);
    yield takeLatest(DATA_ACTIONS.API_GETSALESDATA, workerGetSalesDataSaga);
    yield takeLatest(DATA_ACTIONS.API_GETPURHCASEDATA, workerGetPurchaseDataSaga);
    yield takeLatest(DATA_ACTIONS.API_REGISTER, workerRegisterSaga);
    yield takeLatest(DATA_ACTIONS.API_REGISTERPURCHASE, workerRegisterPurchaseSaga);
    yield takeLatest(DATA_ACTIONS.API_REGISTERSALES, workerRegisterSalesSaga);
}


// worker saga: makes the api call when watcher saga sees the action
function* workerLoginSaga(payload) {
    try {
        let body = {
            body: {
                username: payload.userdata.username,
                password: payload.userdata.password
            },
            url: API.LOGIN_API
        }
        const response = yield call(REQUEST.postData, body);
        const data = response.status;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data === 'success') {
            yield put({
                type: DATA_ACTIONS.LOGIN_SUCCESS,
                username: payload.userdata.username,
                token: 'loggedin'
            });
           console.log('sucess login')
            localStorage.setItem('logged','user')
        } else {
            console.log('sucess failure')
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}


// worker saga: makes the api call when watcher saga sees the action
function* workerGetDataSaga() {
    try {
        let body = {
            url: API.USER_API
        }
        const response = yield call(REQUEST.getData, body);
        const data = response.data;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data.length > 0) {
            yield put({
                type: DATA_ACTIONS.GET_SUCCESS,
                userdata: data,

            });
            console.log('sucess get')
        } else {
            console.log('sucess failure')
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}


// worker saga: makes the api call when watcher saga sees the action
function* workerGetSalesDataSaga() {
    try {
        let body = {
            url: API.SALES_API
        }
        const response = yield call(REQUEST.getData, body);
        const data = response;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data.length > 0) {
            yield put({
                type: DATA_ACTIONS.GET_SALESSUCCESS,
                salesdata: data,

            });
            console.log('sucess get')
        } else {
            console.log('sucess failure')
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}



// worker saga: makes the api call when watcher saga sees the action
function* workerGetPurchaseDataSaga() {
    try {
        let body = {
            url: API.PURCHASE_API
        }
        const response = yield call(REQUEST.getData, body);
        const data = response.data;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data.length > 0) {
            yield put({
                type: DATA_ACTIONS.GET_PURCHASESUCCESS,
                purchasedata: data,

            });
            console.log('sucess get')
        } else {
            console.log('sucess failure')
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}


// worker saga: makes the api call when watcher saga sees the action
function* workerRegisterSaga(payload) {
    try {
        let body = {
            body: {
                name: payload.userdata.name,
                username: payload.userdata.username,
                password: payload.userdata.password,
                email: payload.userdata.email,
                phone: payload.userdata.phone,
                address: payload.userdata.address
            },
            url: API.REGISTER_API
        }
        const response = yield call(REQUEST.postData, body);
        const data = response.status;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data === 'success') {
            yield put({
                type: DATA_ACTIONS.LOGIN_SUCCESS,
                username: payload.userdata.username,
                token: 'loggedin'
            });
            console.log('sucess register')
        } else {
            console.log('sucess failure')
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}


// worker saga: makes the api call when watcher saga sees the action
function* workerRegisterPurchaseSaga(payload) {
    try {
        let body = {
            body: {
                vendername: payload.purchasedata.vendername,
                trn_no: payload.purchasedata.trn_no,
                date_invoice: payload.purchasedata.date_invoice,
                amount: payload.purchasedata.amount,
                vat: payload.purchasedata.vat,
                total: payload.purchasedata.total,
                invoice_number: payload.purchasedata.invoice_number
            },
            url: API.PURCHASE_API
        }
        const response = yield call(REQUEST.postData, body);
        const data = response.status;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data === 'success') {
            yield put({
                type: DATA_ACTIONS.REGISTER_SUCCESS,

            });
            console.log('sucess register')
        } else {
            console.log('sucess failure')
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}


// worker saga: makes the api call when watcher saga sees the action
function* workerRegisterSalesSaga(payload) {
    try {
        let body = {
            body: {
                date: payload.salesdata.date,
                item_sold: payload.salesdata.item_sold,
                gross_sales: payload.salesdata.gross_sales,
                tax: payload.salesdata.tax,
                net_sales: payload.salesdata.net_sales,

            },
            url: API.SALES_API
        }
        const response = yield call(REQUEST.postData, body);
        const data = response.status;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data === 'success') {
            yield put({
                type: DATA_ACTIONS.REGISTER_SUCCESS,
            });
            console.log('sucess register')
        } else {
            console.log('sucess failure')
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}

export default function* rootSaga() {
    yield all([
        fork(watcherSaga)
    ]);
}
