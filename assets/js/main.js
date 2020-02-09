let title = document.getElementById("title");
let details = document.getElementById("details");
let images = document.getElementById("images");
let images_output = document.getElementById("resultImgs");
let all_images=[];
let all_recipes=new RecipeList();
document.getElementById("add_recipe").addEventListener("click", addRecipe);

function addRecipe(event) {
    event.preventDefault();
    if (validateRecipe()) {
        alert("done");
    }
}

function validateRecipe() {
    let valid = true;

    // validate images
    if (images_output.innerHTML === "") {
        images_output.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        images_output.nextElementSibling.style.display = "none";
    }

    // validate title
    if (title.value === "") {
        title.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        title.nextElementSibling.style.display = "none";
    }

    // validate details
    if (details.value === "") {
        details.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        details.nextElementSibling.style.display = "none";
    }

    return valid;
}

images.addEventListener("change", previewImages);


function previewImages(event) {
    images_output.innerHTML="";
    var files = event.target.files; //FileList object
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        //Only pics
        if (file.type.match('image'))
        {
            var picReader = new FileReader();
            picReader.addEventListener("load", readerLoad);

            function readerLoad(event) {
                var picFile = event.target;
                var div = document.createElement("div");
                div.classList.add("preview");
                div.innerHTML = "<img class='thumbnail preview-img' src='" + picFile.result + "'" +
                    "title='" + picFile.name + "'/>";
                images_output.insertBefore(div, null);
                all_images.push(picFile.result);
            }

            //Read the image
            picReader.readAsDataURL(file);
        }

    }
}

//
// class Main {
//     title = document.getElementById("title");
//     details = document.getElementById("details");
//     images = document.getElementById("images");
//     images_output = document.getElementById("resultImgs");
//     all_images=[];
//     all_recipes=new RecipeList();
//     constructor() {
//
//     }
//
//     validateRecipe() {
//         let valid = true;
//
//         // validate images
//         if (this.images_output.innerHTML === "") {
//             this.images_output.nextElementSibling.style.display = "block";
//             valid = false;
//         } else {
//             this.images_output.nextElementSibling.style.display = "none";
//         }
//
//         // validate title
//         if (this.title.value === "") {
//             this.title.nextElementSibling.style.display = "block";
//             valid = false;
//         } else {
//             this.title.nextElementSibling.style.display = "none";
//         }
//
//         // validate details
//         if (this.details.value === "") {
//             this.details.nextElementSibling.style.display = "block";
//             valid = false;
//         } else {
//             this.details.nextElementSibling.style.display = "none";
//         }
//
//         return valid;
//     }
//
//     addRecipe(event) {
//         event.preventDefault();
//         if (this.validateRecipe()) {
//             alert("done");
//         }
//     }
//
//
//
//
//
//
//     previewImages(event) {
//         this.images_output.innerHTML="";
//         let files = event.target.files; //FileList object
//         for (let i = 0; i < files.length; i++) {
//             let file = files[i];
//             //Only pics
//             if (file.type.match('image'))
//             {
//                 let picReader = new FileReader();
//                 picReader.addEventListener("load", readerLoad);
//
//                 function readerLoad(event) {
//                     let picFile = event.target;
//                     let div = document.createElement("div");
//                     div.classList.add("preview");
//                     div.innerHTML = "<img class='thumbnail preview-img' src='" + picFile.result + "'" +
//                         "title='" + picFile.name + "'/>";
//                     this.images_output.insertBefore(div, null);
//                     this.all_images.push(picFile.result);
//                 }
//
//                 //Read the image
//                 picReader.readAsDataURL(file);
//             }
//
//         }
//     }
// }
//
// let main=new Main();
// document.getElementById("add_recipe").addEventListener("click", main.addRecipe);
// main.images.addEventListener("change", main.previewImages);