$(document).ready(function() {
        var click = "Click for description!";
        $("#contact").on("click","input[type=submit]",function() {
            $(".output" ).append('<div class="newcard"></div>');

            $(".newcard:last-child").append('<h3>' + $("#first").val() + " " + $("#last").val() +'</h3>');
            $(".newcard:last-child").append('<p class="desc">' + $("#description").val() +'</p>')
            $(".newcard:last-child").append('<p class="clickon">' + click + '</p>');
            event.stopPropagation();
            return false;
    });
    $(".output").on("click", ".newcard", function() {
        $( this ).children().toggle();
        event.stopPropagation();
    });
});
