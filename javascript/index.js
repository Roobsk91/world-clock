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

updateTime();
setInterval(updateTime, 1000);