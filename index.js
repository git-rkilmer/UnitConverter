const input = document.querySelector(".input");
const convertBtn = document.querySelector(".convert-btn");
const pLength = document.querySelector("#p-length");
const pVolume = document.querySelector("#p-volume");
const pMass = document.querySelector("#p-mass");

convertBtn.addEventListener("click", () => {
    if(input.value){
        let inputValue = Number(input.value);
        const feet = meterToFeetConversion(inputValue);
        const gallons = literToGallonConversion(inputValue);
        const slugs = kilogramToSlugConversion(inputValue);
        const meters = feetToMeterConversion(inputValue);
        const liters = gallonToLiterConversion(inputValue);
        const kilograms = slugToKilogramConversion(inputValue);

        inputValue = inputValue.toFixed(3);

        pLength.innerHTML = `${inputValue} m = ${feet} ft <strong>|</strong> ${inputValue} ft = ${meters} m`;
        pVolume.innerHTML = `${inputValue} L = ${gallons} gal <strong>|</strong> ${inputValue} gal = ${liters} L`;
        pMass.innerHTML = `${inputValue} kg = ${slugs} slugs <strong>|</strong> ${inputValue} slugs = ${kilograms} kg`;
    }else{
        alert("Enter a metric value");
    }
})

/* 
    functions to convert from metric to imperial
*/

const meterToFeetConversion = (meters) => {
    let feet = meters * 3.28084;
    return feet.toFixed(3);
}

const literToGallonConversion = (liters) => {
    let gallons = liters * 0.264172;
    return gallons.toFixed(3);
}

const kilogramToSlugConversion= (kilograms) => {
    let slug = kilograms * 0.0685218;
    return slug.toFixed(3);
}


/* 
    functions to convert from imperial to metric
*/

const feetToMeterConversion = (feet) => {
    let meters = feet / 3.28084;
    return meters.toFixed(3);
}

const gallonToLiterConversion = (gallon) => {
    let liters = gallon / 0.264172;
    return liters.toFixed(3);
}

const slugToKilogramConversion= (slug) => {
    let kilograms = slug / 0.0685218;
    return kilograms.toFixed(3)
}