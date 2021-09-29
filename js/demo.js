var amountInput1 = document.getElementById('amountInput1');
var amountInput2 = document.getElementById('amountInput2');
var amountInput3 = document.getElementById('amountInput3');
var amountInput4 = document.getElementById('amountInput4');
var qtyInput1 = document.getElementById('qtyInput1');
var qtyInput2 = document.getElementById('qtyInput2');
var qtyInput3 = document.getElementById('qtyInput3');
var qtyInput4 = document.getElementById('qtyInput4');

var subtotal1 = document.getElementById('subtotal1');
var subtotal2 = document.getElementById('subtotal2');
var subtotal3 = document.getElementById('subtotal3');
var subtotal4 = document.getElementById('subtotal4');
var total = 0;

amountInput1.addEventListener('change', () =>  doSubTotalCalc(1));
amountInput2.addEventListener('change', () =>  doSubTotalCalc(2));
amountInput3.addEventListener('change', () =>  doSubTotalCalc(3));
amountInput4.addEventListener('change', () =>  doSubTotalCalc(4));

qtyInput1.addEventListener('change', () =>  doSubTotalCalc(1));
qtyInput2.addEventListener('change', () =>  doSubTotalCalc(2));
qtyInput3.addEventListener('change', () =>  doSubTotalCalc(3));
qtyInput4.addEventListener('change', () =>  doSubTotalCalc(4));

function doTotalCalc() {
  console.log(subtotal1.value);
  // total = Number(subtotal1.value) + Number(subtotal2.value) + Number(subtotal3.value) + Number(subtotal4.value);

  // console.log(total);

  // var createTotal = document.createElement('h5');
  // createTotal.innerHTML = total.toString();
  // document.getElementById('total').appendChild(createTotal);
};

function doSubTotalCalc(index) {

  if (index === 1) {
    subtotal1.value = Number(amountInput1.value) * Number(qtyInput1.value);
    console.log(subtotal1);
  }
  if (index === 2) {
    subtotal2.value = Number(amountInput2.value) * Number(qtyInput2.value);
  }
  if (index === 3) {
    subtotal3.value = Number(amountInput3.value) * Number(qtyInput3.value);
  }
  if (index === 4) {
    subtotal4.value = Number(amountInput4.value) * Number(qtyInput4.value);
  }
}