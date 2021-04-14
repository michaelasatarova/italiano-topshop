//like toggle

// function likeMe() {
//     let element = document.getElementsByClassName("like-product");
//     element.classList.add("mystyle");
   
// }


//home page
//nav
function menuOpen() {
   let menu = document.getElementById("menu-dropdown");
   let openIco = document.getElementById("openIco");
   let closeIco = document.getElementById("closeIco");
   if (menu.style.display === "none" ) {
    menu.style.display = "block";
    openIco.style.display = "none";
    closeIco.style.display = "block"
  } else {
    menu.style.display = "none";
   closeIco.style.display = "none";
   openIco.style.display = "block";
  }
  }

//slick select language
$("#flags").ddslick({
  width:"100%",
  imagePosition:'center',

})

$("#flags-menu").ddslick({
  width:'100px',
  imagePosition:'center',
})


// listing
// accordion filter
let acc = document.getElementsByClassName("accordion");
let i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let arrowDown = document.getElementById("arrow-down");
    let arrowUp = document.getElementById("arrow-up");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      arrowDown.style.display ="block";
      arrowUp.style.display = "none";

    } else {
      panel.style.display = "block";
      arrowDown.style.display ="none";
      arrowUp.style.display = "block";
    }
  });
}




// price range slider
document.getElementById("custom-slider").addEventListener("input", function(event){
  let value = event.target.value;
  document.getElementById("current-value").innerText = value + '€';
  document.getElementById("current-value").style.left =`${value/2}%`;
})