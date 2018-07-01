export const DATA_ACTIONS = {

// action types
    API_CALL_REQUEST: "API_CALL_REQUEST",
    API_CALL_SUCCESS: "API_CALL_SUCCESS",
    API_CALL_FAILURE: "API_CALL_FAILURE",
    API_LOGIN:"API_LOGIN",
    API_LOGOUT:"API_LOGOUT",
    API_LOGOUT2:"API_LOGOUT2",
    API_REGISTER:"API_REGISTER",
    API_REGISTERPURCHASE:"API_REGISTERPURCHASE",
    API_REGISTERSALES:"API_REGISTERSALES",
    API_GETDATA:"API_GET_DATA",
    API_GETSALESDATA:"API_GET_SALESDATA",
    API_GETPURHCASEDATA:"API_GET_PURCHASEDATA",
    GET_SUCCESS:"GET_SUCCESS",
    GET_SALESSUCCESS:"GET_SALESSUCCESS",
    GET_PURCHASESUCCESS:"GET_PURCHASESUCCESS",
    LOGIN_SUCCESS:'LOGIN_SUCCESS',
    LOGIN_FAILURE:'LOGIN_FAILURE',
    LOGIN_FAILURE_RESET:'LOGIN_FAILURE_RESET',
    ADD:'ADD',
    ADD_RESET:'ADD_RESET',
    REGISTER_SUCCESS:'REGISTER_SUCCESS',
    login: (user)=>({
       type: DATA_ACTIONS.API_LOGIN,
        userdata:user
    }),
    logout: ()=>({
        type: DATA_ACTIONS.API_LOGOUT2

    }),
    reset: ()=>({
        type: DATA_ACTIONS.LOGIN_FAILURE_RESET

    }),
    addreset: ()=>({
        type: DATA_ACTIONS.ADD_RESET

    }),
    register: (user)=>({
        type: DATA_ACTIONS.API_REGISTER,
        userdata:user
    }),
    register_purchase: (data)=>({
        type: DATA_ACTIONS.API_REGISTERPURCHASE,
        purchasedata:data
    }),
    register_sales: (data)=>({
        type: DATA_ACTIONS.API_REGISTERSALES,
        salesdata:data
    }),
    get_data: ()=>({
        type: DATA_ACTIONS.API_GETDATA

    }),
    get_sales: ()=>({
        type: DATA_ACTIONS.API_GETSALESDATA

    }),
    get_purchase: ()=>({
        type: DATA_ACTIONS.API_GETPURHCASEDATA

    })
}
