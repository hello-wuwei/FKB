window.onload = function() {
	height = $(this).height();
	width =$(this).width();
	saas_topHeight =$(".saas-top").height();
	$(".saas-left").css("height",height-saas_topHeight);//左侧导航去掉padding	
	$(".saas-System-left").css("height",height-saas_topHeight);
	$(".saas-System-content").css("width",width-352+"px");
	$(".business").css("width",width-160+"px");
	$(".system-BasicMajar").css("height",height-180);
	$(".professional-level").css("height",height-70);
	$(".professional-box > ul").css("height",height -325);
	$(".professional-box1 > ul").css("height",height -325);
	$(".staff-waitPacket-pepole").css("height",height -325);
	$(".function-box-content-list > ul").css("height",height -400);
	$(".org-box").css("height",height-200);
	$(".listBox > ul").css("height",height-280);
	$(".function-businessCity").css("height",height-70);
	$(".function-businessCity-fit").css("height",height-70);
	$(".personal-information-content").css("width",width-160);
	$(".people-con").css("max-height",height-300);
	$(".informationQlist-scroll").css("max-height",height-465);
	if(width <= 1000){
		$(".saas-System-content").css("width",1000-352+"px");		
		$(".business").css("width",1000-160+"px");		
	};
	if(width <= 1206){
		$(".personal-information-content").css("width",1206-160+"px");		
	};
	if(height <= 730){
		$(".personal-information-body").css("overflow-y","scroll");		
	}else{
		$(".personal-information-body").css("overflow","hidden");
	};;//更改，当body高度不够时出现下拉滚动
	$(".function-businessCity-fit").css("width",width-352);
    $('.function-coin-area').css('height',height);
    $('.function-standard').css('height',height);
	$(".cunction-srcoll > ul").css('height',height-384);
    $('.account-security').css('width',width-160);
    $('.msg-tip').css('width',width-160);
    $('.business-box').css('height',height-120);
	if(width <= 1220){
			$(".function-businessCity-fit").css("width",1220-352+"px");		
	};
};
$(window).resize(function() {
	height = $(this).height();
	width =$(this).width();
	$(".saas-home-Main").css("height",height - "100" +"px");
	$(".saas-left").css("height",height-saas_topHeight);//左侧导航去掉padding	
	$(".saas-System-left").css("height",height-saas_topHeight);
	$(".saas-System-content").css("width",width-352+"px");
	$(".business").css("width",width-160+"px");
	$(".system-BasicMajar").css("height",height-180);
	$(".professional-level").css("height",height-70);
	$(".professional-box > ul").css("height",height -325);
	$(".professional-box1 > ul").css("height",height -325);
	$(".staff-waitPacket-pepole").css("height",height -325);
	$(".function-box-content-list > ul").css("height",height -400);
	$(".org-box").css("height",height-200);
	$(".listBox > ul").css("height",height-280);
	$(".personal-information-content").css("width",width-160);
	$(".work-content-box").css("width",width-352+"px");
	$(".people-con").css("max-height",height-300);
	$(".informationQlist-scroll").css("max-height",height-465);
	if(width <= 1000){
		$(".saas-System-content").css("width",1000-352+"px");
		$(".business").css("width",1000-160+"px");		
	};
	if(width <= 1206){
		$(".personal-information-content").css("width",1206-160+"px");		
	};
	if(height <= 730){
		$(".personal-information-body").css("overflow-y","scroll");		
	}else{
		$(".personal-information-body").css("overflow","hidden");
	};//更改，当body高度不够时出现下拉滚动
	$(".function-businessCity-fit").css("width",width-352);
	$(".function-businessCity").css("height",height-70);
	$(".function-businessCity-fit").css("height",height-70);
    $('.function-coin-area').css('height',height);
    $('.function-standard').css('height',height);
    $(".cunction-srcoll > ul").css('height',height-384);
    $('.account-security').css('width',width-160);
    $('.msg-tip').css('width',width-160);
    $('.business-box').css('height',height-120);
    if(width <= 1220){
		$(".function-businessCity-fit").css("width",1220-352);		
	};
});
$(function(){
//	$(".saas-left p").click(function(){
//		$(this).attr("class","left-p-click").siblings().removeAttr("class");
//	});
	//左侧一级导航栏
	$(".saas-System-left p").click(function(){
		$(this).attr("class","bk-list-1").siblings("p").removeAttr("class");
	});
	//左侧二级导航栏
	
	
	
	//职位、职级
	$(".click-li li").click(function(){
		var index = $(this).index();
		$(this).attr("id","this-li").siblings("li").removeAttr("id");
		if(index == "0"){
			$(".professional-1").fadeIn().siblings(".professional-2").hide();
		}
		if(index == "1"){
			$(".professional-2").fadeIn().siblings(".professional-1").hide();
		}
	});
	
	//树形
	$(".click-li-2 li").click(function(){
		var index = $(this).index();
		$(this).attr("id","this-li-2").siblings("li").removeAttr("id");
		if(index == "0"){
			$(".treeBox").fadeIn().siblings(".listBox").hide();
		}
		if(index == "1"){
			$(".listBox").fadeIn().siblings(".treeBox").hide();
		}
	});
	
	
	//企业管理二级导航
	$("#system-nav p").click(function(){
		var index = $(this).index();
		$("#system-content > div:nth-child("+index+")").fadeIn().siblings("div").hide();
	});
	
	$(".professional-box > ul > li p:nth-child(1) img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
		}
	});
	
	$(".listBox > ul > li p:nth-child(1) img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
		}
	});
	
	
	
	//tree
	$("#browser").treeview();
	$("#browser").bind("contextMenu", function(event) {
		if ($(event.target).is("li") || $(event.target).parents("li").length) {
			$("#browser").treeview({
				remove: $(event.target).parents("li").filter(":first")
			});
			return false;
		}
	});
	var click_index = "1";
	$(".first-div .first-content").click(function() {
		click_index ++ ;
		if(click_index == "2"){
			$("#browser").hide();
			$(this).parent(".border").siblings(".border-bottom").hide();
			click_index = "0";
		}else{
			$("#browser").show();
			$(this).parent(".border").siblings(".border-bottom").show();
			click_index = "1";
		}
	});

	//部门数据
	$("#Branch-transfer-input").click(function(){
		$("#Branch-transfer").hide();
	});
	$("#Branch-transfer-close").click(function(){
		$("#Branch-transfer").hide();
	});
	$("#Branch-transfer-open").click(function(){
		$("#Branch-transfer").fadeIn();
	});
	
	
	//导出组织
	$("#derived-weave-input").click(function(){
		$("#derived-weave").hide();
	});
	$("#derived-weave-close").click(function(){
		$("#derived-weave").hide();
	});
	$("#derived-weave-open").click(function(){
		$("#derived-weave").fadeIn();
	});
	var click_index = "1";
	$("#derived-weave-xuanzhong").click(function(){
		click_index++;
		if(click_index == "2"){
			$(this).attr("src","img/check-box-3.png");
		}else{
			$(this).attr("src","img/checked.png");
			click_index ="1";
		}
	});
	
	
	//新建部门
	var click_index = "1";
	$("#department-close").click(function(){
		$("#department").hide();
	});
	$("#department-input").click(function(){
		$("#department").hide();
	});
	$("#derived-weave-input-2").click(function(){
		$("#department").hide();
	});
	$("#department-xuanzhong").click(function(){
		click_index++;
		if(click_index == "2"){
			$(this).attr("src","img/checked.png");
		}else{
			$(this).attr("src","img/check-box-3.png");
			click_index ="1";
		}
	});
	
	
});