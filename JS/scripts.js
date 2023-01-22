
function get__input(text){
    return document.getElementById(text).value;
}

function set__data(data)
{
    const table= document.getElementById("data__table");

    const table_row = document.createElement('tr');
    
    const table_data1 = table_row.appendChild(document.createElement('td'));
    const table_data2 = table_row.appendChild(document.createElement('td'));
    const table_data3 = table_row.appendChild(document.createElement('td'));
    const table_data4 = table_row.appendChild(document.createElement('td'));
    const table_data5 = table_row.appendChild(document.createElement('td'));

    table_data1.innerText=data.Id;
    table_data2.innerText=data.product_name;
    table_data3.innerText=data.price;
    table_data4.innerText="Edit";
    table_data5.innerText="Delete";

    table.appendChild(table_row);
}

function add__product(){
    const Id = get__input("ID");
    const product_name = get__input("product__name");
    const price = get__input("price");

    set__data({Id,product_name,price});

    // console.log(Id, product_name, price);
}