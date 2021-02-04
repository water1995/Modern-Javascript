const str = new storage();
const uiw = new uic();

const weatherLocation = str.getLocationData();
const wn = new weather(weatherLocation.city,weatherLocation.state);

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click',(e) =>{

  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  wn.changeLocation(city,state);
  str.setLocationData(city,state);
  getWeather();

  $('#locModal').modal('hide');


});




function getWeather(){

wn.getWeather().then(results => {

  uiw.paint(results);
  console.log(results)}).catch(err => console.log(err));
}