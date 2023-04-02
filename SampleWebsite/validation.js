//form validation functions for marketing website
var radbase = "radNo";
var radnm = "";
var totArea = 19.0;

//calculate running total of screen area
function totUsability() {
	var frmObj = document.nielsen;
	
	//calculate total of screen areas
	totArea = 1*frmObj.txtOSControls.value +
		1*frmObj.txtWelcome.value +
		1*frmObj.txtNavigation.value +
		1*frmObj.txtContent.value +
		1*frmObj.txtAdvertising.value +
		1*frmObj.txtSelfpromotion.value +
		1*frmObj.txtFiller.value +
		1*frmObj.txtWhitespace.value +
		1*frmObj.txtOther.value;
	//update displayed total
	frmObj.txtTotal.value = totArea;
}

//calculate usability score and screen real-estate
function chkForm(frmObj){
	//check we have a userID
	if(frmObj.txtFCUser.value == "") {
		alert("No Reviewer ID entered!");
		return false;
	}
	//check we have a URL
	if(frmObj.txtURL.value == "http://") {
		alert("No web site URL entered!");
		return false;
	}
	//total the score for the usability criteria
	var totScore = 0;
	var usability = "";
	var realestate = "";
	
	for(i=1; i<21; i++){
		radnm = radbase + i;
		//test which radio button user selected
		if(frmObj.elements[radnm][0].checked==true){totScore = totScore + 1*frmObj.elements[radnm][0].value;}
		else {totScore = totScore + 1*frmObj.elements[radnm][1].value;}
		frmObj.txtScore.value = totScore;
	}
	
	//check total of real-estate
	if(totArea != 100.0){
		totUsability();
		valOther = 1*frmObj.txtOther.value;
		realestate = "Total screen usage not 100% \n" +
		"Try setting 'Other' to " + (100.0 - (totArea-valOther)) + "\n\n" +
		"Please correct before submitting data";
		alert(realestate);
		frmObj.txtOther.value = 100.0-(totArea-valOther);
		frmObj.txtTotal.value = "100.0";
		totArea = 100.0;
		return false;
	}
	else {
		usability = "Usability score = " + totScore + "\n";
		realestate = "Total screen usage = " + totArea +"% \n";
		return confirm("Please confirm data entries\n\n" + usability + realestate);
	}
}