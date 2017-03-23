window.onload = function() {
	height = $(this).height();
	width = $(this).width();
	saas_topHeight =$(".saas-top").height();
	$(".saas-left").css("height",height-saas_topHeight);//左侧导航去掉padding	
	$(".saas-address-left").css("height",height-saas_topHeight-60);
	$(".saas-address-left ul").css("height",height-saas_topHeight-70);
if(height <= 600){
}
if(width <= 1100){
	$(".saas-right-content").css("width",1100-465+"px");
	}
}
	//加载页面时，页面内容变化
$(window).resize(function() {
    height = $(this).height();
    width = $(this).width();
    $(".saas-address-left").css("height",height-saas_topHeight-60);
	$(".saas-left").css("height",height-saas_topHeight);//左侧导航去掉padding	
	$(".saas-address-left ul").css("height",height-saas_topHeight-70);
if(width <= 1100){
	$(".saas-right-content").css("width",1100-465+"px");
	}
});
//拖动浏览器，页面内容变化
$(function(){
	$(".saas-left p").click(function(){
		$(this).attr("class","left-p-click").siblings().removeAttr("class");
	});
	//左侧导航栏点击事件
	$(".saas-address-left ul li").click(function(){
		$(this).attr("class","bk-list-1").siblings().removeAttr("class");
	});
	//左侧二级导航栏点击事件
});
