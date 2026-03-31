
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

x_z240$$ = document.querySelector(".pass");
x_z240$$.style.display = "none"

document.addEventListener('keydown', function (e) {
    // منع Ctrl + '+' أو Ctrl + '-'
    if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+' || e.key === '-' || e.key === '0')) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('wheel', function (e) {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
console.log(phones[1].name);
    }
}, { passive: false });


document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && 
        (e.key === "u" || 
         e.key === "U" || 
         e.key === "s" || 
         e.key === "S")) {
        e.preventDefault();
    }

    if (e.key === "F12") {
        e.preventDefault();
    }
});
});