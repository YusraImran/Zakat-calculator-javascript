//total savings
var totalsavings = prompt("Enter your total savings");
var ZakatAmount = (Number( totalsavings)) * 0.025;
//Zakat Amount
ZakatAmountString = ZakatAmount.toFixed(2);
//final value
alert("your Zakat Amount is: RS" + ZakatAmountString);