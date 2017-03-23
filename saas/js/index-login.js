window.onload = function() {
	var height = $(this).height();
	var login_height = $(".login").height(); 
	if(height <= login_height+70){
		$(".login").css("top","30px");
		$(".login-app").css("top","30px");
	}else{
		$(".login").css("top",(height-login_height-70)/2);
		$(".login-app").css("top",(height-login_height-70)/2);
	}
};
	//加载页面时，页面内容变化
$(window).resize(function() {
	var height = $(this).height();
	var login_height = $(".login").height();
	if(height <= login_height+70){
		$(".login").css("top","30px");
		$(".login-app").css("top","30px");
	}else{
		$(".login").css("top",(height-login_height-70)/2);
		$(".login-app").css("top",(height-login_height-70)/2);
	}
});
	//拖动浏览器时，页面内容的变化
$(function(){
	$(".login-top div").click(function(){
		var i = $(this).index();
		$(this).children().attr("id","border-bottom").parent("div").siblings().children().removeAttr("id");
		if (i == 0){
			$(".login-content-1").fadeIn(400);
			$(".login-content-2").hide();
		}else{
			$(".login-content-2").fadeIn(400);
			$(".login-content-1").hide();
		}
	});
	//登录方式的切换
	var write = $(".login-content-2 p:nth-child(2) input").val();
	$(".login-content-2 p").click(function(){
			$(".login-content-2 p:nth-child(5) input").css("background","#0066CC").css("color","#fff");
	});
			$(".href").click(function(){
				if(write == ""){
					$(".login-content-2 p:nth-child(4)").slideDown();
					$(".login-content-2 p:nth-child(2) input").click(function(){
						$(".login-content-2 p:nth-child(4)").slideUp();
					});
					$(".login-content-2 p:nth-child(3) input").click(function(){
						$(".login-content-2 p:nth-child(4)").slideUp();
					});
				}else{
					window.location.href = 'index-home.html';
				}
			});
	//登录
	
	$(".login-content-2 p:nth-child(5) input").click(function(){
		location.href = "index-home.html";
	});
	
	
	$(".login-content-1 p img").click(function(){
		$(".login-app").show();
	});
	$(".login-app li:nth-child(4)").click(function(){
		$(".login-app").hide();
	});
});