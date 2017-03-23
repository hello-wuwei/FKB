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
	$(".register-href1").click(function(){
		$(".register-1").hide();
		$(".register-2").fadeIn(400);
		$(".register-top p:first-child").html('<img src="img/flow-2.png"/>');
		$(".register-top p:nth-child(2) span:nth-child(2)").css("color","#000");
	});
	//填写手机号码下一步
	$(".register-1 p:nth-child(2)").click(function(){
		$(this).siblings(".register-div1").fadeIn(400);
		$(".register-href1").css("background","#0066CC").css("color","#fff");
	});
	//点击后,按钮变蓝色 /错误提示弹出
	$(".register-2 div:first-child").click(function(){
		$(".register-2-1").fadeIn(400);
	});
	//加入企业
	$(".register-2-1 div").click(function(){
		$(".register-2-1").fadeOut();
	});
	//加入企业弹出框,叉叉按钮
	$(".register-2 div:nth-child(3)").click(function(){
		$(".register-2-2").fadeIn(400);
	});
	//创建企业
	$(".register-2-2 div").click(function(){
		$(".register-2-2").fadeOut();
	});
	//创建企业弹出框,叉叉按钮
	$(".register-href2").click(function(){
		$(".register-2").hide();
		$(".register-4").fadeIn(400);
		$(".register-top p:first-child").html('<img src="img/flow-3.png"/>');
		$(".register-top p:nth-child(2) span:nth-child(3)").css("color","#000");
	});
	//加入该企业按钮
	$(".register-href3").click(function(){
		$(".register-2").hide();
		$(".register-3").fadeIn(400);
		$(".register-top p:first-child").html('<img src="img/flow-3.png"/>');
		$(".register-top p:nth-child(2) span:nth-child(3)").css("color","#000");
	});
	//创建企业下一步
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
	//登录方式的切换