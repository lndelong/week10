let id = 0;



document.getElementById('add-btn').addEventListener('click', () => {
        let table = document.getElementById('list');
        let row = table.insertRow(0);
        row.insertCell(0).innerHTML = document.getElementById('new-item').value;
        let actions = row.insertCell(1);
        document.getElementById('new-item').value = ''; 
});




    

