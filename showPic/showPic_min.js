// window.onload=function(){  
//     prepareGallery();  
// }  
addLoadEvent(prepareGallery);

//结构与行为分离 
function prepareGallery(){  
    if(!document.getElementsByTagName) return false;  
    if(!document.getElementById) return false;  
    if(!document.getElementById("imageGallery")) return false;  
    var gallery=document.getElementById("imageGallery");  
    var links=gallery.getElementsByTagName("a");  
    for(var i=0;i<links.length;i++){  
        links[i].onclick=function(){  
            return !showPic(this);   //取消元素原有默认行为 
        }  
    }  
}  
  
function showPic(whichpic){  
    if(!document.getElementById("placeholder")) return false;  
    var source=whichpic.getAttribute("href");  
    var placeholder=document.getElementById("placeholder");  
    if(placeholder.nodeName!="IMG") return false;  
    placeholder.setAttribute("src",source);//注意source不要用""  
    if(!document.getElementById("description")) return true;  
    var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";  
    var description=document.getElementById("description");  
    if(description.firstChild.nodeType==3){  
        description.firstChild.nodeValue=text;  
    }  
    return true;  
}  

// 解决每个事件处理函数只能绑定一条指令的问题
// window.onload = firstFunction;
//window.onload = secondFunction;
// 第二个函数会覆盖第一个，使只发生第二个事件行为
function addLoadEvent(func){
	var oldonload = window.load;
	if(typeof window.load != 'function'){
		window.onload = func;
	}else{
		// 创建匿名函数容纳两个函数，再将匿名函数绑定到onload事件上
		window.onload = function(){
			oldonload();
			func();
		}
	}
}