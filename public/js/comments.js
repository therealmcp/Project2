$(".addComment").on("click", function() {
  var comment = $(this)
    .siblings("input.comment")
    .val()
    .trim();

  var id = $(this)
    .siblings("input.postId")
    .val();
  console.log(comment);
  console.log(id);
  $.post(
    "/api/newComment",
    {
      comment: comment,
      id: id
    },
    function(res) {
      //selected the commnet div that we will be posting a comment inside of
     var commentDiv = $("div[data-postId=" + res.postId + "]");
      // use jquery to to dynmaically create a <p> tag and store this in a variable

      // grab the comment data from the res object and add it as text to the <p> tag
      console.log(res);
      // append the <p> tag to the commentDiv
    }
  );
});
