const Weather = new weather('Boston','MA');

Weather.getWeather().then( results => {console.log(results)}).catch(err => console.log(err));

//document.addEventListener('DOMContentLoaded',getWeather);