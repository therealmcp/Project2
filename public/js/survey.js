// Capture the form inputs
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Form validation
  function validateForm() {
    var isValid = true;

    $(".custom-select").each(function() {
      if ($(this).val() === "Choose...") {
        isValid = false;
      }
    });
    return isValid;
  }

  // If all required fields are filled
  if (validateForm()) {
    // Create a variable that adds up question values
    var results =
      parseInt($("#q1").val()) +
      parseInt($("#q2").val()) +
      parseInt($("#q3").val()) +
      parseInt($("#q4").val()) +
      parseInt($("#q5").val());

    console.log(results);

    //Logic for assigning a badge
    var badge = "";
    if (results < 10) {
      badge = "casual.jpg";
    } else if (results <= 15) {
      badge = "social.jpg";
    } else if (results <= 20) {
      badge = "competitive.jpg";
    } else if (results <= 25) {
      badge = "hardcore.jpg";
    }

    console.log(badge);

    // AJAX post the result.

    $.ajax({
      method: "PUT",
      url: "/api/survey",
      data: { badge: badge }
    }).then(function() {
      $("#badge").attr("src", "../images/" + badge);
      // Show the modal with the badge assignment
      $("#results-modal").modal("toggle");
    });
  } else {
    alert("Please answer all questions before submitting!");
  }
});
