const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd014ca2891mshcbbe1075a009e69p1801d0jsn0d462764dd9b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) =>{
    cityName.innerHTML= city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    
    .then(response => {
        
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

        console.log(response)
    })
    .catch(err => console.error(err));
    }
    // For city 1
    const getWeather2 = (city) =>{
        raipur.innerHTML= city
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response => response.json())
        
        .then(response => {
            
            a_temp.innerHTML = response.temp
            a_feels_like.innerHTML = response.feels_like
            a_humidity.innerHTML = response.humidity
            a_wind_speed.innerHTML = response.wind_speed
            a_wind_degrees.innerHTML = response.wind_degrees
    
            console.log(response)
        })
        .catch(err => console.error(err));
        }
        //for city 2
            const getWeather3 = (city) =>{
                bilaspur.innerHTML= city
                fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
                .then(response => response.json())
                
                .then(response => {
                    
                    b_temp.innerHTML = response.temp
                    b_feels_like.innerHTML = response.feels_like
                    b_humidity.innerHTML = response.humidity
                    b_wind_speed.innerHTML = response.wind_speed
                    b_wind_degrees.innerHTML = response.wind_degrees
            
                    console.log(response)
                })
                .catch(err => console.error(err));
                }
                //for city3
                const getWeather4 = (city) =>{
                    durg.innerHTML= city
                    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
                    .then(response => response.json())
                    
                    .then(response => {
                        
                        c_temp.innerHTML = response.temp
                        c_feels_like.innerHTML = response.feels_like
                        c_humidity.innerHTML = response.humidity
                        c_wind_speed.innerHTML = response.wind_speed
                        c_wind_degrees.innerHTML = response.wind_degrees
                
                        console.log(response)
                    })
                    .catch(err => console.error(err));
                    }

Delhi.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Delhi")
})
Mumbai.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Mumbai")
})
Bangalore.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Bangalore")
})
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Kawardha")
getWeather2("Raipur")
getWeather3("Bilaspur")
getWeather4("Durg")