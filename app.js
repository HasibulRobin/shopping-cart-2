function updateProductNumber(product, price, isIncreasing) {
    const numberInput = document.getElementById(product + '-number')
    let productNumber = numberInput.value;
    const numberInt = parseInt(productNumber)
    if (isIncreasing) {
        productNumber = numberInt + 1;
    }
    else if (numberInt > 0) {
        productNumber = numberInt - 1;
    }
    number = productNumber;
    document.getElementById(product + '-number').value = number;

    // update product price
    const productPrice = document.getElementById(product + '-price');
    const productPriceText = productPrice.innerText;
    // const productPriceInt = parseFloat(productPriceText);
    productPrice.innerText = price * number;

    // update total price
    updatePrice();
};
// get input value
function getInputValue(product) {
    const productNumber = document.getElementById(product + '-number');
    const productValue = productNumber.value;
    const productNumberInt = parseInt(productValue);
    return productNumberInt;
}
function updatePrice() {
    const phonePrice = getInputValue('phone') * 1219;
    const casePrice = getInputValue('case') * 59;
    const subTotal = phonePrice + casePrice;
    const taxAmount = subTotal / 10;
    const totalAmount = subTotal + taxAmount;
    // update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-amount').innerText = totalAmount;

}

// phone plus button 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
});
// phone minus button
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
});

// case plus button
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
// case minus button

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})