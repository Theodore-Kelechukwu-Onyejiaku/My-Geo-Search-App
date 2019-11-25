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

        const collapseBtn = $(".collapse-button");
        const divToCollapse = $("#nav-two");
    
    collapseBtn.click(()=>{
        divToCollapse.slideToggle(500); 
        })

})

