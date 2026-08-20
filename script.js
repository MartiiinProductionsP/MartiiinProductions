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
   SEARCH
======================================== */

function openSearch() {

    const modal = document.getElementById("searchModal");

    modal.classList.add("active");

    setTimeout(() => {

        document.getElementById("searchInput").focus();

    }, 100);

}


function closeSearch() {

    document
        .getElementById("searchModal")
        .classList.remove("active");

}


function searchContent() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const results =
        document.getElementById("searchResults");


    if (input.length === 0) {

        results.innerHTML = "";

        return;

    }


    const projects = [

        "Obras Independientes",
        "Endless Crime",
        "Rodney",
        "Ray",
        "Hugo Valera"

    ];


    const matches =
        projects.filter(item =>
            item.toLowerCase().includes(input)
        );


    if (matches.length === 0) {

        results.innerHTML =
            "<p>No encontramos resultados.</p>";

        return;

    }


    results.innerHTML =
        matches
        .map(item => `<p>🎬 ${item}</p>`)
        .join("");

}


/* ========================================
   PROJECT
======================================== */

function openProject(name) {

    alert(
        "Abrir proyecto: " + name
    );

}


/* ========================================
   HORIZONTAL SCROLL
======================================== */

function scrollRow(id, direction) {

    const row =
        document.getElementById(id);

    row.scrollBy({

        left: 600 * direction,

        behavior: "smooth"

    });

}