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
	var Box_height = $(".spendingOnWater-box-right").height();
	$(".businessDocument-list-bottom > ul").css("height",height-410);
	$(".businessDocument").css("width",width-160);
	$(".businessDocument").css("height",height-70);
	$(".paymentExamine-list").css("height",height-390);
	$(".paymentBatch-list").css("height",height-290);
	$(".settleAllExamine-list").css("max-height",height-250);
	$(".all-list").css("max-height",height-114);
	$('.documentPublic-box-bottom').css('height',height-150);
	$('.over-scroll-fit').css('max-height',600);
	$('.travelBook-right').css('width',width-350);
	$('.travelBookList-ul').css('height',height-400);
	$('.travelBookList-ul-noGo').css('height',height-400);
	$('.strokeFormulation-planeUl').css('height',height-440);
	$('.reservationProcesse-listUl').css('height',height-344);
	$('.apply-day-alert-table > ul').css('max-height',height-210);
	$('.BookInformationContent-scroll').css('max-height',height-225);
	$(".report-content").css("height",height-120);//	工作报告,我的日报弹窗，下部自适应
	$(".confirmPayment-bottom").css("height",height-300);//	结算及支付,确认支付
	$(".confirmPayment-bottom-list").css("height",height-356);//	结算及支付,确认支付
	$(".DateTableList .reportListScroll").css("height",height-433);//报表日历监听
	$(".reportListScroll li").css("line-height",$(".reportListScroll li").height() + "px");
	$('.AllStatTable ul').css('max-height',height-461);
	$('.AllStatTableDel ul').css('max-height',height-461);
	$('.CheckLs-scroll').css('max-height',height-221);
	if(height < 694){
	$('.over-scroll-fit').css('max-height',height-94);
	};
	if(width > 972.5){
	$(".businessDocument-top > ul >li").css("margin-right",((width-160)*0.96-783)/5);
	}else{
		$(".businessDocument-top > ul >li").css("margin-right",0);
	};
	$(".spendingOnWater-box-left").css("height",701);
	$(".spendingOnWater-box-zoom").css("height",701);
	$(".saas-left").css("height",height-saas_topHeight);//左侧导航去掉padding			
	$(".saas-work-left").css("height",height-saas_topHeight-30);	
	$("#invite-group").css("left",width/2-180+"px").css("top",height/2-250+"px");									
	$("#window-chat-right-invite").css("top",height/2-250+"px").css("left",width/2-325+"px");						
	$(".work-content-1>ul").css("height",height-140+"px");															
	$(".work-content-2>ul").css("height",height-140+"px");															
	$(".work-content-3>ul").css("height",height-140+"px");															
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
	$(".work-content-box").css("width",width-352+"px");
	$(".work-content-box").css("height",height-70+"px");
	if(width <= 1200){
		$(".work-content-box").css("width",1200-352+"px");				
	};
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
	var Box_width = $(".spendingOnWater-box").width();
	saas_topHeight =$(".saas-top").height();
	var sh_height =$(".new-schedule").height();
	var Box_height = $(".spendingOnWater-box-right").height();
	$(".businessDocument-list-bottom > ul").css("height",height-410);
	$('.documentPublic-box-bottom').css('height',height-150);
	$(".paymentExamine-list").css("height",height-390);
	$(".paymentBatch-list").css("height",height-290);
	$(".settleAllExamine-list").css("max-height",height-250);
	$(".report-content").css("max-height",height-120);//	工作报告,我的日报弹窗，下部自适应
	$(".confirmPayment-bottom").css("height",height-300);//	结算及支付,确认支付
	$(".confirmPayment-bottom-list").css("height",height-356);//	结算及支付,确认支付
	if(width > 972.5){
	$(".businessDocument-top > ul >li").css("margin-right",((width-160)*0.96-783)/5);
	}else{
		$(".businessDocument-top > ul >li").css("margin-right",0);
	};
	$(".spendingOnWater-box-left").css("height",Box_height);
	$(".spendingOnWater-box-zoom").css("height",Box_height);
	$(".spendingOnWater-box-right").css("width",Box_width-293);	
	$(".saas-left").css("height",height-saas_topHeight);//左侧导航去掉padding						
	$(".saas-work-left").css("height",height-saas_topHeight-30);		
	$(".businessDocument").css("width",width-160);
	$(".businessDocument").css("height",height-70);
	$("#invite-group").css("left",width/2-180+"px").css("top",height/2-250+"px");							
	$("#window-chat-right-invite").css("top",height/2-250+"px").css("left",width/2-325+"px");				
	$(".work-content-1>ul").css("height",height-140+"px");															
	$(".work-content-2>ul").css("height",height-140+"px");															
	$(".work-content-3>ul").css("height",height-140+"px");											
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
	$(".work-content-box").css("width",width-352+"px");
	$(".work-content-box").css("height",height-70+"px");
    $(".all-list").css("max-height",height-114);
    $('.over-scroll-fit').css('max-height',600);
    $('.travelBook-right').css('width',width-350);
    $('.travelBookList-ul').css('height',height-400);
    $('.travelBookList-ul-noGo').css('height',height-400);
    $('.strokeFormulation-planeUl').css('height',height-440);
    $('.reservationProcesse-listUl').css('height',height-344);
    $('.apply-day-alert-table > ul').css('max-height',height-210);
    $('.BookInformationContent-scroll').css('max-height',height-225);
    $(".DateTableList .reportListScroll").css("height",height-433);//报表日历监听
    $(".reportListScroll li").css("line-height",$(".reportListScroll li").height() + "px");
    $('.AllStatTable ul').css('max-height',height-461);
    $('.AllStatTableDel ul').css('max-height',height-461);
    $('.CheckLs-scroll').css('max-height',height-221);
    if(height < 694){
	$('.over-scroll-fit').css('max-height',height-94);
	};
	if(width <= 1200){
		$(".work-content-box").css("width",1200-352+"px");				
	};
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

	//公告页面左侧二级导航点击事件start
	$(".saas-work-left .work-ul-1 li").click(function(){
		var index = $(this).index();
		var eq = $(this).index()-1;
		if(index !== 0){
			$(this).attr("class","bk-list-1").siblings().removeAttr("class");
			$(".saas-work-content>div:eq("+eq+")").fadeIn().siblings().hide();
		}
	});
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
	//超链接公告start－业务单据
	$("#index-forms").click(function(){
		location.href = "index-ReportForms.html";
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
	
	
	//发布公告按钮start
	$(".release-affiche-click").click(function(){
		$(".release-affiche").fadeIn();
	});
	//发布公告按钮end
	
	
	$(".hideNotRelease").click(function(){
			$(".release-affiche").hide();
	});
	$(".hideNotAffiche").click(function(){
			$(".affiche-li").hide();
	});
	$(".hideNotRead").click(function(){
			$(".Not-read").hide();
	});
	
	
	
	//公告内容li点击弹出框start
	$(".work-content-1 .work-ul li").mousedown(function(event){
		var class_this = event.target.className;
		if(class_this != "this_target"){
			$(".affiche-li").fadeIn();
		}
	});
	//公告内容li点击弹出框end
	
	
	//未阅读点击事件start
	$(".work-content-1 .work-ul li span").click(function(){
		$(".Not-read").fadeIn();
	});
	//未阅读点击事件end
	
	
	//发布公告选择部门start
	$(".select_list img").click(function(){
		$(this).parent(".select_list").remove();
		var length = $(".release_input_box .select_list").length;
		if(length == "0"){
			$(".release_placeholder").show();
		}
	});
	var delete_list = function(){
		$(".select_list img").click(function(){
			$(this).parent(".select_list").remove();
			var length = $(".release_input_box .select_list").length;
			if(length == "0"){
				$(".release_placeholder").show();
			}
		});
	}
	$(".release_input_ul li ").click(function(){
		var this_html = $(this).html();
		$("#add_list").before('<div class="select_list">'
+'  					              <p>'+this_html+'</p>'
+'  					              <img src="img/close.png"/>'
+'  				               </div>');
		$(".release_placeholder").hide();
		$(this).parent("ul").hide();
		delete_list();
	});
	
	$(".release_input_box").hover(function(){
		$(".release_input_ul").fadeIn();
	}).mouseleave(function(){
		$(".release_input_ul").stop().fadeOut();
	});
	
	
	var li_length = $(".release_input_ul li").length;
	$(".release_input_ul").css("bottom",-li_length*40);
	
	
	$(".send-file-end p:nth-child(3)").click(function(){
		$(this).parent(".send-file-end").remove();
	});
	
	//发布公告选择部门end
	
	
});
		
	
	
