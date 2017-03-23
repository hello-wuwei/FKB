//加载响应start
window.onload = function() {
	//获取浏览器宽高。。。S
    height = $(this).height();
    width =$(this).width();
    //获取浏览器宽高。。。E
    
    if(height <= 600){
		$("body").css("overflow-y","scroll");
	}else{
    	$("body").css("overflow-y","auto");
    }
	if(width <= 1000){
		$("body").css("overflow-x","scroll");
    }else{
    	$("body").css("overflow-x","auto");
    }
    
    //home左...S
	var leftLi_width = $(".saas-home-left").width();
	//home左...E
	
	
	//home中上...S
	var centerLi_width = $(".saas-home-center>div:first-child").width();
	//home中上...E
    //home内容。。。S
	$(".saas-home-Main").css("height",height - "100" +"px");
	var div2_height=$(".saas-home-center>div:first-child>div").height();
	//home内容。。。E
	 //home中下。。。S
    var div7_height=$("#center-bottom").height();
    //home中下。。。E
	
	
	//home右上...S
    var div6_height=$(".saas-home-right>div:first-child").height();
    //home右上..。E
    //home右下...S
    var rightLi_widtn =$(".saas-home-right > div:last-child").width();
    //home右下...E
    
   
    
    var ul_width = $(".saas-home-center > div:first-child").width()-280;
    var ul_height =$(".saas-home-center > div:first-child").height()-160;
    var right_ul_width =$(".saas-home-right > div:last-child").width()-250;
    var right_ul_height =$(".saas-home-right > div:last-child").height()-170;
    var center_ul_li_length = $("#saas-home-center-ul li").length;
    var right_ul_li_length = $("#saas-home-right-ul li").length;
    var date_top = $(".date-top").height();
    var date_day = $(".date-day li").height();
    var date_week =$(".date-week li").height();
    var date_day_width = $(".date-day li").width();
	var sh_height =$(".new-schedule").height();
	var sh_width =$(".new-schedule").width();
	$(".saas-home-left ul li").css("width",leftLi_width-40);
	$(".saas-home-center > div:first-child ul li").css("width",centerLi_width - 40);
	$(".saas-home-right > div:last-child ul li").css("width",rightLi_widtn - 40);
	
	//home左。。。S
	var left_height = $(".saas-home-Main").height();
	$(".saas-home-left ul").css("height",left_height - 50);
	//home左。。。E
	
	var center_top_height = $(".saas-home-center > div:first-child").height();
	$(".saas-home-center > div:first-child ul").css("height",center_top_height-50);
	var center_bottom_height = $("#center-bottom").height();
	$(".home-data-box").css("height",center_bottom_height-50);
	var data_box_height = $(".home-data-box").height()-7;
	$(".date-top").css("height",data_box_height/8);
	$(".date-top p").css("line-height",data_box_height/8+"px");
	$(".date-centent li").css("height",data_box_height/8+"px");
	$(".date-centent li").css("line-height",data_box_height/8+"px");
	var right_top_height = $(".saas-home-right > div:first-child").height();
	$(".saas-home-right > div:first-child > div:first-child").css("height",right_top_height);
	//home签到。。。S
	$(".saas-home-right>div:first-child>div:first-child p:first-child").css("line-height",right_top_height*0.74+"px").css("height",right_top_height*0.74+"px");
	$(".saas-home-right>div:first-child>div:first-child p:last-child").css("height",right_top_height*0.26+"px");
	$(".date-day li").css("font-size","12px");
	$(".date-week li").css("font-size","12px");
   	$("#window-chat-right-invite").css("top",height/2-250+"px");
	$("#window-chat-right-invite").css("left",width/2-325+"px");
	$("#invite-group").css("left",width/2-180+"px");
	$(".saas-home-left ul li > div:nth-child(2) p:first-child").css("width",leftLi_width-200+"px");
	$(".saas-home-left ul li > div:nth-child(2) p:last-child").css("width",leftLi_width-107+"px");
	$(".saas-home-center>div:first-child ul li>div:nth-child(2) p:first-child").css("width",centerLi_width-220+"px");
	$(".saas-home-center>div:first-child ul li>div:nth-child(2) p:last-child").css("width",centerLi_width-130+"px");
	$(".saas-home-right > div:last-child ul li > div:nth-child(2) p:first-child").css("width",rightLi_widtn-210+"px");
    $(".saas-home-right > div:last-child ul li > div:nth-child(2) p:last-child").css("width",rightLi_widtn-110+"px");
    $(".more").css("left",width/2-150).css("top",height/2-150);
    $("#group-information").css("left",width/2-150).css("top",height/2-250);
    $(".plan").css("left",width/2-200).css("top",height/2-280);
	$("#invite-group").css("top",height/2-250+"px");
   	$(".new-report").css("left",width/2-356).css("top",height/2-300);
   	$(".new-schedule").css("left",width/2-sh_width/2).css("top",height/2-sh_height/2);
   	var report_height = $(".report").height();
	$(".report").css("top",height/2-report_height/2).css("left",width/2-275);
	
	//没有信息时显示背景start
	if(center_ul_li_length !== 0){
    	$("#bk-center-img").hide();
    }else{
    	$("#bk-center-img").show();
    }
    if(right_ul_li_length !== 0){
    	$("#bk-right-img").hide();
    }else{
    	$("#bk-right-img").show();
    }
	//没有信息时显示背景end
}
//加载响应end

	
//改变浏览器大小响应start
$(window).resize(function() {
	//获取浏览器宽高。。。S
    height = $(this).height();
    width =$(this).width();
    //获取浏览器宽高。。。E
    
   if(height <= 600){
		$("body").css("overflow-y","scroll");
	}else{
    	$("body").css("overflow-y","auto");
    }
	if(width <= 1000){
		$("body").css("overflow-x","scroll");
    }else{
    	$("body").css("overflow-x","auto");
    }
   
    var top_1 = $(".new-report").offset().top+110;
  	var left_1 = $(".new-report").offset().left+210;
  	$(".datepicker:eq(0)").css({"position":"fixed","top":top_1+"px", "left": left_1+"px"});
  	
  	var report_height = $(".report").height();
	$(".report").css("top",height/2-report_height/2).css("left",width/2-275);
  	
    var chat_true = $(".saas-Enterprise-WeChat-click").attr("i");
    if(chat_true == "true"){
    	var height = $(this).height();
		var width = $(this).width();
  		$(".saas-Enterprise-WeChat-click").css("height",height-72);
  		$(".saas-chatWindow").css("height",height-72);
  		$(".window-right>div:nth-child(2)").css("height",height-72-215);
  		$(".window-right").css("width",width-411);
  		$(".saas-chatWindow").css("width",width-220);
  		$("#click_nav_1>ul").css("height",height-232);
  		$(".click-search-list").css("height",height-172);
  		if(height<=480){
  		$(".saas-Enterprise-WeChat-click").css("height",480-72);
  		$(".saas-chatWindow").css("height",480-72);
  		$(".window-right>div:nth-child(2)").css("height",480-72-215);
  		$("#click_nav_1>ul").css("height",480-232);
  		$(".click-search-list").css("height",480-172);
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
		$("#click_nav_1>ul").css("height","390px");
		$(".click-search-list").css("height","450px");
    }
    $(".saas-home-Main").css("height",height - "100" +"px");
    var leftLi_width = $(".saas-home-left").width();
    var centerLi_width = $(".saas-home-center>div:first-child").width();
    var rightLi_widtn =$(".saas-home-right > div:last-child").width();
	var div2_height=$(".saas-home-center>div:first-child>div").height();
    var div3_height=$("#time-header").height();
    var div5_height=$(".saas-home-right>div:last-child>div").height();
    var div6_height=$(".saas-home-right>div:first-child").height();
    var div7_height=$("#center-bottom").height();
    var div8_height=$(".div-date").height();
    var div9_height=$(".calendar .c-pad-top").height();
    var ul_width = $(".saas-home-center > div:first-child").width()-280;
    var ul_height =$(".saas-home-center > div:first-child").height()-160;
    var right_ul_width =$(".saas-home-right > div:last-child").width()-250;
    var right_ul_height =$(".saas-home-right > div:last-child").height()-170;
    var date_top = $(".date-top").height();
    var date_day = $(".date-day li").height();
    var date_week =$(".date-week li").height();
    var date_day_width = $(".date-day li").width();
    var sh_height =$(".new-schedule").height();
 	var sh_width =$(".new-schedule").width();
 	$(".saas-home-left ul li").css("width",leftLi_width-40);
 	$(".saas-home-center > div:first-child ul li").css("width",centerLi_width - 40);
 	$(".saas-home-right > div:last-child ul li").css("width",rightLi_widtn - 40);
 	
 	//home左。。。S
	var left_height = $(".saas-home-Main").height();
	$(".saas-home-left ul").css("height",left_height - 50);
	//home左。。。E
	
	var center_top_height = $(".saas-home-center > div:first-child").height();
	$(".saas-home-center > div:first-child ul").css("height",center_top_height-50);
	var center_bottom_height = $("#center-bottom").height();
	$(".home-data-box").css("height",center_bottom_height-50);
	var data_box_height = $(".home-data-box").height()-7;
	$(".date-top").css("height",data_box_height/8);
	$(".date-top p").css("line-height",data_box_height/8+"px");
	$(".date-centent li").css("height",data_box_height/8+"px");
	$(".date-centent li").css("line-height",data_box_height/8+"px");
	var right_top_height = $(".saas-home-right > div:first-child").height();
	$(".saas-home-right > div:first-child > div:first-child").css("height",right_top_height);
	
	//home签到。。。S
	$(".saas-home-right>div:first-child>div:first-child p:first-child").css("line-height",right_top_height*0.74+"px").css("height",right_top_height*0.74+"px");
	$(".saas-home-right>div:first-child>div:first-child p:last-child").css("height",right_top_height*0.26+"px");
	//home签到。。。E
	
	$(".date-day li").css("font-size","12px");
	$(".date-week li").css("font-size","12px");
    $("#window-chat-right-invite").css("top",height/2-250+"px");
	$("#window-chat-right-invite").css("left",width/2-325+"px");
	$("#invite-group").css("left",width/2-180+"px");
	$("#invite-group").css("top",height/2-250+"px");
	$(".more").css("left",width/2-150).css("top",height/2-150);
	$(".saas-home-left ul li > div:nth-child(2) p:first-child").css("width",leftLi_width-200+"px");
	$(".saas-home-left ul li > div:nth-child(2) p:last-child").css("width",leftLi_width-107+"px");
	$(".saas-home-center>div:first-child ul li>div:nth-child(2) p:first-child").css("width",centerLi_width-220+"px");
	$(".saas-home-center>div:first-child ul li>div:nth-child(2) p:last-child").css("width",centerLi_width-130+"px");
    $(".saas-home-right > div:last-child ul li > div:nth-child(2) p:first-child").css("width",rightLi_widtn-210+"px");
    $(".saas-home-right > div:last-child ul li > div:nth-child(2) p:last-child").css("width",rightLi_widtn-110+"px");
    $("#group-information").css("left",width/2-150).css("top",height/2-250);
    $(".plan").css("left",width/2-200).css("top",height/2-280);
   	$(".new-report").css("left",width/2-356).css("top",height/2-300);
   	$(".new-schedule").css("left",width/2-sh_width/2).css("top",height/2-sh_height/2);
 });
//改变浏览器大小响应end

//签到日期start
//时分秒start
function current_1(){ 
		var d=new Date(),str=''; 
		str +=d.getHours()+':'; 
		if(d.getMinutes() >= 0 &&  d.getMinutes() <= 9){
			str += "0" + d.getMinutes() + ":";
		}else{
			str += d.getMinutes() + ":";
		}
		if(d.getSeconds() >= 0 &&  d.getSeconds() <= 9){
			str += "0" + d.getSeconds();
		}else{
			str += d.getSeconds();
		}
		return str; 
}
setInterval(function(){$("#right-time").html(current_1)},1000); 
//时分秒end


//年月日start
function current_2(){ 
		var d=new Date(),str=''; 
		str +=d.getFullYear()+'-'; //获取当前年份 
		str +=d.getMonth()+1+'-'; //获取当前月份（0——11） 
		str +=d.getDate(); 
		return str; } 
setInterval(function(){$("#right-time-2").html(current_2)},1000); 
//年月日end


$(function(){
	
	//星期start
	setInterval(showTime, 1000);                                
	function timer(obj,txt){
            obj.text(txt);
	}        

	function showTime(){                                
	        var today = new Date();
	        var weekday=new Array(7)
	        weekday[1]="星期一"
	        weekday[2]="星期二"
	        weekday[3]="星期三"
	        weekday[4]="星期四"
	        weekday[5]="星期五"
	        weekday[6]="星期六"
	        weekday[7]="星期日"                                        
	        var y=today.getFullYear()+"年";
	        var month=today.getMonth()+"月";
	        var td=today.getDate()+"日";
	        var d=weekday[today.getDay()];
	        var h=today.getHours();
	        var m=today.getMinutes();
	        var s=today.getSeconds();        
	        timer($("#right-time-3"),d);
    }     
    //星期end
//签到日期end
	
	
	//首页日历返回今日start
	$("#time-header p:last-child").click(function(){
		alert("return to today~!");
	});
	//首页日历返回今日end
	
	//日历上一年start
	$(".date-top div p:nth-child(1)").click(function(){
		alert("-");
	});
	//日历上一年end
	
	
	//日历下一年start
	$(".date-top div p:nth-child(3)").click(function(){
		alert("+");
	});
	//日历下一年end
	
	
	//日程安排弹出框start
	$(".date-day li").click(function(){
		$(".plan").fadeIn();
	});
	$(".date-week li").click(function(){
		$(".more").fadeIn();
	});
	$(".more ul li").click(function(){
		$(".plan").fadeIn();
	});
	//日程安排弹出框end
	
	
	//创建工作报告日报、周报、月报点击start
	$(".new-work-0-top li").click(function(){
		var li_attr = $(this).attr("id");
		if(li_attr == "new-work-day"){
			$(".new-work-0-top li:nth-child(1)").html('<p><img src="img/kalendar-1.png"/></p><p class="top-color">日报</p>');
			$(".new-work-0-top li:nth-child(2)").html('<p><img src="img/kalendar-gray-7.png"/></p><p>周报</p>');
			$(".new-work-0-top li:nth-child(3)").html('<p><img src="img/kalnedar-gray-31.png"/></p><p>月报</p>');
			$("#new-day-sum").html("今日总结");
			$("#new-next-day-sum").html("明日总结");
			$(".new-work-0-top li:nth-child(4)").fadeIn();
			$(".new-work-0-top li:nth-child(5)").hide();
			$(".new-work-0-top li:nth-child(6)").hide();
		}
		if(li_attr == "new-work-week"){
			$(".new-work-0-top li:nth-child(1)").html('<p><img src="img/kalendar-2.png"/></p><p>日报</p>');
			$(".new-work-0-top li:nth-child(2)").html('<p><img src="img/kalendar-green-7.png"/></p><p class="top-color">周报</p>');
			$(".new-work-0-top li:nth-child(3)").html('<p><img src="img/kalnedar-gray-31.png"/></p><p>月报</p>');
			$("#new-day-sum").html("本周总结");
			$("#new-next-day-sum").html("下周总结");
			$(".new-work-0-top li:nth-child(4)").hide();
			$(".new-work-0-top li:nth-child(5)").fadeIn();
			$(".new-work-0-top li:nth-child(6)").hide();
		}
		if(li_attr == "new-work-month"){
			$(".new-work-0-top li:nth-child(1)").html('<p><img src="img/kalendar-2.png"/></p><p>日报</p>');
			$(".new-work-0-top li:nth-child(2)").html('<p><img src="img/kalendar-gray-7.png"/></p><p>周报</p>');
			$(".new-work-0-top li:nth-child(3)").html('<p><img src="img/kalendar-31.png"/></p><p class="top-color">月报</p>');
			$("#new-day-sum").html("本月总结");
			$("#new-next-day-sum").html("下月总结");
			$(".new-work-0-top li:nth-child(4)").hide();
			$(".new-work-0-top li:nth-child(5)").hide();
			$(".new-work-0-top li:nth-child(6)").fadeIn();
		}
	});
	//创建工作报告日报、周报、月报点击end
	
	
	//添加批阅人删除选中的人员start
	$(".new-add-people ul li span:last-child").click(function(){
		$(this).parent("li").hide();
	});
	//添加批阅人删除选中的人员end
	
	
	//添加批阅人弹出框start
	$(".new-read-people").click(function(){
		$("#choose-workmate").fadeIn();
	});
	//添加批阅人弹出框end
	
	
	
	//抄送人弹出框start
	$(".new-copy-send").click(function(){
		$("#mate-invite-group").fadeIn();
	});
	//抄送人弹出框end
	
	
	//关闭创建工作报告start
	$(".new-work-top p:last-child").click(function(){
		$(".new-report").hide();
	});
	//关闭创建工作报告end
	
	
	//新建工作报告提交与保持按键start
	$(".new-work-confirm").click(function(){
		$(".new-report").hide();
	});
	//新建工作报告提交与保持按键end
	
	
	//首页点击工作报告弹出创建工作报告框start
	$(".saas-home-right > div:last-child > div > p:last-child").click(function(){
		$(".new-report").fadeIn();
	});
	//首页点击工作报告弹出创建工作报告框end
	
	
	//主页提示框start
	$(".saas-home-left > div:first-child p:last-child").hover(function(){
		$(this).find(".hover-break").fadeIn();
	}).mouseleave(function(){
		$(this).find(".hover-break").hide();
	});
	$(".saas-home-center>div:first-child>div p:last-child").hover(function(){
		$(this).find(".hover-break").fadeIn();
	}).mouseleave(function(){
		$(this).find(".hover-break").hide();
	});
	$("#time-header p:last-child").hover(function(){
		$(this).find(".hover-break").fadeIn();
	}).mouseleave(function(){
		$(this).find(".hover-break").hide();
	});
	$(".saas-home-right > div:last-child > div > p:last-child").hover(function(){
		$(this).find(".hover-break").fadeIn();
	}).mouseleave(function(){
		$(this).find(".hover-break").hide();
	});
	//主页提示框end
	
	$(".saas-home-right>div:last-child ul li").click(function(){
		$(".report").fadeIn();
	});
	
});



