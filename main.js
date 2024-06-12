const url = 'https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics';

fetch(url)
.then(response => response.json())
.then(data => {
    const amountOfProducts = data.amount_of_products;

document.getElementById('productCount').textContent = `Cantidad total de productos: ${amountOfProducts}`;

})

.catch(error => console.error('Error:', error));