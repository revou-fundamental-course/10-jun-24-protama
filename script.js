function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    if (celsius !== '') {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit;
        document.getElementById('calculation').value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
    }
}

function resetFields() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').value = '';
}

function reverseConversion() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit !== '') {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsius;
        document.getElementById('calculation').value = `${fahrenheit}°F - 32) * 5/9 = ${celsius}°C`;
    }
}
