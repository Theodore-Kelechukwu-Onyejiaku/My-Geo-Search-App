    //DOM DOM DOM
    const mainNavs = $(".nav-bars")
    const fixedNav = $(".fixed-navbar");
    const allContainer = $(".all-container");
    const searchButton = $("#search-btn");
    const collapseButton = $(".collapse-button");
    const navTwo = $("#nav-two");
    const getStarted = $("#get-started-btn");
    const searchContainer = $(".search-container");
    const divWithBackground = $(".div-with-background")
    const getStartedDefinitions = $(".get-started");
    const cavetDown = $("#cavet-down");
    const getStartedCont = $(".get");
    const lct = $("#location");


    //SIDE BAR DOM
    const weatherContent = $(".weather-content")
    const weatherButton = $("#weather-button");
    const temperatureContent = $(".temperature-content");
    const temperatureButton = $("#temperature-button");
    const windContent = $(".wind-content");
    const windButton = $("#wind-button");
    const humidityContent = $(".humidity-content");
    const humidityButton = $("#humidity-button");


    //SLIDING DOM
    const nextButton = $("#next");
    const prevButton = $("#prev");



    //Weather Reports DOM
    const results = $(".results");




/********************************           FOR SIDE BAR     *************************************************************************************(*/
    weatherButton.click(()=>{
        weatherContent.slideToggle(500);
    }) 
    temperatureButton.click(() =>{
        temperatureContent.slideToggle(500);
    })
    windButton.click(() =>{
        windContent.slideToggle(500);
    })
    humidityButton.click(() =>{
        humidityContent.slideToggle(500);
    })

/***********************************************************************************************************/


/***************************        NAV BAR AND VISIBILITY      ********************************************/
    
   window.addEventListener("scroll", function() {
        if(pageYOffset){
            mainNavs.css("display", "none");
            fixedNav.css("display", "block");
            getStartedCont.css("marginTop", "5%");
            console.log("I am greater than 75");
        }else{
             mainNavs.css("display", "block");
            fixedNav.css("display", "none");
            getStartedCont.css("marginTop", "0%");
        }
   });

        

    
    //FUNCTION FOR COLLAPSE BUTTON IN ORDER TO COLLAPSE THE NAV BECAUSE OF SMALL SCREEN SIZE
    collapseButton.click(() =>{
        navTwo.slideToggle(500);
    })

    //FUNCTION FOR DROP DOWN OF WEATHER, TEMPERATURE AND SO ON
    var angle = 0;
    cavetDown.click( () =>{
        angle+=180;
       $(".list-container").slideToggle(500);
       $(cavetDown).css("transform", "rotate("+angle+"deg)")
    })
    
    //FUNCTION FOR GETSTARTED
    getStarted.click(() =>{

        searchContainer.slideToggle(100);
        divWithBackground.slideToggle(0.5);
        getStartedDefinitions.slideUp(1000);
    })
    
 
    //TO CORRECT THE DISAPEARANCE OF THE TOGGLE THE NAV BAR
    $(window).resize(() =>{
           // navTwo.show(); 
    })


/***********************************************************************************************************************************/
    //SLIDER FUNCTION
    var slideIndex = 0;
    const backgrounds = ["./images/background.jpg","./images/map2.png", "./images/map1.jpg","./images/cloud2.jpg", "./images/share.jpg"];
    const infos = ["Search for places around the world", "Get map locations", "View maps of the world", "Know about descriptions of weather", "Share live on FACEBOOK!!!"]
    const next = () =>{
        slideIndex +=1
        if(slideIndex > backgrounds.length - 1){
            slideIndex = 0;
        }
        divWithBackground.css("background-image", "url("+backgrounds[slideIndex]+")");
        $(".info").text(infos[slideIndex]);
    }
    const prev = () =>{
        slideIndex -= 1;
        if(slideIndex < 0){
            slideIndex = backgrounds.length - 1;
        }
            divWithBackground.css("background-image", "url("+backgrounds[slideIndex]+")");

        }

    nextButton.click(() =>{
        next();
    })
    prevButton.click(()=>{
        prev();
    })

    /*  adding a trigger  */
    setInterval(()=>{
        nextButton.trigger("click");
    }, 5000)

/*********************************************************************************************************************************/











    //SEARCH BUTTON FUNCTION
    searchButton.click(()=>{
        $(".error").hide();
        results.hide();
        results.empty();
        const mapId = "30ee7c92007cd37d56e1d381a4707e6a";
        

        fetch("http://api.openweathermap.org/data/2.5/weather?q="+lct.val()+"&units=metric&APPID="+mapId)
        .then((data) => {
            console.log(data);
            data.json()
                    .then((recievedData) => {
                        console.log(recievedData);
                        if(recievedData.message){   //IF there is a 404 message then this block of code will execute
                            results.textContent = "";
                            let img = document.createElement("img");
                            img.src = "./images/404.png";
                            $(img).css({
                                "width": "100%",
                                "height": "100%",
                            });
                            console.log("city not found");
                             $(".error").text("Ooops! "+recievedData.message).show();
                             $(".error").append(img);
                        }else{ 
                        $(".error").text("");
                        console.log("I have recieved the data");
                        $(".results").show(); 



                        let place = recievedData.name;
                        let icon = "http://openweathermap.org/img/w/"+recievedData.weather[0].icon+".png";
                        let desc = recievedData.weather[0].description;
                        let temp = recievedData.main.temp;
                        let country = recievedData.sys.country;
                        let wind = recievedData.wind.speed;
                        let humidity = recievedData.main.humidity;
                        let longitude = recievedData.coord.lon;
                        let latitude = recievedData.coord.lat;
                        let pressure = recievedData.main.pressure;

                       
                        

                        


                        let descriptionDiv = $("<div></div>").text(desc);
                        let tempDiv = $("<div></div>").text("Temperature result: \t"+temp+"C");
                        

                         //For temperature conversion
                        let tempScale = document.createElement("select");
                            tempScale.name = "tempScale"
                        let option1 = document.createElement("option");
                        let option2 = document.createElement("option");

                        option1.value = "celcius"
                        option1.textContent = "CELCIUS"
                        option2.value = "fahrenheit"
                        option2.textContent = "FAHRENHEIT"
                        let newBr = document.createElement("br");

                        tempScale.appendChild(option1);
                        tempScale.appendChild(option2);
                        console.log(tempScale);
                        tempScale.addEventListener("change", (event)=>{
                            if(event.target.value === "celcius"){
                               tempDiv.text("Temperature result: \t"+temp+"C")
                               tempDiv.append($("<br>"))
                               tempDiv.append(tempScale); 
                            }else{
                                let newFah = Math.floor((temp * 9/5) + 32);
                                tempDiv.text("Temperature result: \t"+newFah+"F")
                                tempDiv.append($("<br>"))
                                tempDiv.append(tempScale);
                            }

                           

                           
                        })

                        tempDiv.append(newBr);
                        tempDiv.append(tempScale);
                        

                        let descriptionImage = $("<img>").attr("src", icon);
                        let iconDiv = $("<div></div>");
                        let nameOfPlace = $("<div></div>").text("Weather report for: \t"+place);
                        let nameOfCountry = $("<div></div>").text("Country code: \t"+country)
                        let windDiv = $("<div></div>").text("Wind speed: \t"+wind+"m/s"); 
                        let humidityDiv = $("<div></div>").text("Humidity: \t"+humidity+"%");
                        let pressureDiv = $("<div></div>").text("Pressure :\t"+pressure+"hPa");
                        let long_lat = $("<div></div>").text("Longitude: "+longitude+"\nLatitude: "+latitude);
                            iconDiv.append(descriptionImage);


                        results.append(nameOfPlace);
                        results.append(nameOfCountry);
                        results.append(iconDiv);
                        results.append(descriptionDiv);
                        results.append(tempDiv);
                        results.append(windDiv);
                        results.append(humidityDiv);
                        results.append(pressureDiv);
                        results.append(long_lat);
                       


                        

                        }

                        
                    })
        })
        .catch((error) => {
           $(".error").text(error).show();
            console.log(error);
            $(".error").text(error+"!!! Please check your internet connection").show()
        })
    })