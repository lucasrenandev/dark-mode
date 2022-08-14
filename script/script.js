
const section = document.querySelector("section")
const icon = document.querySelector(".icon")

icon.addEventListener("click", () => {
    section.classList.toggle("dark")
})