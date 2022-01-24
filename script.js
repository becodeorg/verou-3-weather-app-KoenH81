// whatCity function
function whatCity() {
    // fetch data
    let cityName = document.getElementById('cName').value;
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=25266980979ea915f2dea46a8bfb113e')
        .then(response => response.json())
        .then(data => {
            getDate(data);
            console.log(data);
        })
    // complete citySpan
    document.getElementById('citySpan').innerText = ' in ' + cityName;
}
//eventlistener city
const submitB = document.getElementById('submit')
submitB.addEventListener('click', whatCity);
// function getDate
function getDate(data) {
    for (i = 0; i < data.list.length; i++) {
        // const dateText = document.createElement('p');
        // dateText.innerText = data.list[i].dt_txt;
        // const parent = document.getElementById('test');
        // parent.append(dateText);

    }


}




