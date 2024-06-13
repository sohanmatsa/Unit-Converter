const inputNumber = document.getElementById("input-num")
const convertButton = document.getElementById("convert-btn")
const lengthInfo = document.getElementById("length-info")
const volumeInfo = document.getElementById("volume-info")
const massInfo = document.getElementById("mass-info")



convertButton.addEventListener("click", function() {
    const number = inputNumber.value 
    if (number === ""){
        alert("Please enter a number before converting")
        return
    }
    const meterToFeet = (number * 3.2804).toFixed(2)
    const feetToMeter = (number * 0.3048).toFixed(2)
    const literToGallon = (number * 0.264172).toFixed(2)
    const gallonToLiter = (number * 3.78541).toFixed(2)
    const kilosToPound = (number * 2.2046).toFixed(2)
    const poundToKilos = (number / 2.2046).toFixed(2)
    lengthInfo.innerHTML = `${number} meters = ${meterToFeet} feet | ${number} feet = ${feetToMeter} meters`
    volumeInfo.innerHTML = `${number} liters = ${literToGallon} gallons | ${number} gallons = ${gallonToLiter} liters`
    massInfo.innerHTML = `${number} kilos = ${kilosToPound} pounds | ${number} pounds = ${poundToKilos} kilos`

})

convertButton.addEventListener("dblclick" , function() {
    lengthInfo.textContent = "0 meters = 0 feet | 0 feet = 0 meters"
    volumeInfo.textContent = "0 liters = 0 gallons | 0 gallons = 0 liters"
    massInfo.textContent = "0 kilos = 0 pounds | 0 pounds = 0 kilos"
    inputNumber.value=""
})