// JavaScript File
$(document).ready(function()
{
   
    var searchButton = $(".search");
    var url = "request.php?q=";
    
    searchButton.on('click', aFunction);

    function aFunction(event)
    {
        //The click event is passed to the function so that we can 
        // prevent the default action of the button
        event.preventDefault();
      
        // Will only get the value of termEntered if the searchButton is clicked, 
        // since it's now within the function called on click.
        var termEntered = $("#term").val();

        $.ajax({
          url: url + termEntered,
        })
        .done(function(data) 
        {
            //alert($(data).text()); 
            //alert(data);
            $( "#result" ).html(data);
        }).fail(function()// In the event request is not able to find request page
        {
            alert("ERROR");
        });
    }
    
});