const queryString = require('query-string');

//handle post request for the project

function postRequest(object) {
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


//export request
export {
    postRequest

}