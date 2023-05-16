const burgerBtn = document.querySelector(".burgerBtn");
const hiddenMenu = document.querySelector(".hiddenMenu");
const toggleBtnIcon = document.querySelector(".burgerBtn i");

burgerBtn.onclick = function () {
    hiddenMenu.classList.toggle("open");
    const isOpen = hiddenMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
