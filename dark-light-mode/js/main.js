const refreshBtn = document.querySelector("#refresh");
const toggleBtn = document.querySelector("#toggle");
const theme = localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark")

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if (theme === "dark") {
        localStorage.setItem("theme", "light")
    } else {
        localStorage.setItem("theme", "dark")
    }
})

refreshBtn.addEventListener("click", () => {
    location.reload();
});