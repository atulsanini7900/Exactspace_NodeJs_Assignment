
document.getElementById('jsonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonText = formData.get('json_data');

    try {
        const jsonObject = JSON.parse(jsonText);
        displayJsonInForm(jsonObject);
    } catch (error) {
        displayError(error.message);
    }
});

function displayJsonInForm(jsonObject) {
    const resultContainer = document.getElementById('resultContainer');
    const jsonResult = document.getElementById('jsonResult');
    
    jsonResult.innerHTML = '';

    for (const key in jsonObject) {
        const row = document.createElement('div');
        row.className = 'json-row';

        const keyCell = document.createElement('span');
        keyCell.className = 'json-cell key';
        keyCell.textContent = key;

        const valueCell = document.createElement('textarea');
        valueCell.className = 'json-cell value';
        valueCell.textContent = jsonObject[key];

        row.appendChild(keyCell);
        row.appendChild(valueCell);

        jsonResult.appendChild(row);
    }

    resultContainer.style.display = 'block';
}

function displayError(errorMessage) {
    const resultContainer = document.getElementById('resultContainer');
    const jsonResult = document.getElementById('jsonResult');

    jsonResult.innerHTML = `<p style="color: red;">Error: ${errorMessage}</p>`;

    resultContainer.style.display = 'block';
}
