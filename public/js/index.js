$("#login").on("click", function() {
  var email = $("#inputEmail")
    .val()
    .trim();
  var password = $("#inputPassword2")
    .val()
    .trim();
  console.log(email);
  console.log(password);

  $.post(
    "/api/login",
    {
      email: email,
      password: password
    },
    function(res) {
      if (res.redirect) {
        window.location.pathname = res.redirect;
      }
      console.log(res);
    }
  );
});

$("#postButton").on("click", function() {
  var message = $("#message").val();
  console.log(message);

  $.post(
    "/api/newpost",
    {
      message: message
    },
    function(res) {
      if (res.redirect) {
        window.location.pathname = res.redirect;
      }
      console.log(res);
    }
  );
});
