console.log("Api call js node");

const apikey = "&appid=7e3f21edee540e6110af347b55eb1ab2"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


async function sendRequest(){
    var city1 = document.getElementById("city").value;
    let weaImg = document.getElementById("Image");
    let Name_city = document.getElementById("Name");
    console.log("sending request");
    const response = await fetch(apiUrl + city1 + apikey);
    console.log("Request sent");
    console.log(response);
    let responseData = await response.json();
    console.log(responseData);
    if(response.statusText == "Not Found")
    {
        document.getElementById("error").innerHTML = "City not found";
    }
    else
    {
        document.getElementById("error").innerHTML = "City found";
    }
    let cityElement = document.getElementById("city-weather");
    cityElement.innerHTML = responseData.main.temp + "°C";
    document.getElementById("Humid").innerHTML = "Humidity : " + responseData.main.humidity + "%";
    document.getElementById("Wspeed").innerHTML = "Wind speed : " + responseData.wind.speed + "km/h";
    if(responseData.weather[0].main == 'Clear')
    {
        weaImg.src = "https://cdn.icon-icons.com/icons2/565/PNG/512/clear-sun_icon-icons.com_54320.png";
    }
    else if(responseData.weather[0].main == 'Rain')
    {
        weaImg.src = "https://cdn-icons-png.flaticon.com/512/116/116251.png";
    }
    else if(responseData.weather[0].main == 'Clouds')
    {
        weaImg.src = "https://cdn-icons-png.flaticon.com/512/3313/3313908.png";
    }
    else if(responseData.weather[0].main == 'Dizzle')
    {
        weaImg.src = "https://cdn-icons-png.flaticon.com/512/106/106044.png";
    }
    else if(responseData.weather[0].main == 'Mist')
    {
        weaImg.src = "https://cdn-icons-png.flaticon.com/512/175/175959.png";
    }
    else if(responseData.weather[0].main == 'Snow')
    {
        weaImg.src = "https://www.seekpng.com/png/detail/2-21061_png-file-snow-weather-icon-png.png";
    }
    else if(responseData.weather[0].main == 'Haze')
    {
        weaImg.src = "https://cdn-icons-png.flaticon.com/512/5497/5497190.png";
    }
    Name_city.innerHTML = city1;
}