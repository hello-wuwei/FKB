$(function(){
	//企业微信聊天窗口列表选项start
	var use_name = $("#saas-name").html();
	var use_img = $("#saas-img").html();
	$(".saas-Enterprise-WeChat-click>div>ul>li").click(function(){
		var WeChat_index = $(this).index();
	//同事start
		if(WeChat_index == 0){
			$("#click_nav_1").fadeIn(400);
			$("#click_nav_2").hide();
			$("#click_nav_3").hide();
			$("#span-1").attr("class","cur_click");
			$("#span-2").attr("class","");
			$("#span-3").attr("class","");
		}
	//同事end
	
	
	//群组start
		if(WeChat_index == 1){
			$("#click_nav_1").hide();
			$("#click_nav_2").fadeIn(400);
			$("#click_nav_3").hide();
			$("#span-1").attr("class","");
			$("#span-2").attr("class","cur_click");
			$("#span-3").attr("class","");
		}
	//群组end
	
	
	//最近start
		if(WeChat_index == 2){
			$("#click_nav_1").hide();
			$("#click_nav_2").hide();
			$("#click_nav_3").fadeIn(400);
			$("#span-1").attr("class","");
			$("#span-2").attr("class","");
			$("#span-3").attr("class","cur_click");
		}
	});
	//最近end
	//企业微信聊天窗口列表选项end
	
	//头部全局搜搜start
//	$(document).bind("click",function(search){
//		var target = $(search.target);
//		var i =target.closest("#saas-search").length;
//		if(i == 1){
//			$("#saas-search form").slideDown();
//		}else{
//			$("#saas-search form").stop().slideUp();
//		}
//	});
	$("#saas-search").hover(function(){
		$(this).children("form").slideDown();
	}).mouseleave(function(){
		$(this).children("form").stop().slideUp();
	});
	//头部全局搜搜end
	
	
	//提醒弹出框start
	$(document).bind("click",function(warn){
	var target = $(warn.target);
	var i =target.closest(".warn").length;
	if(i == 1){
		$(".warn").siblings("ul").fadeIn();
	}else{
		$(".warn").siblings("ul").stop().fadeOut();
		warn_ul();//提醒
	}
	});
	//提醒弹出框end
	
	
	//头部头像按钮start
//	$(document).bind("click",function(name){
//	var target = $(name.target);
//	var i =target.closest("#saas-user").length;
//	if(i == 1){
//		$("#saas-user ul").slideDown();
//	}else{
//		$("#saas-user ul").stop().slideUp();
//	}	
//	});
	$("#saas-user").hover(function(){
		$(this).children("div").slideDown();
	}).mouseleave(function(){
		$(this).children("div").stop().slideUp();
	});
	//头部头像按钮end
	
	
	//指定人弹出框start
	$(document).bind("click",function(overt){
		var target = $(overt.target);
		var i =target.closest(".overt-click>p").length;
		if(i == 1){
			$(".overt-ul").slideDown();
		}else{
			$(".overt-ul").stop().slideUp();
			overt_ul();//点击选择指定人
		}
	});
	//指定人弹出框end
	
	
	//头部加号按钮start
//	$(document).bind("click",function(add){
//		var target = $(add.target);
//		var i =target.closest("#saas-add").length;
//		if(i == 1){
//			$("#saas-add ul").slideDown();
//		}else{
//			$("#saas-add ul").stop().slideUp();
//		}
//	});
$("#saas-add").hover(function(){
	$(this).children("ul").slideDown();
}).mouseleave(function(){
	$(this).children("ul").stop().slideUp();
});
	//头部加号按钮end


	//头部消息数量start
	var span = $(".saas-nav li span").html();
	if(span >= 99){
		$(".saas-nav li span").html("99+");
	}
	if(span < 1){
		$(".saas-nav li span").hide();
	$(".saas-nav li b").hide();
	}
	//头部消息数量end
	
	
	//头部点击事件start
	var click_index = 0;
	$("#click_nav_1>ul>li>div").click(function(){
		var this_attr =  $(this).attr("i");
		if(this_attr == "true"){
			$(this).attr("i","").siblings("ul").stop().slideUp(800);
			$(this).children().children("img").attr("src","img/chart-close.png");
		}else{
			$(this).attr("i","true").siblings("ul").slideDown(800).parent("li").siblings("li").children("ul").stop().hide().siblings("div").attr("i","");
			$(this).children().children("img").attr("src","img/chart-open.png").parents("li").siblings().children("div").children().children("img").attr("src","img/chart-close.png");
		}
		//同事列表页部门选择	
	});
	//头部点击事件end
	
	
	// 快速沟通hover start
	$(".saas-Enterprise-WeChat p:first-child").bind("mouseover",function(){
		$(this).siblings().fadeIn(400);
	}).mouseleave(function(){
		$(this).siblings().fadeOut(400);
	});
	// 快速沟通hover end
	
	
	//打开企业微信列表start
	$(".saas-Enterprise-WeChat p:nth-child(1)").click(function(){
		$(this).animate({right:"-100px"},400);
		$(".saas-Enterprise-WeChat-click").animate({bottom:"0"},1000);
	});
	//打开企业微信列表end
	
	
	//关闭企业微信列表start
	$("#click_nav_none p").click(function(){
		var chat_height = $(".saas-Enterprise-WeChat-click").height();
		$(".saas-Enterprise-WeChat p:nth-child(1)").animate({right:"50px"},2000);
		$(".saas-Enterprise-WeChat-click").animate({bottom:-chat_height},1000);
		$(".saas-chatWindow").fadeOut(600);
	});
	//关闭企业微信列表end
	
	
	//聊天窗口右侧头部获取姓名start
	var mail_name_win = "";
	var saas_win_user = $(".saas-chatWindow .window-left li:first-child div:last-child").html();
	$(".add-user-1").html(saas_win_user);
	//聊天窗口右侧头部获取姓名end
	
	
	//聊天窗口右侧头部弹出加入聊天人头像start
	var click_1= 1;
	$(".add-user-1").click(function(){
		click_1 ++
		if(click_1 == 2){
			$(".add-user-window").slideDown(400);
		}
		else{
			$(".add-user-window").slideUp(400);
			click_1=1;
		}
	});
	//聊天窗口右侧头部弹出加入聊天人头像end
	
	
	//聊天窗口右侧头部弹出加入聊天人头像start
	$(".add-user-2").click(function(){
		click_1 ++
		if(click_1 == 2){
			$(".add-user-window").slideDown(400);
		}
		else{
			$(".add-user-window").slideUp(400);
			click_1=1;
		}
	});
	//聊天窗口右侧头部弹出加入聊天人头像end


	//聊天点击生成框变量start
	var click_html = '<div class="window-right">'
+'				<div class="mail-user">'
+'  						<div>'
+'								邓紫棋邓紫棋邓紫棋邓紫棋邓紫棋邓紫棋邓紫棋邓紫棋  		'					
+' 						</div>'
+'						<div>'
+'	  						<p class="invite-chat"><img src="img/ann_chatbox.png"/></p>'
+'	  						<p class="personal-information-click"><img src="img/team-gray.png"/></p>'
+'	  						<p><img src="img/max.png"/></p>'
+'	  						<p class="window-down"><img src="img/min.png"/></p>'
+' 						</div>'
+'  					</div>'
+'  					<div>'
+'  						<ul class="mail-list-1">'
+'							<li class="li-left">'
+'								<div><img src="img/GEM-img/GEM-1.png"/></div>'
+'								<div>'
+'									<!--<p>10-07 20:42</p>-->'
+'									<p>小丽</p>'
+'									<p>'
+'									<span class="send-enclosure-right" onclick="send_enclosure_right();">'
+'											<span>'
+'													<img src="img/acc(10).png"/>'
+'													<strong>'
+'															<b>文件名文件名</b>'
+'															<b>349KB</b>'
+'													</strong>'
+'											</span>'
+'											<span class="download-right">'
+'												<i></i>'
+'											</span>'
+'											<span>'
+'												撤销'
+'											</span>'
+'										</span>'
+'									<b><img src="img/block-2.png"/></b>'
+'									</p>'
+'								</div>'
+'							</li>'
+'						</ul>'
+' 					</div>'
+'  					<div class="li-bottom-1">'
+'								<div>'
+'									<div class="brow"><img src="img/smile-face.png"/>'
+'										<ul>'
+'											<div></div>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'											<li><img src="img/expression.gif"/></li>'
+'										</ul>'
+'									</div>'
+'									<p class="enclosure-click"><img src="img/clip.png"/></p>'
+'									<p class="hover-a"><img src="img/a.png"/>'
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
+'								</div>'
+'								<textarea class="li-bottom-text" name="" rows="" cols="" placeholder="输入文字"><img class="img" src="img/taylor-2.jpg"/>uiefgiuweafuiwehfiuwehfouwehfiwebfoweboewf</textarea>'
+'								<input class="li-bottom-button" type="button" name="" id="" value="发送" onclick="javascript:setBottom();" />'
+'								<p class="prompt">按Ctrl+Enter换行</p>'
+'						</div>'
+'  				</div>'
		//聊天点击生成框变量end
	
	
	//最新消息列表弹出聊天窗口start
	$(".saas-home-left ul li").click(function(){
		$(".saas-Enterprise-WeChat p:nth-child(1)").animate({right:"-100px"},400);
		$(".saas-Enterprise-WeChat-click").animate({bottom:"0"},1000);
		$(".saas-chatWindow").fadeIn(1500);
		$(".saas-chatWindow").append(click_html);
		var click_left_img = $(this).children("div:first-child").children("p:first-child").children("img").attr("src");
		var click_left_name = $(this).children("div:nth-child(2)").children("p:first-child").html();
		$(".window-left").prepend('<li class=""><div><p><img class="mail-img-1" src="'
								+click_left_img+'"/></p></div><div>'
								+click_left_name+'</div><div>1</div>'
								+'<div><img src="img/close-chating.png"/></div></li>');
		button_information();				//聊天窗口发送按钮
		invite_chat();						//聊天窗口邀请新同事开
		window_left_hover();				//聊天窗口左边移动叉叉显示
		window_left_hover_delete();			//聊天窗口左边hover显示叉叉按钮
		brow_img();							//点击表情
		brow();								//弹出表情
		window_down();						//关闭聊天窗口
		img_big();							//查看大图
		invite();							//邀请新同事
		enclosure();						//发送附件
		show_bigImg();						//点击查看图片
		big_chat();							//聊天放大功能
		$(".window-right>div:nth-child(2)").perfectScrollbar();			//滚动条
		//聊天窗口点击右边获取对应框及内容start
		$(".window-left li").click(function (){
			var left_index = $(this).index();
			mail_name_win = $(this).children("div:nth-child(2)").html();
			$(this).attr("class","bk-list-1").siblings().removeAttr("class");
			$(".window-right > div:nth-child(1)>div:nth-child(1) ").html(mail_name_win);
			$(".saas-chatWindow>div:eq("+left_index+")").fadeIn(400).siblings("div").hide();
			$(this).children("div:nth-child(3)").hide();
		});
		//聊天窗口点击右边获取对应框及内容end	
		
	});
	//最新消息列表弹出聊天窗口end
	
		
	//同事列表点击聊天start	
	$("#click_nav_1 li li").click(function(){
		$(".saas-chatWindow").fadeIn(400);
		$(this).children("p:nth-child(3)").hide();
		var click_nav_1_img = $(this).children("p:first-child").children("img").attr("src");
		var click_nav_1_name = $(this).children("p:nth-child(2)").html();
		$(".window-left").prepend('<li class=""><div><p><img class="mail-img-1" src="'
								+click_nav_1_img+'"/></p></div><div>'
								+click_nav_1_name+'</div><div class="message-one">1</div>'
								+'<div><img src="img/close-chating.png"/></div></li>');
		$(".saas-chatWindow").append(click_html);
		button_information();				//聊天窗口发送按钮
		invite_chat();						//聊天窗口邀请新同事开
		window_left_hover();				//聊天窗口左边移动叉叉显示
		window_left_hover_delete();			//聊天窗口左边hover显示叉叉按钮
		brow_img();							//点击表情
		brow();								//弹出表情
		window_down();						//关闭聊天窗口
		img_big();							//查看大图
		invite();							//邀请新同事
		enclosure();						//发送附件
		show_bigImg();						//点击查看图片
		big_chat();							//聊天放大功能
		$(".window-right>div:nth-child(2)").perfectScrollbar();			//滚动条
		//聊天窗口点击右边获取对应框及内容start
		$(".window-left li").click(function (){
			var left_index = $(this).index();
			mail_name_win = $(this).children("div:nth-child(2)").html();
			$(this).attr("class","bk-list-1").siblings().removeAttr("class");
			$(".window-right > div:nth-child(1)>div:nth-child(1) ").html(mail_name_win);
			$(".saas-chatWindow>div:eq("+left_index+")").fadeIn(400).siblings("div").hide();
			$(this).children("div:nth-child(3)").hide();
		});
		//聊天窗口点击右边获取对应框及内容end	
		
	});
	//同事列表点击聊天end
	
	
	//群主列表点击聊天start
	$("#click_nav_2 li").click(function(){
		$(".saas-chatWindow").fadeIn(400);
		$(this).children("div:nth-child(3)").hide();
		var click_nav_2_img = $(this).children("div:first-child").html();
		var click_nav_2_name = $(this).children("div:nth-child(2)").html();
		$(".window-left").prepend('<li class=""><div>'
							+click_nav_2_img+'</div><div>'
							+click_nav_2_name+'</div><div>1</div>'
							+'<div><img src="img/close-chating.png"/></div></li>');
		$(".saas-chatWindow").append(click_html);
		button_information();					//聊天窗口发送按钮
		invite_chat();							//聊天窗口邀请新同事开
		window_left_hover();					//聊天窗口左边移动叉叉显示
		window_left_hover_delete();				//聊天窗口左边hover显示叉叉按钮
		brow_img();								//点击表情
		brow();									//弹出表情
		window_down();							//关闭聊天窗口
		img_big();								//查看大图
		invite();								//邀请新同事
		enclosure();							//发送附件
		show_bigImg();							//点击查看图片
		big_chat();								//聊天放大功能
		$(".window-right>div:nth-child(2)").perfectScrollbar();			//滚动条
		//聊天窗口点击右边获取对应框及内容start
		$(".window-left li").click(function (){
			var left_index = $(this).index();
			mail_name_win = $(this).children("div:nth-child(2)").html();
			$(this).attr("class","bk-list-1").siblings().removeAttr("class");
			$(".window-right > div:nth-child(1)>div:nth-child(1) ").html(mail_name_win);
			$(".saas-chatWindow>div:eq("+left_index+")").fadeIn(400).siblings("div").hide();
			$(this).children("div:nth-child(3)").hide();
		});
		//聊天窗口点击右边获取对应框及内容end	
		
	});
	//群主列表点击聊天end
	
	
	//最近聊天点击聊天start
	$("#click_nav_3 li").click(function(){
		$(".saas-chatWindow").fadeIn(400);
		$(this).children("div:nth-child(3)").hide();
		var click_nav_2_img = $(this).children("div:first-child").html();
		var click_nav_2_name = $(this).children("div:nth-child(2)").html();
		
		$(".window-left").prepend('<li class=""><div>'
							+click_nav_2_img+'</div><div>'
							+click_nav_2_name+'</div><div>1</div>'
							+'<div><img src="img/close-chating.png"/></div></li>');
		$(".saas-chatWindow").append(click_html);
		button_information();				//聊天窗口发送按钮
		invite_chat();						//聊天窗口邀请新同事开
		window_left_hover();				//聊天窗口左边移动叉叉显示
		window_left_hover_delete();			//聊天窗口左边hover显示叉叉按钮
		brow_img();							//点击表情
		brow();								//弹出表情
		window_down();						//关闭聊天窗口
		img_big();							//查看大图
		invite();							//邀请新同事
		enclosure();						//发送附件
		show_bigImg();						//点击查看图片
		big_chat();							//聊天放大功能
		$(".window-right>div:nth-child(2)").perfectScrollbar();			//滚动条
		//聊天窗口点击右边获取对应框及内容start
		$(".window-left li").click(function (){
			var left_index = $(this).index();
			mail_name_win = $(this).children("div:nth-child(2)").html();
			$(this).attr("class","bk-list-1").siblings().removeAttr("class");
			$(".window-right > div:nth-child(1)>div:nth-child(1) ").html(mail_name_win);
			$(".saas-chatWindow>div:eq("+left_index+")").fadeIn(400).siblings("div").hide();
			$(this).children("div:nth-child(3)").hide();
		});
		//聊天窗口点击右边获取对应框及内容end
		
	});
	//最近聊天点击聊天end
	
	
	//聊天窗口点击右边获取对应框及内容start
	$(".window-left li").click(function (){
		var left_index = $(this).index();
		mail_name_win = $(this).children("div:nth-child(2)").html();
		$(this).attr("class","bk-list-1").siblings().removeAttr("class");
		$(".window-right > div:nth-child(1)>div:nth-child(1) ").html(mail_name_win);
		$(".saas-chatWindow>div:eq("+left_index+")").fadeIn(400).siblings("div").hide();
		$(this).children("div:nth-child(3)").hide();
	});
	//聊天窗口点击右边获取对应框及内容end
	
	
	
	//邀请新同事start
	$("#click_nav_1> p").click(function(){
		$("#window-chat-right-invite").fadeIn();
	});
	//邀请新同事end
	
	
	//关闭邀请框start
	$(".window-invite-delete").click(function(){
		$("#window-chat-right-invite").fadeOut();
	});
	//关闭邀请框end


	//邀请按钮start
	$(".window-invite-button").click(function(){
		$("#window-chat-right-invite").fadeOut();
	});
	//邀请按钮end
	
	
	//复制链接start
	$(".window-ctrl-href").click(function(){
		$(".window-click_href").fadeIn();
		$(".window-click_QR").fadeOut();
	});
	//复制链接end
	
	
	//关闭复制链接窗口start
	$(".window-click_href-delete").click(function(){
		$(".window-click_href").fadeOut();
	});
	//关闭复制链接窗口end
	
	
	//点击弹出二维码窗口start
	$(".window-invite_QR").click(function(){
		$(".window-click_QR").fadeIn();
		$(".window-click_href").fadeOut();
	});
	//点击弹出二维码窗口end
	
	
	//关闭二维码弹出窗口start
	$(".window-click_QR_delete").click(function(){
		$(this).parent("div").fadeOut();
	});
	//关闭二维码弹出窗口end
	
	
	//添加新同事start
	$(".window-add-input").click(function(){
		$(".window-invite-ul").append('<ul><li>姓名:</li><li><input type="text" name="" id="" value="" placeholder="请输入姓名"/></li><li>联系方式：</li><li><input type="text" name="" id="" value="" placeholder="请输入邀请邮箱或手机号码"/></li><li class="delete"><img src="img/delete.png"/></li></ul>');
		$(".delete").click(function(){
			$(this).parent("ul").hide();
		});
	});
	//添加新同事end
	
	
	//左侧一级导航移动背景变化start
	$(".saas-left p").hover(function(){
		var p_attr = $(this).attr("class");
		if(p_attr == undefined){
			$(this).css("background","#526D86");
		}
	}).mouseleave(function(){
		$(this).css("background","");
	});
	//左侧一级导航移动背景变化end
	
	
	//关闭创建群组start
	$(".invite-group-top p:nth-child(5)").click(function(){
		$("#invite-group").fadeOut();
	});
	//关闭创建群组end
	
	
	//打开创建群组start
	$("#click_nav_2>p").click(function(){
		$("#invite-group").fadeIn();
	});
	//打开创建群组end
	
	
	//发起聊天，点击分选按钮，打钩start
	$(".colleague-list > ul li p:nth-child(1)").click(function(){
		var p_img = $(this).siblings("p:nth-child(2)").html();
		var p_attr = $(this).attr("class");
		$(this).html('<img src="img/checked-1.png"/>').attr("class","true");
		if(p_attr !== "true"){
			$("#invite-group-colleague>ul div").before('<li>'+p_img+'<span><img src="img/delete.png"/></span></li>');
		}
		$("#invite-group-colleague > ul li span").click(function(){
			$(this).parent("li").hide();
			//“选择列表”去掉选择图片
		});
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


	//个人设置里面的修改备注start
	$("#personal-information ul li:nth-child(3) p:nth-child(2)").click(function(){
		$(this).hide();
		$("#personal-information ul li:nth-child(3) p:nth-child(3) input").fadeIn();
		$("#personal-information ul li:nth-child(3) p:nth-child(4) input").fadeIn();
		$("#personal-information ul li:nth-child(3) p:nth-child(4) input").click(function(){
			var val = $(this).parent("p").siblings("p:nth-child(3)").children("input").val();
			$(this).parent("p").siblings("p:nth-child(2)").html('<span>'+val+'</span><img src="img/write-blue.png">');
			$(this).hide();
			$("#personal-information ul li:nth-child(3) p:nth-child(3) input").hide();
			$("#personal-information ul li:nth-child(3) p:nth-child(2)").fadeIn();
		});
	});
	//个人设置里面的修改备注end
	
	
	//关闭个人设置start
	$("#personal-information > div:nth-child(1) p:nth-child(4)").click(function(){
		$("#personal-information").hide();
	});
	//关闭个人设置end
	
	
	//点击弹出个人设置start
	$(".personal-information-click").click(function(){
		$("#personal-information").fadeIn();
	});
	//点击弹出个人设置end
	
	
	//打开更换start
	$(".change-list-click").click(function(){
		$(".change-list").fadeIn();
		$(".change-list li").click(function(){
			var html = $(this).children("p:last-child").html();
			$(this).parent("ul").siblings("p:nth-child(2)").html(html);
			$(this).parent("ul").hide();
		});
	});
	//打开更换end
	
	
	//群名称修改start
	$(".group-name").click(function(){
		$(".group-name").hide();
		$(".group-name-1").hide();
		$(".group-name-2").fadeIn();
		$(".group-name-3").fadeIn();
		$(".group-name-3").click(function(){
			$(".group-name-2").hide();
			$(".group-name-1").fadeIn();
			$(".group-name-3").hide();
			$(".group-name").fadeIn();
		});
	});
	//群名称修改end
	

	//消息免打扰start
	var click_1 = 0;
	var click_2 = 0;
	$(".group-click-1").click(function(){
		click_1++;
		if(click_1 == 1){
			$(this).html('<img src="img/switch-blue.png"/>');
		}else{
			$(this).html('<img src="img/switch-gray.png"/>');
			click_1 = 0;
		}
	});
	//消息免打扰end
	

	//群置顶start
	$(".group-click-2").click(function(){
		click_2++;
		if(click_2 == 1){
			$(this).html('<img src="img/switch-blue.png"/>');
		}else{
			$(this).html('<img src="img/switch-gray.png"/>');
			click_2 = 0;
		}
	});
	//群置顶end
	
	
	//退出群组start	
	$(".delete-group").click(function(){
		$("#group-information").hide();
	});
	//退出群组end
	
	
	//点击图标打开二维码start	
	$(".group_QR_click").click(function(){
		$(".group_QR").fadeIn();
	});
	//点击图标打开二维码end
	
	
	//删除群成员start
	$(".people-list li span").click(function(){
		$(this).parent("li").hide();
	});
	//删除群成员end
	
	
	//关闭群信息start
	$(".close-group").click(function(){
		$("#group-information").hide();
	});
	//关闭群信息end
	
	
	//关闭更多弹出框start	
	$(".group-information-click").click(function(){
		$("#group-information").fadeIn();
	});
	$(".more-top p:nth-child(4)").click(function(){
		$(".more").hide();
	});
	//关闭更多弹出框end
	
	
	//确定或拒绝，日程安排start
	$(".plan-button p").click(function(){
		$(".plan").hide();
	});
	//确定或拒绝，日程安排end
	
	
	//关闭日程安排start
	$(".plan-top p:nth-child(5)").click(function(){
			$(".plan").hide();
		});
	//关闭日程安排end
	
	
	//表情选择框弹出start
	$(".brow>img").click(function(){
		$(".brow ul").fadeIn();
	});
	//表情选择框弹出end
	
	
	//表情选择start
	$(".brow ul li").click(function(){
		$(".brow ul").hide();
	});
	//表情选择end
	
	
	//搜索点击弹出关联框start
	$(".chick_list_top p:first-child input").focus(function(){
		$(".click-search-list").fadeIn();
		$(".saas-Enterprise-WeChat-click .click_list > ul").hide();
	});
	//搜索点击弹出关联框end
	
	
	//关闭搜索关联弹出框start
	$(".click_list .chick_list_top p:last-child").click(function(){
		$(".click-search-list").hide();
		$(".saas-Enterprise-WeChat-click .click_list > ul").fadeIn();
	});
	//关闭搜索关联弹出框end
	
	
	//创建群组搜索点击弹出关联框start
	$("#invite-group-colleague>ul div p input").focus(function(){
		$(".colleague-list").hide();
		$(".colleague-search").fadeIn();
	});
	//创建群组搜索点击弹出关联框end
	
	
	//创建群组关闭搜索关联弹出框start
	$("#invite-group-colleague > ul div p:nth-child(3)").click(function(){
		$(".colleague-list").fadeIn();
		$(".colleague-search").hide();
	});
	//创建群组关闭搜索关联弹出框end
	
	
	//创建群组搜索框点击选中start
	$("#invite-group-colleague > ul div").hover(function(){
		$("#invite-group-colleague > ul div p:nth-child(3)").fadeIn();
	}).mouseleave(function(){
		$("#invite-group-colleague > ul div p:nth-child(3)").stop().hide();
	});
	$(".colleague-search ul li p:nth-child(1)").click(function(){
		$(this).html('<img src="img/checked-1.png"/>');
	});
	//创建群组搜索框点击选中end
	
	
	//关闭日程start
	$(".new-schedule .new-schedule-top p:nth-child(2)").click(function(){
		$(".new-schedule").hide();
	});
	//关闭日程end
	
	
	//选择是否全天start
	$(".new-schedule-content > div:nth-child(2) > ul > li:nth-child(2) > div:nth-child(3)").click(function(){
		var this_attr=$(this).attr("class");
		if(this_attr !== "true"){
			$(this).html('<img src="img/checked-7.png"/>').attr("class","true");
		}else{
			$(this).html('<img src="img/check-box-2.png"/>').attr("class","");
		}
	});
	//选择是否全天end
	
	
	//选择周几打钩start
	$(".new-schedule-content > div:nth-child(2) > ul > li > ul > li p:first-child").click(function(){
		var this_attr=$(this).attr("class");
		if(this_attr !== "true"){
			$(this).html('<img src="img/checked-7.png"/>').attr("class","true");
		}else{
			$(this).html('<img src="img/check-box-2.png"/>').attr("class","");
		}
	});
	//选择周几打钩end
	
	
	//新建日程重复选择start
	$(".repeat").click(function(){
		$(this).siblings("ul").slideDown();
		$(this).siblings("ul").children("li").click(function(){
			var html = $(this).html();
			$(this).parent("ul").siblings(".repeat").children("span:first-child").html(html);
			$(this).parent("ul").stop().slideUp();
			$(".repeat-date").fadeIn();
			if(html == "每天"){
				$(".repeat-date").children("p:last-child").html("天");
				$(".repeat-week").hide();
				$(".new-schedule-content > div:nth-child(2) ul li:nth-child(5) > div:nth-child(3)").html("每天的时间");
				$(".new-schedule-content > div:nth-child(2) > ul > li:nth-child(4)").slideDown();
				$(".new-schedule-content > div:nth-child(2) > ul > li:nth-child(5)").slideDown();
			}
			if(html == "每周"){
				$(".repeat-date").children("p:last-child").html("周");
				$(".repeat-week").fadeIn(1000);
				$(".new-schedule-content > div:nth-child(2) ul li:nth-child(5) > div:nth-child(3)").html("每周的时间");
				$(".new-schedule-content > div:nth-child(2) > ul > li:nth-child(4)").slideDown();
				$(".new-schedule-content > div:nth-child(2) > ul > li:nth-child(5)").slideDown();
			}
			if(html == "每月"){
				$(".repeat-date").children("p:last-child").html("月");
				$(".repeat-week").hide();
				$(".new-schedule-content > div:nth-child(2) ul li:nth-child(5) > div:nth-child(3)").html("每月的时间");
				$(".new-schedule-content > div:nth-child(2) > ul > li:nth-child(4)").slideDown();
				$(".new-schedule-content > div:nth-child(2) > ul > li:nth-child(5)").slideDown();
			}
			if(html == "不重复"){
				$(".repeat-date").hide();
				$(".repeat-week").hide();
				$(".new-schedule-content > div:nth-child(2) > ul > li:nth-child(4)").stop().hide();
				$(".new-schedule-content > div:nth-child(2) > ul > li:nth-child(5)").stop().hide();
			}
		});
	});
	//新建日程重复选择end
	
	
	//结束选择start
	$(".sch-date").click(function(){
		$(this).siblings("ul").slideDown();
		$(this).siblings("ul").children("li").click(function(){
			var html = $(this).html();
			$(this).parent("ul").siblings(".sch-date").children("span:first-child").html(html);
			$(this).parent("ul").stop().slideUp();
			if(html == "永不"){
				$(".sch-date-degree").hide();
				$(".sch-date-time").hide();
				$(".new-schedule-content > div:nth-child(2) ul li:nth-child(5) > div:nth-child(3)").html("永不");
			}
			if(html == "次数"){
				$(".sch-date-degree").fadeIn();
				$(".sch-date-time").hide();
				$(".new-schedule-content > div:nth-child(2) ul li:nth-child(5) > div:nth-child(3)").html("每天的时间，每次");
			}
			if(html == "日期"){
				$(".sch-date-time").fadeIn();
				$(".sch-date-degree").hide();
				$(".new-schedule-content > div:nth-child(2) ul li:nth-child(5) > div:nth-child(3)").html("每天的时间，日期");
			}
		});
	});
	//结束选择end
	
	
	//创建日程start	
	$(".new-schedule-content > div:nth-child(4) p input").click(function(){
		$(".new-schedule").hide();
		$(".plan").hide();
		$(".more").hide();
	});
	//创建日程end
	
	
	//打开创建新日程start
	$(".plan-top p:nth-child(4)").click(function(){
		$(".plan").hide();
		$(".new-schedule").fadeIn();
		$(".new-schedule .new-schedule-top p:nth-child(2)").click(function(){
		$(".new-schedule").hide();
		$(".plan").fadeIn();
		});
		
	});
	//打开创建新日程end
	
	
	//更多里面打开创建新日程start
	$(".more-top p:nth-child(3)").click(function(){
		$(".more").hide();
		$(".new-schedule").fadeIn();
		$(".new-schedule .new-schedule-top p:nth-child(2)").click(function(){
			$(".new-schedule").hide();
			$(".more").fadeIn();
		});
	});
	//更多里面打开创建新日程end
	
	
	//公开范围指定人选择start
	$(".overt li p:nth-child(2)").click(function(){
		$(this).parent("li").hide();
	});
	//公开范围指定人选择end
	

	//点击选择指定人start
	$(".add-man-click").click(function(){
		$("#choose-workmate").fadeIn();
		$(".choose-workmate-top p:nth-child(1)").html("添加人员");
		$(".choose-workmate-click").click(function(){
			$(".choose-workmate-top p:nth-child(1)").html("选择同事");
			$("#choose-workmate").hide();
			$(".add-man").fadeIn();
		});
		$(".choose-workmate-top p:nth-child(2)").click(function(){
			$("#choose-workmate").hide();
			$(".choose-workmate-top p:nth-child(1)").html("选择同事");
		});
	});
	//点击选择指定人end
	
	
	//参与人员添加人员start
	$(".add-man li p:nth-child(2)").click(function(){
		$(this).parent("li").hide();
	});
	//参与人员添加人员end
	
	
	//时分的选择（已改需求）start
//	$(".hour-click").click(function(){
//		$(".hour").slideDown();
//		$(".hour li").click(function(){
//			var html = $(this).html();
//			$(".hour-click span:first-child").html(html);
//			$(".hour").stop().slideUp();
//		});
//	});
//	$(".hour-2-click").click(function(){
//		$(".hour-2").slideDown();
//		$(".hour-2 li").click(function(){
//			var html = $(this).html();
//			$(".hour-2-click span:first-child").html(html);
//			$(".hour-2").stop().slideUp();
//		});
//	});
//	$(".minute-click").click(function(){
//		$(".minute").slideDown();
//		$(".minute li").click(function(){
//			var html = $(this).html();
//			$(".minute-click span:first-child").html(html);
//			$(".minute").stop().slideUp();
//		});
//	});
//	$(".minute-2-click").click(function(){
//		$(".minute-2").slideDown();
//		$(".minute-2 li").click(function(){
//			var html = $(this).html();
//			$(".minute-2-click span:first-child").html(html);
//			$(".minute-2").stop().slideUp();
//		});
//	});
	//时分的选择（已改需求）end
	
	
	//工作页面选择同事窗口 2 start
	$("#two-choose-workmate-colleague > ul div p input").focus(function(){
		$(".two-colleague-search").fadeIn();
		$(".two-choose-workmate-list").hide();
	});
	$("#two-choose-workmate-colleague > ul div").hover(function(){
		$(this).children("p:last-child").fadeIn();
		$(this).children("p:last-child").click(function(){
			$(".two-colleague-search").hide();
			$(".two-choose-workmate-list").fadeIn();
		});
	}).mouseleave(function(){
		$(this).children("p:last-child").hide();
	});
	$(".two-choose-workmate-list > ul li p:nth-child(1)").click(function(){
		var two_attr = $(this).attr("class");
		if(two_attr == "true"){
			$(this).html('<img src="img/check-box-1.png">').attr("class","true");
		}else{
			$(this).html('<img src="img/checked-1.png">').attr("class","true");
		}
	});
	$(".two-choose-workmate-list > p span:last-child").click(function(){
		$(this).html('<img src="img/checked.png">');
	});
	$(".two-choose-workmate-top p:nth-child(2)").click(function(){
		$("#two-choose-workmate").hide();
	});
	$(".two-choose-workmate-click").click(function(){
		$("#two-choose-workmate").hide();
	});
	//工作页面选择同事窗口 2 end
	
	
	//点击名片查看详情start
	$(".people-card-left").click(function(){
		$("#personal-information").fadeIn();
	});
	//点击名片查看详情end
	
	
	
	//@人start
	$(document).bind("click",function(hover_a){
		var target = $(hover_a.target);
		var i =target.closest(".hover-a").length;
		if(i == 1){
			$(".hover-a").siblings("ul").fadeIn();
		}else{
			$(".hover-a").siblings("ul").stop().fadeOut();
			click_a();//点击@弹出框选择
		}
	});
	//@人end
	
	
	//点击弹出撤回与删除框start
// 	$(document).bind("click",function(chat_delete){
//		var target = $(chat_delete.target);
//		var i = target.closest(".chat_click_delete img").length;
//		if(i == 1){
//			chat_click_delete();//点击弹出撤回与删除框
////			$(".chat_click_delete span").fadeIn();
//		}else{
//			$(".chat_click_delete span").hide();
//		}
//	});
	//点击弹出撤回与删除框end
	
	
	//点击弹出撤回与删除框start
	$(document).bind("click",function(chat_delete){
		var target = $(chat_delete.target);
		var i = target.closest(".chat-delete>span:nth-child(1)").length;
		if(i == 1){
			chat_delete_this();//撤回消息
			chat_remove_this();//撤回选择消息
		}else{
			$(".chat-delete>span:nth-child(1) span").hide();
		}
	});
	//点击弹出撤回与删除框end
	
	
	
	//放大功能strat
	var big_chat = function(){
		var height = $(this).height();
		var width = $(this).width();
		$(window).resize(function(){
			 height = $(this).height();
			 width = $(this).width();
		});
		var click_big_chat = 1;
		$(".window-right > div:nth-child(1) div:nth-child(2) p:nth-child(3)").click(function(){
			var click_button = $(".window-right>div:nth-child(1) div:nth-child(2) p:nth-child(3)");
			click_big_chat ++;
			if(click_big_chat == 2){
				click_button.html('<img src="img/recrovery.png"/>');
				$(".saas-Enterprise-WeChat-click").attr("i","true");
				$(".saas-Enterprise-WeChat-click").hide().fadeIn(400);	
				$(".saas-chatWindow").hide().fadeIn(400);	
				$(".saas-Enterprise-WeChat-click").css("right","0px");
				$(".saas-chatWindow").css("right","222px");
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
			  		$("body").css("overflow-y","auto");
			  		$("#click_nav_1>ul").css("height",480-232);
			  		$(".click-search-list").css("height",480-172);
			  	}
				if(width<=827){
					$(".window-right").css("width",827-411);
		  			$(".saas-chatWindow").css("width",827-220);
				}
			}else{
				click_button.html('<img src="img/max.png"/>');
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
				click_big_chat = 1;
			}
		});
		//聊天窗口点击右边获取对应框及内容start
		$(".window-left li").click(function (){
			var left_index = $(this).index();
			mail_name_win = $(this).children("div:nth-child(2)").html();
			$(this).attr("class","bk-list-1").siblings().removeAttr("class");
			$(".window-right > div:nth-child(1)>div:nth-child(1) ").html(mail_name_win);
			$(".saas-chatWindow>div:eq("+left_index+")").fadeIn(400).siblings("div").hide();
			$(this).children("div:nth-child(3)").hide();
		});
		//聊天窗口点击右边获取对应框及内容end
	}
	//放大功能end
	
	
	//加载图片start
	$("#load").hide();
//	var onload_img = function(){
//		$("#load").hide();
//	}
//	var timer = setInterval( onload_img , 2000);
	//加载图片end
	delete_this();						//删除上传附件
	delete_this_2();					//删除上传附件
	hover_a();							//@弹出框
	textarea_key();						//输入@弹出框
	report_hide();						//关闭我的日报
	show_bigImg();						//点击查看图片
	closeWindow();						//关闭添加阅读人
	closePYwindow();				    //关闭添加抄送人
	big_chat();							//聊天放大功能
});
	//点击弹出撤回与删除框start
//	function chat_click_delete(){
//		$(".chat_click_delete").click(function(){
//			$(this).children("span").fadeIn();
//		});
//	}
	//点击弹出撤回与删除框end
	
	
	//撤回消息start
	function chat_delete_this(){
		$(".chat-delete img").click(function(){
			$(this).siblings("span").fadeIn();
		});
	}
	//撤回消息end
	
	//撤回选择消息start
	function chat_remove_this(){
		$(".chat-delete span:nth-child(1) span b").click(function(){
			$(this).parent("span").parent("span").parent(".chat-delete").parent("p").parent("div").parent("li").remove();
		});
	}
	//撤回选择消息end
	

	//聊天窗口左边移动叉叉显示start
	function window_left_hover(){
		$(".window-left li").hover(function (){
			$(this).children("div:nth-child(4)").show();
			$(this).children("div:nth-child(3)").hide();
			$(this).children("div:nth-child(4)").click(function(){
																	$(this).parent("li").hide();
																});
		}).mouseleave(function(){
			$(this).children("div:nth-child(4)").hide();
			$(this).children("div:nth-child(3)").show();
		});
	}
	//聊天窗口左边移动叉叉显示end
	
	
	
	//聊天窗口邀请新同事开始start
	function invite_chat(){
		$(".invite-chat").click(function(){
			$("#window-chat-right-invite").fadeIn();
		});
	}
	//聊天窗口邀请新同事开始end
	
	
	//聊天窗口发送按钮start
	function button_information(){
		$(".li-bottom-button").click(function(){
			var send_html = $(this).siblings("textarea").val();
			var send_img = $("#saas-img").html();
			var send_name = $("#saas-user span:first-child").html();
			$(this).parents(".li-bottom-1").siblings("div:nth-child(2)").children("ul").append('<li class="li-right">'
+'								<div>'+send_img+'</div>'
+'								<div>'
+'                                  <p>2016-01-07 16:33:56</p>'
+'									<p>'+send_html+'</p>'
+'								</div>'
+'							</li>');
			$(this).siblings("textarea").val("");
		});
	}
	//聊天窗口发送按钮end
	
	
	//弹出表情start
	function brow(){
		$(document).bind("click",function(brow){
		var target = $(brow.target);
		var i =target.closest(".brow>img").length;
		if(i == 1){
			$(".brow ul").fadeIn();
		}else{
			$(".brow ul").stop().fadeOut();
		}
		});
	}
	//弹出表情end
	
	
	//点击表情start
	function brow_img(){
		$(".brow ul li").click(function(){
			var content = $(this).parent("ul").parent(".brow").parent("div").siblings("textarea").html();
			var brow_html = $(this).html();
			$(this).parent("ul").parent(".brow").parent("div").siblings("textarea").html(content+brow_html);
		});
	}
	//点击表情end
	
	
	//聊天窗口左边hover显示叉叉按钮start
	function window_left_hover_delete(){
		$(".window-left li").hover(function(){
			$(this).children("div:nth-child(3)").fadeIn();
		});
	}
	//聊天窗口左边hover显示叉叉按钮end
	
	
	//查看大图start
	function img_big(){
		$(document).bind("click",function(big_img){
		var target = $(big_img.target);
		var i =target.closest(".img_big").length;
		if(i == 1){
			$(".img_big").fadeIn();
		}else{
			$(".img_big").stop().fadeOut();
		}
		});
	}
	//查看大图end
	
	
	//关闭聊天窗口start
	function window_down(){
		$(".window-down").click(function(){
			$(".saas-chatWindow").fadeOut(400);
			
		});
	}
	//关闭聊天窗口end
	
	
	//邀请新同事start
	function invite(){
		$("#click_nav_1> p").click(function(){
			$("#window-chat-right-invite").fadeIn();
		});
	}
	//邀请新同事end
	
	//点击选择指定人	strat
	function overt_ul(){
		$(".overt-ul p").click(function(){
			var html = $(this).html();
			$(".overt-click>p:first-child").html(html);
			$(".overt-ul").stop().slideUp();
			if(html == "指定人可见"){
				$("#choose-workmate").fadeIn();
				$(".choose-workmate-top p:nth-child(1)").html("选择指定人");
				$(".choose-workmate-click").click(function(){
					$(".choose-workmate-top p:nth-child(1)").html("选择同事");
					$("#choose-workmate").hide();
					$(".overt").fadeIn();
				});
				$(".choose-workmate-top p:nth-child(2)").click(function(){
					$("#choose-workmate").hide();
					$(".choose-workmate-top p:nth-child(1)").html("选择同事");
				});
			}
		});
	}
	//点击选择指定人	end
	
	
	//提醒start
	function warn_ul(){
		$(".warn").siblings("ul").children("li").click(function(){
			var html = $(this).html();
			$(".warn").children("span:first-child").html(html);
			$(this).parent("ul").stop().hide();
		});
	}
	//提醒end
	
	
	//@弹出框start
	function hover_a(){
		$(".hover-a").hover(function(){
			$("hover-a span").fadeIn();
		}).mouseleave(function(){
			$("hover-a span").stop().fadeOut();
		});
	}
	//@弹出框end
	
	
	//点击@弹出框选择start
	function click_a(){
		$(".li-bottom-1>div ul li").click(function(){
			$(".li-bottom-1>div ul").stop().fadeOut();
		});
	}
	//点击@弹出框选择end
	
	
	//输入@弹出框start
	function textarea_key(){
	$("textarea").keydown(function(){
			$(".a_click").fadeIn();
		});
	}
	//输入@弹出框end
	
	
	//发送附件start
	function enclosure(){
		$(".enclosure-click").click(function(){
			$(".enclosure").fadeIn();
		});
		$(".enclosure-top p:nth-child(2)").click(function(){
			$(".enclosure").stop().fadeOut();
		});
		$(".enclosure-a div:nth-child(1)").hover(function(){
			$(".enclosure-a div:nth-child(1) p:nth-child(2)").fadeIn();
		}).mouseleave(function(){
			$(".enclosure-a div:nth-child(1) p:nth-child(2)").stop().fadeOut();
		});
		$(".enclosure-a div:nth-child(4)").click(function(){
			$(".enclosure-a").hide();
			$(".enclosure-b").show();
		});
		$(".enclosure-b ul li").hover(function(){
			$(this).children("div:nth-child(3)").fadeIn();
		}).mouseleave(function(){
			$(this).children("div:nth-child(3)").stop().fadeOut();
		});
	}
	//发送附件end
	
	
	//点击附件，进度条变化start
	function send_enclosure_right(){
		$(".download-right i").animate({width:"10%"},400);
	}
	//点击附件，进度条变化end	
	
	
	//删除上传附件start
	function delete_this(){
		$(".span-accessory b:nth-child(3)").click(function(){
			var length = $(".this-length .span-accessory").length;
			if(length == 1){
				$(this).parent(".span-accessory").parent("div").remove();
			}
			$(this).parent(".span-accessory").remove();
		});
	}
	function delete_this_2(){
		$(".add-accessory p:nth-child(3)").click(function(){
			$(this).parents(".add-accessory").remove();
		});
	}
	//删除上传附件end
	
	
	//关闭我的工作报告start
	function report_hide(){
		$(".report-top div:last-child p:nth-child(3)").click(function(){
			$(".report").hide();
		});
	}
	//关闭我的工作报告end
	
	
	//点击查看图片start
	function show_bigImg(){
		$(".mail-list-1 img").click(function(){
			$(".img_big").fadeIn();
		});
	}
	//点击查看图片end
	
	
	//聊天置底start
    function setBottom(){  
        var div = document.getElementById('outputArea');  
        div.scrollTop = div.scrollHeight;   
    }  
    //聊天置底end
	
	function closeWindow(){
		$(".choose-workmate-top p:last-child").click(function(){
			$("#choose-workmate").hide();
		});
	}
	
	
	function closePYwindow(){
		$(".mate-invite-group-top p:last-child").click(function(){
			$("#mate-invite-group").hide();
		});
	}
