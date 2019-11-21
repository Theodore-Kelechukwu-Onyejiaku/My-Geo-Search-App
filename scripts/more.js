//FIXED INFO
$(document).ready(function(){
    const weatherContent = document.querySelector(".weather-content");
    const weatherHead = document.querySelector(".weather-content .wea")
    const temperatureHead = document.querySelector(".temperature-content .temp")
    const windHead = document.querySelector(".wind-content .win")
    const humidityHead = document.querySelector(".humidity-content .hum")
    const temperatureContent = document.querySelector(".temperature-content");
    const windContent = document.querySelector(".wind-content");
    const humidityContent = document.querySelector(".humidity-content");
    const catchy1 = document.querySelector(".catch1");
    const catchy2 = document.querySelector(".catch2");

    
    
    var deg1 = 10; 
    setInterval(()=>{
        catchy1.style.transform = "rotate("+deg1+"deg)";
        deg1++;
    }, 0.001) 
    catchy1.addEventListener("mouseenter", ()=>{
        catchy1.style.float = catchy1.style.float === "right" ? "left" : "right";
    })

    var deg2 = 10;
    setInterval(()=>{
        catchy2.style.transform = "rotate("+deg2+"deg)";
        deg2++;
    }, 0.001) 
    catchy2.addEventListener("mouseenter", ()=>{
        catchy2.style.float = catchy2.style.float === "right" ? "left" : "right";
    })
    
    weatherContent.addEventListener("mouseenter", ()=>{
            weatherHead.style.transform = "rotate(0deg)";
            weatherHead.style.backgroundColor = "rgb(3, 56, 3)";
    })
    weatherContent.addEventListener("mouseleave", ()=>{
            weatherHead.style.transform = "rotate(180deg)";
            weatherHead.style.backgroundColor = "red";		
    })
    temperatureContent.addEventListener("mouseenter", ()=>{
            temperatureHead.style.transform = "rotate(0deg)";
            temperatureHead.style.backgroundColor = "rgb(3, 3, 56)";
    })
    temperatureContent.addEventListener("mouseleave", ()=>{
            temperatureHead.style.transform = "rotate(180deg)";
            temperatureHead.style.backgroundColor = "red";		
    })
    windContent.addEventListener("mouseenter", ()=>{
            windHead.style.transform = "rotate(0deg)";
            windHead.style.backgroundColor = "teal";
    })
    windContent.addEventListener("mouseleave", ()=>{
            windHead.style.transform = "rotate(180deg)";
            windHead.style.backgroundColor = "red";		
    })
    humidityContent.addEventListener("mouseenter", ()=>{
            humidityHead.style.transform = "rotate(0deg)";
            humidityHead.style.backgroundColor = "rgb(22,22,0)";
    })
    humidityContent.addEventListener("mouseleave", ()=>{
            humidityHead.style.transform = "rotate(180deg)";
            humidityHead.style.backgroundColor = "red";		
    })



})

