let requestURL = 'http://api.weatherstack.com/current?access_key=fa578a1451a5d3637547801311da0a77&query=Paris';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//Element HTML
const day = document.getElementById("day");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const dateText = document.getElementById("date");
const divToDay = document.getElementById("toDay");

//Music
const music = new Audio('sound/calm.mp3');
const divClick = document.getElementById("click");


//Dictionaire du mois et de jour de la semaine avec clé jour et mois en anglais 
let jour = {"Mon":"Lundi","Tue":"Mardi","Wed":"Mercredi","Thu":"Jeudi","Fri":"Vendredi","Sat":"Samedi","Sun":"Dimanche"};
let mois = {"Jan":"janvier","Feb":"février","Mar":"mars","Apr":"avril","May":"mai","Jun":"juin","Jul":"juillet","Aug":"août",
                "Sep":"septembre","Oct":"octobre","Nov":"novembre","Dec":"décembre"};

request.onload = function(){
    let date = Date();
    date = date.split(" ");
    const meteo = request.response;

    divToDay.addEventListener('mousedown',(e) =>{e.preventDefault()})

    //Modification de la page Html
    day.innerText = jour[date[0]];
    city.innerText = meteo.location['name'] + ", " + meteo.location['country'];
    dateText.innerText = date[2] + " " + mois[date[1]] + " " + date[3];
    temp.innerText = meteo.current['temperature'];
    

};

window.addEventListener('click', () => {
    divClick.classList.remove('click');
    divClick.classList.add('click_none');
    music.play();
})
