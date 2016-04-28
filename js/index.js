$( document ).ready(function() {
	$(".jumbotron").click(function() {
		if($("p").css("display") == "inline-block"){
			$("p").css("display", "none");
		} else{
			$("p").css("display", "inline-block");
		}
	});
});