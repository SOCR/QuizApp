//$('input[name=radioName]:checked', '#myForm').val()

//bool var for check boxes
//click ok button check if clicked




// console.log 







$(document).ready(function(){
    reset();
	//updateButton(isSelected);

	$(".categories").click(function(){

		isSelected = true;
        updateButton(isSelected);
        
    });

    $("#start-button").click(function(){


        
    });
});

$("#question-button").click(function() {
    //$("categories > li").checked = false;
    resetWindow();
});

$("#category-button").click(function() {
    //$("categories > li").checked = false;
    resetWindow();
});


$("#start-button").click(function() {
	if (isSelected) {
        var choice = $("categories:checked");
        choice.checked = false;
        var window = $("#categoryPicker");
        window.modal('toggle');
        console.log(choice);
    }
});




function updateButton(isSelected) {
	if (isSelected) {
		$("#start-button").addClass("enabled");
        $("#start-button").removeClass("disabled");
        console.log("if statement");
    }
	else {
		$("#start-button").addClass("disabled");
		$("#start-button").removeClass("enabled");
        console.log("reached here");

    }
	
}

function getIsSelected() {
	return isSelected;
}

function reset() {
	isSelected = false;

	console.log(document.getElementById("start-button"));
	// $("#start-button").disabled = true;
    $("#start-button").removeClass("enabled");
    $("#start-button").addClass("disabled");
}

function resetWindow() {
    categories[0].selected = false;
    categories[1].selected = false;
    categories[2].selected = false;
    categories[3].selected = false;

    categories[0].checked = false;
    categories[1].checked = false;
    categories[2].checked = false;
    categories[3].checked = false;

   /* (categories[0]).removeAttr('checked');
    (categories[1]).removeAttr('checked');
    (categories[2]).removeAttr('checked');
    (categories[3]).removeAttr('checked');*/

    console.log("print something");
    console.log(categories[0]);
    console.log(categories[1]);
    console.log(categories[2]);
    console.log(categories[3]);
    reset();
}
