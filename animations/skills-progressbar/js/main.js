const skillElements = document.querySelectorAll(".progressbar");

const skillList = [
  { name: "html", percantage: "99%" },
  { name: "css", percantage: "85%" },
  { name: "javascript", percantage: "45%" },
  { name: "react", percantage: "30%" },
];

(function () {
  skillElements.forEach((element, index) => {

    setTimeout(() => {
      skillList.forEach((item) => {
        "progress-" + item.name === element.id &&
          (element.style.width = item.percantage);
      });
    }, index * 100);

  });
})();
// progress-html ===
