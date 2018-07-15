const queryString = require('query-string');



function postData(object) {
    return new Promise(function (resolve, reject) {

        let params = object.body;


        fetch(object.url, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            body: queryString.stringify(params)


        }).then(function (response) {
            console.log(response);
            if(response.ok){
                resolve(response.json())
                return;
            }
            else{
                console.log("reject")
                reject(response.json())
                return;
            }

        }).catch(function (err) {
            // Error :(

            reject(err)
        });
    })
}


function putData(object) {
    return new Promise(function (resolve, reject) {

        let params = object.body;


        fetch(object.url, {
            method: 'PUT',

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            body: queryString.stringify(params)


        }).then(function (response) {
            console.log(response);
            if(response.ok){
                resolve(response.json())
                return;
            }
            else{
                console.log("reject")
                reject(response.json())
                return;
            }

        }).catch(function (err) {
            // Error :(

            reject(err)
        });
    })
}


function getData(object) {
    return new Promise(function (resolve, reject) {


        fetch(object.url, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },




        }).then(function (response) {
            console.log(response);
            if(response.ok){
                resolve(response.json())
                return;
            }
            else{
                console.log("reject")
                reject(response.json())
                return;
            }

        }).catch(function (err) {
            // Error :(

            reject(err)
        });
    })
}

function deleteData(object) {
   
   return new Promise(function (resolve, reject) {


        fetch(object.url, {
            method: 'DELETE',

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },




        }).then(function (response) {
            console.log(response);
            if(response.ok){
                resolve(response.json())
                return;
            }
            else{
                console.log("reject")
                reject(response.json())
                return;
            }

        }).catch(function (err) {
            // Error :(

            reject(err)
        });
    })


}


export {
    postData,
    getData,
    deleteData,
    putData

}
