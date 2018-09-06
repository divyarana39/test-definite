function sideBarCall(argument) {
	document.getElementById('sideBar').style.display="block";
	document.getElementById('blanket').style.display="block";
}

function closeSideBar(){
	document.getElementById('sideBar').style.display="none";
	document.getElementById('blanket').style.display="none";
}

function menuBarCall(){
	if (document.getElementById('menuBar').style.display=="block") {
		document.getElementById('menuBar').style.display="none"
	}else{
		document.getElementById('menuBar').style.display="block";
	}	
}

function playVideo(){
	if (document.getElementById('playVideo').style.display=="block") {
		document.getElementById('playVideo').style.display="none"
		document.getElementById('blanket').style.display="none";
	}else{
		document.getElementById('playVideo').style.display="block";
		document.getElementById('blanket').style.display="block";
	}
}
