let userName = document.querySelector('.name');
let greetingButton = document.querySelector('.but1');
let greets = document.querySelector('.inputname');
let clearName = document.querySelector('.clear');
let homeButton = document.querySelector('.home');
let totalPrice = document.querySelector('.price');
let odr = document.querySelector('.orders');
let item = document.querySelectorAll('.item');


function del(){
    userName.value = '';
}

function submit(){
    const name = document.querySelector('.name').value;
    localStorage.setItem('name', name)
    window.location.href = 'newpage.html';
    userName.value = '';
}

function greetUser(){
    const name = localStorage.getItem('name');
    greets.innerText = name + '!';
}
function homey(){
   window.location.href = 'index.html';
}

function scrollToAbout(){
    document.querySelector('#footer').scrollIntoView({
        behavior:"smooth"
    });
}
let addButton = document.querySelectorAll('.add');
let subButton = document.querySelectorAll('.sub');
let itemQuantity = document.querySelectorAll('.count');
let itemRate = document.querySelectorAll('.rate');

let total = 0;
for(i=0; i<addButton.length; i++){
    let quantity = itemQuantity[i];
    let rate = itemRate[i];
    let numbers = 0;
    addButton[i].addEventListener('click', function(){
        numbers++;
        quantity.innerText = numbers;
        total = total + parseInt(rate.innerText);
        totalPrice.innerText = total;
    })
    subButton[i].addEventListener('click', function(){
        if(numbers > 0){
        numbers--;
        quantity.innerText = numbers;
        total = total - parseInt(rate.innerText);
        totalPrice.innerText = total;
        }
    })
}

let table = document.querySelector('.mytable');
let bill = document.querySelector('.billAmount');
function placeOrder(){

    table.innerHTML = '';
    bill.innerText = total;
    for(i=0; i<itemQuantity.length; i++){
        if(itemQuantity[i].innerText > 0){
        let newRow = document.createElement('tr');
        let cell1 = document.createElement('td');
        let cell2 = document.createElement('td');
        let cell3 = document.createElement('td');
        let cell4 = document.createElement('td');

        cell1.textContent = item[i].innerText;
        cell2.textContent = itemRate[i].innerText;
        cell3.textContent = itemQuantity[i].innerText;
        cell4.textContent = parseInt(itemQuantity[i].innerText)*parseInt(itemRate[i].innerText);

        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);

        table.appendChild(newRow);
    }}

}
function teammember(){
    const name = localStorage.getItem('name');
    alert('Please wait Mr/Mrs '+name+', Our team member will come there as soon as posible')
}
function makePayment(){
    const name = localStorage.getItem('name');
    alert('Thank you Mr/Mrs '+name+' for dining with us today....Your bill amount is Rs.'+ total + '.... Kindly come to counter to make your payment....Have a nice day....')
}
window.onload = greetUser;