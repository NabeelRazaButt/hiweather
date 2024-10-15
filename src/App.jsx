// File: src/App.js
import { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay.jsx'; // Step 7 will cover this file
import './App.css';

const API_KEY = 'b1dfbbebb89311fee0c72964a8636d99'; // Replace with your OpenWeatherMap API key

function App() {
    const [city, setCity] = useState(''); // State to store city input
    const [weather, setWeather] = useState(null); // State to store weather data
    const [error, setError] = useState(null); // State to store error messages

    const getWeather = async () => {
        const trimmedCity = city.trim();
        if (!trimmedCity) {
            setError('Please enter a valid city name.');
            setWeather(null); // Reset weather data
            return;
        }

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();

            if (response.ok) {
                setWeather(data); // Set the weather data to state
                setError(null); // Clear error messages
            } else {
                setError(data.message); // Set error message from API response
                setWeather(null); // Reset weather data
            }
        } catch (error) {
            setError('An error occurred. Please try again.',error);
            setWeather(null); // Reset weather data
        }
    };

    return (
        <div className="App">
            <h1 className="header__title">React Weather App</h1>
            <div className="search-container">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} // Update city state on input change
                    placeholder="Enter city name"
                />
                <button onClick={getWeather}>Get Weather</button> {/* Fetch weather on button click */}
            </div>
            {error && <p className="error">{error}</p>} {/* Show error if any */}
            {weather && <WeatherDisplay weather={weather} />} {/* Show weather data if available */}
        </div>
    );
}

export default App;
