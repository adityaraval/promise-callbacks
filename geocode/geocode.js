const request = require('request');


var geocodeAddress = (address,callback) => {

  //console.log(argv)
  var encodedAdd = encodeURIComponent(address);

  request({
  url:`http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
  json:true
  },(err,res,body)=>{
    if(err){
      callback('Unable to connect to google servers');
      //console.log('Unable to connect to google servers')
    }
    else if (body.status === 'ZERO_RESULTS'){
      callback('No results found');
      //console.log('No results found')
    }
    else if(body.status === 'OK'){
      callback(undefined,{
        Address:body.results[0].formatted_address,
        Latitude:body.results[0].geometry.location.lat,
        Longitude:body.results[0].geometry.location.lng
      })
      //console.log(`Address : ${body.results[0].formatted_address}`)
      //console.log(`Latitude : ${body.results[0].geometry.location.lat}`)
      //console.log(`Longitude : ${body.results[0].geometry.location.lng}`)
    }
  })



}


module.exports.geocodeAddress = geocodeAddress;
