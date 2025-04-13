const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectOne = document.querySelector(".currency-select1")

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const rates = {
        real: 1,
        dolar: 5.0,
        euro: 6.0,
        libra: 7.0,
        bitcoin: 10.0
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

    const valueInReal = inputCurrencyValue * rates[fromCurrency]
    const convertedValue = valueInReal / rates[toCurrency]

    const fromOptions = formatOptions[fromCurrency]
    const toOptions = formatOptions[toCurrency]

    currencyValueConverted.innerHTML = new Intl.NumberFormat(fromOptions.locale, fromOptions).format(inputCurrencyValue)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat(toOptions.locale, toOptions).format(convertedValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    switch (currencySelect.value) {
        case "real":
            currencyName.innerHTML = "Real"
            currencyImage.src = "./assets/real.png"
            break
        case "dolar":
            currencyName.innerHTML = "Dólar"
            currencyImage.src = "./assets/dolar.png"
            break
        case "euro":
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro.png"
            break
        case "libra":
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/libra.png"
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
            currencyImage1.src = "./assets/real.png"
            break
        case "dolar":
            currencyName1.innerHTML = "Dólar"
            currencyImage1.src = "./assets/dolar.png"
            break
        case "euro":
            currencyName1.innerHTML = "Euro"
            currencyImage1.src = "./assets/euro.png"
            break
        case "libra":
            currencyName1.innerHTML = "Libra"
            currencyImage1.src = "./assets/libra.png"
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
