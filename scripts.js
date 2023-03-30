var url = new URL('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=');


document.getElementById("myButton").onclick = function(){
    var myCity = document.getElementById("city").value
    localStorage.setItem('city',myCity)
    url.searchParams.set('city',myCity);
    
    fetch(url, {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f280a88c7mshf6a9cb3785f07b8p11a306jsn9815205e1a51',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  })

  .then(response => response.json())
  .then(response => {
    console.log(response);
    document.getElementById('location').innerHTML = "Weather in "+myCity;
    document.getElementById('temp').innerHTML = response.temp+"°C";
    document.getElementById('max_temp').innerHTML = "Max: "+response.max_temp+"°C";
    document.getElementById('min_temp').innerHTML = "Min: "+response.min_temp+"°C";
    document.getElementById('feels_like').innerHTML = "Feels Like: "+response.feels_like+"°C";
    document.getElementById('humidity').innerHTML = "Humidity: "+response.humidity+"%";
  })
  .catch(err => {
	  console.log(err);
  });
}








    
