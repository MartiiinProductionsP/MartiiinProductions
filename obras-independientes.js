/* ========================================
   NAVBAR
======================================== */

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");


    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* ========================================
   HISTORIAS
======================================== */

const stories = [

    "DÉJALO",

    "EMPEZAR DE CERO",

    "EL INICIO DEL FIN",

    "EFICACIA",

    "NARANJAS Y RATAS",

    "SHERIFFS EN EL INFIERNO",

    "CARTA DE INDULTO",

    "OYE FERRAS.GIF, DIME MARTIN.GIF",

    "LA MP CONOCE A BLADE",

    "CORRIENDO HACIA UN SUEÑO",

    "MATT, RODNEY Y UN MALETÍN",

    "PESADILLAS",

    "BUENOS MAMONES",

    "EN EL JUEGO DE LA VIDA"

];



/* ========================================
   VIDEOS DE YOUTUBE
======================================== */

/*
    PEGA AQUÍ LOS LINKS DE YOUTUBE.

    El orden es:

    1  - DÉJALO
    2  - EMPEZAR DE CERO
    3  - EL INICIO DEL FIN
    4  - EFICACIA
    5  - NARANJAS Y RATAS
    6  - SHERIFFS EN EL INFIERNO
    7  - CARTA DE INDULTO
    8  - OYE FERRAS.GIF, DIME MARTIN.GIF
    9  - LA MP CONOCE A BLADE
    10 - CORRIENDO HACIA UN SUEÑO
    11 - MATT, RODNEY Y UN MALETÍN
    12 - PESADILLAS
    13 - BUENOS MAMONES
    14 - EN EL JUEGO DE LA VIDA

    Puedes pegar la URL completa de YouTube.
*/

const videos = [

    "https://www.youtube.com/watch?v=RADHvzp84AQ&list=PLRsH6V1anKLI", // 01 - DÉJALO

    "https://youtu.be/n5OdNF7OkQo?si=jAHMUsHphn6172lP", // 02 - EMPEZAR DE CERO

    "https://youtu.be/sXiO4RkCWws?si=S1kDRw-SMTswk7z4", // 03 - EL INICIO DEL FIN

    "https://youtu.be/tWNVlsiFruo?si=INvNLGfRhHs_gFAS", // 04 - EFICACIA

    "https://youtu.be/bwtZdtF6uHM?si=1oxwtFA2egLbuTbv", // 05 - NARANJAS Y RATAS

    "https://youtu.be/zVWTOpP_9UA?si=I1jP19wzOao2jdpg", // 06 - SHERIFFS EN EL INFIERNO

    "https://youtu.be/sWnwdYUvsKg?si=NyxDeBDlZ6khlKV1", // 07 - CARTA DE INDULTO

    "https://youtu.be/ALzmdGUu5So?si=xPoPXbSRJQP4XouW", // 08 - OYE FERRAS.GIF, DIME MARTIN.GIF

    "https://youtu.be/ibvHrGzK4Zo?si=ViO8TxHnWBaiAIHK", // 09 - LA MP CONOCE A BLADE

    "https://youtu.be/gnUE_PJpsJk?si=ptvb74lAeZhHDkQ6", // 10 - CORRIENDO HACIA UN SUEÑO

    "https://youtu.be/fu1E-qwZ2hU?si=rHxIdwG2T1choYGI", // 11 - MATT, RODNEY Y UN MALETÍN

    "https://youtu.be/rUjqpTxX91k?si=cR3Rx9B0FWkmjhE_", // 12 - PESADILLAS

    "https://youtu.be/31kIlH_m3Zo?si=STkmF04ZIu4uy833", // 13 - BUENOS MAMONES

    "https://youtu.be/UCS5zm2RKxs?si=jrIwaOTwzyBx6MYd"  // 14 - EN EL JUEGO DE LA VIDA

];



/* ========================================
   REPRODUCIR PRIMERA HISTORIA
======================================== */

function playFirstStory() {

    playStory(1);

}



/* ========================================
   REPRODUCIR HISTORIA
======================================== */

function playStory(number) {

    const videoUrl =
        videos[number - 1];


    /*
        Si todavía no has puesto el enlace,
        no hace nada.
    */

    if (
        !videoUrl ||
        videoUrl === "PEGA EL LINK DEL VIDEO AQUI"
    ) {

        alert(
            "Todavía no has agregado el video de YouTube para:\n\n" +
            stories[number - 1]
        );

        return;

    }


    /*
        Abre el video de YouTube
        en una nueva pestaña.
    */

    window.open(
        videoUrl,
        "_blank"
    );

}



/* ========================================
   SCROLL DE HISTORIAS
======================================== */

function scrollStories(direction) {

    const storyList =
        document.getElementById(
            "storyList"
        );


    const scrollAmount = 700;


    storyList.scrollBy({

        left:
            scrollAmount *
            direction,

        behavior:
            "smooth"

    });

}



/* ========================================
   MÁS INFORMACIÓN
======================================== */

function scrollToInfo() {

    document
        .getElementById(
            "informacion"
        )
        .scrollIntoView({

            behavior:
                "smooth"

        });

}



/* ========================================
   BUSCADOR
======================================== */

function openSearch() {

    const modal =
        document.getElementById(
            "searchModal"
        );


    modal.classList.add(
        "active"
    );


    setTimeout(function () {

        document
            .getElementById(
                "searchInput"
            )
            .focus();

    }, 100);

}



/* ========================================
   CERRAR BUSCADOR
======================================== */

function closeSearch() {

    document
        .getElementById(
            "searchModal"
        )
        .classList.remove(
            "active"
        );

}



/* ========================================
   BUSCAR HISTORIAS
======================================== */

function searchContent() {

    const input =

        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase();


    const results =

        document
            .getElementById(
                "searchResults"
            );



    if (
        input.length === 0
    ) {

        results.innerHTML = "";

        return;

    }



    const matches =

        stories.filter(
            function (item) {

                return item
                    .toLowerCase()
                    .includes(input);

            }
        );



    if (
        matches.length === 0
    ) {

        results.innerHTML =
            "<p>No encontramos resultados.</p>";

        return;

    }



    results.innerHTML =

        matches

            .map(function (item) {

                return `
                    <p>🎬 ${item}</p>
                `;

            })

            .join("");

}



/* ========================================
   CERRAR BUSCADOR AL HACER CLICK AFUERA
======================================== */

document
    .getElementById(
        "searchModal"
    )
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {

                closeSearch();

            }

        }
    );