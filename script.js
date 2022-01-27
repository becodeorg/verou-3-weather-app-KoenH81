// whatCity function
function whatCity() {
    if (document.querySelector(".date"))
        location.reload();
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
        const main = document.getElementById('info');
        main.append(day);
    }
    // create let with current time and date
    let today = new Date();
    let hour = today.getHours();
    let sec = today.getSeconds();
    let today2 = today.getDate() + 2;
    let today3 = today.getDate() + 3;
    let today4 = today.getDate() + 4;
    let month = today.getMonth() + 1;
    console.log(month);
    //create div with date append to day divs
    //today
    const todayP = document.createElement('P');
    todayP.innerText = 'Today';
    const todayA = document.createElement('div')
    todayA.className = 'date'
    todayA.append(todayP);
    aDiv = document.getElementById('day1');
    aDiv.append(todayA);
    nog1 = document.createElement('div');
    nog1.id = 'nog1';
    aDiv.append(nog1);

    //tomorrow
    const tomorrowP = document.createElement('P');
    tomorrowP.innerText = 'Tomorrow';
    const tomorrowA = document.createElement('div')
    tomorrowA.className = 'date'
    tomorrowA.append(tomorrowP);
    aDiv = document.getElementById('day2');
    aDiv.append(tomorrowA);
    nog2 = document.createElement('div');
    nog2.id = 'nog2';
    aDiv.append(nog2);
    //today+2
    const tod2 = document.createElement('P');
    tod2.innerText = today2 + '/' + month;
    const tod2a = document.createElement('div')
    tod2a.className = 'date'
    tod2a.append(tod2);
    aDiv = document.getElementById('day3');
    aDiv.append(tod2a);
    nog3 = document.createElement('div');
    nog3.id = 'nog3';
    aDiv.append(nog3);
    //today+3
    const tod3 = document.createElement('P');
    tod3.innerText = today3 + '/' + month;
    const tod3a = document.createElement('div')
    tod3a.className = 'date'
    tod3a.append(tod3);
    aDiv = document.getElementById('day4');
    aDiv.append(tod3a);
    nog4 = document.createElement('div');
    nog4.id = 'nog4';
    aDiv.append(nog4);
    //today + 4
    const tod4 = document.createElement('P');
    tod4.innerText = today4 + '/' + month;
    const tod4a = document.createElement('div')
    tod4a.className = 'date'
    tod4a.append(tod4);
    aDiv = document.getElementById('day5');
    aDiv.append(tod4a);
    nog5 = document.createElement('div');
    nog5.id = 'nog5';
    aDiv.append(nog5);
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
        if (document.getElementById('day1').getElementsByTagName('p').length < 6) {
            if (dataDate.includes(morning)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'morning';
                const dateTime = document.createElement('div');
                dateTime.className = 'time',
                    dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'morning';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog1');
                parent.append(textTemp);
            }
            if (dataDate.includes(noon)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'noon';
                const dateTime = document.createElement('div');
                dateTime.className = 'time';
                dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'noon';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog1');
                parent.append(textTemp);
            }
            if (dataDate.includes(evening)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'evening';
                const dateTime = document.createElement('div');
                dateTime.className = 'time';
                dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'evening';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog1');
                parent.append(textTemp);
            }
        }
        else if (document.getElementById('day1').getElementsByTagName('p').length = 6 && document.getElementById('day2').getElementsByTagName('p').length < 6) {
            if (dataDate.includes(morning)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'morning';
                const dateTime = document.createElement('div');
                dateTime.className = 'time',
                    dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'morning';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog2');
                parent.append(textTemp);
            }
            if (dataDate.includes(noon)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'noon';
                const dateTime = document.createElement('div');
                dateTime.className = 'time';
                dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'noon';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog2');
                parent.append(textTemp);
            }
            if (dataDate.includes(evening)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'evening';
                const dateTime = document.createElement('div');
                dateTime.className = 'time';
                dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'evening';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog2');
                parent.append(textTemp);
            }
        }
        else if (document.getElementById('day2').getElementsByTagName('p').length = 6 && document.getElementById('day3').getElementsByTagName('p').length < 6) {
            if (dataDate.includes(morning)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'morning';
                const dateTime = document.createElement('div');
                dateTime.className = 'time',
                    dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'morning';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog3');
                parent.append(textTemp);
            }
            if (dataDate.includes(noon)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'noon';
                const dateTime = document.createElement('div');
                dateTime.className = 'time';
                dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'noon';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog3');
                parent.append(textTemp);
            }
            if (dataDate.includes(evening)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'evening';
                const dateTime = document.createElement('div');
                dateTime.className = 'time';
                dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'evening';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog3');
                parent.append(textTemp);
            }
        }
        else if (document.getElementById('day3').getElementsByTagName('p').length = 6 && document.getElementById('day4').getElementsByTagName('p').length < 6) {
            if (dataDate.includes(morning)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'morning';
                const dateTime = document.createElement('div');
                dateTime.className = 'time',
                    dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'morning';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog4');
                parent.append(textTemp);
            }
            if (dataDate.includes(noon)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'noon';
                const dateTime = document.createElement('div');
                dateTime.className = 'time';
                dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'noon';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog4');
                parent.append(textTemp);
            }
            if (dataDate.includes(evening)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'evening';
                const dateTime = document.createElement('div');
                dateTime.className = 'time';
                dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'evening';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog4');
                parent.append(textTemp);
            }
        }
        else if (document.getElementById('day4').getElementsByTagName('p').length = 6 && document.getElementById('day5').getElementsByTagName('p').length < 6) {
            if (dataDate.includes(morning)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'morning';
                const dateTime = document.createElement('div');
                dateTime.className = 'time',
                    dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'morning';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog5');
                parent.append(textTemp);
            }
            if (dataDate.includes(noon)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'noon';
                const dateTime = document.createElement('div');
                dateTime.className = 'time';
                dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'noon';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog5');
                parent.append(textTemp);
            }
            if (dataDate.includes(evening)) {
                const dateText = document.createElement('p');
                dateText.innerText = 'evening';
                const dateTime = document.createElement('div');
                dateTime.className = 'time';
                dateTime.append(dateText);
                const dateTemp = document.createElement('p');
                dateTemp.innerText = data.list[i].main.temp + ' °C';
                const dateWarmth = document.createElement('div');
                dateWarmth.className = 'temp';
                dateWarmth.append(dateTemp);
                const textTemp = document.createElement('div');
                textTemp.className = 'evening';
                textTemp.append(dateTime);
                textTemp.append(dateWarmth);
                const parent = document.getElementById('nog5');
                parent.append(textTemp);
            }
        }
    }
}





