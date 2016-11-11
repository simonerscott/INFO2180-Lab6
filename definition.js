// JavaScript File
$(document).ready(function()
{
   
    var searchButton = $(".search");
    var url = "request.php?q=";
    var xmlBtn = $(".getAll");
    
    searchButton.on('click', aFunction);
    xmlBtn.on('click', xmlFunction);

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
           // $("#result").html("<h2>Result</h2>")
            $( "#result" ).html(data);
        }).fail(function()// In the event request is not able to find request page
        {
            alert("ERROR");
        });
    }
    
    
    function xmlFunction(event)
    {
        event.preventDefault();
        
        

        $.ajax({
            url: "request.php?q=&all=true",
            method: "GET",
            dataType:"xml"
        })
        .done(function(response)
        {
            var term = $(response).find("definition");
            var ol = document.createElement("ol");
            $("#result").html("");
            $("#result").append("<ol></ol>");
            $(term).each(function(index, value)
            {
                console.log($(value).attr("name"));
                console.log($(value).html());
                $('#result ol')
                .append("<li><h3>" + $(value).attr("name") + "</h3>"+
                "<p>" + $(value).html() + "</p>" +
                "<p>" + "- " + $(value).attr("author") + "</p></li>");
                
            });
            
        })
        .fail(function()
        {
            alert("error");
        });
    }
    
});