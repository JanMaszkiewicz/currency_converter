{
    const form = document.querySelector(".js-form")
    const currency1 = document.querySelector(".js-select__in");
    const currency2 = document.querySelector(".js-select__out");
    const output = document.querySelector(".js-form__output");
    let input = document.querySelector(".js-form__input");
    const plnEurRatio = 4.607;
    const eurPlnRatio = 0.217;
    const usdPlnRatio = 0.229;
    const plnUsdRatio = 4.354;
    const eurUsdRatio = 0.946;
    const usdEurRatio = 1.057;
    const sameRatio = 1;

    form.addEventListener("input", () => {
        switch (currency1.value) {
            case "PLN":
                switch (currency2.value) {
                    case "EUR":
                        output.value = (eurPlnRatio * input.value).toFixed(2);
                        break;
                    case "USD":
                        output.value = (usdPlnRatio * input.value).toFixed(2);
                        break;
                    case "PLN":
                        output.value = (sameRatio * input.value).toFixed(2);
                        break;
                }
        }


        switch (currency1.value) {
            case "EUR":
                switch (currency2.value) {
                    case "PLN":
                        output.value = (plnEurRatio * input.value).toFixed(2);
                        break;
                    case "EUR":
                        output.value = (sameRatio * input.value).toFixed(2);
                        break;
                    case "USD":
                        output.value = (usdEurRatio * input.value).toFixed(2);
                        break;
                }
        }

        switch (currency1.value) {
            case "USD":
                switch (currency2.value) {
                    case "PLN":
                        output.value = (plnUsdRatio * input.value).toFixed(2);
                        break;
                    case "EUR":
                        output.value = (eurUsdRatio * input.value).toFixed(2);
                        break;
                    case "USD":
                        output.value = (sameRatio * input.value).toFixed(2);
                        break;
                }
        }
    });
};