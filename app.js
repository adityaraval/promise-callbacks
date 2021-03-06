const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
      a:{
        demand:true,
        alias:'address',
        describe:'Address to fetch weather',
        string:true
      }
  })
  .help()
  .alias('help','h')
  .argv;


  geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
    if(errorMessage){
      console.log(errorMessage);
    }else{

      console.log(results.Address);
      weather.getWeather(results.Latitude,results.Longitude,(errorMessage,weatherResults)=>{
        if(errorMessage){
          console.log(errorMessage);
        }else{
          console.log(`temperature is ${weatherResults.temperature}`);
        }
      });
    }
  });
