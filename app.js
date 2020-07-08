    let temperatureDescription =document.querySelector('.describe');
    let temperatureDegree =document.querySelector('.temperature-degree');
    let locationTimeZone =document.querySelector('.location-timezone');
    let src=document.getElementById("X");

    let submit = document.querySelector('.submit');
    let input = document.getElementById("cityname");
    input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) 
    {
      // Cancel the default action, if needed
            event.preventDefault();
      // Trigger the button element with a click
            document.getElementById("submit").click();
    }
  });
    const key= '13d3d682554c7b0c32610d2199f7e062';
    submit.addEventListener("click",()=>{
        
        let city=document.getElementById("cityname").value;
        document.getElementById("cityname").value='';
        const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        fetch(api)
        .then(data=>{
          return  data.json();
        })
        .then(data=>{
            console.log(data);
            const {temp} =data.main;
            const {description,icon} = data.weather[0];
            
            //SET DOM ELEMENTS FROM THE API
            while(src.hasChildNodes())
            {
                src.removeChild(src.firstChild);
            }
            let img =document.createElement("img");
            img.src= `icons/${icon}.png`;
            src.appendChild(img);
            temperatureDegree.textContent = Math.floor(temp - 273) ;
            temperatureDescription.textContent = description;
            locationTimeZone.textContent = data.name;
            
        })
    });
