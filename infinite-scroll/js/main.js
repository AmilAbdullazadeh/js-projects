const container = document.querySelector(".container")

function loadImages(numberOfImages = 10) { 
  let i = 0
  while (i < numberOfImages) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = `${data.message}`;
        container.appendChild(img);
      });
    i++;
  }
}
 
loadImages();

window.addEventListener("scroll", () => {
  console.log("windows scrollY", window.scrollY)
  console.log("windows innerHeight", window.innerHeight);
  console.log("document documentElement ", document.documentElement.scrollHeight);
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
})




  