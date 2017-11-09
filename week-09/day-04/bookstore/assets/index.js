'use strict';
const baseUrl = 'http://localhost:3000';


const createBookstoreTable = function(data) {
    const table = document.createElement('table');
    data['book_data'].forEach(function(bookData) {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${bookData.book_name}</td>
            <td>${bookData.aut_name}</td>
            <td>${bookData.cate_descrip}</td>
            <td>${bookData.pub_name}</td>
            <td>${bookData.book_price}</td>
        `;
        table.appendChild(tableRow);
    });
    document.body.appendChild(table);
}

const xhttp = new XMLHttpRequest()
xhttp.open('GET', `${baseUrl}/bookstore`)
xhttp.send();

xhttp.onreadystatechange = function(res) {
    if (this.status === 200 && this.readyState === 4) {
        createBookstoreTable(JSON.parse(this.responseText));
    }
}