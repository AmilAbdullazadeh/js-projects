const video = document.getElementById("videoElement");
const toggleBtn = document.getElementById("toggleButton");

// 👇Checking that if it is working or not
if ("pictureInPictureEnabled" in document) {
  // 👇 Running 'togglePiPMode' function when user click the button
  toggleBtn.addEventListener("click", togglePiPMode);

  // 👇 event trigger when you enter in PiP mode
  video.addEventListener("enterpictureinpicture", () => {
    toggleBtn.textContent = "Exit PiP Mode";
  });

  // 👇 event trigger when you leave the PiP mode
  video.addEventListener("leavepictureinpicture", () => {
    toggleBtn.textContent = "Enter PiP Mode";
  });
}

function togglePiPMode() {
  try {
    // 👇 Checking that if user should not be in PiP mode
    if (video !== document.pictureInPictureElement) {
      video.requestPictureInPicture();
    } else {
      document.exitPictureInPicture(); // 👈 If already in PIP Mode then exit
    }
  } catch (error) {
    console.log(error); // Console any error if any
  }
}
