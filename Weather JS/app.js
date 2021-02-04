const uiw = new uic();
const wn = new weather('Boston','MA');

document.addEventListener('DOMContentLoaded',getWeather);


function getWeather(){

wn.getWeather().then(results => {

  uiw.paint(results);
  console.log(results)}).catch(err => console.log(err));
}