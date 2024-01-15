document.addEventListener("DOMContentLoaded", () => {
    const menuBtnOpen = document.getElementById("menuBtn");

    document.addEventListener("scroll", showArrow);
    menuBtnOpen.addEventListener("click", openMenu);
});

function showArrow() {
    const arrow = document.getElementById("arrow");
    let currentScroll = window.scrollY;
    if (currentScroll > 0) {
        arrow.classList.remove("hidden");
        arrow.classList.add("block");
    } else if (currentScroll === 0) {
        arrow.classList.add("hidden");
        arrow.classList.remove("block");
    }
}

function openMenu() {
    const blurContent = document.getElementById("blur");
    const menu = document.getElementById("menu");
    const menuBtnOpen = document.getElementById("menuBtn");
    const menuBtnClose = document.getElementById("closeBtn");

    menuBtnOpen.removeEventListener("click", openMenu);

    blurContent.className = "blur";
    menu.style.animation = "slideOpen linear 0.25s";
    menu.classList.remove("hidden");
    menu.classList.add("flex");

    menuBtnClose.addEventListener("click", closeMenu);

    document.addEventListener("scroll", closeMenu);
}

function closeMenu() {
    const blurContent = document.getElementById("blur");
    const menu = document.getElementById("menu");
    const menuBtnClose = document.getElementById("closeBtn");
    const menuBtnOpen = document.getElementById("menuBtn");

    menuBtnClose.removeEventListener("click", closeMenu);
    blurContent.className = "";

    menu.style.animation = "slideClose linear 0.25s";

    delay250ms().then(() => {
        menu.classList.remove("flex");
        menu.classList.add("hidden");
    });

    menuBtnOpen.addEventListener("click", openMenu);
}

function delay250ms() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 250);
    });
}
