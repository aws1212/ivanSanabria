//Event menu
const menuClick = document.getElementById("menuClick");
const div__menu = document.querySelector(".div__menu-responsive");

menuClick.addEventListener("click",()=>{
    if (menuClick.classList.contains("clicked")){
        menuClick.classList.remove("clicked");
        div__menu.classList.remove("menuDesplate");
        menuClick.classList.add("unClicked");
        div__menu.classList.add("unmenuDesplate");
    }
    else{
        menuClick.classList.add("clicked");
        div__menu.classList.add("menuDesplate");
        menuClick.classList.remove("unClicked");
        div__menu.classList.remove("unmenuDesplate");   
    }
})
