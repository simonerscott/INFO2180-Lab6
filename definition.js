// JavaScript File
$(document).ready(function()
{
    var defn = $(".defn dd");
    var searchButton = $(".search");
    
    searchButton.click(function()
    {
        alert(defn.html());  

    });
});