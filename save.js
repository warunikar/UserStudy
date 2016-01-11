var choice = [" "," "];
var click = 0;

//Called when the next button is clicked. The current choice is sent to the server side
function next(table){
	if (click < 1) {
		alert("Please select at least one image. Reset to add a new response.");
		return;
	}
	else { 
        var xhttp;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
		xhttp.open("GET","savetodb.php?q="+choice[0]+"&name="+table+"&qa="+choice[1],false);
        xhttp.send();
    }
}

//Called when user clicks on an image. The name of the image is saved into the array "choice"
function record(i){
	var index = choice.indexOf(i);
	if(index < 0){ //new choice - select the image
		$("td").click(function(){
				$(this).addClass('selected');
			});
		if(click==0)
			document.getElementById('btnNext').disabled = false;
		choice[click++] = i;
	}
	else{ //already chosen deselect the image
		$("td").click(function(){
				$(this).removeClass('selected');
			});
		choice.splice(index, 1); //remove the choice
		resete(click-1);
	}
}

//Called when the user presses the reset button, or deselects an image
function resete(p){
	click = p;
	if(p == 0)
		document.getElementById('btnNext').disabled = true;
}
