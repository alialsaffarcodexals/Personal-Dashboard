const cityInput = document.getElementById('city');
const getWeatherBtn = document.getElementById('get-weather');
const weatherOut = document.getElementById('weather-output');

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) return;
  weatherOut.textContent = 'Loading...';
  try {
    const geoResp = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
    const geoData = await geoResp.json();
    if (!geoData.results || !geoData.results.length) {
      weatherOut.textContent = 'City not found';
      return;
    }
    const { latitude, longitude } = geoData.results[0];
    const weatherResp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherResp.json();
    const temp = weatherData.current_weather.temperature;
    weatherOut.textContent = `Current temperature: ${temp}°C`;
  } catch (e) {
    weatherOut.textContent = 'Error fetching weather';
  }
}

getWeatherBtn.addEventListener('click', getWeather);
