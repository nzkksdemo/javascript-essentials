function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = '83d714c0ee23c32c668e80dfffac0737'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrlUsingCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrlUsingLatAndLon = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    const apiUrl = city !== '' ? apiUrlUsingCity : apiUrlUsingLatAndLon;
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        // debugger;
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

function clearForm () {
    document.getElementById('city').value = '';
    document.getElementById('latitude').value = '';
    document.getElementById('longitude').value = '';
    document.getElementById('weatherInfo').innerHTML = '';
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails );
document.getElementById('resetBtn').addEventListener('click', clearForm );