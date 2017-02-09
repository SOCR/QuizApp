//$('input[name=radioName]:checked', '#myForm').val()

//bool var for check boxes
//click ok button check if clicked




// console.log 







$(document).ready(function(){
    reset();
	updateButton(isSelected);

	$(".categories").click(function(){

		isSelected = true;
        updateButton(isSelected);
        
    }());

    $("#start-button").click(function(){


        
    }());
});

/*

$("#start-button").click(function() {
	if ()
});
*/



function updateButton(isSelected) {
	if (isSelected) {
		$("#start-button").addClass("enabled");
        $("#start-button").removeClass("disabled");
    }
	else {
		$("#start-button").addClass("disabled");
		$("#start-button").removeClass("enabled");
	}
	
}

function getIsSelected() {
	return isSelected;
}

function reset() {
	isSelected = false;

	// console.log(document.getElementById("start-button"));
	// $("#start-button").disabled = true;
    $("#start-button").removeClass("enabled");
    $("#start-button").addClass("disabled");
}


