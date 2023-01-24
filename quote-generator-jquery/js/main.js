$(document).ready(function () {

  function fetchData() {
    $.ajax({
      url: "https://geek-jokes.sameerkumar.website/api?format=json",
      type: "GET",
      success: function (response, textStatus) {
        $("#joke").text(response.joke)
      },
      fail: function (error, textStatus) {
        console.log(error);
      },
    });
  }

  fetchData();

  $("#btn").click(fetchData)

});
