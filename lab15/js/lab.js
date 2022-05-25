/*
 *Author: Lindsey McDermott
 *Date: May 25, 2022
 *Description: AJAX
 */
 var endpoint = "http://www.yerkee.com/api/fortune/wisdom";

 function getAjax(){
   $.ajax({
     url: endpoint,
     requestType: "GET",
     dataType: "json"
   })
 .done(function(data){
   $("#output").html(data.fortune);
 })
 .fail(function(request, error){
   $("#output").html("something is wrong.");
 })
}

$("button").click(getAjax);
