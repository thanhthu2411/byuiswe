const cards = document.querySelectorAll(".card-content");

cards.forEach((card) => {
    card.addEventListener("click", function() {
        const overlay = this.previousElementSibling;
        overlay.style.width = "100%";
    });
});


const closeBtns = document.querySelectorAll(".closebtn");
closeBtns.forEach((btn) => {
    btn.addEventListener("click", function() {
        const overlayContainer = btn.parentElement;
        overlayContainer.style.width = "0%";
    })
})