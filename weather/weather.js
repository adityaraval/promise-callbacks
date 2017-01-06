const request = require('request');


var getWeather = (lat,lng,callback)=> {
  request({url:`https://api.darksky.net/forecast/e529c6efb10a61b16ff7f8d3a03d38c9/${lat},${lng}`,
  json:true},(err,res,body)=>{
    if(err){
      callback('Unable to connect forecast.io servers.');
      //console.log('Unable to connect forecast.io servers.')
    }else if(res.statusCode === 400){
      callback('Something went wrong')
      //console.log('Something went wrong')
    }else if(res.statusCode === 200){
    callback(undefined,{
      temperature:body.currently.temperature,
      apparentTemperature:body.currently.apparentTemperature
    })
    //console.log(body.currently.temperature)
    }
  })

}


module.exports.getWeather = getWeather;
