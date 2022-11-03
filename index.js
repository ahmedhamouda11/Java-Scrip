
var productNameInput =document.getElementById("productNameInput");
var productPriceInput =document.getElementById("productPriceInput");
var productCategoryInput =document.getElementById("productCategoryInput");
var productDescInput =document.getElementById("productDescInput");
var btnUpdate =document.getElementById('btnUpdate')
var btnform =document.getElementById('btnform')
var productContainer =[]; 

if(localStorage.getItem('products') != null){
    productContainer = JSON.parse(localStorage.getItem('products'))
    displayProduct();
}

// JSON = > javascript Object Notition


function addProduct(){
    var product= {
        name:productNameInput.value ,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value,
    }
    productContainer.push(product);
    localStorage.setItem('products',JSON.stringify(productContainer))
    displayProduct();
    clearProduct();

}
function displayProduct(){
    var cartona = ``;
    for(var i=0; i<productContainer.length;i++){
        cartona +=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick="setForm(${i})" class='btn btn-outline-warning btn-sm'>Update</button></td>
        <td><button onclick='deleteProduct(${i})' class='btn btn-outline-danger btn-sm'>Delete</button></td>
    </tr>`
    }
    document.getElementById('rowData').innerHTML =cartona;
}

function deleteProduct(omahmed){
    productContainer.splice(omahmed,1)
    localStorage.setItem('products',JSON.stringify(productContainer))
    displayProduct();
}


function search(term){
    var cartona = ``;
    for(var i=0; i<productContainer.length;i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLocaleLowerCase())==true){
            cartona +=`<tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].desc}</td>
            <td><button class='btn btn-outline-warning btn-sm'>Update</button></td>
            <td><button onclick='deleteProduct(${i})' class='btn btn-outline-danger btn-sm'>Delete</button></td>
        </tr>`
        }
        document.getElementById('rowData').innerHTML =cartona;
        }   
}
function clearProduct(){
    productNameInput.value ='';
    productPriceInput.value='';
    productCategoryInput.value='';
    productDescInput.value='';
}
var Index=0;
function setForm(id){
    Index = id;
    document.getElementById("productNameInput").value = productContainer[id].name
    document.getElementById("productPriceInput").value = productContainer[id].price
    document.getElementById("productCategoryInput").value = productContainer[id].category
    document.getElementById("productDescInput").value = productContainer[id].desc
    btnUpdate.classList.replace('d-none','d-flex')
    btnform.classList.add('d-none')
}


function udpateProduct(){
    productContainer[Index].name =document.getElementById("productNameInput").value
    productContainer[Index].price = document.getElementById("productPriceInput").value
    productContainer[Index].category = document.getElementById("productCategoryInput").value
    productContainer[Index].desc =document.getElementById("productDescInput").value
    localStorage.setItem('products',JSON.stringify(productContainer))
    displayProduct()
    clearProduct()
    btnform.classList.remove('d-none')
    // btnUpdate.classList.add('d-none')
    btnUpdate.classList.replace('d-flex','d-none')

}





