const productPrice = 5000;

let totalPrice = 0;

const total = document.getElementById('total');
total.innerText =`Total: ৳ ${totalPrice}`

const priceArea = document.getElementById('price');
priceArea.innerText =` ৳  ${productPrice}`;

const addButton = document.getElementById('addToCart', addEventListener('click', ()=>{
      totalPrice = totalPrice + productPrice;

      // update the Ui Again
      total.innerText =`Total: ৳ ${totalPrice} `
      console.log('total Price', totalPrice)
}))