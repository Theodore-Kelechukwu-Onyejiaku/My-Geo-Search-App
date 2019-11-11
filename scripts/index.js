(function() {
    
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
    const location = $("#location");


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
        if(pageYOffset > 75){
            mainNavs.css("display", "none");
            fixedNav.css("display", "block");
            getStartedCont.css("marginTop", "5%");
            console.log("I am greater than 75");
        }else if(pageYOffset < 5){
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
        divWithBackground.slideToggle(1000);
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
        const mapId = "30ee7c92007cd37d56e1d381a4707e6a"
        

        fetch("http://api.openweathermap.org/data/2.5/weather?q="+location.val()+"&APPID="+mapId)
        .then((data) => {
            console.log(data);
            data.json()
                    .then((recievedData) => {
                        console.log(recievedData);
                        if(recievedData.message){
                            console.log("city not found");
                             $(".error").text("Ooops! "+recievedData.message).show();
                        }else{
                        var place = recievedData.name;
                        var icon = "http://openweathermap.org/img/w/"+recievedData.weather[0].icon+".png";
                        var desc = recievedData.weather[0].description;
                        var temp = recievedData.main.temp;

                        $(".icon").attr("src", icon);
                        $(".description").text(desc);
                        $(".place").text("Search result for:\t"+place) 
                        $ (".temp").text("Temperature result:\t"+temp)

                        }
                        
                    })
        })
        .catch((error) => {
            $(".error").text(error).show()
            error = "Please check your connection or try again";
            console.log(error);
        })
    })
})();