// Gets the temperature entered by the user
function getTemperature() {

    const input = document.getElementById("temperature").value;

    return Number(input);
}


// Gets the selected temperature unit
function getUnit() {

    return document.getElementById("unit").value;
}


// Displays the result
function showResult(value, unit) {

    document.getElementById("result").textContent =
        `Result: ${value.toFixed(2)} °${unit}`;
}


// Converts the temperature to Celsius
function convertToCelsius() {

    const temperature = getTemperature();
    const unit = getUnit();

    if (document.getElementById("temperature").value === "") {
        document.getElementById("result").textContent =
            "Please enter a temperature.";
        return;
    }

    let result;

    if (unit === "celsius") {

        result = temperature;

    } else if (unit === "fahrenheit") {

        result = (temperature - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        result = temperature - 273.15;
    }

    showResult(result, "C");
}


// Converts the temperature to Fahrenheit
function convertToFahrenheit() {

    const temperature = getTemperature();
    const unit = getUnit();

    if (document.getElementById("temperature").value === "") {
        document.getElementById("result").textContent =
            "Please enter a temperature.";
        return;
    }

    let result;

    if (unit === "celsius") {

        result = (temperature * 9 / 5) + 32;

    } else if (unit === "fahrenheit") {

        result = temperature;

    } else if (unit === "kelvin") {

        result = (temperature - 273.15) * 9 / 5 + 32;
    }

    showResult(result, "F");
}


// Converts the temperature to Kelvin
function convertToKelvin() {

    const temperature = getTemperature();
    const unit = getUnit();

    if (document.getElementById("temperature").value === "") {
        document.getElementById("result").textContent =
            "Please enter a temperature.";
        return;
    }

    let result;

    if (unit === "celsius") {

        result = temperature + 273.15;

    } else if (unit === "fahrenheit") {

        result = (temperature - 32) * 5 / 9 + 273.15;

    } else if (unit === "kelvin") {

        result = temperature;
    }

    showResult(result, "K");
}