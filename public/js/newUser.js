$("#add-btn").on("click", function(event) {
  event.preventDefault();
  // Make a newUser object
  var name = $("#userName")
    .val()
    .trim();
  var email = $("#userEmail")
    .val()
    .trim();
  var password = $("#userPassword")
    .val()
    .trim();
  var userBio = $("#userBio")
    .val()
    .trim();
  var pic = $("#profPic")
    .val()
    .trim();
  var games = $("#userGames")
    .val()
    .trim();
  var birthdate = $("#userBirth")
    .val()
    .trim();
  // Send an AJAX POST-request w jQuery
  $.post("/api/newUser", {
    name: name,
    email: email,
    password: password,
    birthdate: birthdate,
    pic: pic,
    bio: userBio,
    games: games
  });
  // Empty each input box once posted
  $("#userName").val("");
  $("#userEmail").val("");
  $("#userPassword").val("");
  $("#userBio").val("");
  $("#profPic").val("");
  $("#userGames").val("");
  $("#userBirth").val("");
});
