$(document).ready(function() {
  // This needs to grab the data of the signed in user without any user input so the post is tied to the signed in user.
  var nameInput = $("#user-name");

  $(document).on("submit", "#submit-post", handleUserFormSubmit);
  $(document).on("click", ".delete-user", handleDeleteButtonPress);

  getUsers();

  function handleUserFormSubmit(event) {
    event.preventDefault();
    if (
      !nameInput
        .val()
        .trim()
        .trim()
    ) {
      return;
    }

    upsertUser({
      name: nameInput.val().trim()
    });
  }

  function upsertUser(userData) {
    $.post("/api/users", userData).then(getUsers);
  }

  function getUsers() {
    $.get("/api/users", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createUserRow(data[i]))
      }
      renderUserList(rowsToAdd);
      nameInput.val("");
    });
  }

  function renderUserList(rows) {
    userList
      .children()
      .not(":last")
      .remove();
    userContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      userList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("There are no posts at this time.");
    authorContainer.append(alertDiv);
  }

  function handleDeleteButtonPress() {
    var listItemData = $(this)
      .parent("td")
      .parent("tr")
      .data("user");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    }).then(getUsers);
  }
});
