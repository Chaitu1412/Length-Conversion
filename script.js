
function convert() {
            var inputValue = document.getElementById("inputValue").value;
            var fromUnit = document.getElementById("fromUnit").value;
            var toUnit = document.getElementById("toUnit").value;

            if (fromUnit === toUnit) {
                document.getElementById("result").textContent = "Please select different units";
                return;
            }

            var result;

            switch (fromUnit) {
                case "m":
                result = convertFromMeter(inputValue, toUnit);
                break;
                case "cm":
                result = convertFromCentimeter(inputValue, toUnit);
                break;
                case "ft":
                result = convertFromFoot(inputValue, toUnit);
                break;
                case "in":
                result = convertFromInch(inputValue, toUnit);
                break;
                default:
                result = "Invalid input";
            }

            document.getElementById("result").textContent = inputValue + " " + fromUnit + " = " + result + " " + toUnit;
            }

            function convertFromMeter(value, toUnit) {
            switch (toUnit) {
                case "cm":
                return value * 100;
                case "ft":
                return value * 3.28084;
                case "in":
                return value * 39.3701;
                default:
                return "Invalid conversion";
            }
            }

            function convertFromCentimeter(value, toUnit) {
            switch (toUnit) {
                case "m":
                return value / 100;
                case "ft":
                return value * 0.0328084;
                case "in":
                return value * 0.393701;
                default:
                return "Invalid conversion";
            }
            }

            function convertFromFoot(value, toUnit) {
            switch (toUnit) {
                case "m":
                return value * 0.3048;
                case "cm":
                return value * 30.48;
                case "in":
                return value * 12;
                default:
                return "Invalid conversion";
            }
            }

            function convertFromInch(value, toUnit) {
            switch (toUnit) {
                case "m":
                return value * 0.0254;
                case "cm":
                return value * 2.54;
                case "ft":
                return value * 0.0833333;
                default:
                return "Invalid conversion";
            }
            }
