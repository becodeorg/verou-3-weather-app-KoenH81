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
    for (let i = 1; i < 6; i++) {
        const day = document.createElement('div');
        day.id = 'day' + i;
        const main = document.getElementById('main');
        main.append(day);
    }
    for (i = 0; i < data.list.length; i++) {
        const morning = '06:00:00';
        const noon = '12:00:00';
        const evening = '18:00:00';
        let dataDate = data.list[i].dt_txt;
        if (i < 5) {
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
        else if (document.getElementById('day1').getElementsByTagName('p').length = 5) {
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
        else if (document.getElementById('day2').getElementsByTagName('p').length = 6) {
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
        else if (document.getElementById('day3').getElementsByTagName('p').length == 6) {
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
        else if (document.getElementById('day4').getElementsByTagName('p').length == 6) {
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





