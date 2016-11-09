// JavaScript File
$(document).ready(function()
{
   
    var searchButton = $(".search");
    var url = "request.php?q=";
    
    searchButton.click(function()
    {
        //alert(defn.html());  
         $.ajax({
        url: url + "definition",
        })
        .done(function(data) 
        {
            alert($(data).text()); 
        });
    });
    
    
});