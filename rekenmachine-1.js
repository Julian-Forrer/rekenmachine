// Hieronder begint de JavaScript-code
// Hieronder pak ik via id het "result";
// Current result wordt gebruikt om de huidige invoer bij te houden.

let resultElement = document.getElementById('result');
let currentResult = '';

// De functie hieronder pakt het nummer wat je hebt aangeklikt.
// Er komt dan een nummer bij currentResult totdat je een operator aanklikt.
// Als je een operator aanklikt kan je niet nog een operator aanroepen maar moet je cijfers aanroepen.
// Als je op de "c" drukt dan krijg je clearResult en wordt het resultaat geüpdatet naar niks en kan je weer beginnen met cijfers intikken.

function nummer(number) {
    console.log(number);
    currentResult += number;
    update();
}

function operator(operator) {
    currentResult += ' ' + operator + ' ';
    update();
}

// Hieronder de functie om een decimaal toe te voegen.
function Decimal() {
    // Controleer of er al een decimaalpunt aanwezig is
    if (currentResult.includes('.')) {
        return; // Als er al een decimaalpunt is, stop de functie
    }
    // Voeg een decimaalpunt toe aan currentResult
    currentResult += '.';
    update();
}

function clearResult() {
    currentResult = '';
    update();
}

// De functie hieronder verwijdert de characters die je hebt ingevoerd.
function deleteCharacter() {
    currentResult = currentResult.slice(0, -1);
    update();
}

// De functie hieronder splitst de gekregen getallen en operator in drie delen en als
// je bijvoorbeeld 1+1+1 hebt gedaan, krijg je de foutmelding "Geen geldige berekening gemaakt".

function calculate() {
    let parts = currentResult.split(' ');
    if (parts.length !== 3) {
        alert('Geen geldige berekening gemaakt');
        return;
    }
    // Hieronder worden de getallen en de operator in variabelen gezet en geconverteerd
    // naar getallen, omdat ze eerst strings zijn.

    let num1 = parseFloat(parts[0]);
    let operator = parts[1];
    let num2 = parseFloat(parts[2]);
    // Hieronder wordt gecontroleerd of de getallen nu wel nummers zijn, en als dat
    // niet het geval is, krijg je "ongeldige berekening" terug.

    if (isNaN(num1) || isNaN(num2)) {
        alert('Ongeldige berekening');
        return;
    }
    // Hieronder wordt gekeken welke operator daadwerkelijk gebruikt is, zodat je de
    // berekening kunt uitvoeren op basis van welke operator je hebt gebruikt.

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            alert('Geen geldige invoer');
            return;
    }
    // De currentResult wordt dan uitgedrukt in eerst de ingevoerde getallen die je
    // hebt aangeklikt, en dan krijg je het resultaat terug, zodat je in het display je
    // "1+1 = 2" terug krijgt.

    
    currentResult = currentResult + ' = ' + result.toString();
    update();
}

// Hieronder wordt de functie update aangemaakt zodat je resultElement kunt updaten met currentResult.
function update() {
    resultElement.innerText = currentResult;
}
