$(document).ready(function() {
	var win = true;
	$(".boundary").mouseover(function() {
		win = false;
		$(".boundary").addClass("youlose");
	});

	$("#end").mouseover(function() {
		if (win) $("#status").text("You win :)");
		else $("#status").text("You lose :(");
	});

	$("#start").click(function() {
		$("#status").text("Click the \"S\" to begin.");
		win = true;
		$(".boundary").removeClass("youlose");
	});

	$("body").mouseover(function() {
		if (event.target.id != ("maze") && event.target.id != ("start") && event.target.id != ("end")) {
			win = false;
			$(".boundary").addClass("youlose");
		}
	});

});