let preloader = document.createElement("div")
preloader.className = "preloader";
preloader.innerHTML = `<div class="b-ico-preloader"></div><div class="spinner"></div>`
document.body.appendChild(preloader);


window.addEventListener("load",  () => {
    setTimeout(() => {
        // preloader.style.display = "none"
        preloader.className += " fade"
    }, 2000)
})