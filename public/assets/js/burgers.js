// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-burg").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("devoured");
  
      var newDevouredState = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".delete-cat").on("click", function() {
    //   let id = $(this).attr("data-id");
    //   $.ajax(`/api/cats/${id}`, {
    //     type: "DELETE"
    //   }).then(function() {
    //     console.log("Deleted cat!");
    //     location.reload();
    //   });
    // });
});
  