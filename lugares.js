/* ========================================
   NAVBAR
======================================== */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ========================================
   VISOR DE LUGAR
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("placeModal");
    const modalImage = document.getElementById("placeModalImage");
    const closeButton = document.getElementById("placeModalClose");
    const backdrop = document.querySelector(".place-modal-backdrop");

    const placeCards =
        document.querySelectorAll(".place-card");


    function openPlace(card) {

        const image =
            card.querySelector(".place-photo img");

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("modal-open");

        closeButton.focus();

    }


    function closePlace() {

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");

    }


    placeCards.forEach(function (card) {

        card.addEventListener("click", function () {
            openPlace(card);
        });


        card.addEventListener("keydown", function (event) {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                openPlace(card);

            }

        });

    });


    closeButton.addEventListener("click", closePlace);

    backdrop.addEventListener("click", closePlace);


    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {
            closePlace();
        }

    });

});


/* ========================================
   TRANSICIÓN ENTRE PÁGINAS
======================================== */

window.addEventListener("load", function () {

    document.body.classList.add("page-loaded");

});


document.querySelectorAll("a[href]").forEach(function (link) {

    link.addEventListener("click", function (event) {

        const href = link.getAttribute("href");

        /* Ignorar enlaces especiales */
        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            link.target === "_blank"
        ) {
            return;
        }

        event.preventDefault();

        document.body.classList.remove("page-loaded");
        document.body.classList.add("page-leaving");

        setTimeout(function () {

            window.location.href = href;

        }, 500);

    });

});