let form = document.querySelector(".change-location");
let details = document.querySelector(".details");
let card = document.querySelector(".card");
let time = document.querySelector("img.time");
let icon = document.querySelector(".icon img");
const forcast = new Forcast();


const updateUI = data=>{
	const cityDets = data.cityDets;
	const weather = data.weather;

	details.innerHTML = `
		<h5 class="my-3">${cityDets.EnglishName}</h5>
		<div class="my-3">${weather.WeatherText}</div>
		<div class="display-4 my-4">
			<span>${weather.Temperature.Metric.value}</span>
			<span>&deg;</span>
		</div>
		`;

	if(card.classList.contains("d-none")){
		card.classList.remove("d-none");
	}

	iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
	source = weather.IsDayTime? "img/day.svg" : "img/night.svg";
	time.setAttribute("src",source);
	icon.setAttribute("src",iconsrc);

}


form.addEventListener('submit', e =>{
	e.preventDefault();
	let city = form.city.value.trim();
	forcast.updateWeather(city).then(data=>{
		updateUI(data);
	}).catch(err=>{console.log(err)});
	form.reset();
});
