const request = require("request")
const geocode = (address , callfun) => {
    const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +  ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    request({url : geocodeurl , json:true} , (error, response)=>{
    if (error){
        callfun("unable to connect to geocode services", undefined)
    }
    else if (response.body.message){
        callfun(respons.body.message, undefined)
    }
    else if(response.body.features.length==0){
        callfun("unable to find location", undefined)
    }
    else{
        callfun(undefined , {
            latitude : response.body.features[0].center[1],
            longtitude : response.body.features[0].center[0]
    })
    
    }
    })
    }
    module.exports = geocode