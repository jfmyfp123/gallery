// 进行文档与javaScript分离
function prepareGallery(){
	console.log("11");
	if(!document.getElementById){
		return false;
	}
	if(!document.getElementsByTagName){
		retunr false;
	}
	if(!document.getElementById("imageGallery")){
		return false;
	}
	var gallery = document.getElementById("imageGallery");
	var links = gallery.getElementsByTagName("a");
	console.log("iii");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(){
			return !showPic(this);
		}
	}
}

// 图片切换函数
function showPic(whichPic){
	if(!document.getElementById("placeholder")){
		return false;
	}
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(!placeholder.nodeName != "IMG"){
		return false;
	}
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
		var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title"):" ";
	    var description = document.getElementById("description");
	    if(description.firstChild.nodeType == 3){
	    	description.firstChild.nodeValue = text;
	    }
    }
    return true;
}

// 
function addLoadEvent(func){
	var oldonload = window.onload;//原始函数
	if(typeof window.onload != "function"){
		window.onload = func;        //若无原始函数，将新函数赋给它
	}else{
		window.onload = function(){
			oldonload();  			//若有原始函数，将新函数加在原函数后，
			func();					//用一个匿名函数容纳这两个函数,因为每个事件处理函数只能绑定一条指令
		}
	}
}
