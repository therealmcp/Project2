$("#add-btn").on("click", function(event) {
  event.preventDefault();
  // Make a newUser object
  var newUser = {
    name: $("#userName")
      .val()
      .trim(),
    email: $("#userEmail")
      .val()
      .trim(),
    password: $("#userPassword")
      .val()
      .trim(),
    birthday: $("#userBday")
      .val()
      .trim()
  };

  // Send an AJAX POST-request w jQuery
  $.post("/api/newUser", newUser).then(function(data) {
    console.log(data, newUser);
  });
  // Empty each input box once posted
  $("#userName").val("");
  $("#userEmail").val("");
  $("#userPassword").val("");
  $("#userBday").val("");
});
