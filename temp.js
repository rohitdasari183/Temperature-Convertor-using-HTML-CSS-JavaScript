document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const convertButton = document.getElementById("convertBtn");

    convertButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            fahrenheitOutput.textContent = fahrenheit.toFixed(2) + " °F";
        } else {
            fahrenheitOutput.textContent = "Invalid input";
        }
    });
});
