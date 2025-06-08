const columns = document.querySelectorAll(".column");
const expandImg = document.querySelector("#expandedImg");
const imgText = document.querySelector("#imgtext");
const closeBtn = document.querySelector(".close-btn");

columns.forEach((column) => {
    column.addEventListener("click", function() {
        const img = this.firstElementChild;
        expandImg.src = img.src;
        imgText.innerHTML = img.alt;
        expandImg.parentElement.style.display = "block";
    });
});

closeBtn.addEventListener("click", function(){
    const container = this.parentElement;
    container.style.display = "none";
})