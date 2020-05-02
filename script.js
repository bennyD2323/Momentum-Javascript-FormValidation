let form = document.querySelector("#parking-form");
let formIsValid


form.addEventListener('submit', function(event){
    event.preventDefault()

let nameTyped = document.querySelector("#name")
let name = nameTyped.value

if(name){
let nameStatus = document.getElementById("name-field");
nameStatus.classList.add("input-valid")
nameStatus.classList.remove("input-invalid")
    console.log("truthy af")
} else {
    let nameStatus = document.getElementById("name-field");
nameStatus.classList.add("input-invalid")
nameStatus.classList.remove("input-valid")
    console.log("falsy af")
}

})
// CAR YEAR ETC
// form.addEventListener('submit', function(event){
//     event.preventDefault()

// let nameTyped = document.querySelector("#name")
// let name = nameTyped.value

// if(name){
// let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-valid")
// nameStatus.classList.remove("input-invalid")
//     console.log("truthy af")
// } else {
//     let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-invalid")
// nameStatus.classList.remove("input-valid")
//     console.log("falsy af")
// }

// })
// DATE PARKING
// form.addEventListener('submit', function(event){
//     event.preventDefault()

// let nameTyped = document.querySelector("#name")
// let name = nameTyped.value

// if(name){
// let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-valid")
// nameStatus.classList.remove("input-invalid")
//     console.log("truthy af")
// } else {
//     let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-invalid")
// nameStatus.classList.remove("input-valid")
//     console.log("falsy af")
// }

// })

// # OF DAYS
// form.addEventListener('submit', function(event){
//     event.preventDefault()

// let nameTyped = document.querySelector("#name")
// let name = nameTyped.value

// if(name){
// let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-valid")
// nameStatus.classList.remove("input-invalid")
//     console.log("truthy af")
// } else {
//     let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-invalid")
// nameStatus.classList.remove("input-valid")
//     console.log("falsy af")
// }

// })

// KREDITNAYA KARTOCHKA
// form.addEventListener('submit', function(event){
//     event.preventDefault()

// let nameTyped = document.querySelector("#name")
// let name = nameTyped.value

// if(name){
// let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-valid")
// nameStatus.classList.remove("input-invalid")
//     console.log("truthy af")
// } else {
//     let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-invalid")
// nameStatus.classList.remove("input-valid")
//     console.log("falsy af")
// }

// })

// CVV
// form.addEventListener('submit', function(event){
//     event.preventDefault()

// let nameTyped = document.querySelector("#name")
// let name = nameTyped.value

// if(name){
// let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-valid")
// nameStatus.classList.remove("input-invalid")
//     console.log("truthy af")
// } else {
//     let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-invalid")
// nameStatus.classList.remove("input-valid")
//     console.log("falsy af")
// }

// })

// EXPIRATION DATE
// form.addEventListener('submit', function(event){
//     event.preventDefault()

// let nameTyped = document.querySelector("#name")
// let name = nameTyped.value

// if(name){
// let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-valid")
// nameStatus.classList.remove("input-invalid")
//     console.log("truthy af")
// } else {
//     let nameStatus = document.getElementById("name-field");
// nameStatus.classList.add("input-invalid")
// nameStatus.classList.remove("input-valid")
//     console.log("falsy af")
// }

// })