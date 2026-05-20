let images = ["WhatsApp Image 2026-05-10 at 23.18.31 (1).jpeg", "WhatsApp Image 2026-05-10 at 23.18.31.jpeg", "WhatsApp Image 2026-05-10 at 23.18.32 (1).jpeg"]

let index = 0

function showimg() {
    const img = document.getElementById("img")
    img.src = images[index]
}
function Back() {
    index = (index + 1) % images.length
    showimg()
}
function Next() {
    index = (index - 1 + images.length) % images.length
    showimg()
}