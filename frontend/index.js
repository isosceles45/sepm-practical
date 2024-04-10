window.onload = function() {
    fetchData();
};

function fetchData() {
    fetch('http://localhost:3000/api/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayError('Error fetching data. Please try again later.');
        });
}

function displayData(data) {
    const dataElement = document.getElementById('data');
    dataElement.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
}

function displayError(message) {
    const dataElement = document.getElementById('data');
    dataElement.innerHTML = '<div style="color: red;">' + message + '</div>';
}