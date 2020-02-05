/* 
 * 页面滑动效果 主要应用于主站 
 * 框架在jquery的基础上
 */


function glide(obj){
		// 获取置顶对象
	var obj = document.getElementById(obj);
	
	// 置顶对象点击事件
	
	obj.onclick = function() {
	
		var timer = setInterval(function() {
		
		window.scrollBy(0, -10000000);
		
			if (document.body.scrollTop == 0) {
	
				clearInterval(timer);
			};
		}, 2);
	}
	// 窗口滚动检测
	window.onscroll = function() {
	obj.style.display = (document.body.scrollTop >= 200) ? "block" : "none";
	}
}
