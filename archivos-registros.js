/* ========================================
   MODALES
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll("[data-modal]");
    const modals = document.querySelectorAll(".archive-modal");
    const closeButtons = document.querySelectorAll(".archive-modal-close");
    const audios = document.querySelectorAll(".audio-file audio");


    /* ========================================
       CONTROL DE AUDIO
    ======================================== */

    function stopAllAudios() {

        audios.forEach(function (audio) {

            audio.pause();
            audio.currentTime = 0;

        });

    }


    audios.forEach(function (audio) {

        audio.addEventListener("play", function () {

            // Detener cualquier otro audio
            audios.forEach(function (otherAudio) {

                if (otherAudio !== audio) {
                    otherAudio.pause();
                }

            });

        });

    });


    /* ========================================
       ABRIR MODAL
    ======================================== */

    function openModal(modal) {

        if (!modal) {
            return;
        }

        // Por seguridad, detener cualquier audio que estuviera sonando
        stopAllAudios();

        modals.forEach(function (item) {

            item.classList.remove("active");
            item.setAttribute("aria-hidden", "true");

        });

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("modal-open");

    }


    /* ========================================
       CERRAR MODAL
    ======================================== */

    function closeModal(modal) {

        if (!modal) {
            return;
        }

        // Al cerrar el modal, todos los audios se detienen
        stopAllAudios();

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");

    }


    /* ========================================
       ABRIR DESDE LAS TARJETAS
    ======================================== */

    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            const modalId = card.getAttribute("data-modal");
            const modal = document.getElementById(modalId);

            openModal(modal);

        });

    });


    /* ========================================
       BOTONES X
    ======================================== */

    closeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            closeModal(
                button.closest(".archive-modal")
            );

        });

    });


    /* ========================================
       CLICK FUERA DEL MODAL
    ======================================== */

    modals.forEach(function (modal) {

        const backdrop =
            modal.querySelector(".archive-modal-backdrop");

        backdrop.addEventListener("click", function () {

            closeModal(modal);

        });

    });


    /* ========================================
       TECLA ESC
    ======================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") {
            return;
        }

        const activeModal =
            document.querySelector(".archive-modal.active");

        if (activeModal) {
            closeModal(activeModal);
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