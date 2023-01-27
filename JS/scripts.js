const MAX_NAME_LENGTH = 120;
const MIN_PRICE_LIMIT = 1;
const MAX_PRICE_LIMIT = 100000;
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
    table_data5.innerHTML= '<p onclick="delete__product(this)">Delete</p>';

    table.appendChild(table_row);
}

function showError({ID,massage}){
    const errorElement = document.getElementById(ID);
    errorElement.innerText = massage;
    errorElement.style.color = 'Red';
}

function isvalid({Id,product_name,price}){

    let isvalidInput = true;
    if(!Boolean(Id))
    {
        showError({
            ID : 'errorId',
            massage : 'Invalid ID',
        })
        isvalidInput = false;
    }

    if(!Boolean(product_name) || product_name.length>MAX_NAME_LENGTH){
        showError({
            ID : 'errorProductName',
            massage : 'Invalid Name',
        })
        isvalidInput = false;
    }

    if(!Boolean(price) || price > MAX_PRICE_LIMIT || price < MIN_PRICE_LIMIT){
        showError({
            ID : 'errorProductPrice',
            massage : 'Invalid Price',
        })
        isvalidInput = false;
    }

    return isvalidInput;
}

function add__product(){
    const Id = get__input("ID");
    const product_name = get__input("product__name");
    const price = get__input("price");

    const get__data = isvalid({Id,product_name,price});

    Boolean(get__data) && set__data({Id,product_name,price});

    // console.log(Id, product_name, price);
}

function delete__product(cell)
{
   
    const table_row = cell.parentNode.parentNode;
    table_row.parentNode.removeChild(table_row);

}