let form = document.querySelector("#parking-form");
let formIsValid

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
form.addEventListener('submit', function(event){
    event.preventDefault()

let nameTyped = document.querySelector("#name")
let name = nameTyped.value

if(name){
let nameStatus = document.getElementById("name-field");
nameStatus.classList.add("input-valid");
nameStatus.classList.remove("input-invalid");
nameError.innerHTML = ""
} else {
    let nameStatus = document.getElementById("name-field");
nameStatus.classList.add("input-invalid");
nameStatus.classList.remove("input-valid");
nameError.innerHTML = "Name is required!"
}

})

form.addEventListener('submit', function(event){
    event.preventDefault()

let carYearInput = document.querySelector("#car-year")
let carYear = carYearInput.value

let carMakeInput = document.querySelector("#car-make");
let carMake = carMakeInput.value

let carModelInput = document.querySelector("#car-model");
let carModel = carModelInput.value
let regexCarYear = new RegExp("^[0-9]{4}$");
let today = new Date();
let thisYear = today.getFullYear();
if(carYear && carMake && carModel && regexCarYear.test(carYear) && carYear > 1900 && carYear <= thisYear){
let carStatus = document.getElementById("car-field");
carStatus.classList.add("input-valid");
carStatus.classList.remove("input-invalid");
carError.innerHTML = ""
} else {
    let carStatus = document.getElementById("car-field");
carStatus.classList.add("input-invalid");
carStatus.classList.remove("input-valid");
carError.innerHTML = "All fields are required!"
    
}
})



form.addEventListener('submit', function(event){
    event.preventDefault()

let startDateInput = document.querySelector("#start-date")
let startDate = startDateInput.value
let presentDate= Date.now();
let reserveDate = startDateInput.valueAsNumber;

if(startDate && presentDate < reserveDate) {
let startDateStatus = document.getElementById("start-date-field");
startDateStatus.classList.add("input-valid")
startDateStatus.classList.remove("input-invalid")
startDateError.innerHTML = ""

} else {
    let startDateStatus = document.getElementById("start-date-field");
startDateStatus.classList.add("input-invalid")
startDateStatus.classList.remove("input-valid")
startDateError.innerHTML = "Start date is required!"
}
})


form.addEventListener('submit', function(event){
    event.preventDefault()


let daysInput = document.querySelector("#days")
let days = daysInput.value
let regexDays = new RegExp("^[0-9]{1,2}$")

if(days && regexDays.test(days) && days > 0 && days < 31){
let daysStatus = document.getElementById("days-field");
daysStatus.classList.add("input-valid")
daysStatus.classList.remove("input-invalid")
daysError.innerHTML = ""

} else {
    let daysStatus = document.getElementById("days-field");
daysStatus.classList.add("input-invalid")
daysStatus.classList.remove("input-valid")
    daysError.innerHTML = "Number of days is required!"
}

})

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}


form.addEventListener('submit', function(event){
    event.preventDefault()

let ccInput = document.querySelector("#credit-card")
let cc = ccInput.value

if(cc && validateCardNumber(cc) && luhnCheck(cc)){
let ccStatus = document.getElementById("credit-card-field");
ccStatus.classList.add("input-valid")
ccStatus.classList.remove("input-invalid")
ccError.innerHTML = ""
}  else { 
    let ccStatus = document.getElementById("credit-card-field");
ccStatus.classList.add("input-invalid")
ccStatus.classList.remove("input-valid")
ccError.innerHTML = "Credit card number is required!"
}

})


form.addEventListener('submit', function(event){
    event.preventDefault()
    

let cvvInput = document.querySelector("#cvv")
let cvv = cvvInput.value
let regexCvv = new RegExp("^[0-9]{3}$");
if(regexCvv.test(cvv) && cvv){

let cvvStatus = document.getElementById("cvv-field");
cvvStatus.classList.add("input-valid")
cvvStatus.classList.remove("input-invalid")
cvvError.innerHTML = ""
} else {
    let cvvStatus = document.getElementById("cvv-field");
cvvStatus.classList.add("input-invalid")
cvvStatus.classList.remove("input-valid")
cvvError.innerHTML = "CVV number is required!"
}



})


form.addEventListener('submit', function(event){
    event.preventDefault()

let expirationInput = document.querySelector("#expiration")
let expiration = expirationInput.value
// let expirationDate =expirationInput.valuteAsDate
// let expirationMonth = expirationDate.getMonth();
// let expirationYear = expirationDate.getFullYear();
// let nowDate = new Date();
// let nowMonth = nowDate.getMonth();
// let nowYear = nowDate.getFullYear();
// nowYear > expirationYear && nowMonth > expirationMonth 
if(expiration){

let expirationStatus = document.getElementById("expiration-field");
expirationStatus.classList.add("input-valid")
expirationStatus.classList.remove("input-invalid")
expirationError.innerHTML = ""
} 
// else if(){} 
else {
    let expirationStatus = document.getElementById("expiration-field");
expirationStatus.classList.add("input-invalid")
expirationStatus.classList.remove("input-valid")
expirationError.innerHTML = "Expiration date is required!"
}

})


let nameError = document.createElement("div")
let nameErrorDiv = document.querySelector("#name-field")
nameErrorDiv.appendChild(nameError)
nameError.className = ("nameError");

let carError = document.createElement("div")
let carErrorDiv = document.querySelector("#car-field")
carErrorDiv.appendChild(carError)
carError.className = ("carError");

let startDateError = document.createElement("div")
let startDateErrorDiv = document.querySelector("#start-date-field")
startDateErrorDiv.appendChild(startDateError)
startDateError.className = ("startDateError");

let daysError = document.createElement("div")
let daysErrorDiv = document.querySelector("#days-field")
daysErrorDiv.appendChild(daysError)
daysError.className = ("daysError");

let ccError = document.createElement("div")
let ccErrorDiv = document.querySelector("#credit-card-field")
ccErrorDiv.appendChild(ccError)
ccError.className = ("ccError");

let cvvError = document.createElement("div")
let cvvErrorDiv = document.querySelector("#cvv-field")
cvvErrorDiv.appendChild(cvvError)
cvvError.className = ("cvvError");

let expirationError = document.createElement("div")
let expirationErrorDiv = document.querySelector("#expiration-field")
expirationErrorDiv.appendChild(expirationError)
expirationError.className = ("expirationError");