//update product number and price
function updateProductNumber(productId, isIncresing, priceId, price) {
    const productInput = document.getElementById(productId);
    let productNumber = parseInt(productInput.value);
    if (isIncresing == true) {
        productInput.value = productNumber + 1;
    }
    else if (productNumber > 0) {
        productInput.value = productNumber - 1;
    }
    productNumber = parseInt(productInput.value);
    const priceInput = document.getElementById(priceId);
    priceInput.innerText = productNumber * price;
    updateProductTotal();
};
function getInput(productId){
    const productInput = document.getElementById(productId);
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
//update subtotal and total
function updateProductTotal(){
    const phoneTotal = getInput('phone-number') * 1219;
    const caseTotal = getInput('case-number') * 59;
    const subTotal = phoneTotal + caseTotal;
    const subTotalInput = document.getElementById('sub-total');
    subTotalInput.innerText = subTotal;
    const tax = subTotal/10;
    const taxInput = document.getElementById('tax-amount');
    taxInput.innerText = tax;
    const grandTotal = subTotal + tax;
    const grandTotalInput = document.getElementById('grand-total');
    grandTotalInput.innerText = grandTotal;
}
//remove block
function remove(product){
    const productBlock = document.getElementById(product);
    productBlock.style.display = 'none';
}
//handle plus button for phone
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone-number', true, 'phone-price', 1219);
});
//handle minus button for phone
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone-number', false, 'phone-price', 1219);
});

//handle plus button for case
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case-number', true, 'case-price', 59);
});
//handle plus button for case
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case-number', false, 'case-price', 59);
});
//handle phone remove
document.getElementById('phone-remove').addEventListener('click',function(){
    remove('phone');
});
//handle case remove
document.getElementById('case-remove').addEventListener('click',function(){
    remove('case');
});