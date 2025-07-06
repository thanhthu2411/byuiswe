const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", function (){
        const panel = this.nextElementSibling;
        panel.classList.toggle("show");
    })
})
