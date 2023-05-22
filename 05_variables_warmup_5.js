// 05_variables_warmup_5 JavasScript code
function calculate() {
    var intialBalance = Number (document.getElementById("txtStartingBalance").value);
    var interestRate = Number (document.getElementById("txtInterestRate").value);
    var firstYear = intialBalance + (intialBalance * interestRate)/100;
    var secondYear = firstYear + (firstYear * interestRate)/100;
    document.getElementById("pOutput").innerHTML = " 1. year : " + firstYear.toFixed(2) + 
    "<br/>" + " 2. year :" + secondYear.toFixed(2);
}
