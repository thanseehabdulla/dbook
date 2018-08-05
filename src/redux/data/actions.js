export const DATA_ACTIONS = {

// action types
    API_CALL_REQUEST: "API_CALL_REQUEST",
    API_CALL_SUCCESS: "API_CALL_SUCCESS",
    API_CALL_FAILURE: "API_CALL_FAILURE",
    API_LOGIN:"API_LOGIN",
    API_LOGOUT:"API_LOGOUT",
    API_LOGOUT2:"API_LOGOUT2",
    API_REGISTER:"API_REGISTER",
    API_REGISTERVENDER:"API_REGISTERVENDER",
    API_REGISTERPURCHASE:"API_REGISTERPURCHASE",
    API_REGISTERSALES:"API_REGISTERSALES",
    API_GETDATA:"API_GET_DATA",
    API_GETDATAVENDER:"API_GET_DATAVENDER",
    API_GETSALESDATA:"API_GET_SALESDATA",
    API_GETPURHCASEDATA:"API_GET_PURCHASEDATA",
    GET_SUCCESS:"GET_SUCCESS",
    GETVENDER_SUCCESS:"GETVENDER_SUCCESS",
    GET_SALESSUCCESS:"GET_SALESSUCCESS",
    GET_PURCHASESUCCESS:"GET_PURCHASESUCCESS",
    LOGIN_SUCCESS:'LOGIN_SUCCESS',
    LOGIN_FAILURE:'LOGIN_FAILURE',
    LOGIN_FAILURE_RESET:'LOGIN_FAILURE_RESET',
    ADD:'ADD',
    ADD_RESET:'ADD_RESET',
    REGISTER_SUCCESS:'REGISTER_SUCCESS',
    TAX:'TAX',
    NET:'NET',
    VAT:'VAt',
    AMNT:'AMNT',
    CLEAR:'CLEAR',
    DELETE_VENDER:"DELETE_VENDER",
    DELETE_USER:"DELETE_USER",
    DELETE_PURCHASE:"DELETE_PURCHASE",
    DELETE_SALES:"DELETE_SALES",
    UPDATE_VENDER:"UPDATE_VENDER",
    UPDATE_USER:"UPDATE_USER",
    GET_PURCHASE_DATE:"GET_PURCHASE_DATE",
    GET_SALES_DATE:"GET_SALES_DATE",
    getPurchaseDate:(startDate,endDate)=>({
        type: DATA_ACTIONS.GET_PURCHASE_DATE,
        startDate:startDate,
        endDate:endDate
    }),
    getSalesDate:(startDate,endDate)=>({
        type: DATA_ACTIONS.GET_SALES_DATE,
        startDate:startDate,
        endDate:endDate
    }),
    deleteVender:(venderid)=>({
        type: DATA_ACTIONS.DELETE_VENDER,
        venderid:venderid
    }),
    deleteUser:(userid)=>({
        type: DATA_ACTIONS.DELETE_USER,
        userid:userid
    }),
    deletePurchase:(userid)=>({
        type: DATA_ACTIONS.DELETE_PURCHASE,
        purchaseid:userid
    }),
    deleteSales:(userid)=>({
        type: DATA_ACTIONS.DELETE_SALES,
        salesid:userid
    }),
    login: (user)=>({
       type: DATA_ACTIONS.API_LOGIN,
        userdata:user
    }),
    tax: (user)=>({
        type: DATA_ACTIONS.TAX,
        tax:user
    }),
    vat: (user)=>({
        type: DATA_ACTIONS.VAT,
        vat:user
    }),
    amnt: (user)=>({
        type: DATA_ACTIONS.AMNT,
        amnt:user
    }),
    clear: ()=>({
        type: DATA_ACTIONS.CLEAR,
    }),
    net: (user)=>({
        type: DATA_ACTIONS.NET,
        net:user
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
    updateuser: (user)=>({
        type: DATA_ACTIONS.UPDATE_USER,
        userdata:user
    }),
    registervender: (user)=>({
        type: DATA_ACTIONS.API_REGISTERVENDER,
        userdata:user
    }),
    updatevender: (user)=>({
        type: DATA_ACTIONS.UPDATE_VENDER,
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
    get_vender: ()=>({
        type: DATA_ACTIONS.API_GETDATAVENDER

    }),
    get_sales: ()=>({
        type: DATA_ACTIONS.API_GETSALESDATA

    }),
    get_purchase: ()=>({
        type: DATA_ACTIONS.API_GETPURHCASEDATA

    })
}
