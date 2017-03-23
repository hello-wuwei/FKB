window.onload = function() {
	var height = $(this).height();
	var register_height = $(".register").height();
	if(height <= register_height+100){
		$(".register").css("top","30px");
	}else{
		$(".register").css("top",(height-register_height-70)/2);
	}
};
	//加载页面时，页面内容变化
$(window).resize(function() {
	var height = $(this).height();
	var register_height = $(".register").height();
	$(".register").css("top",(height-register_height-70)/2);
	if(height <= register_height+100){
		$(".register").css("top","30px");
	}else{
		$(".register").css("top",(height-register_height-70)/2);
	}
});
	//拖动浏览器时，页面内容的变化
$(function(){
	$(".forgetPassword-href1").click(function(){
		$(".forgetPassword-1").hide();
		$(".forgetPassword-2").fadeIn(400);
		$(".register-top p:first-child").html('<img src="img/flow-2.png"/>');
		$(".register-top p:nth-child(2) span:nth-child(2)").css("color","#000");
	});
	//验证手机下一步
	$(".forgetPassword-href2").click(function(){
		$(".forgetPassword-2").hide();
		$(".forgetPassword-3").fadeIn(400);
		$(".register-top p:first-child").html('<img src="img/flow-3.png"/>');
		$(".register-top p:nth-child(2) span:nth-child(3)").css("color","#000");
	});
	//重置密码下一步
	$(".forgetPassword-1 input").click(function(){
		$(".forgetPassword-href1").css("background","#0066CC").css("color","#fff");
	});
	$(".forgetPassword-2 input").click(function(){
		$(".forgetPassword-href2").css("background","#0066CC").css("color","#fff");
	});
	//点击后下一步按钮的背景色变化
	var wait=60;
	function time(o) {
	        if (wait == 0) {
	            o.removeAttribute("disabled");           
	            o.value="获取验证码";
	            wait = 60;
	        } else {
	            o.setAttribute("disabled", true);
	            o.value="重新发送(" + wait + ")";
	            wait--;
	            setTimeout(function() {
	                time(o)
	            },
	            1000)
	        }
	    }
	document.getElementById("btn").onclick=function(){time(this);
	//验证码倒计时
	}
});