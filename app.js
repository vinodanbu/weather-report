const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const location = document.getElementById('locationInput').value.trim();

    if (location === "") {
        alert("Please enter a location");
        return;
    }
    const apiKey = "83c6e75c4f96f69c88074b40def8940e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            console.log('Fetch response status:', response.status); // Log the response status
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data received:', data); // Log the received data
            if (data.cod !== 200) {
                alert(`Error: ${data.message}`);
                return;
            }
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error); // Log any error encountered
            alert(`Error fetching weather data: ${error.message}`);
        });
}

function displayWeather(data) {
    const locationName = document.getElementById('locationName');
    const temperature = document.getElementById('temperature');
    const weatherCondition = document.getElementById('weatherCondition');

    locationName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    weatherCondition.textContent = `Condition: ${data.weather[0].description}`;
}
