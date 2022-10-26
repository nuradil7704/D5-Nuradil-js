const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const rub = document.querySelector("#rub");

// som.addEventListener("input", () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "data.json");
//     request.setRequestHeader("Content-type", "application/json");
//     request.send();  
//     request.addEventListener("load", () => {
//         const response = JSON.parse(request.response);
//         usd.value = (som.value / response.usd).toFixed(2);
//         rub.value = (som.value / response.rub).toFixed(2);
//     });
// });

const handleConvert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();  
    request.addEventListener("load", () => {
        const response = JSON.parse(request.response);
        if(elem === som){
            (target.value = (elem.value / response.usd).toFixed(2))
            (target2.value = (elem.value / response.rub).toFixed(2))
        }else if(elem === rub){
            (target.value = (elem.value * response.rub).toFixed(2))
            (target2.value = (elem.value / response.rub / response.usd).toFixed(2))
        }else if(elem === usd){
            (target.value = (elem.value * response.usd).toFixed(2))
            (target2.value = (elem.value * response.usd / response.rub).toFixed(2))
        }

        elem.value === "" && (target.value = "");
        elem.value === "" && (target2.value = "");

        });    
    });
};

handleConvert(som, usd, rub);
handleConvert(rub, som, usd);
handleConvert(usd, som, rub);