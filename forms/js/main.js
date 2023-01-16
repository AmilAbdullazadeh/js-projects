const form = document.querySelector("#form");
// const fullname = document.querySelector("#fullname");
// const email = document.querySelector("#email");
// const zip = document.querySelector("#zip");
// const country = document.querySelector("#country");

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  console.log(document.myForm.fullname.value);

  const isValidEmail = emailRegex.test(email.value);

  // if (fullname.value === "") {
  //   alert("You should be fill fullname area");
  //   return false;
  // } else if (email.value === "" || !isValidEmail) {
  //   alert("You should be fill email area");
  //   return false;
  // } else if (zip.value === "") {
  //   alert("You should be fill zip area");
  //   return false;
  // } else if (country.value === "" || country.value === "-1") {
  //   alert("You should be fill country area");
  //   return false;
  // }

  // const data = {
  //   fullname: fullname.value,
  //   email: email.value,
  //   zip: zip.value,
  //   country: country.value,
  // };

  // console.log(data);

  // return data;
});
