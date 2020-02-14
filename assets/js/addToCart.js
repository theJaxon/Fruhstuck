var myCart = document.getElementsByClassName("dropdown-menu");
var buyButtonList = document.getElementsByClassName("buyButton");

for(i = 0; i < buyButtonList.length; i++){
    buyButtonList[i].addEventListener("click", buyButtonClicked);
}

let storageList = JSON.parse(localStorage.getItem("buyList"));

if(storageList){  
}
else{
    storageList={};
}

function buyButtonClicked(){
    let id=this.parentNode.parentNode.getAttribute("recipe_id");
    if(storageList[id]){
        let old=storageList[id];
        old["qty"]++;
        storageList[id]=old; 
    }
    else{
        let title=recipes["all"][id]["title"];
        storageList[id]={"recipe_id":id,"title":title,"qty":1};
    }
    console.log(storageList);
    localStorage.setItem("buyList", JSON.stringify(storageList));  
    myCart[0].innerHTML = ""; //Empty the list first.

    for(i in storageList){
        myCart[0].innerHTML += "<a class=\"dropdown-item\" role=\"presentation\" href=\"#\">" +
        storageList[i]["title"] +
        " &nbsp; <i class=\"fa fa-hashtag\"></i> " +  
        storageList[i]["qty"]  + 
        "<button class=\"pull-right delButton\" style=\"margin: 0px; padding: 0px 10px; border-radius: 5px; color: white; background-color: #F9366C;   font-family: GothamRoundedLight;\">x</button>" +
        "</a>" 
    }

}

 for(i in storageList){
    myCart[0].innerHTML += "<a class=\"dropdown-item\" role=\"presentation\" href=\"#\">" +
    storageList[i]["title"] +
    " &nbsp; <i class=\"fa fa-hashtag\"></i> " +  
    storageList[i]["qty"]  + 
    "<button class=\"pull-right delButton\" style=\"margin: 0px; padding: 0px 10px; border-radius: 5px; color: white; background-color: #F9366C;   font-family: GothamRoundedLight;\">x</button>" +
    "</a>" 
 }

/* Delete functionality */
var deleteButtonList = document.getElementsByClassName("delButton");
for(i = 0; i < deleteButtonList.length; i++){
    deleteButtonList[i].addEventListener("click", deleteButtonClicked);
}

function deleteButtonClicked(e){
    //remove the row from UI
    var link = e.target.parentNode;
    link.parentNode.removeChild(link);
}

