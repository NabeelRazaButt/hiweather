// File: src/components/WeatherDisplay.jsx
import PropTypes from 'prop-types';

WeatherDisplay.propTypes = {
    weather: PropTypes.shape({
        name: PropTypes.string.isRequired,
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired,
        }).isRequired,
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired,
            })
        ).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

function WeatherDisplay({ weather }) {
    return (
        <div className="weather-display">
            <h2 className="weather-display-name">Weather in {weather.name}</h2>
            <p className="weather-display-main_temp">Temperature: {weather.main.temp}°C</p>
            <p className="weather-display-description">Conditions: {weather.weather[0].description}</p>
            <p className="weather-display-humidity">Humidity: {weather.main.humidity}%</p>
            <p className="weather-display-wind_speed">Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
}

export default WeatherDisplay;
