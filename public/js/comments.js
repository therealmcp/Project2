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
      console.log(res);
    }
  );
});
