// whatCity function
function whatCity() {
    // fetch data
    let cityName = document.getElementById('cName').value;
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric&appid=25266980979ea915f2dea46a8bfb113e')
        .then(response => response.json())
        .then(data => {
            getDate(data);
            console.log(data);
        })
    // complete citySpan
    document.getElementById('citySpan').innerText = ' ' + cityName;
}
//eventlistener city
const submitB = document.getElementById('submit')
submitB.addEventListener('click', whatCity);
// function getDate
function getDate(data) {
    // create div per day
    for (let i = 1; i < 6; i++) {
        const day = document.createElement('div');
        day.id = 'day' + i;
        const main = document.getElementById('main');
        main.append(day);
    }
    // create let with current time
    let today = new Date();
    let hour = today.getHours();
    let sec = today.getSeconds();
    console.log(hour);
    console.log(sec);
    // create empty div if now is later than 6.00 and 12.00
    if (hour >= 6 && sec >= 0) {
        const later6 = (document.createElement('p'));
        const later62 = (document.createElement('p'));
        const parent = document.getElementById('day1');
        parent.append(later6, later62);
    }
    if (hour >= 12 && sec >= 0) {
        const later12 = document.createElement('p');
        const later122 = document.createElement('p');
        const parent = document.getElementById('day1');
        parent.append(later12, later122);
    }
    // separate data in corresponding day divs
    for (i = 0; i < data.list.length; i++) {
        const morning = '06:00:00';
        const noon = '12:00:00';
        const evening = '18:00:00';
        let dataDate = data.list[i].dt_txt;
        if (document.getElementById('day1').getElementsByTagName('p').length < 5) {
            if (dataDate.includes(morning)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day1');
                parent.append(dateText);
                parent.append(dateTemp);
            }
            if (dataDate.includes(noon)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day1');
                parent.append(dateText);
                parent.append(dateTemp);
            }
            if (dataDate.includes(evening)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day1');
                parent.append(dateText);
                parent.append(dateTemp);
            }
        }
        else if (document.getElementById('day1').getElementsByTagName('p').length = 5 && document.getElementById('day2').getElementsByTagName('p').length < 5) {
            if (dataDate.includes(morning)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day2');
                parent.append(dateText);
                parent.append(dateTemp);
            }
            if (dataDate.includes(noon)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day2');
                parent.append(dateText);
                parent.append(dateTemp);
            }
            if (dataDate.includes(evening)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day2');
                parent.append(dateText);
                parent.append(dateTemp);
            }
        }
        else if (document.getElementById('day2').getElementsByTagName('p').length = 5 && document.getElementById('day3').getElementsByTagName('p').length < 5) {
            if (dataDate.includes(morning)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day3');
                parent.append(dateText);
                parent.append(dateTemp);
            }
            if (dataDate.includes(noon)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day3');
                parent.append(dateText);
                parent.append(dateTemp);
            }
            if (dataDate.includes(evening)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day3');
                parent.append(dateText);
                parent.append(dateTemp);
            }
        }
        else if (document.getElementById('day3').getElementsByTagName('p').length = 5 && document.getElementById('day4').getElementsByTagName('p').length < 5) {
            if (dataDate.includes(morning)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day4');
                parent.append(dateText);
                parent.append(dateTemp);
            }
            if (dataDate.includes(noon)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day4');
                parent.append(dateText);
                parent.append(dateTemp);
            }
            if (dataDate.includes(evening)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day4');
                parent.append(dateText);
                parent.append(dateTemp);
            }
        }
        else if (document.getElementById('day4').getElementsByTagName('p').length = 5 && document.getElementById('day5').getElementsByTagName('p').length < 5) {
            if (dataDate.includes(morning)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day5');
                parent.append(dateText);
                parent.append(dateTemp);
            }
            if (dataDate.includes(noon)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day5');
                parent.append(dateText);
                parent.append(dateTemp);
            }
            if (dataDate.includes(evening)) {
                const dateText = document.createElement('p');
                dateText.innerText = data.list[i].dt_txt;
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp;
                const parent = document.getElementById('day5');
                parent.append(dateText);
                parent.append(dateTemp);
            }
        }
    }
}





