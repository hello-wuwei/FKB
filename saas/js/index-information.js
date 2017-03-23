//加载响应start
window.onload = function() {
	height = $(this).height();
	width = $(this).width();
	
//	if(height <= 600){
//		$("body").css("overflow-y","scroll");
//	}else{
//  	$("body").css("overflow-y","auto");
//  }
//	if(width <= 1000){
//		$("body").css("overflow-x","scroll");
//  }else{
//  	$("body").css("overflow-x","auto");
//  }
	saas_topHeight =$(".saas-top").height();
	var imghtml = $("#chat li:first-child div:first-child p").html();
	var img_attr = $("#chat li:first-child div:first-child p").attr("class");
	var font_name =$("#chat li:first-child div:nth-child(2) p:first-child").html();
	var chat_click_nav_ul_length = $("#chat_click_nav_1>ul>li>ul").length*42;
	$(".saas-right-content>ul>li>ul").css("height",height-302+"px");
	$(".saas-right-content").css("width",width-465+"px");
	$(".saas-right-content .ul-1").css("width",width-717+"px");
	$(".chat-right-window").css("height",height-70);
	$(".left-list-one>ul").css("height",height-70+"px");
	$(".left-list-two>ul").css("height",height-70+"px");
	$(".saas-right-content>ul>li .ul-two-list").css("height",height-200+"px");
	$(".saas-left").css("height",height-saas_topHeight);//左侧导航去掉padding
	$("#chat_click_nav_2>ul").css("height",height-200+"px");
	$("#chat_click_nav_3").css("height",height-155+"px");
	$(".chat-right-window").css("height",height-70+"px");
	$("#window-chat-right-invite").css("top",height/2-250+"px");
	$("#window-chat-right-invite").css("left",width/2-325+"px");
	$("#chat-right-invite").css("top",height/2-250+"px");
	$("#chat-right-invite").css("left",width/2-325+"px");
	$("#invite-group").css("left",width/2-180+"px");
	$("#invite-group").css("top",height/2-250+"px");
	$("#personal-information").css("top",height/2-220).css("left",width/2-150);
	$("#chat_click_nav_1>ul").css("height",height-200+"px");
	$("#group-information").css("left",width/2-150).css("top",height/2-250);
	$(".chat-search-list").css("height",height-135);
	if(img_attr == "group-3"){
		$(".ul-1 li .li-top div:first-child p:first-child").html(imghtml).attr("class","group-3");
	}else if(img_attr == "group-4"){
		$(".ul-1 li .li-top div:first-child p:first-child").html(imghtml).attr("class","group-4");
	}else{
		$(".ul-1 li .li-top div:first-child p:first-child").html(imghtml).attr("class","li-top-p1");
	}
	$(".ul-1 li .li-top div:first-child .mail-name").html(font_name);
	$(".saas-Enterprise-WeChat").hide();
	if(height <= 600){
		$(".saas-right-content>ul>li>ul").css("height",600-302+"px");
		$(".saas-right-content>ul>li .ul-two-list").css("height",600-200+"px");
		$("#chat_click_nav_1>ul").css("height",600-200+"px");
	}
	if(width <= 1100){
		$(".saas-right-content").css("width",1100-465+"px");
	}
}
//加载响应end


//拖动浏览器响应start
$(window).resize(function() {
    height = $(this).height();
    width = $(this).width();
     
// 	if(height <= 600){
//		$("body").css("overflow-y","scroll");
//	}else{
//  	$("body").css("overflow-y","auto");
//  }
//	if(width <= 1000){
//		$("body").css("overflow-x","scroll");
//  }else{
//  	$("body").css("overflow-x","auto");
//  }
    
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
    var chat_click_nav_ul_length = $("#chat_click_nav_1>ul>li>ul").length*42;
	$(".saas-right-content>ul>li>ul").css("height",height-302+"px");
	$(".saas-right-content .ul-1").css("width",width-717+"px");
	$(".saas-right-content").css("width",width-465+"px");
	$(".left-list-one>ul").css("height",height-70+"px");
	$(".left-list-two>ul").css("height",height-70+"px");
	$(".saas-right-content>ul>li .ul-two-list").css("height",height-200+"px");
	$(".saas-left").css("height",height-saas_topHeight);//左侧导航去掉padding
	$("#chat_click_nav_2>ul").css("height",height-200+"px");
	$("#chat_click_nav_3").css("height",height-155+"px");
	$(".chat-right-window").css("height",height-70+"px");
	$("#window-chat-right-invite").css("top",height/2-250+"px");
	$("#window-chat-right-invite").css("left",width/2-325+"px");
	$("#chat-right-invite").css("top",height/2-250+"px");
	$("#chat-right-invite").css("left",width/2-325+"px");
	$("#invite-group").css("left",width/2-180+"px");
	$("#invite-group").css("top",height/2-250+"px");
	$("#chat_click_nav_1>ul").css("height",height-200+"px");
	$("#personal-information").css("top",height/2-220).css("left",width/2-150);
	$("#group-information").css("left",width/2-150).css("top",height/2-250);
	$(".chat-search-list").css("height",height-135);
	if(height <= 600){
		$(".saas-right-content>ul>li>ul").css("height",600-302+"px");
		$("#chat_click_nav_1>ul").css("height",600-200+"px");
	}
	if(width <= 1100){
		$(".saas-right-content").css("width",1100-465+"px");
	}
});
//拖动浏览器响应end


$(function(){
	//消息页面二级导航栏点击事件start
	var chat_img = "";
	var chat_name = "";
	var chat_li_index = "";
	var chat_attr ="";
	//消息页面二级导航栏点击事件end
	
	
	
	
	
	

	//生成聊天窗变量start
	var chat_content='<li>'
+'					<div class="li-top">'
+'						<div>'
+'							<p class="group-3">'
+'								<img src="img/taylor-2.jpg"/>'
+'								<img src="img/girl.jpg"/>'
+'								<img src="img/taylor-3.jpg"/>'
+'							</p>'
+'							<p class="mail-name"></p>'
+'						</div>'
+'						<div>'
+'							<p class="invite-chat-right"><img src="img/add_home.png"/></p>'
+'							<p class="personal-information-click"><img src="img/team-1.png"/></p>'
+'						</div>'
+'					</div>'
+'					<ul  class="mail-list-2" id="b">'
+'						<p class="saas-right-content-time">10-07 20:42</p>'
+'						<li class="li-left">'
+'							<div><img src="img/taylor-3.jpg"/></div>'
+'							<div>'
+'								<p>小丽</p>'
+'								<p>各录各各位这周的工作记录<img src="img/expression.gif"/><img src="img/expression.gif"/><img src="img/expression.gif"/>'
+'									<b><img src="img/block-2.png"/></b>'
+'								</p>'
+'							</div>'
+'						</li>'
+'						<li class="li-right">'
+'							<div><img src="img/taylor-3.jpg"/></div>'
+'							<div>'
+'								<p>2016-01-07 16:33:56</p>'
+'								<p>各位这周的工作记录<img src="img/expression.gif"/>作记录各位这周的工作记录各位这周的工作记录各位这周的工作记录'
+'								<b><img src="img/block-1.png"/></b>'
+'								</p>'
+'							</div>'
+'						</li>'
+'						<li class="li-right">'
+'							<div><img src="img/taylor-3.jpg"/></div>'
+'							<div>'
+'								<p>2016-01-07 16:33:56</p>'
+'								<p>各位这周的工作记录<img src="img/expression.gif"/>各位这周的工作记录各位这周的周的工作记录'
+'								<b><img src="img/block-1.png"/></b>'
+'								</p>'
+'							</div>'
+'						</li>'
+'						<li class="li-left">'
+'							<div><img src="img/taylor-3.jpg"/></div>'
+'							<div>'
+'								<p>小丽</p>'
+'								<div class="people-card-left">'
+'									<div>名片</div>'
+'									<div>'
+'										<p><img src="img/taylor-2.jpg"/></p>'
+'										<p>王宝强王宝强王宝强王宝强王宝强</p>'
+'									</div>'
+'									<b><img src="img/block-2.png"/></b>'
+'								</div>'
+'							</div>'
+'						</li>'
+'					</ul>'
+'					<div class="li-bottom-1">'
+'							<div>'
+'								<div class="brow"><img src="img/smile-face.png"/>'
+'									<ul>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'										<li><img src="img/expression.gif"/></li>'
+'									</ul>'
+'								</div>'
+'								<p><img src="img/clip.png"/></p>'
+'								<p class="hover-a"><img src="img/a.png"/>'
+'										<span>'
+'											可以直接输入@'
+'										</span>'
+'									</p>'
+'									<ul class="a_click">'
+'										<li>某某某</li>'
+'										<li>某某某某某某某某某某某某</li>'
+'										<li>某某某某某某某某某某某某</li>'
+'										<li>某某某某某某</li>'
+'										<li>某某某</li>'
+'									</ul>'
+'							</div>'
+'							<textarea class="li-bottom-text" name="" rows="" cols="" placeholder="输入文字"><img class="img" src="img/taylor-2.jpg"/>uiefgiuweafuiwehfiuwehfouwehfiwebfoweboewf</textarea>'
+'							<input class="li-bottom-button" type="button" name="" id="i" value="发送" />'
+'							<p class="prompt">按Ctrl+Enter换行</p>'
+'					</div>'
+'				</li>';
	//生成聊天窗变量end
	
	
	//进入消息页面导航栏消息数量隐藏start
	$(".saas-nav li p").hide();
	$(".saas-nav a:nth-child(2) li b").hide();
	//进入消息页面导航栏消息数量隐藏end
	
	
	
	//消息页面一级导航栏选择start
	var use_name = $("#saas-user span:first-child").html();
	var use_img = $("#saas-img").html();
	$(".saas-left>p").click(function(){
		$(this).children("b").hide();
		var p_index=$(this).index();
		$(this).attr("class","left-p-click").siblings().removeAttr("class","left-p-click");
		$(".saas-left-two>li:eq("+p_index+")").fadeIn(400).siblings().hide();
		$(".saas-right-content>ul:eq("+p_index+")").fadeIn(400).siblings().hide();
		if(p_index > 0){
			$(".saas-Enterprise-WeChat").fadeIn(400);
			$(".chat-right").hide();
		}else{
			$(".saas-Enterprise-WeChat").fadeOut(400);
			$(".chat-right").show();
		}
		if(p_index == "0"){
			$("#infor-1").children("img").attr("src","img/fkb-infor(7).png");
			$("#infor-2").children("img").attr("src","img/fkb-infor(4).png");
			$("#infor-3").children("img").attr("src","img/fkb-infor(2).png");
			$("#infor-4").children("img").attr("src","img/fkb-infor(8).png");
		}
		if(p_index == "1"){
			$("#infor-1").children("img").attr("src","img/fkb-infor(6).png");
			$("#infor-2").children("img").attr("src","img/fkb-infor(5).png");
			$("#infor-3").children("img").attr("src","img/fkb-infor(2).png");
			$("#infor-4").children("img").attr("src","img/fkb-infor(8).png");
		}
		if(p_index == "2"){
			$("#infor-1").children("img").attr("src","img/fkb-infor(6).png");
			$("#infor-2").children("img").attr("src","img/fkb-infor(4).png");
			$("#infor-3").children("img").attr("src","img/fkb-infor(3).png");
			$("#infor-4").children("img").attr("src","img/fkb-infor(8).png");
		}
		if(p_index == "3"){
			$("#infor-1").children("img").attr("src","img/fkb-infor(6).png");
			$("#infor-2").children("img").attr("src","img/fkb-infor(4).png");
			$("#infor-3").children("img").attr("src","img/fkb-infor(2).png");
			$("#infor-4").children("img").attr("src","img/fkb-infor(1).png");
		}
		
	});
	
	//消息页面一级导航栏选择end
	
	
	//聊天页面获取头像start
	var chat_first_li_img = $("#chat li div:first-child img").attr("src");
	var chat_first_li_name =$("#chat li div:nth-child(2) p:first-child").html();
	$(".saas-right-content ul:first-child .li-top .mail-img-2").attr("src",chat_first_li_img);
	//聊天页面获取头像end
	
	
	//聊天页面获取名字start
	$(".saas-right-content ul:first-child .li-top .mail-name").html(chat_first_li_name);
	//聊天页面获取名字end
	
	
	//工作消息栏点击事件start
	$("#work-information>li").click(function(){
		var index_li = $(this).index();
		var work_name = $(this).children("div:nth-child(2)").children("p:first-child").html();
		var work_img = $(this).children("div:nth-child(1)").html();
		$(this).attr("class","bk-list-1").siblings().removeAttr("class","bk-list-1");
		$(".saas-right-content>.ul-2>li:eq("+index_li+")").fadeIn(400).siblings().hide();
		$(".ul-2 .li-top p:nth-child(2)").html("费用报销单-"+work_name);
		$(".ul-2 .li-top p:nth-child(1)").html(work_img);
		$(".work-information-img").html(work_img);
	});
	//工作消息栏点击事件end
	
	
	//工作消息栏start
	var work_infor_name = $("#work-information>li").children("div:nth-child(2)").children("p:first-child").html();
	var work_infor_img = $("#work-information>li").children("div:nth-child(1)").html();
	$(".ul-2 .li-top p:nth-child(2)").html("费用报销单-"+work_infor_name);
	$(".ul-2 .li-top p:nth-child(1)").html(work_infor_img);
	$(".work-information-img").html(work_infor_img);
	//工作消息栏end
	
	
	//费控宝消息栏start
	$("#saas-information>li").click(function(){
		var index_li = $(this).index();
		$(this).attr("class","bk-list-1").siblings().removeAttr("class","bk-list-1");
		$(".saas-right-content>.ul-3>li:eq("+index_li+")").fadeIn(400).siblings().hide();
	});
	//费控宝消息栏end
	
	
	//系统消息start
	$("#system-information>li").click(function(){
		var index_li = $(this).index();
		$(this).attr("class","bk-list-1").siblings().removeAttr("class","bk-list-1");
		$(".saas-right-content>.ul-4>li:eq("+index_li+")").fadeIn(400).siblings().hide();
	});
	//系统消息end
	
	
	//发送聊天start
	$(".li-bottom-button").click(function(){
		var mail_val = $(this).prev().val();
		var $mail_ul = $(this).parent(".li-bottom-1").siblings(".mail-list-2");
		if(mail_val !== ""){
			$mail_ul.append('<li class="li-right"><div>'+use_img+'</div><div><p>2016-01-07 16:33:56</p><p>'+mail_val+'</p></div></li>');
			$(this).prev().val("");
		}
	});
	//发送聊天end
	
	
	//企业微信聊天窗口列表选项start
	$(".chat-right-window>div>ul>li").click(function(){
		//同事start
		var WeChat_index = $(this).index();
			if(WeChat_index == 0){
				$("#chat_click_nav_1").fadeIn(400);
			$("#chat_click_nav_2").hide();
			$("#chat_click_nav_3").hide();
			$("#chat_span_1").attr("class","chat_cur_click");
			$("#chat_span_2").attr("class","");
			$("#chat_span_3").attr("class","");
		}
		//同事end
	
	
		//群组start
		if(WeChat_index == 1){
			$("#chat_click_nav_1").hide();
			$("#chat_click_nav_2").fadeIn(400);
			$("#chat_click_nav_3").hide();
			$("#chat_span_1").attr("class","");
			$("#chat_span_2").attr("class","chat_cur_click");
			$("#chat_span_3").attr("class","");
		}
		//群组end
		
		
		//最近start
		if(WeChat_index == 2){
			$("#chat_click_nav_1").hide();
			$("#chat_click_nav_2").hide();
			$("#chat_click_nav_3").fadeIn(400);
			$("#chat_span_1").attr("class","");
			$("#chat_span_2").attr("class","");
			$("#chat_span_3").attr("class","chat_cur_click");
		}
		//最近end
	});
	//企业微信聊天窗口列表选项end



	//同事列表页部门选择start
	var click_index = 0;
	$("#chat_click_nav_1>ul>li>div").click(function(){
		click_index++;
		if(click_index == 1){
			$(this).siblings("ul").slideDown(800);
		}else{
			$(this).siblings("ul").stop().slideUp();
			click_index = 0;
		}
	});
	//同事列表页部门选择end
	
	
	//聊天栏同事列表选择start
	$("#chat_click_nav_1>ul>li>ul>li").click(function(){
		var this_img = $(this).children("p:first-child").html();
		var this_name = $(this).children("p:last-child").html();
		var height = $(document).height();
		$("#chat li").removeAttr("class");
		$("#chat").prepend('<li  class="bk-list-1" ><div><p class="chat-li-p">'
							+this_img+'</p></div><div><p>'
							+this_name+'</p><p>内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分</p>'
							+'</div><div>8-24</div><div><img src="img/close-chating.png"/></div></li>');
		$(".ul-1 li").hide();
		$(".ul-1").prepend(chat_content);
		$(".saas-right-content>ul>li>ul").css("height",height-302+"px");	
		var chat_img = "";
		var chat_name = "";
		var chat_li_index = "";
		var chat_attr ="";
		chat_li_click(); 		//消息页面二级导航栏点击事件
		chat_li_hover();		//消息页面二级导航栏hover显示颜色
		remove_li();			//删除二级导航聊天列表
		$(".mail-list-2").perfectScrollbar();		//滚动条
		
		//发送聊天start
		$(".li-bottom-button").click(function(){
			var mail_val = $(this).prev().val();
			var $mail_ul = $(this).parent(".li-bottom-1").siblings(".mail-list-2");
			if(mail_val !== ""){
				$mail_ul.append('<li class="li-right"><div>'+use_img+'</div><div><p>2016-01-07 16:33:56</p><p>'+mail_val+'</p></div></li>');
				$(this).prev().val("");
			}
		});
		//发送聊天end
	});
	//聊天栏同事列表选择end
	
	
	//聊天栏群组列表选择start
	$("#chat_click_nav_2>ul>li").click(function(){
		var this_img = $(this).children("div:first-child").html();
		var this_name = $(this).children("div:last-child").html();
		var height = $(document).height();
		$("#chat li").removeAttr("class");
		$("#chat").prepend('<li  class="bk-list-1" ><div>'
							+this_img+'</div><div><p>'
							+this_name+'</p><p>内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分</p></div><div>8-24</div><div><img src="img/close-chating.png"/></div></li>');
		$(".ul-1 li").hide();
		$(".ul-1").prepend(chat_content);
		$(".saas-right-content>ul>li>ul").css("height",height-302+"px");	
		var chat_img = "";
		var chat_name = "";
		var chat_li_index = "";
		var chat_attr ="";
		chat_li_click(); 		//消息页面二级导航栏点击事件
		chat_li_hover();		//消息页面二级导航栏hover显示颜色
		remove_li();			//删除二级导航聊天列表
		$(".mail-list-2").perfectScrollbar();       //滚动条
		
		//发送聊天start
		$(".li-bottom-button").click(function(){
			var mail_val = $(this).prev().val();
			var $mail_ul = $(this).parent(".li-bottom-1").siblings(".mail-list-2");
			if(mail_val !== ""){
				$mail_ul.append('<li class="li-right"><div>'+use_img+'</div><div><p>2016-01-07 16:33:56</p><p>'+mail_val+'</p></div></li>');
				$(this).prev().val("");
			}
		});
		//发送聊天end
	});
	//聊天栏群组列表选择end
	
	
	//聊天栏最近列表选择start
	$("#chat_click_nav_3>li").click(function(){
		var this_img = $(this).children("div:first-child").html();
		var this_img_2 = $(this).children("div:first-child").children("p").html();
		var this_name = $(this).children("div:last-child").html();
		var this_p_attr =$(this).children("div:first-child").children("p").attr("class");
		var height = $(document).height();
		$("#chat li").removeAttr("class");
		if(this_p_attr == "chat_click_p1"){
			$("#chat").prepend('<li  class="bk-list-1"><div><p class="chat-li-p">'
								+this_img_2+'</div><div><p>'
								+this_name+'</p><p>内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分</p></div><div>8-24</div><div><img src="img/close-chating.png"/></div></li>');
			$(".ul-1 li").hide();
			$(".ul-1").prepend(chat_content);
		}else{
			$("#chat").prepend('<li  class="bk-list-1" ><div>'
								+this_img+'</div><div><p>'
								+this_name+'</p><p>内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分</p></div><div>8-24</div><div><img src="img/close-chating.png"/></div></li>');
			$(".ul-1 li").hide();
			$(".ul-1").prepend(chat_content);
		}
		$(".saas-right-content>ul>li>ul").css("height",height-302+"px");	
		var chat_img = "";
		var chat_name = "";
		var chat_li_index = "";
		var chat_attr ="";
		chat_li_click(); 		//消息页面二级导航栏点击事件
		chat_li_hover();		//消息页面二级导航栏hover显示颜色
		remove_li();			//删除二级导航聊天列表
		$(".mail-list-2").perfectScrollbar();     //滚动条
		//发送聊天start
		$(".li-bottom-button").click(function(){
			var mail_val = $(this).prev().val();
			var mail_name = $(this).parent(".li-bottom-1").siblings(".li-top").children("p").children(".mail-name").html();
			var $mail_ul = $(this).parent(".li-bottom-1").siblings(".mail-list-2");
			if(mail_val !== ""){
				$mail_ul.append('<li class="li-right"><div>'+use_img+'</div><div><p>2016-01-07 16:33:56</p><p>'+mail_val+'</p></div></li>');
				$(this).prev().val("");
			}
		});
		//发送聊天end
		
	});
	//聊天栏最近列表选择end

	
	//邀请新同事start
	$("#chat_click_nav_1 > p").click(function(){
		$("#chat-right-invite").fadeIn();
	});
	$(".invite-chat-right").click(function(){
		$("#chat-right-invite").fadeIn();
	});
	//邀请新同事end
	
	
	//关闭邀请框start
	$(".invite-delete").click(function(){
		$("#chat-right-invite").fadeOut();
	});
	//关闭邀请框end
	
	
	//邀请按钮start	
	$(".invite-button").click(function(){
		$("#chat-right-invite").fadeOut();
	});
	//邀请按钮end
	
	
	//复制链接start		
	$(".ctrl-href").click(function(){
		$(".click_href").fadeIn();
	});
	//复制链接end
	
	
	//关闭复制链接窗口start
	$(".click_href-delete").click(function(){
		$(".click_href").fadeOut();
	});
	//关闭复制链接窗口end
	
	
	//点击弹出二维码窗口start
	$(".invite_QR").click(function(){
		$(".click_QR").fadeIn();
	});
	//点击弹出二维码窗口end
	
	
	
	//关闭二维码弹出窗口start
	$(".click_QR_delete").click(function(){
		$(".click_QR").fadeOut();
	});
	//关闭二维码弹出窗口end
	
	
	//添加新同事start
	$(".add-input").click(function(){
		$(".invite-ul").append('<ul><li>姓名:</li><li><input type="text" name="" id="" value="" placeholder="请输入姓名"/></li><li>联系方式：</li><li><input type="text" name="" id="" value="" placeholder="请输入邀请邮箱或手机号码"/></li><li class="delete"><img src="img/delete.png"/></li></ul>');
		$(".delete").click(function(){
			$(this).parent("ul").hide();
		});
	});
	//添加新同事end
	
	
	//发起聊天，点击分选按钮，打钩start
	$(".colleague-list > ul li p:nth-child(1)").click(function(){
		var p_img = $(this).siblings("p:nth-child(2)").html();
		var p_attr = $(this).attr("class");
		$(this).html('<img src="img/checked-1.png"/>').attr("class","true");
		if(p_attr !== "true"){
			$("#invite-group-colleague>ul p").before('<li>'+p_img+'<span><img src="img/delete.png"/></span></li>');
		}
		$("#invite-group-colleague > ul li span").click(function(){
			$(this).parent("li").hide();
		});
		//“选择列表”去掉选择图片end
	});
	//发起聊天，点击分选按钮，打钩end
	
	
	//发起聊天，点击全局按钮，打钩start
	$(".colleague-list > p span:last-child").click(function(){
		var p_attr= $(this).parent("p").attr("class");
		var p_img = $(this).siblings("p:nth-child(2)").html();
		var $id = $("#"+p_attr);
		$(this).html('<img src="img/checked.png"/>');
		$id.children("li").children("p:nth-child(1)").html('<img src="img/checked-1.png"/>');
		
	});
	//发起聊天，点击全局按钮，打钩end
	
	
	//关闭创建群组start
	$(".invite-group-top p:nth-child(5)").click(function(){
		$("#invite-group").fadeOut();
	});
	//关闭创建群组end
	
	
	//打开创建群组start
	$("#chat_click_nav_2 > p").click(function(){
		$("#invite-group").fadeIn();
	});
	//打开创建群组end


	//“选择群组”列表选择start
	$(".crowd-list li p:nth-child(3)").click(function(){
		var p_attr = $(this).attr("class");
		var p_img = $(this).siblings("p:nth-child(1)").html();
		$(this).html('<img src="img/checked.png" />').attr("class","true");
		if(p_attr !== "true"){
			$("#invite-group-crowd .crowd-ul").append('<li>'+p_img+'<span><img src="img/delete.png"/></span></li>');
		}
		
		$("#invite-group-crowd .crowd-ul li span").click(function(){
			$(this).parent("li").hide();
			//“选择群组”去掉选择图片
		});
	});
	//“选择群组”列表选择end
	
	
	//“选择群组”去掉选择图片start
	$("#invite-group-crowd .crowd-ul li span").click(function(){
		$(this).parent("li").hide();
	});
	//“选择群组”去掉选择图片end
	
	
	//“选择列表”去掉选择图片start
	$("#invite-group-colleague > ul li span").click(function(){
		$(this).parent("li").hide();
	});
	//“选择列表”去掉选择图片end
	
	
	//创建群组，确定start
	$(".colleague-click").click(function(){
		$("#invite-group").fadeOut();
	});
	//创建群组，确定end
	
	
	//点击选择同事start
	$(".invite-group-top p:nth-child(2) span:first-child").click(function(){
		$(this).css("color","#277BCF").siblings().css("color","#999");
		$("#border-bottom-2").hide();
		$("#border-bottom-1").show();
		$("#invite-group-crowd").hide();
		$("#invite-group-colleague").fadeIn();
	});
	//点击选择同事end
	
	
	//点击选择群组start
	$(".invite-group-top p:nth-child(2) span:last-child").click(function(){
		$(this).css("color","#277BCF").siblings().css("color","#999");
		$("#border-bottom-1").hide();
		$("#border-bottom-2").show();
		$("#invite-group-colleague").hide();
		$("#invite-group-crowd").fadeIn();
	});
	//点击选择群组end
	
	
	//点击弹出个人设置start
	$(".saas-right-content > ul > li:nth-child(2) .li-top > div:nth-child(2) p:last-child").click(function(){
		$("#personal-information").fadeIn();
	});
	//点击弹出个人设置end
	
	
	//关闭关联搜索框start
	$(".chat-right-window .chat_list .chat_list_top p:last-child").click(function(){
		$(".chat-search-list").hide();
		$(".chat-right-window .chat_list > ul").fadeIn();
	});
	//关闭关联搜索框end
	
	
	//打开关联搜索框start
	$(".chat-right-window .chat_list .chat_list_top p:first-child input").focus(function(){
		$(".chat-right-window .chat_list > ul").hide();
		$(".chat-search-list").fadeIn();
	});
	//打开关联搜索框end


	//调用部分start
	chat_li_hover();		//消息页面二级导航栏hover显示颜色
	chat_li_click();		//消息页面二级导航栏点击事件
	remove_li();			//删除二级导航聊天列表
	//调用部分end
});
	//消息页面二级导航栏hover显示颜色start
	function chat_li_hover(){
		$("#chat>li").hover(function(){
			var li_attr = $(this).attr("class");
			if(li_attr == undefined){
				$(this).css("background","#F0F6FC");
			}
			$(this).children("div:nth-child(4)").fadeIn();
		}).mouseleave(function(){
			$(this).css("background","");
			$(this).children("div:nth-child(4)").stop().fadeOut();
		});
	}
	//消息页面二级导航栏hover显示颜色end


	//消息页面二级导航栏点击事件start
	function chat_li_click(){
		$("#chat>li").click(function(){
			chat_li_index = $(this).index();
			chat_img = $(this).children("div:first-child").children("p").html();
			chat_attr = $(this).children("div:first-child").children("p").attr("class");
			chat_name = $(this).children("div:nth-child(2)").children("p:first-child").html();
			$(".left-p-click b").hide();
			$(this).attr("class","bk-list-1").siblings().removeAttr("class","bk-list-1");
			$(".saas-right-content>.ul-1>li:eq("+chat_li_index+")").fadeIn(400).siblings().hide();
			$(".saas-right-content>.ul-1>li:eq("+chat_li_index+")").children(".li-top").children("div:first-child").children("p:last-child").html(chat_name);
			$(".chat-right").show();
			$(this).prependTo("#chat");
			if(chat_attr == "group-3"){
				$(".saas-right-content>.ul-1>li:eq("+chat_li_index+")").children(".li-top").children("div:first-child").children("p:first-child").html(chat_img).attr("class","group-3");
			}else if(chat_attr == "group-4"){
				$(".saas-right-content>.ul-1>li:eq("+chat_li_index+")").children(".li-top").children("div:first-child").children("p:first-child").html(chat_img).attr("class","group-4");
			}else{
				$(".saas-right-content>.ul-1>li:eq("+chat_li_index+")").children(".li-top").children("div:first-child").children("p:first-child").html(chat_img).attr("class","li-top-p1");
			}
		});
	}
	//消息页面二级导航栏点击事件end
	
	
	
	//删除二级导航聊天列表start
	function remove_li(){
		$(".left-list-one ul li>div:nth-child(4)").click(function(){
			$(this).parent("li").remove();
		});
	}
	//删除二级导航聊天列表end
	
	
