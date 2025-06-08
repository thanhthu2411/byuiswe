const themeElement = document.getElementById("theme");
const body = document.querySelector("body");

const localTheme = localStorage.getItem("theme");

if(!theme) {
    localStorage.setItem("theme", "light");
};

//load pages
if(localTheme === "light") {
    body.classList.remove("dark");
    themeElement.value = "light";
} else {
    body.classList.add("dark");
    themeElement.value = "dark";
}


function themeChange() {

    //change theme value
    if(themeElement.value === "light" && body.classList.contains("dark")) {
         body.classList.remove("dark"); 
         localStorage.setItem("theme", "light");      
    } else {
         body.classList.add("dark");
         localStorage.setItem("theme", "dark");       
    }

}

themeElement.addEventListener("change", themeChange);
