//$('input[name=radioName]:checked', '#myForm').val()

//bool var for check boxes
//click ok button check if clicked




// console.log 






<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>


$(document).ready(function(){

	var isSelected = false;

	updateButton(isSelected);

	

	$("categoryClass").click(function(){

		isSelected = document.getElementByClassName("categoryClass").checked;
        
    });

    $(".submitButton").click(function(){

		updateButton(isSelected);
        
    });




});


function updateButton(isSelected) {
	if (isSelected) {
		document.getElementById(".submitButton").disabled = false;
	}
	else {
		document.getElementById(".submitButton").disabled = true;
	}
	
}

function getIsSelected() {
	return isSelected;
}

function reset() {
	isSelected = false;
	document.getElementById(".submitButton").disabled = true;

}


</script>