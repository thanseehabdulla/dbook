import {all, call, fork, put, takeLatest} from "redux-saga/effects";
import {DATA_ACTIONS} from './actions';
import * as REQUEST from './../api/crud'
import * as API from './../api/api'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {

    yield takeLatest(DATA_ACTIONS.API_LOGIN, workerLoginSaga);
    yield takeLatest(DATA_ACTIONS.API_GETDATA, workerGetDataSaga);
    yield takeLatest(DATA_ACTIONS.API_GETDATAVENDER, workerGetDataVenderSaga);
    yield takeLatest(DATA_ACTIONS.API_GETSALESDATA, workerGetSalesDataSaga);
    yield takeLatest(DATA_ACTIONS.API_GETPURHCASEDATA, workerGetPurchaseDataSaga);
    yield takeLatest(DATA_ACTIONS.API_REGISTER, workerRegisterSaga);
    yield takeLatest(DATA_ACTIONS.API_REGISTERVENDER, workerRegistervenderSaga);
    yield takeLatest(DATA_ACTIONS.API_REGISTERPURCHASE, workerRegisterPurchaseSaga);
    yield takeLatest(DATA_ACTIONS.API_REGISTERSALES, workerRegisterSalesSaga);
    yield takeLatest(DATA_ACTIONS.API_LOGOUT2, workerLogoutSaga);
    yield takeLatest(DATA_ACTIONS.DELETE_VENDER, workerdeleteVenderSaga);
    yield takeLatest(DATA_ACTIONS.DELETE_USER, workerdeleteUserSaga);
    yield takeLatest(DATA_ACTIONS.UPDATE_VENDER, workerUpdatevenderSaga);
    yield takeLatest(DATA_ACTIONS.UPDATE_USER, workerUpdateSaga);
    yield takeLatest(DATA_ACTIONS.GET_PURCHASE_DATE, workerPurchaseDateSaga);
}




// worker saga: makes the api call when watcher saga sees the action
function* workerLogoutSaga() {
    localStorage.setItem('username',null)
    localStorage.setItem('userid',null)
    yield put({
        type: DATA_ACTIONS.API_LOGOUT,
    });
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
        const userid = response.userid;
        const level = response.level;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data === 'success') {
            yield put({
                type: DATA_ACTIONS.LOGIN_SUCCESS,
                username: payload.userdata.username,
                userid: userid,
                level:level,
                token: 'loggedin'
            });
           console.log('sucess login')
            localStorage.setItem('logged','user')
            localStorage.setItem('username',payload.userdata.username)
            localStorage.setItem('userid',userid)
            localStorage.setItem('level',level);
        } else {
            console.log('sucess failure')
            yield put({
                type: DATA_ACTIONS.LOGIN_FAILURE,
            });
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}


// worker saga: makes the api call when watcher saga sees the action
function* workerdeleteVenderSaga(payload) {
    try {
        let body = {
            url: API.VENDER_API+ "/" +payload.venderid
        }
        const response = yield call(REQUEST.deleteData, body);
        const data = response.data;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data.length > 0) {
           
        } else {
            console.log('sucess failure')
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}

// worker saga: makes the api call when watcher saga sees the action
function* workerdeleteUserSaga(payload) {
    console.log(payload.userid)
    try {
        let body = {
            url: API.USER_API+ "/" +payload.userid
        }
        const response = yield call(REQUEST.deleteData, body);
        const data = response.data;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data.length > 0) {
           
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
function* workerGetDataVenderSaga() {
    try {
        let body = {
            url: API.VENDER_API
        }
        const response = yield call(REQUEST.getData, body);
        const data = response.data;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data.length > 0) {
            yield put({
                type: DATA_ACTIONS.GETVENDER_SUCCESS,
            venderdata: data});
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
            url: API.SALES_API + "/" + localStorage.getItem('userid',0)
        }
        const response = yield call(REQUEST.getData, body);
        const data = response.data;

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
            url: API.PURCHASE_API + "/" + localStorage.getItem('userid',0)
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
function* workerPurchaseDateSaga(payload) {
    try {
        let body = {
            url: API.PURCHASE_API+"/"+payload.startDate+"/"+payload.endDate
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
                address: payload.userdata.address,
                level: payload.userdata.level
            },
            url: API.REGISTER_API
        }

        console.log(payload.userdata.level);
        const response = yield call(REQUEST.postData, body);
        const data = response.status;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data === 'success') {
            // yield put({
            //     type: DATA_ACTIONS.LOGIN_SUCCESS,
            //     username: payload.userdata.username,
            //     token: 'loggedin'
            // });
            console.log('sucess register')
            yield put({
                type: DATA_ACTIONS.ADD,
            });
        } else {
            console.log('sucess failure')
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}


// worker saga: makes the api call when watcher saga sees the action
function* workerUpdateSaga(payload) {
    try {
        let body = {
            body: {
                name: payload.userdata.name,
                username: payload.userdata.username,
                password: payload.userdata.password,
                email: payload.userdata.email,
                phone: payload.userdata.phone,
                address: payload.userdata.address,
                level: payload.userdata.level,
                id: payload.userdata.id
            },
            url: API.USER_API
        }

        console.log(payload.userdata.level);
        const response = yield call(REQUEST.putData, body);
        const data = response.status;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data === 'success') {
            // yield put({
            //     type: DATA_ACTIONS.LOGIN_SUCCESS,
            //     username: payload.userdata.username,
            //     token: 'loggedin'
            // });
            console.log('sucess register')
            // yield put({
            //     type: DATA_ACTIONS.ADD,
            // });
        } else {
            console.log('sucess failure')
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}


// worker saga: makes the api call when watcher saga sees the action
function* workerRegistervenderSaga(payload) {
    try {
        let body = {
            body: {
                vendername: payload.userdata.vendername,
                trn_no: payload.userdata.trn_no,

            },
            url: API.REGISTERVENDER_API
        }

        // console.log(payload.userdata.level);
        const response = yield call(REQUEST.postData, body);
        const data = response.status;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data === 'success') {
            // yield put({
            //     type: DATA_ACTIONS.LOGIN_SUCCESS,
            //     username: payload.userdata.username,
            //     token: 'loggedin'
            // });
            console.log('sucess register')
            yield put({
                type: DATA_ACTIONS.ADD,
            });
        } else {
            console.log('sucess failure')
        }


    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({type: "API_CALL_FAILURE", error});
    }
}


// worker saga: makes the api call when watcher saga sees the action
function* workerUpdatevenderSaga(payload) {
    try {
        let body = {
            body: {
                vendername: payload.userdata.name,
                trn_no: payload.userdata.trn_no,
                id:payload.userdata.id

            },
            url: API.VENDER_API
        }

        // console.log(payload.userdata.level);
        const response = yield call(REQUEST.putData, body);
        const data = response.status;

        // dispatch a success action to the store with the new dog
        // yield put({ type: "API_CALL_SUCCESS", data });


        if (data === 'success') {
            // yield put({
            //     type: DATA_ACTIONS.LOGIN_SUCCESS,
            //     username: payload.userdata.username,
            //     token: 'loggedin'
            // });
            console.log('sucess register')
            // yield put({
            //     type: DATA_ACTIONS.ADD,
            // });
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
                invoice_number: payload.purchasedata.invoice_number,
                userid: payload.purchasedata.userid

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
            yield put({
                type: DATA_ACTIONS.ADD,
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
                net_sales: payload.salesdata.net_sales,
                tax: payload.salesdata.tax,
                net_total: payload.salesdata.net_total,
                userid: payload.salesdata.userid,

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
            yield put({
                type: DATA_ACTIONS.ADD,
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
