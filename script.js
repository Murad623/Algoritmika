let apikey = "8eeb6f2cd27bfff13a7b3426bf045e34";
let url = "http://api.exchangerate.host/convert";
let pFromTo = document.querySelector(".ft");
let pToFrom = document.querySelector(".tf");
let defaultCurrency = document.querySelector(".currency .selected");
let handleCurrencyClick = (event) => {
    document.querySelectorAll(".currency button").forEach((button) => {
        button.classList.remove("selected");
    });
    event.target.classList.add("selected");
};
document.querySelectorAll(".currency button").forEach((button) => {
    button.addEventListener("click", handleCurrencyClick);
});
defaultCurrency.click();

let defaultCurrencyButton = document.querySelector(".currency2 button:nth-child(2)");
defaultCurrencyButton.classList.add("selected");
let currencyButtons = document.querySelectorAll(".currency2 button");
currencyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        defaultCurrencyButton.classList.remove("selected");
        button.classList.add("selected");
        defaultCurrencyButton = button;
    });
});
let from = "RUB";
let to = "USD";
let res = document.querySelector(".res");
async function converter() {
    if(to != from){
        let amount = Number(document.querySelector('.amount').value)
        let apiurl = `${url}?access_key=${apikey}&from=${from}&to=${to}&amount=${amount}`;
        
        let response = await fetch(apiurl);
        let data = await response.json();
        let apiurlft = `${url}?access_key=${apikey}&from=${from}&to=${to}&amount=1`;
        let response2 = await fetch(apiurlft);
        let data2 = await response2.json();
        pFromTo.innerText = data2.result;
        
        let apiurltf = `${url}?access_key=${apikey}&from=${to}&to=${from}&amount=1`;
        let response3 = await fetch(apiurltf);
        let data3 = await response3.json();
        pToFrom.innerText = data3.result;
    
        res.innerText = data.result;
    }
    else{
        res.innerText = amount;
        pFromTo.innerText = "1";
        pToFrom.innerText = "1";
    }
}

async function fromBtnFcn(e){
    from = e.target.id;
    converter();
}
async function toBtnFcn(e){
    to = e.target.id;
    converter();
}
setInterval(()=>{
    converter();
},10000)

let btns = document.querySelectorAll('button');
btns.forEach(btn =>{
    if((btn.classList == "from")||(btn.classList == "from selected")){
        btn.addEventListener('click', fromBtnFcn);
    }
    else{
        btn.addEventListener('click', toBtnFcn);
    }
})