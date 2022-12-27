const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const closeBtn = document.querySelector(".btn-close")
const openBtn = document.querySelector(".btn-open")

const openModal = () => {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

openBtn.addEventListener("click", openModal)

closeBtn.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)