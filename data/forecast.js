const request = require("request")
const forecast = (latitude,longtitude,callfun) => {
    const url = "http://api.weatherapi.com/v1/current.json?key=15f1e5bf03f74f179b4104338242007&q=" + latitude + "," + longtitude
    request({url, json:true},(error, response)=>{
    //console.log(response.body)
    // console.log(response.body.location.name)
    // console.log(response.body.current.condition.text)
    if (error) {
        callfun ( "unable to connect weather api service" , undefined )
    } else if (response.body.error){
         callfun (response.body.error.message , undefined )
    }else {

         callfun (undefined , response.body.location.name + " it is : " + response.body.current.condition.text 
        + "and temp is : "  + response.body.current.temp_c )
    }
    })
    }
    module.exports = forecast 