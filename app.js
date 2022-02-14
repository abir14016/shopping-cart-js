function updateProductNumber(productId,isIncresing,productInputPrice){
    const productInput = document.getElementById(productId);
    let productNumber = parseInt(productInput.value);
    if(isIncresing == true){
        productInput.value = productNumber + 1;
    }
    else if(productNumber>0){
        productInput.value = productNumber - 1;
    }
};

document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone-number',true);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone-number',false);
});


document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case-number',true);
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case-number',false);
});