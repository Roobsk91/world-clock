function updateTime(){

let losAngelesElement = document.querySelector("#los-angeles");
let LosAngelesDateElement = losAngelesElement.querySelector(".date");
let LosAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

LosAngelesDateElement.innerHTML = losAngelesTime.format("Do MMMM YYYY");
LosAngelesTimeElement.innerHTML = losAngelesTime.format("H:mm:ss [<small>]A[</small>]");

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("Do MMMM YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("H:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
                <div class="">
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("H:mm:ss")} <small>${cityTime.format("A")}</small></div>
            </div>
            <a href="index.html">All cities</a>`
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);