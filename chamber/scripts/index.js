const myContainerWeather = document.getElementById('weather-info');
const myContainerForecast = document.getElementById('forecast-info');


const myKey = '72241af6181298048ec92072c88b3397';
const myLat = '14.625483';
const myLong = '121.124481';

const urlWeatherCurrent = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function apiFetchCurrentWeather() {
    try {
        const response = await fetch(urlWeatherCurrent);
        if (response.ok) {
            const dataWeather = await response.json();
            console.log(dataWeather); // Debugging: Check API response in console
            displayWeather(dataWeather); // Now calling the function
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}

apiFetchCurrentWeather();

function displayWeather(dataWeather) {

    const sunriseTime = new Date(dataWeather.sys.sunrise * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    const sunsetTime = new Date(dataWeather.sys.sunset * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    myContainerWeather.innerHTML = `
        <h3>Antipolo CIty</h3>
        <figure>
            <img src="https://openweathermap.org/img/wn/04d@2x.png"></img>
            <figcaption>${(dataWeather.weather[0].description)}</figcaption>
        </figure>
        <br>
        <div class="info-list">
            <p><strong>${Math.round(dataWeather.main.temp)}°C</strong></p>
            <p><strong>High</strong>: ${Math.round(dataWeather.main.temp_max)}°C</p>
            <p><strong>Low</strong>: ${Math.round(dataWeather.main.temp_min)}°C</p>
            <p><strong>Humidity</strong>: ${(dataWeather.main.humidity)}</p>
            <p><strong>Sunrise</strong>: ${sunriseTime}
            </p>
            <p><strong>Sunset</strong>:${sunsetTime}</p>
        </div>
        
    `;
}

const urlWeatherForecast = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;


async function apiWeatherForecast() {
    try {
        const response = await fetch(urlWeatherForecast);
        if (response.ok) {
            const dataForecast = await response.json();
            console.log(dataForecast); // Debugging: Check API response in console
            displayForecast(dataForecast); // Now calling the function
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}

apiWeatherForecast();


function displayForecast(dataForecast) {

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const morrow = new Date();
    morrow.setDate(today.getDate() + 2);

    
    const todayStr = "Today";
    const tomorrowStr = tomorrow.toLocaleDateString("en-US", { weekday: "long"});
    const morrowStr = morrow.toLocaleDateString("en-US", { weekday: "long"});
    myContainerForecast.innerHTML = `
        <h3>Antipolo CIty</h3>
        <br>
        <div class="info-list-forecast">
            <p><strong>${todayStr}: </strong> ${Math.round(dataForecast.list[0].main.temp)}°C</p>
            <p><strong>${tomorrowStr}: </strong> ${Math.round(dataForecast.list[1].main.temp)}°C</p>
            <p><strong>${morrowStr}: </strong>${Math.round(dataForecast.list[2].main.temp)}°C</p>
        </div>
        
    `;

}

const mainnav = document.querySelector('#navigation');
const hambutton = document.querySelector('#menu');
const navList = document.querySelector('#nav-list')

document.addEventListener("DOMContentLoaded", () => {
  mainnav.classList.remove("show");
  hambutton.classList.remove("show");
  navList.classList.add("hide");
});

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
  navList.classList.remove('hide');
});

document.addEventListener('click', e =>{
    if (!mainnav.contains(e.target) && e.target !==hambutton){
        mainnav.classList.remove('show'),
        navList.classList.add('hide')
    }
})

const sliderEvents = document.querySelector(".slider-container");

let isDragging
const dragStart = (e) => {
    isDragging = true;
    sliderEvents.classList.add("dragging");
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    startScrollLeft = sliderEvents.scrollLeft;

    if (e.touches) e.preventDefault();
}

const dragging = (e) => {
    if (!isDragging) return;

    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const scrollAmount = startScrollLeft - (x - startX);
    sliderEvents.scrollLeft = scrollAmount;

    e.preventDefault();
}

const dragStop = () => {
    isDragging = false;
    sliderEvents.classList.remove("dragging")
}

sliderEvents.addEventListener("mousedown", dragStart);
sliderEvents.addEventListener("mousemove", dragging);
sliderEvents.addEventListener("mouseup", dragStop);
sliderEvents.addEventListener("mouseleave", dragStop);

sliderEvents.addEventListener("touchstart", dragStart, { passive: false });
sliderEvents.addEventListener("touchmove", dragging, { passive: false });
sliderEvents.addEventListener("touchend", dragStop);


const sliderSpotlight = document.querySelector(".slider-container-spotlight");

let isDraggingSpotlight = false, startX, startScrollLeft;

const dragStartSpotlight = (e) => {
    isDraggingSpotlight = true;
    sliderSpotlight.classList.add("dragging");
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    startScrollLeft = sliderSpotlight.scrollLeft;

    if (e.touches) e.preventDefault();
}

const draggingSpotlight = (e) => {
    if (!isDraggingSpotlight) return;

    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const scrollAmount = startScrollLeft - (x - startX);
    sliderSpotlight.scrollLeft = scrollAmount;

    e.preventDefault();
}

const dragStopSpotlight = () => {
    isDraggingSpotlight = false;
    sliderSpotlight.classList.remove("dragging")
}

sliderSpotlight.addEventListener("mousedown", dragStartSpotlight);
sliderSpotlight.addEventListener("mousemove", draggingSpotlight);
sliderSpotlight.addEventListener("mouseup", dragStopSpotlight);
sliderSpotlight.addEventListener("mouseleave", dragStopSpotlight);

sliderSpotlight.addEventListener("touchstart", dragStartSpotlight, { passive: false });
sliderSpotlight.addEventListener("touchmove", draggingSpotlight, { passive: false });
sliderSpotlight.addEventListener("touchend", dragStopSpotlight);

async function fetchBusinesses() {
    try {
        const response = await fetch('scripts/businesses.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const businesses = await response.json();
        
        console.log('Fetched Businesses:', businesses); 

        displaySpotlight(businesses);
        displaySpotlight(businesses);
    } catch (error) {
        console.error('Error fetching businesses:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchBusinesses);


const myContainerSpotlight = document.querySelector('.slider-items-spotlight');

function displaySpotlight(business) {

    function getUniqueRandomNumbers(min, max, count) {
        if (max - min + 1 < count) {
            throw new Error("Range is too small for the required unique numbers.");
        }
    
        let numbers = [];
        while (numbers.length < count) {
            let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!numbers.includes(randomNum)) {
                numbers.push(randomNum);
            }
        }
        return numbers;
    }
    
const [randomNumber1, randomNumber2, randomNumber3] = getUniqueRandomNumbers(0, 9, 3);

    myContainerSpotlight.innerHTML = `
        <div class="spotlight-cards">
            <img src="images/${business[randomNumber1].image_file_name}" alt="${business[randomNumber1].name} logo" class="business-image" width="150" height="150">
            <h3>${business[randomNumber1].name}</h3>
            <p><strong>Address:</strong> ${business[randomNumber1].address}</p>
            <p><strong>Phone:</strong> ${business[randomNumber1].phone_number || 'N/A'}</p>
            <p><a href="${business[randomNumber1].website_url}" target="_blank">Visit Website</a></p>
            <p><strong>Membership Level:</strong> ${business[randomNumber1].membership_level}</p>
        </div>
        <div class="spotlight-cards">
            <img src="images/${business[randomNumber2].image_file_name}" alt="${business[randomNumber2].name} logo" class="business-image" width="150" height="150">
            <h3>${business[randomNumber2].name}</h3>
            <p><strong>Address:</strong> ${business[randomNumber2].address}</p>
            <p><strong>Phone:</strong> ${business[randomNumber2].phone_number || 'N/A'}</p>
            <p><a href="${business[randomNumber2].website_url}" target="_blank">Visit Website</a></p>
            <p><strong>Membership Level:</strong> ${business[randomNumber2].membership_level}</p>
        </div>
        <div class="spotlight-cards">
           <img src="images/${business[randomNumber3].image_file_name}" alt="${business[randomNumber3].name} logo" class="business-image" width="150" height="150">
            <h3>${business[randomNumber3].name}</h3>
            <p><strong>Address:</strong> ${business[randomNumber3].address}</p>
            <p><strong>Phone:</strong> ${business[randomNumber3].phone_number || 'N/A'}</p>
            <p><a href="${business[randomNumber3].website_url}" target="_blank">Visit Website</a></p>
            <p><strong>Membership Level:</strong> ${business[randomNumber3].membership_level}</p>
        </div>
        
    `;
}