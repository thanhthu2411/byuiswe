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


// top button

window.onscroll = function () {
    document.querySelectorAll(".topBtn").forEach(btn => {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    })
}


document.querySelectorAll(".topBtn").forEach(btn => {
    btn.onclick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
})
