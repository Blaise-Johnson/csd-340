
// Blaise Johnson
// Assignment 10.3
// November 15, 2026

function revealSurprise() {
    let image = document.getElementById("surpriseImage");

    if (image.src.includes("present.jpg")) {
        image.src = "images/rickroll-rick.gif";
    } else {
        image.src = "images/present.jpg";
    }
}

