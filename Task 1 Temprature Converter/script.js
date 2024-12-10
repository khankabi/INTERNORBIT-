const form = document.getElementById("form-data");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

function calculate(e) {
    e.preventDefault();
    let temprature = e.srcElement[0].value;
    let unit = e.srcElement[1].value;
    console.log(temprature);
    console.log(unit);
    if(!temprature){
        alert("Please Enter Temprature");
        return;
    }
    let kelvin = 0
    let celcius = 0
    let fahrenheit = 0

    switch (unit) {
        case "cal":
            kelvin = parseFloat(273.15 + Number(temprature)).toFixed(2)
            fahrenheit = parseFloat((temprature * 9 / 5) + 32).toFixed(2)

            result1.innerText = `Kelvin:  ${kelvin}`
            result2.innerText = `Feh:   ${fahrenheit}`
            break;
        case "feh":
            celcius = parseFloat(((temprature - 32) * 5 / 9)).toFixed(2)
            kelvin = parseFloat((((temprature - 32) * 5 / 9)) + 273.15).toFixed(2)

            result1.innerText = `calcius:  ${celcius}`
            result2.innerText = `kelvin:   ${kelvin}`
            break;
        case "kel":
            fahrenheit = parseFloat(((temprature - 273.15) * 9 / 5) + 32).toFixed(2);
            celcius = parseFloat((temprature - 273.15)).toFixed(2);

            result1.innerText = `celcius:  ${celcius}`;
            result2.innerText = `Feh:  ${fahrenheit}`;
            break;
        default:
            break;
    }

}
form.addEventListener('submit', calculate);