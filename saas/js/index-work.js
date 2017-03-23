//加载响应start
window.onload = function() {
	height = $(this).height();
	width = $(this).width();
	var date_week = width-480;
	var date_height =date_week-70;
	var date_height_Schedule = date_height+150;
	var choose_workmate_height = $("#choose-workmate").height();
	var choose_workmate_width = $("#choose-workmate").width();
//	var report_height = $(".report").height();
	var sh_height =$(".new-schedule").height();
	var width_ul_1 =$(".week-data ul:nth-child(1)").width();
	var width_ul_2 =$(".week-data ul:nth-child(2)").width();
	var width_ul_3 =$(".week-data ul:nth-child(3)").width();
	var width_ul_4 =$(".week-data ul:nth-child(4)").width();
	var width_ul_5 =$(".week-data ul:nth-child(5)").width();
	var width_ul_6 =$(".week-data ul:nth-child(6)").width();
	var width_ul_7 =$(".week-data ul:nth-child(7)").width();
	var width_ul_8 =$(".week-data ul:nth-child(8)").width();
	var all_width_ul =width_ul_1+width_ul_2+width_ul_3+width_ul_4+width_ul_5+width_ul_6+width_ul_7+width_ul_8;
	var work_Schedule_div = $(".Schedule-date .Schedule-date-day>li div").width();
	saas_topHeight =$(".saas-top").height();
	$(".saas-left").css("height",height-saas_topHeight-60);															
	$(".saas-work-left").css("height",height-saas_topHeight-30);													
	$("#invite-group").css("left",width/2-180+"px").css("top",height/2-250+"px");									
	$("#window-chat-right-invite").css("top",height/2-250+"px").css("left",width/2-325+"px");						
	$(".work-content-1>ul").css("height",height-200+"px");															
	$(".work-content-2>ul").css("height",height-200+"px");															
	$(".work-content-3>ul").css("height",height-200+"px");															
	$(".saas-Schedule-content").css("height",height-70);		
	$(".Schedule-date").css("height",date_height).css("width",date_week+20);
	$(".saas-unconfirmed").css("height",height-70);													
	$(".saas-Colleague-schedule").css("height",height-70);
	$(".Schedule-list").css("height",height-220+"px");
	$("#choose-workmate").css("top",height/2-choose_workmate_height/2+30).css("left",width/2-choose_workmate_width/2);
	$(".work-ul-2>li:last-child").css("height",height-266);
	$("#group-information").css("left",width/2-150).css("top",height/2-250);
	$(".work-form-box").css("height",height-215);
	$("#mate-invite-group").css("left",width/2-180+"px").css("top",height/2-250+"px"); 
//	$(".report").css("top",height/2-report_height/2).css("left",width/2-275);
	$(".more").css("left",width/2-150).css("top",height/2-150);
	$(".plan").css("left",width/2-210).css("top",height/2-280);
	$(".new-schedule").css("left",width/2-310).css("top",height/2-sh_height/2);
	$(".week-data").css("width",width-379);
	if(width > 1080 ){
		$(".saas-work-content").css("width",width-361+"px");
		$(".Schedule-date").css("width",date_week+20);
		$(".Schedule-ul-top").css("width",date_week+10);
		$(".saas-Schedule-content").css("width",width-361+"px");
		$(".saas-unconfirmed").css("width",width-361+"px");
		$(".saas-Colleague-schedule").css("width",width-361+"px");
		$(".Schedule-date .Schedule-date-week>li").css("width",date_week/7);
		$(".Schedule-date .Schedule-date-day>li").css("min-height",date_week/7).css("width",date_week/7);
		$(".Schedule-date").css("height",date_height);
		$(".colleague-schedule").css("width",date_week/7*0.9).css("height",date_week/7*0.6);
		$(".Unconfirmed-schedule").css("width",date_week/7*0.9).css("height",date_week/7*0.6);
		$(".colleague-schedule>li>p").css("font-size",date_week/70);
		$(".Unconfirmed-schedule>li>p:last-child").css("font-size",date_week/70);
		$(".colleague-schedule>li:last-child").css("font-size",date_week/70);
		$(".Unconfirmed-schedule > li:last-child").css("font-size",date_week/70);
		$(".Schedule-date .Schedule-date-day li > span").css("font-size",date_week/70);
		$(".colleague-schedule>li>p:first-child").css("width",date_week/42).css("height",date_week/42);
		$(".Unconfirmed-schedule>li>p:first-child").css("line-height",date_week/35*0.6+"px");
	}else{
		$(".saas-work-content").css("width",1080-361+"px");
		$(".saas-unconfirmed").css("width",1080-361+"px");
		$(".saas-Colleague-schedule").css("width",1080-361+"px");
		$(".saas-Schedule-content").css("width",1080-361+"px");
		$(".Schedule-date").css("width","625px");
		$(".Schedule-ul-top").css("width","625px");
		$(".Schedule-date .Schedule-date-week>li").css("width","88px");
		$(".Schedule-date .Schedule-date-day>li").css("width","88px").css("min-height","88px");
		$(".Schedule-date").css("height","570px");
		$(".colleague-schedule").css("width",88*0.9).css("height",88*0.6);
		$(".Unconfirmed-schedule").css("width",88*0.9).css("height",88*0.6);
		$(".colleague-schedule>li>p").css("font-size",88/10);
		$(".Unconfirmed-schedule>li>p:last-child").css("font-size",88/10);
		$(".colleague-schedule>li:last-child").css("font-size",88/10);
		$(".Schedule-date .Schedule-date-day li > span").css("font-size",88/10);
		$(".Unconfirmed-schedule > li:last-child").css("font-size",88/10);
		$(".colleague-schedule>li>p:first-child").css("width",88/6).css("height",88/6);
		$(".Unconfirmed-schedule>li>p:first-child").css("line-height",88/5*0.6+"px");
	}
	if(height<date_height_Schedule){
		$(".saas-Schedule-content").css("overflow-y","scroll");
		$(".saas-Colleague-schedule").css("overflow-y","scroll");
		$(".saas-unconfirmed").css("overflow-y","scroll");
	}else{
		$(".saas-Schedule-content").css("overflow-y","auto");
		$(".saas-Colleague-schedule").css("overflow-y","auto");
		$(".saas-unconfirmed").css("overflow-y","auto");
	}
}
//加载响应end


//浏览器大小改变响应start
$(window).resize(function() {
	width = $(this).width();
	height = $(this).height();
	
	var chat_true = $(".saas-Enterprise-WeChat-click").attr("i");
	    if(chat_true == "true"){
	    	var height = $(this).height();
 			var width = $(this).width();
	  		$(".saas-Enterprise-WeChat-click").css("height",height-72);
	  		$(".saas-chatWindow").css("height",height-72);
	  		$(".window-right>div:nth-child(2)").css("height",height-72-215);
	  		$(".window-right").css("width",width-411);
	  		$(".saas-chatWindow").css("width",width-220);
	  		if(height<=480){
		  		$(".saas-Enterprise-WeChat-click").css("height",480-72);
		  		$(".saas-chatWindow").css("height",480-72);
		  		$(".window-right>div:nth-child(2)").css("height",480-72-215);
		  		$("body").css("overflow-y","auto");
		  	}
			if(width<=827){
				$(".window-right").css("width",827-411);
	  			$(".saas-chatWindow").css("width",827-220);
			}
	    }
	    if(chat_true == "flase"){
	    	$(".saas-Enterprise-WeChat-click").attr("i","false");
			$(".saas-Enterprise-WeChat-click").hide().fadeIn(400);	
			$(".saas-chatWindow").hide().fadeIn(400);
			$(".saas-Enterprise-WeChat-click").css("height","550px");
			$(".saas-chatWindow").css("height","550px");
			$(".window-right>div:nth-child(2)").css("height","335px");
			$(".window-right").css("height","479px;");
			$(".saas-chatWindow").css("width","670px");
			$(".saas-Enterprise-WeChat-click").css("right","140px");
			$(".saas-chatWindow").css("right","362px");
			$(".window-right").css("width","479px");
	    }
	var date_height_Schedule = date_height+150;
	var date_week = width-480;
	var date_height =date_week-70;
	var choose_workmate_height = $("#choose-workmate").height();
	var choose_workmate_width = $("#choose-workmate").width();
//	var report_height = $(".report").height();
	var width_ul_1 =$(".week-data ul:nth-child(1)").width();
	var width_ul_2 =$(".week-data ul:nth-child(2)").width();
	var width_ul_3 =$(".week-data ul:nth-child(3)").width();
	var width_ul_4 =$(".week-data ul:nth-child(4)").width();
	var width_ul_5 =$(".week-data ul:nth-child(5)").width();
	var width_ul_6 =$(".week-data ul:nth-child(6)").width();
	var width_ul_7 =$(".week-data ul:nth-child(7)").width();
	var width_ul_8 =$(".week-data ul:nth-child(8)").width();
	var all_width_ul =width_ul_1+width_ul_2+width_ul_3+width_ul_4+width_ul_5+width_ul_6+width_ul_7+width_ul_8;
	saas_topHeight =$(".saas-top").height();
	var sh_height =$(".new-schedule").height();
	$(".saas-left").css("height",height-saas_topHeight-60);													
	$(".saas-work-left").css("height",height-saas_topHeight-30);											
	$("#invite-group").css("left",width/2-180+"px").css("top",height/2-250+"px");							
	$("#window-chat-right-invite").css("top",height/2-250+"px").css("left",width/2-325+"px");				
	$(".work-content-1>ul").css("height",height-200+"px");													
	$(".work-content-2>ul").css("height",height-200+"px");													
	$(".work-content-3>ul").css("height",height-200+"px");												
	$(".saas-Schedule-content").css("height",height-70);
	$(".saas-unconfirmed").css("height",height-70);
	$(".saas-Colleague-schedule").css("height",height-70);
	$(".Schedule-date").css("height",date_height).css("width",date_week+20);
	$(".Schedule-list").css("height",height-220+"px");
	$("#choose-workmate").css("top",height/2-choose_workmate_height/2+30).css("left",width/2-choose_workmate_width/2);
	$(".work-ul-2>li:last-child").css("height",height-266);
	$("#group-information").css("left",width/2-150).css("top",height/2-250);
	$(".work-form-box").css("height",height-215);
	$("#mate-invite-group").css("left",width/2-180+"px").css("top",height/2-250+"px");
//	$(".report").css("top",height/2-report_height/2).css("left",width/2-275);
	$(".more").css("left",width/2-150).css("top",height/2-150);
	$(".plan").css("left",width/2-210).css("top",height/2-280);
	$(".new-schedule").css("left",width/2-310).css("top",height/2-sh_height/2);
	$(".week-data").css("width",width-379);
//	$(".week-data-box").css("width",all_width_ul+60);
	if(width > 1080 ){
		$(".saas-work-content").css("width",width-361+"px");
		$(".Schedule-date").css("width",date_week+20);
		$(".Schedule-ul-top").css("width",date_week+10);
		$(".saas-Schedule-content").css("width",width-361+"px");
		$(".saas-unconfirmed").css("width",width-361+"px");
		$(".saas-Colleague-schedule").css("width",width-361+"px");
		$(".Schedule-date .Schedule-date-week>li").css("width",date_week/7);
		$(".Schedule-date .Schedule-date-day>li").css("width",date_week/7).css("min-height",date_week/7);
		$(".Schedule-date").css("height",date_height);
		$(".colleague-schedule").css("width",date_week/7*0.9).css("height",date_week/7*0.6);
		$(".Unconfirmed-schedule").css("width",date_week/7*0.9).css("height",date_week/7*0.6);
		$(".colleague-schedule>li>p").css("font-size",date_week/70);
		$(".colleague-schedule>li:last-child").css("font-size",date_week/70);
		$(".Unconfirmed-schedule > li:last-child").css("font-size",date_week/70);
		$(".Unconfirmed-schedule>li>p:last-child").css("font-size",date_week/70);
		$(".colleague-schedule>li>p:first-child").css("width",date_week/42).css("height",date_week/42);
		$(".Schedule-date .Schedule-date-day li > span").css("font-size",date_week/70);
		$(".Unconfirmed-schedule>li>p:first-child").css("line-height",date_week/35*0.6+"px");
	}else{
		$(".saas-work-content").css("width",1080-361+"px");
		$(".saas-Schedule-content").css("width",1080-361+"px");
		$(".saas-unconfirmed").css("width",1080-361+"px");
		$(".saas-Colleague-schedule").css("width",1080-361+"px");
		$(".Schedule-date").css("width","625px");
		$(".Schedule-ul-top").css("width","625px");
		$(".Schedule-date .Schedule-date-week>li").css("width","88px");
		$(".Schedule-date .Schedule-date-day>li").css("width","88px").css("min-height","88px");
		$(".Schedule-date").css("height","570px");
		$(".colleague-schedule").css("width",88*0.9).css("height",88*0.6);
		$(".Unconfirmed-schedule").css("width",88*0.9).css("height",88*0.6);
		$(".colleague-schedule>li>p").css("font-size",88/10);
		$(".colleague-schedule>li:last-child").css("font-size",88/10);
		$(".Unconfirmed-schedule>li>p:last-child").css("font-size",88/10);
		$(".Unconfirmed-schedule > li:last-child").css("font-size",88/10);
		$(".colleague-schedule>li>p:first-child").css("width",88/6).css("height",88/6);
		$(".Schedule-date .Schedule-date-day li > span").css("font-size",88/10);
		$(".Unconfirmed-schedule>li>p:first-child").css("line-height",88/5*0.6+"px");
		
	}
	if(height<date_height_Schedule){
		$(".saas-Schedule-content").css("overflow-y","scroll");
		$(".saas-unconfirmed").css("overflow-y","scroll");
		$(".saas-Colleague-schedule").css("overflow-y","scroll");
	}else{
		$(".saas-Schedule-content").css("overflow-y","auto");
		$(".saas-unconfirmed").css("overflow-y","auto");
		$(".saas-Colleague-schedule").css("overflow-y","auto");
	}
});
//浏览器大小改变响应end


$(function(){
	//工作页面左侧二级导航点击事件start
	$(".saas-work-left .work-ul-1 li").click(function(){
		var index = $(this).index();
		if(index !== 0){
			$(this).attr("class","bk-list-1").siblings().removeAttr("class");
		}
		$(".saas-work-content>div:eq("+index+")").fadeIn().siblings().hide();
	});
	//工作页面左侧二级导航点击事件end
	
	
	//select-工作报告start
	var selcet_li_hide = function(){
		$(".select_even ul").stop().hide();
	}
	var selcet_li_hide_odd = function(){
		$(".select_odd ul").stop().hide();
	}
	$(".select_odd ul li").click(function(){
		var this_html = $(this).html();
		$(this).parent("ul").siblings("p").children("span:first-child").html(this_html);
		$(this).parent("ul").hide();
	});
	$(document).bind("click",function(select_odd_p){
		var target = $(select_odd_p.target);
		var i =target.closest(".select_odd p").length;
		if(i == 1){
			$(".select_odd ul").show();
		}else{
			selcet_li_hide_odd();
		}
	});
	$(document).bind("click",function(select_even_p){
		var target = $(select_even_p.target);
		var i =target.closest(".select_even").length;
		var click_index = 1;
		if(i == 1){
			
		}else{
			selcet_li_hide();
		}
	});
	$(".select_even p").click(function(){
		$(this).siblings("ul").show();
	});
	$(".select_even ul li").click(function(){
		var attr_this = $(this).attr("class");
		var this_html = $(this).html();
		if(attr_this == "select_true"){
			$(this).parent("ul").show();
		}else{
			$(this).parent("ul").hide();
			$(this).parent("ul").siblings("p").children("span:first-child").html(this_html);
		}
	});
	//select-工作报告end
	
	//公告页面左侧二级导航点击事件end
	//超链接工作报告start-工作报告
	$("#index-work").click(function(){
		location.href = "index-work.html";
	});
	//超链接工作报告end
	//超链接日程管理start－日程管理
	$("#index-schedule").click(function(){
		location.href = "work-Schedule management.html";
	});
	//超链接日程管理end
	//超链接公告start－公告
	$("#index-notice").click(function(){
		location.href = "index-affiche.html";
	});
	//超链接公告end
	//超链接公告start－差旅预订
	$("#index-travel").click(function(){
		location.href = "index-travelBooking.html";
	});
	//超链接公告end
	//超链接公告start－预订处理
	$("#index-reservation").click(function(){
		location.href = "index-reservationProcessing.html";
	});
	//超链接公告end
	//超链接公告start－开支流水
	$("#index-expenditure").click(function(){
		location.href = "index-expenditureWater.html";
	});
	//超链接公告end
	
	//超链接公告start－业务单据
	$("#index-document").click(function(){
		location.href = "index-businessDocument.html";
	});
	//超链接公告end
	//超链接公告start－业务审批
	$("#index-approval").click(function(){
		location.href = "index-examinationApprova.html";
	});
	//超链接公告start－财物审批
	$("#index-property").click(function(){
		location.href = "index-propertyApprova.html";
	});
	//超链接公告start－结算及支付
	$("#index-payment").click(function(){
		location.href = "index-settlementPayment.html";
	});
	//超链接公告end
	//其他超链接startstart
	$(".saas-left p:nth-child(11)").click(function(){
		location.href = "moreDevelop.html";
	});
	$(".saas-left p:nth-child(12)").click(function(){
		location.href = "moreDevelop.html";
	});
	//其他超链接end

	
	
	//日程管理二级导航start
	var click_index = 0;
	$(".saas-work-left .work-ul-2 > li").click(function(){
		var index= $(this).index()-1;
		var index_bk= $(this).index();
		if(index_bk != "0"){
			$(this).attr("class","bk-list-1").siblings().removeAttr("class");
			$(".work-content-box>div:eq("+index+")").fadeIn(400).siblings().hide();
		}
		if(index == 2 && click_index == 0){
			click_index++;
			$("#choose-workmate").fadeIn();
			$(".choose-workmate-top p:nth-child(2)").click(function(){
				click_index = 0;
			});
		}
	});
	//日程管理二级导航end
	
	
	//日程管理日历与列表的切换start
	$(".Schedule-ul-top .date-choose p").click(function(){
		var index=$(this).index();
		$(this).attr("id","bk-Schedule").siblings().removeAttr("id");
		if(index == 0){
			$(".Schedule-date").hide();
			$(".Schedule-list").hide();
			$(".week-data").fadeIn();
			$(".this-date").fadeIn();
			$(".this-day").hide();
		}
		if(index == 1){
			$(".Schedule-date").fadeIn();
			$(".Schedule-list").hide();
			$(".this-date").fadeIn();
			$(".this-day").hide();
			$(".week-data").hide();
		}
		if(index == 2){
			$(".Schedule-date").hide();
			$(".Schedule-list").fadeIn();
			$(".this-date").hide();
			$(".this-day").fadeIn();
			$(".week-data").hide();
		}
	});
	
	
	//日程管理日历与列表的切换end
	
	
	//日历部分月数选择start
	$(".Schedule-ul-top .this-date p:nth-child(1)").click(function(){
		alert("-");
	});
	$(".Schedule-ul-top .this-date p:nth-child(3)").click(function(){
		alert("+");
	});
	$(".Schedule-ul-top .today").click(function(){
		alert("return to today!");
	});
	//日历部分月数选择end
	
	
	//发起聊天，点击分选按钮，打钩start
	$(".choose-workmate-list > ul li p:nth-child(1)").click(function(){
		var p_img = $(this).siblings("p:nth-child(2)").html();
		var p_attr = $(this).attr("class");
		$(this).html('<img src="img/checked-1.png"/>').attr("class","true");
		if(p_attr !== "true"){
			$("#choose-workmate-colleague > ul .add-li").before('<li>'+p_img+'<span><img src="img/delete.png"/></span></li>');
		}
		$("#choose-workmate-colleague > ul li span").click(function(){
			$(this).parent("li").hide();
			//“选择列表”去掉选择图片
		});
	});
	$("#choose-workmate-colleague > ul li span").click(function(){
		$(this).parent("li").hide();
		//“选择列表”去掉选择图片
	});
	//发起聊天，点击分选按钮，打钩end
	
	
	//关闭创建群组start
	$(".choose-workmate-top p:nth-child(2)").click(function(){
		$("#choose-workmate").fadeOut();
	});
	//关闭创建群组end
	
	
	//发起聊天，点击全局按钮，打钩start
	$(".choose-workmate-click").click(function(){
		$("#choose-workmate").fadeOut();
		$(".work-ul-2>li:last-child").fadeIn();
	});
	$(".choose-workmate-list > p span:last-child").click(function(){
		var p_attr= $(this).parent("p").attr("class");
		var $id = $("#"+p_attr);
		$(this).html('<img src="img/checked.png"/>');
		$id.children("li").children("p:first-child").html('<img src="img/checked-1.png"/>');
	});
	//发起聊天，点击全局按钮，打钩end
	
	
	//同事日程hover事件start
	$(".work-ul-2>li:last-child ul li").hover(function(){
		$(this).children("p:last-child").show();
	}).mouseleave(function(){
		$(this).children("p:last-child").stop().hide();
	});
	//同事日程hover事件
	
	
	//同事日程点击删除该同事start
	$(".work-ul-2>li:last-child ul li p:last-child").click(function(){
		$(this).parent("li").hide();
	});
	//同事日程点击删除该同事end
	
	//选择同事弹出框start
	$(".work-ul-2>li:last-child div p:nth-child(2)").click(function(){
		$("#choose-workmate").fadeIn();
	});
	$(".work-ul-2>li:last-child div p:nth-child(1)").click(function(){
		$("#choose-workmate").fadeIn();
	});
	//选择同事弹出框start
	
	//添加同事弹出框start
	$(".work-ul-2 > li:last-child div p:nth-child(2)").click(function(){
		$("#choose-workmate").fadeIn();
	});
	$(".work-ul-2 > li:last-child div p:nth-child(1)").click(function(){
		$("#choose-workmate").fadeIn();
	});
	//添加同事弹出框end
	
	
	//待确认日程start
	$(".saas-work-left .work-ul-2>li:nth-child(4)").click(function(){
		$(this).children("span").hide();
	});
	//待确认日程end
	
	
	//清空start
	$(".work-ul-2 > li:last-child div p:nth-child(3)").click(function(){
		$(this).parent("div").siblings("ul").children("li").hide();
	});
	//清空end
	
	
	//新建工作报告月份选择start
	$(".work-0-top li").click(function(){
		var li_attr = $(this).attr("id");
		if(li_attr == "work-day"){
			$(".work-0-top li:nth-child(1)").html('<p><img src="img/kalendar-1.png"/></p><p class="top-color">日报</p>');
			$(".work-0-top li:nth-child(2)").html('<p><img src="img/kalendar-gray-7.png"/></p><p>周报</p>');
			$(".work-0-top li:nth-child(3)").html('<p><img src="img/kalnedar-gray-31.png"/></p><p>月报</p>');
			$("#day-sum").html("今日总结");
			$("#next-day-sum").html("明日总结");
			$(".work-0-top li:nth-child(4)").fadeIn();
			$(".work-0-top li:nth-child(5)").hide();
			$(".work-0-top li:nth-child(6)").hide();
		}
		if(li_attr == "work-week"){
			$(".work-0-top li:nth-child(1)").html('<p><img src="img/kalendar-2.png"/></p><p>日报</p>');
			$(".work-0-top li:nth-child(2)").html('<p><img src="img/kalendar-green-7.png"/></p><p class="top-color">周报</p>');
			$(".work-0-top li:nth-child(3)").html('<p><img src="img/kalnedar-gray-31.png"/></p><p>月报</p>');
			$("#day-sum").html("本周总结");
			$("#next-day-sum").html("下周总结");
			$(".work-0-top li:nth-child(4)").hide();
			$(".work-0-top li:nth-child(5)").fadeIn();
			$(".work-0-top li:nth-child(6)").hide();
		}
		if(li_attr == "work-month"){
			$(".work-0-top li:nth-child(1)").html('<p><img src="img/kalendar-2.png"/></p><p>日报</p>');
			$(".work-0-top li:nth-child(2)").html('<p><img src="img/kalendar-gray-7.png"/></p><p>周报</p>');
			$(".work-0-top li:nth-child(3)").html('<p><img src="img/kalendar-31.png"/></p><p class="top-color">月报</p>');
			$("#day-sum").html("本月总结");
			$("#next-day-sum").html("下月总结");
			$(".work-0-top li:nth-child(4)").hide();
			$(".work-0-top li:nth-child(5)").hide();
			$(".work-0-top li:nth-child(6)").fadeIn();
		}
	});
	//新建工作报告月份选择end
	
	
	//批阅人与抄送的图片删除start
	$(".add-people ul li span:last-child").click(function(){
		$(this).parent("li").hide();
	});
	//批阅人与抄送的图片删除end
	
	
	//批阅人start
	$(".read-people").click(function(){
		$("#choose-workmate").fadeIn();
	});
	//批阅人end
	
	
	//抄送给谁的start
	$(".copy-send").click(function(){
		$("#mate-invite-group").fadeIn();
	});
	//抄送给谁的end
	
	
	//选择同事选择start
	$(".mate-invite-group-top p:nth-child(2) span").click(function(){
		var index= $(this).index();
		$(this).attr("id","mate-invite-group-span").siblings().removeAttr("id");
		if(index == 0){
			$("#mate-border-bottom-1").fadeIn();
			$("#mate-border-bottom-2").hide();
			$("#mate-invite-group-colleague").fadeIn();
			$("#mate-invite-group-crowd").hide()
		}else{
			$("#mate-border-bottom-1").hide();
			$("#mate-border-bottom-2").fadeIn();
			$("#mate-invite-group-colleague").hide();
			$("#mate-invite-group-crowd").fadeIn();
		}
	});
	//选择同事选择end
	
	
	//关闭选择同事start
	$(".mate-invite-group-top p:nth-child(5)").click(function(){
		$("#mate-invite-group").hide();
	});
	//关闭选择同事end
	
	
	//打开报告详情弹框start
	$(".mate-colleague-click").click(function(){
		$("#mate-invite-group").hide();
	});
	$(".work-content-1 .work-ul li").click(function(){
		$(".report").fadeIn();
	});
	$(".work-content-2 .work-ul li").click(function(){
		$(".report").fadeIn();
	});
	$(".work-content-3 .work-ul li").click(function(){
		$(".report").fadeIn();
	});
	//打开报告详情弹框end
	
	
	//关闭我的日报，我的周报，我的月报start
	$(".report-button p").click(function(){
		$(".report").hide();
	});
	$(".report-top div:last-child p:nth-child(3)").click(function(){
		$(".report").hide();
	});
	//关闭我的日报，我的周报，我的月报end
	
	
	
	//打开日程安排start
	$(".colleague-schedule > li").not(".colleague-schedule > li:last-child").click(function(){
		$(".plan").fadeIn();
	});
	$(".Unconfirmed-schedule > li").not(".Unconfirmed-schedule > li:last-child").click(function(){
		$(".plan").fadeIn();
	});
	//打开日程安排end
	
	
	
	//大日历更多点击按钮start
	$(".colleague-schedule > li:last-child").click(function(){
		$(".more").fadeIn();
	});
	$(".Unconfirmed-schedule > li:last-child").click(function(){
		$(".more").fadeIn();
	});
	//大日历更多点击按钮end
	
	
	//打开日程安排start
	$(".more ul li").click(function(){
		$(".plan").fadeIn();
	});
	//打开日程安排end
	
	
	//打开日程安排start
	$(".Schedule-list li div").click(function(){
		$(".plan").fadeIn();
	});
	//打开日程安排end
	
	
	
	//选择同事搜索start
	$("#choose-workmate-colleague > ul div p:nth-child(2) input").focus(function(){
		$(".colleague-search").fadeIn();
		$(".choose-workmate-list").hide();
	});
	//选择同事搜索end
	
	
	//工作页面选择同事窗口头部删除start
	$("#choose-workmate-colleague > ul div p:nth-child(3)").click(function(){
		$(".colleague-search").hide();
		$(".choose-workmate-list").fadeIn();
	});
	//工作页面选择同事窗口头部删除start
	
	
	//工作页面选择同事窗口头部搜索start
	$("#choose-workmate-colleague > ul div").hover(function(){
		$("#choose-workmate-colleague > ul div p:nth-child(3)").fadeIn();
	}).mouseleave(function(){
		$("#choose-workmate-colleague > ul div p:nth-child(3)").stop().hide();
	});
	//工作页面选择同事窗口头部搜索end
	
	
	//抄送人弹出框搜索start
	$("#mate-invite-group-colleague > ul div p:nth-child(2) input").focus(function(){
		$(".colleague-search").fadeIn();
		$(".mate-colleague-list").hide();
	});
	//抄送人弹出框搜索end
	
	
	//搜索关闭关联start
	$("#mate-invite-group-colleague > ul div p:nth-child(3)").click(function(){
		$(".colleague-search").hide();
		$(".mate-colleague-list").fadeIn();
	});
	//搜索关闭关联end
	
	
	//搜索关闭按键hover	start
	$("#mate-invite-group-colleague > ul div").hover(function(){
		$("#mate-invite-group-colleague> ul div p:nth-child(3)").fadeIn();
	}).mouseleave(function(){
		$("#mate-invite-group-colleague > ul div p:nth-child(3)").stop().hide();
	});
	//搜索关闭按键hover	end
	
	
	//打钩选择start
	$(".mate-colleague-list > ul li p:nth-child(1)").click(function(){
		$(this).html('<img src="img/checked-1.png">');
	});
	$(".choose-workmate-list > p span:last-child").click(function(){
		$(this).html('<img src="img/checked.png">');
	});
	$(".mate-colleague-list > p span:last-child").click(function(){
		$(this).html('<img src="img/checked.png">');
	});
	$(".mate-crowd-list li p:nth-child(3)").click(function(){
		$(this).html('<img src="img/checked.png">');
	});
	//打钩选择end
	
	
	//同事的日程弹出框start
	$(".saas-work-left .work-ul-2 li:first-child > div").click(function(){
		$(".new-schedule").fadeIn();
	});
	//同事的日程弹出框end
	
	
	//日历点击后拖动选择start
	var data_down_html = "";
	var data_up_html = "";
	$(".Schedule-date .Schedule-date-day>li").not(".noagree").not(".agree").mousedown(function(){
		var click_index = $(this).index();
		data_down_html = $(this).children("span").html();
		//点击后变色start
		$(this).css("background","#D7E6F5").siblings().css("background","#fff");
		//点击后变色end
		$(".Schedule-date .Schedule-date-day>li").bind("mouseover",function(){
			var move_index = $(this).index();
			//如果鼠标移动大于或等于点击框后面部分变色时start
			if(click_index <= move_index){
				//递增start
				for(i=click_index+1; i<=move_index;i++){
					$(".Schedule-date .Schedule-date-day>li:eq("+i+")").css("background","#D7E6F5");
				}
				//递增end
				//递减start
				for(i=move_index+1; i<=42;i++){
					$(".Schedule-date .Schedule-date-day>li:eq("+i+")").css("background","#fff");
				}
				//递减end
				//将点击框前面部分变为会背景色start
				for(i=click_index-1; i>=0;i--){
					$(".Schedule-date .Schedule-date-day>li:eq("+i+")").css("background","#fff");
				}
				//将点击框前面部分变为会背景色end
			}
			//如果鼠标移动大于或等于点击框后面部分变色时end
			//如果鼠标移动小于或等于点击框前面部分变色时start
			if(click_index >= move_index){
				//递增start
				for(i=click_index; i>=move_index;i--){
					$(".Schedule-date .Schedule-date-day>li:eq("+i+")").css("background","#D7E6F5");
				}
				//递增end
				//递减start
				for(i=move_index-1; i>=0;i--){
					$(".Schedule-date .Schedule-date-day>li:eq("+i+")").css("background","#fff");
				}
				//递减end
				//将点击框后面部分变为会背景色start
				for(i=click_index+1; i<=42;i++){
					$(".Schedule-date .Schedule-date-day>li:eq("+i+")").css("background","#fff");
				}
				//将点击框后面部分变为会背景色end
			}
			//如果鼠标移动小于或等于点击框前面部分变色时end
		});
	}).mouseup(function(){
		//清除鼠标移动事件start
		$(".Schedule-date .Schedule-date-day>li").unbind("mouseover");
		//清除鼠标移动事件end
		$(".new-schedule").fadeIn();
		var data_year = $(".this-date p:nth-child(2)").html();
		data_up_html = $(this).children("span").html();
		alert("起始日期："+data_down_html+"\n结束日期："+data_up_html+"\n年份月份："+data_year);
	});
	//日历点击后拖动选择end
	
	
	//关闭新建日程start
	$(".new-schedule .new-schedule-top p:nth-child(2)").click(function(){
		$("#new-schedule").stop().hide();
		$(".Schedule-date .Schedule-date-day>li").css("background","#fff");
		$(".week-data ul li").css("background","#F7FBFF");
	});
	//关闭新建日程start
	
	
	//周定位循环，10的值为动态获取值，start
	for(var i = 2; 10>=i ; i++){
		$(".week-data ul>div div:nth-child("+i+")").css("top",(i-1)*30);
	}
	//周定位循环，10的值为动态获取值，end
	
	
	//高度拉伸问题 start
	var li_div_length=$(".week-data ul:nth-child(2)>div div").length;
	$(".week-data ul>div").css("height",li_div_length*30);
	//高度拉伸问题 end
	
	
	//高度拉伸问题 start
	for(var i = 1;10>=i;i++){
		$(".Schedule-date .Schedule-date-day>li div:nth-child("+i+")").css("top",(i-1)*30);
	}
	var li_data_length=$(".Schedule-date-day>li:nth-child(4) div").length;
	var width_ul_1 =$(".week-data ul:nth-child(1)").width();
	var width_ul_2 =$(".week-data ul:nth-child(2)").width();
	var width_ul_3 =$(".week-data ul:nth-child(3)").width();
	var width_ul_4 =$(".week-data ul:nth-child(4)").width();
	var width_ul_5 =$(".week-data ul:nth-child(5)").width();
	var width_ul_6 =$(".week-data ul:nth-child(6)").width();
	var width_ul_7 =$(".week-data ul:nth-child(7)").width();
	var width_ul_8 =$(".week-data ul:nth-child(8)").width();
	var all_width_ul =width_ul_1+width_ul_2+width_ul_3+width_ul_4+width_ul_5+width_ul_6+width_ul_7+width_ul_8;
	$(".Schedule-date-day>li:nth-child(1)").css("height",li_div_length*30+30);
	$(".Schedule-date-day>li:nth-child(2)").css("height",li_div_length*30+30);
	$(".Schedule-date-day>li:nth-child(3)").css("height",li_div_length*30+30);
	$(".Schedule-date-day>li:nth-child(4)").css("height",li_div_length*30+30);
	$(".Schedule-date-day>li:nth-child(5)").css("height",li_div_length*30+30);
	$(".Schedule-date-day>li:nth-child(6)").css("height",li_div_length*30+30);
	$(".Schedule-date-day>li:nth-child(7)").css("height",li_div_length*30+30);
	$(".week-data-box").css("width",all_width_ul+250);
	//高度拉伸问题 end
	
	
	//周横向宽度拉伸问题 start
	for(var i = 2;10>=i;i++){
		$(".week-data ul li div:nth-child("+i+")").css("left",(i-1)*30);
	}
	var li_week_length=$(".week-data ul:nth-child(5) li:nth-child(5) div").length;
	$(".week-data ul:nth-child(5)").css("width",li_week_length*30);
	//周横向宽度拉伸问题 end
	
	
//	//hover 显示当天详情start

	$(".week-data ul > div div").hover(function(){
		var html = $(this).children("p:last-child").html();
		$("#bee").html(html).show();
	}).mouseleave(function(){
		$("#bee").hide();
	});
	$(".Schedule-list li").hover(function(){
		var i_1 = $(this).children("div").children("p:nth-child(1)").html();
		var i_2 = $(this).children("div").children("p:nth-child(2)").html();
		var i_3 = $(this).children("div").children("p:nth-child(3)").html();
		var i_4 = $(this).children("div").children("p:nth-child(4)").html();
		$("#bee").html('<img src="img/taylor-2.jpg"/><i>'+i_1+'</i><i>'+i_2+'</i><i>'+i_3+'</i><i>'+i_4+'</i>').show();
	}).mouseleave(function(){
		$("#bee").hide();
	});
	$(".Schedule-date .Schedule-date-day>li>div").hover(function(){
		var html = $(this).children("p:nth-child(3)").html();
		$("#bee").html(html).show();
		
	}).mouseleave(function(){
		$("#bee").hide();
	});
	$(".week-data ul li div").hover(function(){
		var html = $(this).children("p:last-child").html();
		$("#bee").html(html).show();
		
	}).mouseleave(function(){
		$("#bee").hide();
	});
	var bee = document.getElementById("bee");
		
	document.addEventListener("mousemove", getMouse);
	
	bee.style.position = "fixed"; //css		
	var beepos = {
	    x: 0,
	    y: 0
	};
	
	setInterval(followMouse, 50);
	
	var mouse = {
	    x: 0,
	    y: 0
	}; //mouse.x, mouse.y
	
	var dir = "right";
	
	function getMouse(e) {
	    mouse.x = e.pageX + 10;
	    mouse.y = e.pageY + 10;
	    if (mouse.x > beepos.x) {
	        dir = "right";
	    } else {
	        dir = "left";
	    }
	}
	
	function followMouse() {
	    //1. find distance X , distance Y
	    var distX = mouse.x - beepos.x;
	    var distY = mouse.y - beepos.y;
	
	    beepos.x += distX / 5;
	    beepos.y += distY / 2;
	
	    bee.style.left = beepos.x + "px";
	    bee.style.top = beepos.y + "px";
	
//		    if (dir == "right") {
//		        bee.setAttribute("class", "right");
//		    } else {
//		        bee.setAttribute("class", "left");
//		    }
	
	}
	//hover 显示当天详情end
		







	
	
	//月span循环start
	for(var i = 0;i<=10 ; i++){
		$(".Schedule-date .Schedule-date-day>li>p span:nth-child("+i+")").css("top",(i+1)*30).css("color","#000");
	}
	//月span循环end
	
	
	//周span循环start
	for(var i = 0;i<=10 ; i++){
		$(".week-data ul li>p span:nth-child("+i+")").css("left",i*30);
	}
	
	//周span循环end
	
	
//	//hover 显示当天详情start
//	$(".week-data ul li div").hover(function(){
//		var index = $(this).index();
//		$(this).siblings("p").children("span:eq("+index+")").fadeIn();
//	}).mouseleave(function(){
//		var index = $(this).index();
//		$(this).siblings("p").children("span:eq("+index+")").stop().fadeOut();
//	});
//	//hover 显示当天详情end
	
	
	var allday_height=$(".week-data ul:first-child>div").height();                   //获取全天的高度
	$(".data-line").css("top",allday_height+40+"px").css("width",all_width_ul);		 //周日历红线
	
	
	//日程周时间线start
	var time = new Date();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var se = time.getSeconds();
//	$(".data-line").animate({top:"1920px"},86400000);
	var hour_top = hour*86;
	var minute_top = 80/minute;
	var line_top = hour_top+minute_top+allday_height+40+3;
	var top_bottom = 1968+allday_height+43;
	$(".data-line").css("top",0).animate({top:top_bottom},200000);
	//日程周时间线end
	
	data_week_move();           //周点击移动选中
});

	//周点击移动选中start
	function data_week_move(){
		$(".week-data ul:nth-child(2) li").mousedown(function(){
			var click_index = $(this).index()-2;
			$(this).css("background","#D7E6F5");
			$(".week-data ul:nth-child(2) li").bind("mouseover",function(){
				var move_index = $(this).index()-2;
				if(click_index >= move_index){
					for(var i=click_index; i>=move_index;i--){
						$(".week-data ul:nth-child(2) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=0; i<move_index;i++){
						$(".week-data ul:nth-child(2) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
				if(click_index <= move_index){
					for(var i=click_index; i<=move_index;i++){
						$(".week-data ul:nth-child(2) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=49; i>move_index;i--){
						$(".week-data ul:nth-child(2) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
			});
		}).mouseup(function(){
			$(".week-data ul:nth-child(2) li").unbind("mouseover");
			$(".new-schedule").fadeIn();
		});
		
		
		$(".week-data ul:nth-child(3) li").mousedown(function(){
			var click_index = $(this).index()-2;
			$(this).css("background","#D7E6F5");
			$(".week-data ul:nth-child(3) li").bind("mouseover",function(){
				var move_index = $(this).index()-2;
				if(click_index >= move_index){
					for(var i=click_index; i>=move_index;i--){
						$(".week-data ul:nth-child(3) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=0; i<move_index;i++){
						$(".week-data ul:nth-child(3) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
				if(click_index <= move_index){
					for(var i=click_index; i<=move_index;i++){
						$(".week-data ul:nth-child(3) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=49; i>move_index;i--){
						$(".week-data ul:nth-child(3) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
			});
		}).mouseup(function(){
			$(".week-data ul:nth-child(3) li").unbind("mouseover");
			$(".new-schedule").fadeIn();
		});
		
		
		
		
		$(".week-data ul:nth-child(4) li").mousedown(function(){
			var click_index = $(this).index()-2;
			$(this).css("background","#D7E6F5");
			$(".week-data ul:nth-child(4) li").bind("mouseover",function(){
				var move_index = $(this).index()-2;
				if(click_index >= move_index){
					for(var i=click_index; i>=move_index;i--){
						$(".week-data ul:nth-child(4) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=0; i<move_index;i++){
						$(".week-data ul:nth-child(4) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
				if(click_index <= move_index){
					for(var i=click_index; i<=move_index;i++){
						$(".week-data ul:nth-child(4) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=49; i>move_index;i--){
						$(".week-data ul:nth-child(4) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
			});
		}).mouseup(function(){
			$(".week-data ul:nth-child(4) li").unbind("mouseover");
			$(".new-schedule").fadeIn();
		});
		
		
		
		$(".week-data ul:nth-child(5) li").mousedown(function(){
			var click_index = $(this).index()-2;
			$(this).css("background","#D7E6F5");
			$(".week-data ul:nth-child(5) li").bind("mouseover",function(){
				var move_index = $(this).index()-2;
				if(click_index >= move_index){
					for(var i=click_index; i>=move_index;i--){
						$(".week-data ul:nth-child(5) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=0; i<move_index;i++){
						$(".week-data ul:nth-child(5) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
				if(click_index <= move_index){
					for(var i=click_index; i<=move_index;i++){
						$(".week-data ul:nth-child(5) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=49; i>move_index;i--){
						$(".week-data ul:nth-child(5) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
			});
		}).mouseup(function(){
			$(".week-data ul:nth-child(5) li").unbind("mouseover");
			$(".new-schedule").fadeIn();
		});
		
		
		
		$(".week-data ul:nth-child(6) li").mousedown(function(){
			var click_index = $(this).index()-2;
			$(this).css("background","#D7E6F5");
			$(".week-data ul:nth-child(6) li").bind("mouseover",function(){
				var move_index = $(this).index()-2;
				if(click_index >= move_index){
					for(var i=click_index; i>=move_index;i--){
						$(".week-data ul:nth-child(6) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=0; i<move_index;i++){
						$(".week-data ul:nth-child(6) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
				if(click_index <= move_index){
					for(var i=click_index; i<=move_index;i++){
						$(".week-data ul:nth-child(6) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=49; i>move_index;i--){
						$(".week-data ul:nth-child(6) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
			});
		}).mouseup(function(){
			$(".week-data ul:nth-child(6) li").unbind("mouseover");
			$(".new-schedule").fadeIn();
		});
		
		
		
		$(".week-data ul:nth-child(7) li").mousedown(function(){
			var click_index = $(this).index()-2;
			$(this).css("background","#D7E6F5");
			$(".week-data ul:nth-child(7) li").bind("mouseover",function(){
				var move_index = $(this).index()-2;
				if(click_index >= move_index){
					for(var i=click_index; i>=move_index;i--){
						$(".week-data ul:nth-child(7) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=0; i<move_index;i++){
						$(".week-data ul:nth-child(7) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
				if(click_index <= move_index){
					for(var i=click_index; i<=move_index;i++){
						$(".week-data ul:nth-child(7) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=49; i>move_index;i--){
						$(".week-data ul:nth-child(7) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
			});
		}).mouseup(function(){
			$(".week-data ul:nth-child(7) li").unbind("mouseover");
			$(".new-schedule").fadeIn();
		});
		
		
		$(".week-data ul:nth-child(8) li").mousedown(function(){
			var click_index = $(this).index()-2;
			$(this).css("background","#D7E6F5");
			$(".week-data ul:nth-child(8) li").bind("mouseover",function(){
				var move_index = $(this).index()-2;
				if(click_index >= move_index){
					for(var i=click_index; i>=move_index;i--){
						$(".week-data ul:nth-child(8) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=0; i<move_index;i++){
						$(".week-data ul:nth-child(8) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
				if(click_index <= move_index){
					for(var i=click_index; i<=move_index;i++){
						$(".week-data ul:nth-child(8) li:eq("+i+")").css("background","#D7E6F5");
					}
					for(var i=49; i>move_index;i--){
						$(".week-data ul:nth-child(8) li:eq("+i+")").css("background","#F7FBFF");
					}
				}
			});
		}).mouseup(function(){
			$(".week-data ul:nth-child(8) li").unbind("mouseover");
			$(".new-schedule").fadeIn();
		});
	}
	//周点击移动选中end
	
	
	
	
	
	
