let navbar = document.querySelector('.navbar');

 document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
 }

let searchForm = document.querySelector('.search-form');

 document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
 }

let cartItem = document.querySelector('.cart-items-container');

 document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
 }

window.onscroll= () =>{
         navbar.classList.remove('active');
         searchForm.classList.remove('active');
         cartItem.classList.remove('active');
}

const cartBtn = document.querySelector('.cart-btn');
const cartItemsContainer = document.querySelector('.cart-items-container');
const cancelBtn = document.querySelector('.cancel-btn');

// Add an event listener to the cart button to open the cart items container
cartBtn.addEventListener('click', () => {
    cartItemsContainer.style.right = '0';
});

// Add an event listener to the cancel button to close the cart items container
cancelBtn.addEventListener('click', () => {
    cartItemsContainer.style.right = '-100%';
});


const buyNowBtn = document.getElementById('buyNowBtn');
const paymentModal = document.getElementById('paymentModal');

buyNowBtn.addEventListener('click', () => {
    paymentModal.style.display = 'block';
});

window.addEventListener('click', (event) => {
    if (event.target === paymentModal) {
        paymentModal.style.display = 'none';
    }
});





function showPhoneNumberPopup() {
    document.getElementById('phonePopup').style.display = 'block';
}

function closePhoneNumberPopup() {
    document.getElementById('phonePopup').style.display = 'none';
}

function sendOTP() {
    // Use Daraja M-Pesa API to send OTP to the entered phone number
    // Add logic to handle API calls, generate and send OTP, etc.
    // Replace the following lines with actual API calls and logic.
    const phoneNumber = document.getElementById('phoneNumber').value;
    alert(`Sending OTP to ${phoneNumber}`);
    // You would typically make an API call to Daraja here
    // to send OTP and proceed with the payment process.
}


