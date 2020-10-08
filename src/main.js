const url= 'https://api.covid19api.com/live/country/';
let inputField = document.getElementById('input');
let countryName = document.querySelector('.country');
let totalCases = document.querySelector('.confirmed');
let totalDeaths = document.querySelector('.deaths');
let totalsRecovered = document.querySelector('.recovered');
let activeCases = document.querySelector('.Active');
let criticalCases = document.querySelector('.Critical');
let newCases = document.querySelector('.New');
let newDeaths = document.querySelector('.NewDeaths');
let tests = document.querySelector('.tested')
let submit = document.getElementById('submit');
let Time = document.querySelector('.time');
const getData = async() =>{
try{
    const city = inputField.value;
    const response = await fetch("https://covid-193.p.rapidapi.com/statistics?country="+ city, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "5b467cb0ebmshaaaf6e910f2b450p125650jsn46db963d7cbf"
        }
    });
if(response.ok)
{
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    Time.innerHTML = jsonResponse.response[0].day;
    countryName.innerHTML = jsonResponse.parameters.country;
    activeCases.innerHTML = jsonResponse.response[0].cases.active;
    totalCases.innerHTML = jsonResponse.response[0].cases.total;
    totalDeaths.innerHTML = jsonResponse.response[0].deaths.total;
    totalsRecovered.innerHTML = jsonResponse.response[0].cases.recovered;
}
}catch(err){
console.log(err);
 }
} 
const displaySuggestions = () => {
    getData();
}
    
submit.addEventListener('click', displaySuggestions);