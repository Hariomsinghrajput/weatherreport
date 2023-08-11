
const APIkey="abd7f87ee28c591e34c3f568d38605ef"
const APIUrl="https://api.openweathermap.org/data/2.5/weather?appid=abd7f87ee28c591e34c3f568d38605ef&units=metric";

const searchbox=document.querySelector(".searchBox");
const searchbtn=document.querySelector(".searchBtn");
const weatherIcon=document.querySelector(".weather-icon");

console.log({searchbtn}); 
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})
searchbox.addEventListener("keydown", (e)=>{
    if(e.keyCode === 13)checkweather(searchbox.value);
})


async function checkweather(city){
     const response = await fetch(APIUrl +`&q=${city}`)
     if(response.status == 404)
     {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        

     }
     else{

   
    var  data = await response.json();


    console.log(data);

    document.querySelector(".city").innerText=data.name ;
    document.querySelector(".Temp").innerText=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerText = data.main.humidity+"%";
    document.querySelector(".wind").innerText= data.wind.speed+"km/h";

   


    if(data.weather[0].main === "Clouds")
    {
     weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main ==="Clear")
    {
     weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main === "Haze")
    {
     weatherIcon.src="images/drizzle.png"
    }
     else if(data.weather[0].main === "Rain")
    {
     weatherIcon.src="images/rain.png"
    }
     else if(data.weather[0].main === "Mist")
    {
     weathericon.src="images/mist.png"
    }
     else if(data.weather[0].main ==="Drizzle")
    {
     weathericon.src="images/rain.png"
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

} 

}

checkweather("new delhi");