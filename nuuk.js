var line1 = document.getElementsByClassName('line-1')[0];
var line2 = document.getElementsByClassName('line-2')[0];
var phoneDrop = document.getElementsByClassName('phone-drop')[0];
var body = document.getElementsByTagName('body')[0];
getButton.onclick=function(){}
	popup.style.display = "block";
	overlay.style.display = "block";
    closeBut.onclick=function(){
	popup.style.display = "none";
	overlay.style.display = "none";	
}

pcb.onclick=function(){
	var margin = window.getComputedStyle(line2).marginTop;
  if(window.getComputedStyle(body).width <= "600px" || window.getComputedStyle(body).width <= "768px" ){
	if(margin == "10px"){
		phoneDrop.style.display = "flex";
		line2.style.marginTop = "0px"
  pcb.onclick=function(){
		line1.style.transform = "rotateZ(0deg)";
		line2.style.transform = "rotateZ(0deg)";
	}
}
  }
  else if(window.getComputedStyle(body).width > "768px"){
    phoneDrop.style.display = "none"
  }
}