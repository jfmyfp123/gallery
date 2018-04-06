// function showPic(whicePic){
// 	// whicePic作为参数，也就是带有href属性的目标元素作为参数
// 	var source = whicePic.getAttribute('href');
// 	var placeholder = document.getElementById('placeholder');
// 	//将链接的属性值赋给img占位符
// 	placeholder.setAttribute('src',source);
// 	var text = whicePic.getAttribute('title');
// 	var description = document.getElementById('description');
// 	//文本值改变,p元素的文本是p元素的第一个文本节点，用childNodes[0]获取,
// 	//等价于firstChild
// 	//alert(description.nodeValue);//弹出框的值是null,p元素本身
// 	//的nodeValue属性值是空的，真正需要的是p元素包含的文本节点的值
// 	description.firstChild.nodeValue = text;
// }
// function showPic(whicePic){
// 	var source = whicePic.getAttribute('href');
// 	var placeholder = document.getElementById('placeholder');
// 	placeholder.setAttribute('src',source);
// 	var text = whicePic.getAttribute('title');
// 	var description = document.getElementById('description');
// 	description.firstChild.nodeValue = text;
// }
function showPic(whicePic){
	var source = whicePic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',source);
    var text = whicePic.getAttribute('title');
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text;
}