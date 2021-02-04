class weather{

  constructor(city,state){

    this.apiKey = '';
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather(){

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&region=${this.state}`);
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city,state){

    this.city = city;
    this.state = state;
  }
}