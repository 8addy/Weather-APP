class Forcast{
	constructor(){
		this.key = "W7FeR2j3aPF9ILFuLr7XyFKmsg3REtqx";
		this.cityURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
		this.weatherURL = "http://dataservice.accuweather.com/currentconditions/v1/";
	}


	async updateWeather(city){
		const cityDets = await this.getCity(city);
		const weather = await this.getWeather(cityDets.Key);
		return { cityDets, weather };
	}

	async getCity(city){
		let info = `?apikey=${this.key}&q=${city}`;

		const response = await fetch(this.cityURL+info);
		const data = await response.json();
		return data[0];
	}

	async getWeather(location){
		let info = `${location}?apikey=${this.key}`;

		const response = await fetch(this.weatherURL+info);
		const data = await response.json();

		return data[0];
	}
}
