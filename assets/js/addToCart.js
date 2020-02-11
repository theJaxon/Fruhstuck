var myCart = document.getElementsByClassName("dropdown-menu");
var buyButtonList = document.getElementsByClassName("buyButton");

buyButtonList[0].addEventListener("click", buyButtonClicked);
buyItemsList = [];

function buyButtonClicked(){
    buyItemsList.push("LOL1")
    localStorage.setItem("buyList", JSON.stringify(buyItemsList));

    //Iterate over the localStorage and display the items
    let storageList = JSON.parse(localStorage.getItem("buyList"))
    for(i = 0; i < storageList.length; i++)
    {
        myCart[0].innerHTML += "<a class=\"dropdown-item\" role=\"presentation\" href=\"#\">"+ storageList[i] +"</a>"
    }
}

function init(){
    let storageList = JSON.parse(localStorage.getItem("buyList"))
    for(i = 0; i < storageList.length; i++)
    {
        myCart[0].innerHTML += "<a class=\"dropdown-item\" role=\"presentation\" href=\"#\">"+ storageList[i] +"</a>"
    }
}

init();