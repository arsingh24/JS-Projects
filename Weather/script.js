const apiKey = "6953caa7e94b1e22aa43cc8a9e6ab2d9";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city = document.querySelector('.search input');
const btn = document.querySelector('button');
const weatherIcon = document.querySelector('.weather-icon');
// console.log(weatherIcon);

async function checkWeather() {
    const response = await fetch(apiURL +city.value+`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector('.temp').innerText = Math.round(data.main.temp )+"°C"
    document.querySelector('.city').innerText = data.name
    document.querySelector('.humidity').innerText = data.main.humidity+"%"
    document.querySelector('.wind').innerText = data.wind.speed+"Km/h"
    document.querySelector('.type').innerText = data.weather[0].main;

    document.querySelector('.feels').innerText = data.main.feels_like;
    document.querySelector('.long').innerText = " "+data.coord.lon;
    document.querySelector('.lati').innerText =" "+ data.coord.lat;

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "./Img/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "./Img/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "./Img/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "./Img/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "./Img/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src = "./Img/snow.png";
    }
  

}
btn.addEventListener('click',()=>{
  console.log(city.value);
    checkWeather();
    
})