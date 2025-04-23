const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectOne = document.querySelector(".currency-select1")

async function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const ratesResponse = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL")
    const rates = await ratesResponse.json()

    const conversionRates = {
        real: 1,
        dolar: Number(rates.USDBRL.bid),
        euro: Number(rates.EURBRL.bid),
        libra: Number(rates.GBPBRL.bid),
        bitcoin: Number(rates.BTCBRL.bid)
    }

    const formatOptions = {
        real: { style: "currency", currency: "BRL", locale: "pt-BR" },
        dolar: { style: "currency", currency: "USD", locale: "en-US" },
        euro: { style: "currency", currency: "EUR", locale: "de-DE" },
        libra: { style: "currency", currency: "GBP", locale: "en-GB" },
        bitcoin: { style: "currency", currency: "BTC", locale: "en-US" }
    }

    const fromCurrency = currencySelectOne.value
    const toCurrency = currencySelect.value

    if (isNaN(inputCurrencyValue)) {
        currencyValueToConvert.innerHTML = "Valor inválido"
        currencyValueConverted.innerHTML = "-"
        return
    }

    // 1º converte de moeda de origem para real
    const valueInReal = inputCurrencyValue * conversionRates[fromCurrency]

    // 2º converte de real para a moeda de destino
    const convertedValue = valueInReal / conversionRates[toCurrency]

    const fromOptions = formatOptions[fromCurrency]
    const toOptions = formatOptions[toCurrency]

    // Mostra os valores formatados
    currencyValueConverted.innerHTML = new Intl.NumberFormat(fromOptions.locale, fromOptions).format(inputCurrencyValue)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat(toOptions.locale, toOptions).format(convertedValue)
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    switch (currencySelect.value) {
        case "real":
            currencyName.innerHTML = "Real"
            currencyImage.src = "./assets/brazil.png"
            break
        case "dolar":
            currencyName.innerHTML = "Dólar"
            currencyImage.src = "./assets/usa.png"
            break
        case "euro":
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro.png"
            break
        case "libra":
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/uk.png"
            break
        case "bitcoin":
            currencyName.innerHTML = "Bitcoin"
            currencyImage.src = "./assets/bitcoin.png"
            break
    }

    convertValues()
}

function changeCurrency1() {
    const currencyName1 = document.getElementById("currency-name1")
    const currencyImage1 = document.querySelector(".currency-img1")

    switch (currencySelectOne.value) {
        case "real":
            currencyName1.innerHTML = "Real"
            currencyImage1.src = "./assets/brazil.png"
            break
        case "dolar":
            currencyName1.innerHTML = "Dólar"
            currencyImage1.src = "./assets/usa.png"
            break
        case "euro":
            currencyName1.innerHTML = "Euro"
            currencyImage1.src = "./assets/euro.png"
            break
        case "libra":
            currencyName1.innerHTML = "Libra"
            currencyImage1.src = "./assets/uk.png"
            break
        case "bitcoin":
            currencyName1.innerHTML = "Bitcoin"
            currencyImage1.src = "./assets/bitcoin.png"
            break
    }

    convertValues()
}
    

currencySelect.addEventListener("change", changeCurrency)
currencySelectOne.addEventListener("change", changeCurrency1)
convertButton.addEventListener("click", convertValues)
