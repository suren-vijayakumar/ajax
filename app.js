$(document).ready(function(){
  
	$.ajax({
		url:'https://api.github.com/users/suren-vijayakumar?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d', 
		type:'GET',
		dataType:'json',
		crossDomain:true,
		success: function(data){
			console.log(data);
			callback(data);
		}
	});
	 function callback(data){
       
$("#results").append(data.login + ',');

}
       
});