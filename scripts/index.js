
    
    //DOM DOM DOM
    const mainNavs = $(".nav-bars")
    const fixedNav = $(".fixed-navbar");
    const allContainer = $(".all-container");
    const searchButton = $("#search-btn");
    const collapseButton = $(".collapse-button");
    const navTwo = $("#nav-two");
    const getStarted = $("#get-started-btn");
    const liveLocationBtn = document.getElementById("live-location-btn")
    const searchContainer = $(".search-container");
    const divWithBackground = $(".div-with-background")
    const getStartedDefinitions = $(".get-started");
    const cavetDown = $("#cavet-down");
    const getStartedCont = $(".get");
    const myLocationMap = document.getElementById("myMap")
    const mapButton = document.querySelector(".checkMap");
    const lct = $("#location");
    let myMap = document.getElementById("myImg");


    //SLIDING DOM
    const nextButton = $("#next");
    const prevButton = $("#prev");



    //Weather Reports DOM
    const results = $(".results");



/***************************        NAV BAR AND VISIBILITY      ********************************************/
    
   window.addEventListener("scroll", function() {
        if(pageYOffset){
            mainNavs.css("display", "none");
            fixedNav.css("display", "block");
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

    
    //FUNCTION FOR GETSTARTED
    getStarted.click(() =>{
        document.body.style.overflow = "scroll";
        searchContainer.slideToggle(500);
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
//FUNCTION FOR AUTOMATIC TEXTS
const inp = document.getElementById("in");
	var words = "''This is the best App in the world'' - Thedore Kelechukwu Onyejiaku(Me)";
	let i = 0;
	setInterval(()=>{
		if(i === words.length){
			i = 0;
			inp.value = "";
		}
		
		inp.value = inp.value + words[i]+ "\n";
		
		i++
	}, 200);










    //SEARCH BUTTON FUNCTION
    searchButton.click(()=>{
        $(".error").hide();
        divWithBackground.hide();
        results.hide();
        results.empty();
        const mapId = "30ee7c92007cd37d56e1d381a4707e6a";
        

        fetch("https://api.openweathermap.org/data/2.5/weather?q="+lct.val()+"&units=metric&APPID="+mapId)
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
                        let tempDiv = $("<div></div>").html("Temperature result: \t"+temp+"&#x2103;");
                        

                         //For temperature conversion
                        let tempScale = document.createElement("select");
                            tempScale.name = "tempScale"
                        let option1 = document.createElement("option");
                        let option2 = document.createElement("option");
                        let buttonFunct = document.createElement("button");


                        option1.value = "celcius"
                        option1.textContent = "CELCIUS"
                        option2.value = "fahrenheit"
                        option2.textContent = "FAHRENHEIT";
                        buttonFunct.textContent = "Change to";
                        buttonFunct.style.float = "none";
                        buttonFunct.style.padding = "5px";
                        buttonFunct.style.border = "thin solid black"
                        let newBr = document.createElement("br");
                        
                        
                        tempScale.appendChild(option1);
                        tempScale.appendChild(option2);
                       
                        //tempScale.addEventListener("change", (event)=>{
                        buttonFunct.addEventListener("click", ()=>{
                            if(tempScale.value === "celcius"){
                                tempDiv.html("Temperature result is: \t"+temp+ "&#x2103;")
                                tempDiv.append($("<br>"));
                                tempDiv.append(buttonFunct);
                                tempDiv.append(tempScale);
                             }else{
                                 let newFah = Math.floor((temp * 9/5) + 32);
                                 tempDiv.html("Temperature result is: \t"+newFah+"&#8457;")
                                 tempDiv.append($("<br>"));
                                 tempDiv.append(buttonFunct);
                                 tempDiv.append(tempScale);         
                             }
                        });
                       
                        tempDiv.append(newBr);
                        tempDiv.append(buttonFunct);
                        tempDiv.append(tempScale);
                        console.log(tempDiv.html());
                        

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
           $(".error").show();
            //console.log(error);
            $(".error").text(error+"!!! Please check your internet connection")
        })
    })

  
 //LOADING OF STATIC MAP
 mapButton.addEventListener("click", ()=>{
    loadStaticMap(lct.val())
 })

 const loadStaticMap = (value)=>{
    let long;
    let lat;

	fetch("https://eu1.locationiq.com/v1/search.php?key=8968a23d6c709b&q="+value+"&format=json")
	.then((data)=>{
	data.json().
		then((rData)=>{
			console.log(rData[0].lat)
			long = rData[0].lon;
			console.log(rData[0].lon)
			lat = rData[0].lat;
			// API token goes here
			var key = '8968a23d6c709b';

			// Add layers that we need to the map
			var streets = L.tileLayer.Unwired({key: key, scheme: "streets"});


			// Initialize the map
			var map = L.map('map', {
			        center: [lat, long], //map loads with this location as center
			        zoom: 13,
			        layers: [streets] // Show 'streets' by default
			});

			// Add the 'scale' control
			L.control.scale().addTo(map);

			var marker = L.marker([lat, long]).addTo(map);

			// Add the 'layers' control
			L.control.layers({
			    "Streets": streets
			}).addTo(map);


		}).
		catch((error)=>{
			console.log(error);
		})
	})
	.catch((error)=>{
		console.log(error);
	})
 }



 //FUNCTION FOR LIVE LOCATION
 liveLocationBtn.addEventListener("click", ()=>{
     window.scrollTo(0,10000000);
    myLocationMap.style.display = "block";
    var source = document.createElement("script");
    source.src = "https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AkeB130WJAPIJNrQ5wnmwuLmyCPpAbcAuzgm_IdKTzb0etBHsqosxUuKZWTnfc_N";
    source.setAttribute = "async";
    source.setAttribute ="defer";
    document.head.appendChild(source);
})
function GetMap(){
    var map = new Microsoft.Maps.Map('#myMap');
 }




 //AUTOCOMPLETI0N
//an event listener that lsitens for an input action
var searchBox = document.getElementById("location")
searchBox.addEventListener("input", () => {
  const inputValue = searchBox.value;

  //an api call with the user request to an autocomplete endpoint
  const api = "https://api.locationiq.com/v1/autocomplete.php?";
  axios
    .get(api, {
      params: { 
        key: "8968a23d6c709b",
        q: inputValue,
        limit: 5,
        crossDomain: true,
        format: "json"
      }
    })

    //recieves the data returned from the api call
    .then(res => {
      const inputValue = searchBox.value;
      const places = res.data;
      let suggest;
      const autoComplete = document.querySelector("#autocomplete");

      if (inputValue.length !== 0) {
        //suggests an auto complete based on user input and displays it to the UI
        suggest = places
          .map(
            place =>
              //displays autocomplete suggestions
              `<div class="suggest" style="text-align:center;color:white;background-color:red;font-weight:bolder;width:50%;position:relative;margin:0 20% 0 20%;display:block;cursor:pointer"> ${place.address.name},${place.address.country}</div>`
          )
          .join("");
      } else {
        suggest = [];
      }

      autoComplete.innerHTML = suggest;
      //when any of the suggestions is clicked the value of the input is replaced with the suggestion clicked
      document.querySelectorAll(".suggest").forEach(item => {
        item.addEventListener("click", e => {
          searchBox.value = e.target.innerHTML;
          autoComplete.innerHTML = "";
        });
      });
      document.querySelector("body").addEventListener("click", () => {
        autoComplete.innerHTML = "";
      });
    });
});
