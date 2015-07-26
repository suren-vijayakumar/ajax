 var searchGithub;
$(document).ready(function(){
	
	$("body").on('click', '.gititButton', function(event){
			event.preventDefault();
			searchGithub = $('#input').val();
			search(searchGithub);
		});

});
	


function search(query){
	$.ajax({
		url:'https://api.github.com/users/'+ searchGithub + '?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d', 
		type:'GET',
		dataType:'json',
		crossDomain:true,
		success: function(data){
			console.log(data);
			callback(data);
		}
	});
}
	 function callback(data){
       
$("#resultsName").append("Name: " + data.name);
$("#resultsLink").append("Link: <a href='"+data.html_url+"'target='blank'>"+data.html_url+"</a>");
$("#resultsPhoto").append("Looks like: <img src='"+data.avatar_url+"' />");
}
       
