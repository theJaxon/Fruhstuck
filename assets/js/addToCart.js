var myCart = document.getElementsByClassName("dropdown-menu");
var buyButtonList = document.getElementsByClassName("buyButton");

for(i = 0; i < buyButtonList.length; i++){
    buyButtonList[i].addEventListener("click", buyButtonClicked);
}


let storageList = JSON.parse(localStorage.getItem("buyList"));

if(storageList){
   
}else{
    storageList={};
}

// {1:{recipe_id:1,qty:1},2:{recipe_id:2,qty:2}}

function buyButtonClicked(){
    let id=this.parentNode.parentNode.getAttribute("recipe_id");
    if(storageList[id]){
        let old=storageList[id];
        old["qty"]++;
        storageList[id]=old
      
    }else{
        let title=recipes["all"][id]["title"];
        storageList[id]={"recipe_id":id,"title":title,"qty":1};
    }
    console.log(storageList);
    localStorage.setItem("buyList", JSON.stringify(storageList));
    // buyItemsList.push("LOL1")
   

    //Iterate over the localStorage and display the items
   
}

  
 for(i in storageList)
 {
     console.log(storageList[i])
     myCart[0].innerHTML += "<a class=\"dropdown-item\" role=\"presentation\" href=\"#\">"+ storageList[i]["title"] + " &nbsp; <i class=\"fa fa-hashtag\"></i> " +  storageList[i]["qty"]  +"</a>"
 }

