import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  const apiKey = 'acd05f928340557a0e2890e151ee66e0';

  const submitForm = (event) => {
    event.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${event.target[0].value}&appid=${apiKey}`,
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.cod === 200) {
          setWeather(res);
        } else {
          toast.error(res.message);
        }
      });
  };

  return (
    <div>
      <h1>Прогноз погоды</h1>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="названия города" />
        <button type="submit">Получить погоду</button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {weather && (
        <div>
          <h2>Город: {weather.name}</h2>
          <h2>Страна: {weather.sys.country}</h2>
          <h3>Температура: {Math.round(weather.main.temp - 273, 15)} °C</h3>
          <h3>Ощущается как: {Math.round(weather.main.feels_like - 273, 15)} °C</h3>
          <h3>Скорость ветра: {weather.wind.speed} м/с</h3>
          <h3>
            Тип погоды: {weather.weather[0].main}
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
					</h3>
					<h3>Влажность: {weather.main.humidity}</h3>
        </div>
      )}
    </div>
  );
};

export default Weather;
