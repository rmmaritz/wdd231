// OpenWeather API Configuration

const apiKey = "8ef2a230774ae6c2625de69a179edcd3";

const latitude = -25.7479;
const longitude = 28.2293;

const weatherUrl =
  `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


// Fetch Weather Data

async function getWeatherData() {
  try {
    const response = await fetch(weatherUrl);

    if (!response.ok) {
      throw new Error("Weather data could not be retrieved.");
    }

    const data = await response.json();

    displayCurrentWeather(data);
    displayForecast(data);

  } catch (error) {
    console.error("Weather Error:", error);
  }
}


// Display Current Weather

function displayCurrentWeather(data) {

  const currentWeather =
    document.querySelector("#current-weather");

  const current = data.list[0];

  const iconCode = current.weather[0].icon;

  const iconUrl =
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  currentWeather.innerHTML = `
        <p>
            <strong>
                ${Math.round(current.main.temp)}°C
            </strong>
        </p>

        <img
            src="${iconUrl}"
            alt="${current.weather[0].description}"
            width="80"
            height="80"
        >

        <p>
            ${current.weather[0].main}
        </p>
    `;
}


// Display 3-Day Forecast

function displayForecast(data) {

  const forecastContainer =
    document.querySelector("#forecast");

  forecastContainer.innerHTML = "";

  const forecastDays = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  forecastDays.slice(0, 3).forEach(day => {

    const forecastCard =
      document.createElement("div");

    const date =
      new Date(day.dt_txt);

    forecastCard.innerHTML = `
            <p>
                <strong>
                    ${date.toLocaleDateString("en-US", {
      weekday: "short"
    })}
                </strong>
            </p>

            <p>
                ${Math.round(day.main.temp)}°C
            </p>
        `;

    forecastContainer.appendChild(forecastCard);

  });
}


// Export Function

export { getWeatherData };