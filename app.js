function prayerTimes() {
    fetch('http://api.aladhan.com/v1/calendar?latitude=-6.200000&longitude=106.816666&method=11&month=2&year=2023')
    .then(response => response.json())
    .then((response) => {
        let dates = new Date();
        let today = dates.getDate();
        let getData = response.data[1].timings; 


        let app = document.getElementById('app');
        let table = document.createElement('table');
        let tableBody = document.createElement('tbody');
        
        for(i in getData) {
            let row = tableBody.insertRow();
            let name = row.insertCell(0);
            let time = row.insertCell(1);
                name.innerHTML = i;
                time.innerHTML = getData[i];
                tableBody.appendChild(row);
            }
        
        table.appendChild(tableBody)
        app.appendChild(table);
    });
};

function success(position) {
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error(){
    prayerTimes(alert('Geolocation doesn\'t support on your browser, please use other browser'));
}


function userLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation doesn\'t support on your browser, please use other browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index() {
    let app = document.getElementById('app');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer times';

    app.appendChild(h3);

    userLocation();
}
index();