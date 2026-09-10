/* ========================================
   PERSONAJES
======================================== */

document.querySelectorAll(".character-card:not(.character-placeholder)")
    .forEach(function (card) {

        card.addEventListener("click", function () {

            const wasExpanded =
                card.classList.contains("expanded");

            document
                .querySelectorAll(".character-card.expanded")
                .forEach(function (expandedCard) {

                    expandedCard.classList.remove("expanded");

                });

            if (!wasExpanded) {

                card.classList.add("expanded");

                setTimeout(function () {

                    card.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 100);

            }

        });

    });


/* ========================================
   NAVBAR
======================================== */

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,5,5,.97)";

    } else {

        navbar.style.background =
            "linear-gradient(to bottom, rgba(0,0,0,.96), rgba(0,0,0,0))";

    }

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