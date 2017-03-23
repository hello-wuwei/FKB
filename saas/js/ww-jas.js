$(document).ready(function(){
	
	
	
	//点击职级页面导出，弹出导出职级弹框
	$(".out-grade").click(function(){
		$(".alert-5").fadeIn();
	});
	$(".box-top p").click(function(){
		$(".alert-5").fadeOut();		
	});
	
	
	//点击职级页面新增，弹出新增职级弹框
	$(".new-add-1").click(function(){
		$(".alert-2").fadeIn();
	});
	$(".close-new-add").click(function(){
		$(".alert-2").fadeOut();		
	});


	//点击职位页面导出，弹出导出职位弹框
	$(".out-move-2").click(function(){
		$(".alert-6").fadeIn();
	});
	$(".close-out-grade-2").click(function(){
		$(".alert-6").fadeOut();		
	});
	
	
	
	//点击职位页面新增，弹出新增职位弹框
	$(".new-add-2").click(function(){
		$(".alert-4").fadeIn();
	});
	$(".close-new-position").click(function(){
		$(".alert-4").fadeOut();		
	});
	
	//审批流程页面
		//点击添加一级审批，增加审批列表
	$(".department-set-1 .plus-list-icon-1").click(function(){
		$(".department-set-1 .order-foot-right ul").append('<li><select style="color:#999999;"><option>请选择审批人</option><option>请选择审</option></option><option>请选择</option></select>金额<input type="text" style="color:#999999; margin-left:12px;" value="4567890"/><p><img src="img/check-box-3.png"/></p><b style="margin-left: 38px;">必经节点</b><div class="position-department-set"><span style="color:#999999; width: 87px; line-height: 28px;">职位：待设置</span><span style="color:#999999; width: 74px; margin-left: 26px; line-height: 28px;">部门：待设置</span></div><div class="selete-last selete-last-1"><img src="img/disable-2.png"></div></li>')
		var k = $(".department-set-1 .order-foot-left .small-part").length;
		k++;
		$(".department-set-1 .order-foot-left").append('<div class="small-part"><div class="line-foot-before"></div><div class="circle-foot">'+k+'</div><div class="line-foot-after"></div></div>');
	});
	
	
	$(".department-set-2 .plus-list-icon-2").click(function(){
		$(".department-set-2 .order-foot-right ul").append('<li><select style="color:#999999;"><option>请选择审批人</option></select>金额<input type="text" style="color:#999999; margin-left:12px;" value="4567890"/><p><img src="img/check-box-3.png"/></p><b style="margin-left: 38px;">必经节点</b><div class="position-department-set"><span style="color:#999999; width: 87px; line-height: 28px;">职位：待设置</span><span style="color:#999999; width: 74px; margin-left: 26px; line-height: 28px;">部门：待设置</span></div><div class="selete-last selete-last-2"><img src="img/disable-2.png"></div></li>');
		var k = $(".department-set-2 .order-foot-left .small-part").length;
		k++;
		$(".department-set-2 .order-foot-left").append('<div class="small-part"><div class="line-foot-before"></div><div class="circle-foot">'+k+'</div><div class="line-foot-after"></div></div>');
	});
	
	$(".department-set-3 .plus-list-icon-3").click(function(){
		$(".department-set-3 .order-foot-right ul").append('<li><select style="color:#999999;"><option>请选择审批人</option></select>金额<input type="text" style="color:#999999; margin-left:12px;" value="4567890"/><p><img src="img/check-box-3.png"/></p><b style="margin-left: 38px;">必经节点</b><div class="position-department-set"><span style="color:#999999; width: 87px; line-height: 28px;">职位：待设置</span><span style="color:#999999; width: 74px; margin-left: 26px; line-height: 28px;">部门：待设置</span></div><div class="selete-last selete-last-3"><img src="img/disable-2.png"></div></li>');
		var k = $(".department-set-3 .order-foot-left .small-part").length;
		k++;
		$(".department-set-3 .order-foot-left").append('<div class="small-part"><div class="line-foot-before"></div><div class="circle-foot">'+k+'</div><div class="line-foot-after"></div></div>');
	});
	
	
	
	//审批流程修改弹框增加审批级
	$(".edit-department-check-1 .plus-list-icon-1").click(function(){
		$(".edit-department-check-1 .order-foot-right ul").append('<li><select style="color:#999999;"><option>请选择审批人</option></select>金额<input type="text" style="color:#999999; margin-left:12px;" value="4567890"/><p><img src="img/check-box-3.png"/></p><b style="margin-left: 38px;">必经节点</b><div class="position-department-set"><span style="color:#999999; width: 87px; line-height: 28px;">职位：待设置</span><span style="color:#999999; width: 74px; margin-left: 26px; line-height: 28px;">部门：待设置</span></div><div class="selete-last selete-last-1"><img src="img/disable-2.png"></div></li>')
		var k = $(".edit-department-check-1 .order-foot-left .small-part").length;
		k++;
		$(".edit-department-check-1 .order-foot-left").append('<div class="small-part"><div class="line-foot-before"></div><div class="circle-foot">'+k+'</div><div class="line-foot-after"></div></div>');
	});
	
	
	$(".edit-department-check-2 .plus-list-icon-2").click(function(){
		$(".edit-department-check-2 .order-foot-right ul").append('<li><select style="color:#999999;"><option>请选择审批人</option></select>金额<input type="text" style="color:#999999; margin-left:12px;" value="4567890"/><p><img src="img/check-box-3.png"/></p><b style="margin-left: 38px;">必经节点</b><div class="position-department-set"><span style="color:#999999; width: 87px; line-height: 28px;">职位：待设置</span><span style="color:#999999; width: 74px; margin-left: 26px; line-height: 28px;">部门：待设置</span></div><div class="selete-last selete-last-2"><img src="img/disable-2.png"></div></li>');
		var k = $(".edit-department-check-2 .order-foot-left .small-part").length;
		k++;
		$(".edit-department-check-2 .order-foot-left").append('<div class="small-part"><div class="line-foot-before"></div><div class="circle-foot">'+k+'</div><div class="line-foot-after"></div></div>');
	});
	
	$(".edit-department-check-3 .plus-list-icon-3").click(function(){
		$(".edit-department-check-3 .order-foot-right ul").append('<li><select style="color:#999999;"><option>请选择审批人</option></select>金额<input type="text" style="color:#999999; margin-left:12px;" value="4567890"/><p><img src="img/check-box-3.png"/></p><b style="margin-left: 38px;">必经节点</b><div class="position-department-set"><span style="color:#999999; width: 87px; line-height: 28px;">职位：待设置</span><span style="color:#999999; width: 74px; margin-left: 26px; line-height: 28px;">部门：待设置</span></div><div class="selete-last selete-last-3"><img src="img/disable-2.png"></div></li>');
		var k = $(".edit-department-check-3 .order-foot-left .small-part").length;
		k++;
		$(".edit-department-check-3 .order-foot-left").append('<div class="small-part"><div class="line-foot-before"></div><div class="circle-foot">'+k+'</div><div class="line-foot-after"></div></div>');
	});
	
	//审批弹框必经节点选框按钮
	$(".order-foot-right ul li > p >img").live("click",function(){
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
		};
	});
		
	//点击红色删除按钮，弹出删除审批流弹框
	//点击删除弹框确定，弹框消失，同时删除对应级的审批
	$(".selete-last img").live("click",function(){
		var that = $(this).parent().parent();
		var other = that.parent().parent().prev().children().last();
		$(".delete-check-1").fadeIn();
		$(".delete-check-alert button").click(function(){
		$(".delete-check-1").fadeOut();
		other.remove();
		that.remove();
		});
	});
	$(".delete-check-alert-top > p > img").click(function(){
		$(".delete-check-1").fadeOut();		
	});
	
	
	//设置值     进行
	
	
	
	
	

	
	//审批流三板块导出按钮，弹出导出审批流弹框
	$(".remove-outto-1").click(function(){
		$(".export-check-1").fadeIn();
	});
	$(".export-check-alert-top > p > img").click(function(){
		$(".export-check-1").fadeOut();		
	});
	
	$(".remove-outto-2").click(function(){
		$(".export-check-2").fadeIn();
	});
	$(".export-check-alert-top > p > img").click(function(){
		$(".export-check-2").fadeOut();		
	});
	
	$(".remove-outto-3").click(function(){
		$(".export-check-3").fadeIn();
	});
	$(".export-check-alert-top > p > img").click(function(){
		$(".export-check-3").fadeOut();		
	});
	
	
	//点击审批流程按钮切换按钮样式
	$(".department-icon").click(function(){
		$(".department-icon").addClass("reset-manage").removeClass("reset-please");
		$(".reset-jurisdiction").addClass("reset-please").removeClass("reset-manage");
		$(".reset-set").addClass("reset-please").removeClass("reset-manage");
	})
	
	
	//点击审批流程按钮切换板块
	$(".reset-set").click(function(){
		$(".function-box-content-1").show();
		$(".function-box-content-2").hide();
		$(".function-box-content-3").hide();
	})
	$(".reset-jurisdiction").click(function(){
		$(".function-box-content-2").show();
		$(".function-box-content-1").hide();
		$(".function-box-content-3").hide();
	})
	$(".department-icon").click(function(){
		$(".function-box-content-3").show();
		$(".function-box-content-1").hide();
		$(".function-box-content-2").hide();
	})
	
	//点击部门业务板块创建，弹出部门业务审批弹框
	$(".build-new-1").click(function(){
		$(".department-set-1").fadeIn();
	});
	$(".department-alert-top p img").click(function(){
		$(".department-set-1").fadeOut();		
	});
	
	
	//点击部门业务板块创建，弹出部门业务审批弹框
	$(".build-new-2").click(function(){
		$(".department-set-2").fadeIn();
	});
	$(".department-alert-top p img").click(function(){
		$(".department-set-2").fadeOut();		
	});
	
	
	//点击部门业务板块创建，弹出部门业务审批弹框
	$(".build-new-3").click(function(){
		$(".department-set-3").fadeIn();
	});
	$(".department-alert-top p img").click(function(){
		$(".department-set-3").fadeOut();		
	});
	
	
	//点击修改弹出编辑业务审批流程弹框
	$(".function-box-content-1 .change-edit-order").click(function(){
		$(".edit-department-check-1").fadeIn();
	});
	$(".department-alert-top > p > img").click(function(){
		$(".edit-department-check-1").fadeOut();		
	});
	
	$(".function-box-content-2 .change-edit-order").click(function(){
		$(".edit-department-check-2").fadeIn();
	});
	$(".department-alert-top > p > img").click(function(){
		$(".edit-department-check-2").fadeOut();		
	});
	
	$(".function-box-content-3 .change-edit-order").click(function(){
		$(".edit-department-check-3").fadeIn();
	});
	$(".department-alert-top > p > img").click(function(){
		$(".edit-department-check-3").fadeOut();		
	});
	
	//部门业务审批流程下拉菜单
	$(".function-box-content-top > span").click(function(){
		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
	});
	
	
	//部门业务审批流程选择点击效果
	//全选
	var havecheckOne = 0;
	$(".function-box-content-1 .function-box-content-top p img").click(function(){
		var index = $(".function-box-content-1 .function-box-content-list > ul > li").index();
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".function-box-content-1 .function-box-content-list > ul > li > p >img").attr("src","img/check-box-3.png").attr("i","");
			havecheckOne = 0;
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			$(".function-box-content-1 .function-box-content-list > ul > li > p >img").attr("src","img/checked.png").attr("i","true");
			havecheckOne = index+1;	
		};
		$(".function-box-content-1 .function-box-content-foot span:nth-child(2) span").html(havecheckOne);
		if(havecheckOne != 0){
			$(".function-box-content-1 .function-box-content-foot p img").attr("src","img/checked.png");
		}else{
			$(".function-box-content-1 .function-box-content-foot p img").attr("src","img/check-box-3.png");
		};
	});
	//当子选项不全选时，全选按钮还原。
	$(".function-box-content-1 .function-box-content-list > ul > li > p >img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".function-box-content-1 .function-box-content-top p img").attr("src","img/check-box-3.png").attr("i","");
			havecheckOne--;
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			havecheckOne++;
		};
		$(".function-box-content-1 .function-box-content-foot span:nth-child(2) span").html(havecheckOne);
		if(havecheckOne != 0){
			$(".function-box-content-1 .function-box-content-foot p img").attr("src","img/checked.png");
		}else{
			$(".function-box-content-1 .function-box-content-foot p img").attr("src","img/check-box-3.png");
		};
	});
	
	
	//项目业务审批流程选择点击效果
	//全选
	var havecheckTwo = 0;
	$(".function-box-content-2 .function-box-content-top p img").click(function(){
		var index = $(".function-box-content-2 .function-box-content-list > ul > li").index();
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".function-box-content-2 .function-box-content-list > ul > li > p >img").attr("src","img/check-box-3.png").attr("i","");
			havecheckTwo = 0;
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			$(".function-box-content-2 .function-box-content-list > ul > li > p >img").attr("src","img/checked.png").attr("i","true");
			havecheckTwo = index+1;	
		};
		$(".function-box-content-2 .function-box-content-foot span:nth-child(2) span").html(havecheckTwo);
		if(havecheckTwo != 0){
			$(".function-box-content-2 .function-box-content-foot p img").attr("src","img/checked.png");
		}else{
			$(".function-box-content-2 .function-box-content-foot p img").attr("src","img/check-box-3.png");
		};
	});
	//当子选项不全选时，全选按钮还原。
	$(".function-box-content-2 .function-box-content-list > ul > li > p >img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".function-box-content-2 .function-box-content-top p img").attr("src","img/check-box-3.png").attr("i","");
			havecheckTwo--;
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			havecheckTwo++;
		};
		$(".function-box-content-2 .function-box-content-foot span:nth-child(2) span").html(havecheckTwo);
		if(havecheckTwo != 0){
			$(".function-box-content-2 .function-box-content-foot p img").attr("src","img/checked.png");
		}else{
			$(".function-box-content-2 .function-box-content-foot p img").attr("src","img/check-box-3.png");
		};
	});
	
	//部门预算审批流程选择点击效果
	//全选
	var havecheckThree = 0;
	$(".function-box-content-3 .function-box-content-top p img").click(function(){
		var index = $(".function-box-content-3 .function-box-content-list > ul > li").index();
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".function-box-content-3 .function-box-content-list > ul > li > p >img").attr("src","img/check-box-3.png").attr("i","");
			havecheckThree = 0;
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			$(".function-box-content-3 .function-box-content-list > ul > li > p >img").attr("src","img/checked.png").attr("i","true");
			havecheckThree = index+1;	
		};
		$(".function-box-content-3 .function-box-content-foot span:nth-child(2) span").html(havecheckThree);
		if(havecheckThree != 0){
			$(".function-box-content-3 .function-box-content-foot p img").attr("src","img/checked.png");
		}else{
			$(".function-box-content-3 .function-box-content-foot p img").attr("src","img/check-box-3.png");
		};
	});
	//当子选项不全选时，全选按钮还原。
	$(".function-box-content-3 .function-box-content-list > ul > li > p >img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".function-box-content-3 .function-box-content-top p img").attr("src","img/check-box-3.png").attr("i","");
			havecheckThree--;
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			havecheckThree++;
		};
		$(".function-box-content-3 .function-box-content-foot span:nth-child(2) span").html(havecheckThree);
		if(havecheckThree != 0){
			$(".function-box-content-3 .function-box-content-foot p img").attr("src","img/checked.png");
		}else{
			$(".function-box-content-3 .function-box-content-foot p img").attr("src","img/check-box-3.png");
		};
	});
	
	
	//禁用操作单：角色权限hover效果
	$(".assistant-list-img-22 > img").mouseover(function(){	
		$(this).attr("src","img/move-2-icon.png");
	});
	$(".assistant-list-img-22 > img").mouseout(function(){	
		$(this).attr("src","img/move-1-icon.png");		
	});
	
	$(".assistant-list-img-11 > img").mouseover(function(){	
		$(this).attr("src","img/move-role-icon.png");
	});
	$(".assistant-list-img-11 > img").mouseout(function(){	
		$(this).attr("src","img/role-icon.png");		
	});
	
	
	//点击个人信息页面标题块，切换板块
	$(".personal-information-header > div").click(function(){
		var index = $(this).index();
		$(this).addClass("add-personal-style").siblings().removeClass("add-personal-style");
		$(".information-header-big-block > div").eq(index).show().siblings().hide();	
	});
	
	//个人信息页面点击性别单选
	$(".choose-boy-circle").click(function(){
		var i = $(this).children("img").attr("i");
			$(this).children("img").attr("i","true").attr("src","img/checked-1.png").parent().parent().siblings().children(".choose-boy-circle").children("img").attr("i","").attr("src","img/check-box-1.png");
	});	
	
	//报销页面币种点击选择下拉列表
	$(".list-choose-currency").click(function(){
		$(".slide-down").slideToggle();
	});
	$(".slide-down > p").click(function(){
		var html = $(this).html();
		$(this).parent().parent().children(".down-text-icon").children("input").val(html);
	});
	
	//点击开支流水主页面下三板块切换
	$(".expenditure-water > div").click(function(){
		var index = $(this).index();
		$(this).addClass("expenditure-waterlist-bag").siblings().removeClass("expenditure-waterlist-bag");
		$(this).children().children("span").css("color","#277BCF");
		$(this).siblings().children().children("span").css("color","#333333");
		if(index == 1){
			$(this).children().children("img").attr("src","img/water-icon.png");
			$(this).siblings(".expenditure-waterlist-2").children().children("img").attr("src","img/not-pay-2.png");
			$(this).siblings(".expenditure-waterlist-3").children().children("img").attr("src","img/have-pay-2.png");
		}else if(index == 2){
			$(this).children().children("img").attr("src","img/not-pay-1.png");
			$(this).siblings(".expenditure-waterlist-1").children().children("img").attr("src","img/water-icon-1.png");
			$(this).siblings(".expenditure-waterlist-3").children().children("img").attr("src","img/have-pay-2.png");
		}else if(index == 3){
			$(this).children().children("img").attr("src","img/have-pay-1.png");
			$(this).siblings(".expenditure-waterlist-1").children().children("img").attr("src","img/water-icon-1.png");
			$(this).siblings(".expenditure-waterlist-2").children().children("img").attr("src","img/not-pay-2.png");
		};
		$(".work-content-box > div").eq(index-1).show().siblings().hide();
	});
	
	$(".expenditure-water-top .not-top").click(function(){
		var check = $(".expenditure-waterlist-2");
		check.addClass("expenditure-waterlist-bag").siblings().removeClass("expenditure-waterlist-bag");
		check.children().children("span").css("color","#277BCF");
		check.siblings().children().children("span").css("color","#333333");
		check.children().children("img").attr("src","img/not-pay-1.png");
		check.siblings(".expenditure-waterlist-1").children().children("img").attr("src","img/water-icon-1.png");
		check.siblings(".expenditure-waterlist-3").children().children("img").attr("src","img/have-pay-2.png");
		$(".not-apply-content-1").show().siblings().hide();
	});
	
	$(".expenditure-water-top .have-top").click(function(){
		var checkH = $(".expenditure-waterlist-3");
		checkH.addClass("expenditure-waterlist-bag").siblings().removeClass("expenditure-waterlist-bag");
		checkH.children().children("span").css("color","#277BCF");
		checkH.siblings().children().children("span").css("color","#333333");
		checkH.children().children("img").attr("src","img/have-pay-1.png");
		checkH.siblings(".expenditure-waterlist-1").children().children("img").attr("src","img/water-icon-1.png");
		checkH.siblings(".expenditure-waterlist-2").children().children("img").attr("src","img/not-pay-2.png");
		$(".not-apply-content-2").show().siblings().hide();
	});
	
	
	//开支流水页面未报销板块，全选
	var n = 0;
	$(".all-choose-list p img").click(function(){
		var index = $(".not-apply-content-1 .have-pay").index();
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".boxCheck img").attr("src","img/check-box-3.png").attr("i","");
			n = 0;
		}else{
			$(this).attr("i","true").attr("src","img/checked-7.png");
			$(".boxCheck img").attr("src","img/checked-7.png").attr("i","true");
			n = index + 1;
		}
		$(".choose-number-totel span").html(n);
	});
	//当子选项不全选时，全选按钮还原。
	$(".boxCheck img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".all-choose-list p img").attr("src","img/check-box-3.png").attr("i","");
			n--;
		}else{
			$(this).attr("i","true").attr("src","img/checked-7.png");
			n++;
		}
		$(".choose-number-totel span").html(n);
	});
	
	
	
	//左侧未报销	
	//开支流水汇总编辑删除hover效果	
	$(".edit-to").live("mouseover",function(){
		$(this).parent().css("background","url('img/edit-bg.png')");
	});
	
	$(".delete-to").live("mouseover",function(){
		$(this).parent().css("background","url('img/delete-bg.png')");
	});
	
	$(".edit-and-delete").live("mouseout",function(){
		$(".edit-and-delete").css("background","url('img/edit-and-delete.png')");
	});
	
	
	//点击弹出或关闭编辑删除按钮
	$(".hover-background-left").live("mouseover",function(){
		$(this).children().show();
		$(this).parent().parent().siblings().children().children(".edit-and-delete").hide();	
	});
	
	$(".hover-background-left").live("mouseout",function(){
		$(this).children().hide();
	});
    
	
	//点击生日框下拉箭头，点击生日，输入
	$(".select-list").click(function(){
		var optionvalue = $(".select-list option:selected").text();
		$(".birthday-number").text(optionvalue);
	});
	
	

	//业务单据弹框圆形选框单选效果
	$(".apply-day-alert-table ul li .thead-8-2 img").click(function(){
		var i = $(this).attr("i"); 
		if(i == "true"){
			$(this).attr("src","img/choose-table-2.png").attr("i","");
			$(this).parent().parent().parent().parent().parent().children("button").css("background", "#D2D2D2");
		}else{
			$(this).attr("src","img/choose-table-1.png").attr("i","true").parent().parent().siblings().children().children("img").attr("src","img/choose-table-2.png").attr("i","");
			$(this).parent().parent().parent().parent().parent().children("button").css("background", "#277BCF");
		};
		
	});
	
	//业务单据弹框方形选框多选效果
	var tabOne = 0;
	$(".advance-book-tc .apply-day-alert-table ul li .thead-8-1 img").click(function(){
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/no-check.png").attr("i","");
			tabOne--;
		}else{
			$(this).attr("src","img/choose-check.png").attr("i","true");
			tabOne++;
		};
		if(tabOne == 0){
			$(this).parent().parent().parent().parent().parent().children("button").html("添加").css("background","#D2D2D2");
		}else{
			$(this).parent().parent().parent().parent().parent().children("button").html("添加(<span>"+tabOne+"</span>)").css("background","#277BCF");
		};
	});
	
	var tabTwo=0;
	$(".wait-pay-tc .apply-day-alert-table ul li .thead-8-1 img").click(function(){
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/no-check.png").attr("i","");
			tabTwo--;
		}else{
			$(this).attr("src","img/choose-check.png").attr("i","true");
			tabTwo++;
		};
		if(tabTwo == 0){
			$(this).parent().parent().parent().parent().parent().children("button").html("添加").css("background","#D2D2D2");
		}else{
			$(this).parent().parent().parent().parent().parent().children("button").html("添加(<span>"+tabTwo+"</span>)").css("background","#277BCF");
		};
	});
	
	
	var tabThree=0;
	$(".report-expense-tc1-1 .apply-day-alert-table ul li .thead-8-1 img").click(function(){
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/no-check.png").attr("i","");
			tabThree--;
		}else{
			$(this).attr("src","img/choose-check.png").attr("i","true");
			tabThree++;
		};
		if(tabThree == 0){
			$(this).parent().parent().parent().parent().parent().children("button").html("添加").css("background","#D2D2D2");
		}else{
			$(this).parent().parent().parent().parent().parent().children("button").html("添加(<span>"+tabThree+"</span>)").css("background","#277BCF");
		};
	});
	
	
	var tabFour=0;
	$(".report-expense-tc2-1 .apply-day-alert-table ul li .thead-8-1 img").click(function(){
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/no-check.png").attr("i","");
			tabFour--;
		}else{
			$(this).attr("src","img/choose-check.png").attr("i","true");
			tabFour++;
		};
		if(tabFour == 0){
			$(this).parent().parent().parent().parent().parent().children("button").html("添加").css("background","#D2D2D2");
		}else{
			$(this).parent().parent().parent().parent().parent().children("button").html("添加(<span>"+tabFour+"</span>)").css("background","#277BCF");
		};
	});
	
	
	var tabFive=0;
	$(".report-expense-tc1 .apply-day-alert-table ul li .thead-8-1 img").click(function(){
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/no-check.png").attr("i","");
			tabFive--;
		}else{
			$(this).attr("src","img/choose-check.png").attr("i","true");
			tabFive++;
		};
		if(tabFive == 0){
			$(this).parent().parent().parent().parent().parent().children("button").html("添加").css("background","#D2D2D2");
		}else{
			$(this).parent().parent().parent().parent().parent().children("button").html("添加(<span>"+tabFive+"</span>)").css("background","#277BCF");
		};
	});
	
	var tabSix=0;
	$(".report-expense-tc2 .apply-day-alert-table ul li .thead-8-1 img").click(function(){
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/no-check.png").attr("i","");
			tabSix--;
		}else{
			$(this).attr("src","img/choose-check.png").attr("i","true");
			tabSix++;
		};
		if(tabSix == 0){
			$(this).parent().parent().parent().parent().parent().children("button").html("添加").css("background","#D2D2D2");
		}else{
			$(this).parent().parent().parent().parent().parent().children("button").html("添加(<span>"+tabSix+"</span>)").css("background","#277BCF");
		};
	});
	
	//当开支流水列项小于10条时，查看更多隐藏，反之显示
	var list1 = $(".not-apply-content-1 .have-pay").index();
	if(list1 >= 10){
		$(".watch-more-1").show();
	}else{
		$(".watch-more-1").hide();
		};
	
	var list2 = $(".not-apply-content-2 .have-pay").index();
	if(list2 >= 10){
		$(".watch-more-2").show();
	}else{
		$(".watch-more-2").hide();
		};
	
	//汇总下拉自动刷新
		// 新加入的函数,判断当前页面是否加载到最底部,如果是,则调取上面两个函数,加载新数据.
	//$(window).onscroll(function(){
			//alert();
			//var a = document.documentElement.scrollTop == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
			//var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
			//var c = document.documentElement.scrollTop == 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
			//if (a + b == c) {
				//alert();
			//}
		//});
	$(".expenditure-water-box").scroll(function () {  
      var infiniteList = $('.expenditure-water-box');  
      if (infiniteList.scrollTop() + infiniteList.innerHeight() >= infiniteList.prop('scrollHeight')) {  
        $(".expenditure-water-all-con ul").append('<li><div class="have-pay not-pay"><div class="TreeLineL"></div><p class="branch-icon-1"><img src="img/not-icon.png"></p><p class="branch-line-1"></p><p class="branch-kind-1"><img src="img/out-work-1.png"></p><span class="branch-kind-text-1"><b>2016/01/21</b><br/><i>外部劳务费</i></span><span class="branch-kind-money-1"><i>CNY</i><b>2400.00</b></span><div class="hover-background-left"><div class="edit-and-delete"><div class="edit-to">编辑</div><div class="delete-to">删除</div></div></div></div></li>');
      };
    });
    
    
    $(".hover-background-left").live("click",SelectCheck);
    $(".hover-background-right").live("click",SelectCheck);
    //开始流水汇总编辑删除点击弹出对应弹框
    function SelectCheck(){
    	$(".spendingOnWaterCover").fadeIn();
    	var Box_width = $(".spendingOnWater-box").width();
		var Box_height = $(".spendingOnWater-box-right").height();
		$(".spendingOnWater-box-right").css("width",Box_width-293);
    	var i = $(this).parent().children("span").children("i").html();
    	var index = $(".spendingOnWater-box-move > ul >li").index();
    	//左侧开支项目
    	var arryOne = new Array("会议费","团队建设费","礼品费","外部劳务费","培训费","工作餐补费","汽车租赁费","办公用品费","私车公用油费","车辆保险费","体检费","车辆使用费","油卡充值费","车辆维修费","其他费用","房租费用");  
    	var lenthOne = arryOne.length;
    	for(var k = 0 ; k < lenthOne ; k++){
	    	if(arryOne[k] === i){
	    		$(".spendingOnWater-box-move").css("left",0);
				$(".spendingOnWater-box-leftIndex > .spendingOnWater-public").siblings().hide();
				$(".spendingOnWater-box-zoomIndex > .spendingOnWater-public").eq(k).show().siblings().hide();
				var $Height = $(".spendingOnWater-box-zoomIndex > .spendingOnWater-public").eq(k).height();
				$(".spendingOnWater-box-left").css("height",$Height);
				$(".spendingOnWater-box-zoom").css("height",$Height);
				$(".spendingOnWater-box-left > ul >li").children("span").hide().parent().children("div").show();
				$(".spendingOnWater-box-move > ul >li").eq(k).children("span").show().parent().children("div").hide().parent("li").siblings().children("div").show().parent().children("span").hide();	
				$(".spendingOnWater-box-left").css("border-radius","0 0 0 0");
				$(".spendingOnWater-box-allIcon").show();
				$(".spendingOnWater-box-moreIcon").hide();
	    	};
    	};
    	//右侧开支项目
    	var arryTwo = new Array("市内交通费","外埠交通费","住宿费","手机费","业务招待费","交通补贴","出差补贴");
    	var lenthTwo = arryTwo.length;
    	for(var j = 0 ; j < lenthTwo ; j++){
	    	if(arryTwo[j] === i){
	    		$(".spendingOnWater-box-move").css("left",200);
				$(".spendingOnWater-box-leftIndex > .spendingOnWater-public").eq(j).show().siblings().hide();
				$(".spendingOnWater-box-zoomIndex > .spendingOnWater-public").siblings().hide();
				var $Height = $(".spendingOnWater-box-leftIndex > .spendingOnWater-public").eq(j).height();
				$(".spendingOnWater-box-left").css("height",$Height);
				$(".spendingOnWater-box-zoom").css("height",$Height);
				$(".spendingOnWater-box-move > ul >li").children("span").hide().parent().children("div").show();
				$(".spendingOnWater-box-left > ul >li").eq(j).children("span").show().parent().children("div").hide().parent("li").siblings().children("div").show().parent().children("span").hide();	
				$(".spendingOnWater-box-left").css("border-radius","8px 0 0 8px");	
				$(".spendingOnWater-box-allIcon").hide();
				$(".spendingOnWater-box-moreIcon").show();
	    	};
    	};
    };
    
    
    //当开支流水没有报销项时，界面状态
    	var overLi = $(".over-pay").parent();
    	var over = overLi.index() + 1;
    	if(over == 0){
    		$(".none-information-pic-right").show();
    	};
    
    
    $(".delete-to").live("click",function(){
    	$(this).parent().parent().parent().parent().remove();
    	return false;
    });
    
    
    //点击实际动态查询，切换按钮样式并跳转对应板块
    $(".bisiness-queryCover-1 .Table-Block-List").click(function(){
    	var index = $(this).index();
		$(this).addClass("Table-Block-Style").siblings().removeClass("Table-Block-Style");
		$(".bisiness-queryCover-1 .Table-Block-Box").eq(index).show().siblings().hide();
	});
	
	$(".bisiness-queryCover-2 .Table-Block-List").click(function(){
    	var index = $(this).index();
		$(this).addClass("Table-Block-Style").siblings().removeClass("Table-Block-Style");
		$(".bisiness-queryCover-2 .Table-Block-Box").eq(index).show().siblings().hide();
	});
	
	$(".bisiness-queryCover-3 .Table-Block-List").click(function(){
    	var index = $(this).index();
		$(this).addClass("Table-Block-Style").siblings().removeClass("Table-Block-Style");
		$(".bisiness-queryCover-3 .Table-Block-Box").eq(index).show().siblings().hide();
	});
	
	//实际动态查询弹框点击显示方式单选
	$(".ViewMethod p").click(function(){
		var i = $(this).children("img").attr("i");
			$(this).children("img").attr("i","true").attr("src","img/choose-table-1.png").parent().siblings().children("img").attr("i","").attr("src","img/choose-table-2.png");	
	});
	
	
	//动态查询预算时间下拉菜单选择
	$(".ReadyTime input").click(function(){
		$(".ReadyTime-slidedown").slideToggle();
	});
	$(".ReadyTime-slidedown p").click(function(){
			var Time = $(this).html();
			$(".ReadyTime input").val(Time);
			$(".ReadyTime-slidedown").slideToggle();
	});
    
    //动态查询预算维度下拉菜单选择
    $(".ReadyRange input").click(function(){
		$(".ReadyRange-slidedown").slideToggle();
	});
	$(".ReadyRange-slidedown p").click(function(){
			var Time = $(this).html();
			$(".ReadyRange input").val(Time);
			$(".ReadyRange-slidedown").slideToggle();
	});
	
	
	//点击动态预算，弹出动态预算执行弹框
	$(".documentPublic-box-1 .documentPublic-box-nav > div:nth-child(5)").click(function(){
		$(".bisiness-queryCover-1").fadeIn();
	});
	$(".bisiness-query-top p img").click(function(){
		$(".bisiness-queryCover").fadeOut();		
	});
	
	
	$(".documentPublic-box-2 .documentPublic-box-nav > div:nth-child(6)").click(function(){
		$(".bisiness-queryCover-2").fadeIn();
	});
	$(".bisiness-query-top p img").click(function(){
		$(".bisiness-queryCover").fadeOut();		
	});
	
	
	$(".documentPublic-box-3 .documentPublic-box-nav > div:nth-child(5)").click(function(){
		$(".bisiness-queryCover-3").fadeIn();
	});
	$(".bisiness-query-top p img").click(function(){
		$(".bisiness-queryCover").fadeOut();		
	});
	
	
	//点击单据撤回，弹出撤回确认弹框
	$(".getback-table").click(function(){
		$(".table-getback").fadeIn();
	});
	$(".table-getback-top p img").click(function(){
		$(".table-getback").fadeOut();		
	});
	$(".Btn-Yes").click(function(){
		$(".table-getback").fadeOut();		
	});
	
	//点击项目建设删除图标，删除对应列项目
	$(".apply-team-build button").css("background","#277BCF");
	$(".apply-team-build ul li p img").live("click",function(){
		$(this).parent().parent().remove();
		$(".apply-team-build button").css("background","#277BCF");
	});
	
	$(".department-set-1 .order-foot-right").on("change","select",function(){
		var id = $(this).val();
		alert(id);
	});
	
	//点击预订单关闭，关闭预订单弹框
	$(".BookInformationTop p").on("click","img",function(){
		$(".BookInformationCover").fadeOut();
	});
	
	//点击行程预定新增按钮，弹出各版块对应订票新增弹框
	$(".Plane-Ticket-Add").click(function(){
		$(".BookInformationCover-Plane-Add").fadeIn();
	});
	
	$(".Hotel-Ticket-Add").click(function(){
		$(".BookInformationCover-Hotel-Add").fadeIn();
	});
	
	$(".Train-Ticket-Add").click(function(){
		$(".BookInformationCover-Train-Add").fadeIn();
	});
	
	//点击行程预定下的外部订单号，判断提交，审批，预定状态弹出对应弹框
	$(".Plane-book-block .strokeFormulation-planeUl").on("click","li p:nth-child(2)",function(){
		var i = $(this).parent().children();
		var a = i.eq(7).html();
		var b = i.eq(8).html();
		var c = i.eq(9).html();
		if(a === "未提交" && b === "未审批" && c === "未预订"){
			$(".BookInformationCover-PlaneNotget").fadeIn();
		}else if(a === "已提交" && c === "未预订"){
			$(".BookInformationCover-PlaneOnlyLook").fadeIn();
		}else if(a === "已提交" && b === "审批通过" && c === "已预订"){
			$(".BookInformationCover-PlaneBookSuccess").fadeIn();
		}
	});
	
	
	$(".Train-book-block .strokeFormulation-planeUl").on("click","li p:nth-child(2)",function(){
		var i = $(this).parent().children();
		var a = i.eq(6).html();
		var b = i.eq(7).html();
		var c = i.eq(8).html();
		if(a === "未提交" && b === "未审批" && c === "未预订"){
			$(".BookInformationCover-TrainNotget").fadeIn();
		}else if(a === "已提交" && c === "未预订"){
			$(".BookInformationCover-TrainOnlyLook").fadeIn();
		}else if(a === "已提交" && b === "审批通过" && c === "已预订"){
			$(".BookInformationCover-TrainBookSuccess").fadeIn();
		}
	});
	
	
	$(".Hotel-book-block .strokeFormulation-planeUl").on("click","li p:nth-child(2)",function(){
		var i = $(this).parent().children();
		var a = i.eq(7).html();
		var b = i.eq(8).html();
		var c = i.eq(9).html();
		if(a === "未提交" && b === "未审批" && c === "未预订"){
			$(".BookInformationCover-HotelNotget").fadeIn();
		}else if(a === "已提交" && c === "未预订"){
			$(".BookInformationCover-HotelOnlyLook").fadeIn();
		}else if(a === "已提交" && b === "审批通过" && c === "已预订"){
			$(".BookInformationCover-HotelBookSuccess").fadeIn();
		}
	});
	
	//点击出发城市或到达城市，弹出城市选择弹框
	$(".Book-Air-Content .Start-to-city i").on("click","input",function(){
		$(".CityChooseCover").fadeIn();
	});
	$(".CityChooseTop p").on("click","img",function(){
		$(".CityChooseCover").fadeOut();
	});
	
	
	//点击首选航空公司，弹出航空公司选择弹框
	$(".Book-Air-Content .Air-first-company i").on("click","input",function(){
		$(".airlineChooseCover").fadeIn();
	});
	
	//点击舱位等级，弹出飞机舱位选择弹框
	$(".Book-Air-Content .Air-position i").on("click","input",function(){
		$(".plane-seat-tc").fadeIn();
	});
	
	//酒店星级选择
	$(".Book-Air-Content .Hotel-position i").on("click","input",function(){
		$(".hotel-level-tc").fadeIn();
	});
	//火车坐席等级选择
	$(".Book-Air-Content .Seat-position i").on("click","input",function(){
		$(".train-seat-tc").fadeIn();
	});
	
	//酒店房型等级选择
	$(".Book-Air-Content .House-type-choose i").on("click","input",function(){
		$(".hotel-house-type-tc").fadeIn();
	});
	
	$(".CityAdressChoose").click(function(){
        var a = $(this);
        if(a.children().attr('src')=='img/choose-table-2.png'){
            a.children().attr('src','img/choose-table-1.png');
            a.parent().siblings('li').children('.CityAdressChoose').children('img').attr('src','img/choose-table-2.png');
        }
    });
    
  
	
	
	$(".reservationProcesse-listUl-ToDo").on("click","li p:nth-child(4)",function(){
		var p = $(this).prev().prev().children("img").attr("src");
		var i = $(this).parent().children();
		var a = i.eq(7).html();
		if(p == "img/planeXXX.png" && a === "未预订"){
			$(".Plane-GoBook").fadeIn();
		}else if(p === "img/planeXXX.png" && a === "已预订"){
			$(".BookInformationCover-PlaneBookSuccess").fadeIn();
		}else if(p === "img/hotelXXX.png" && a === "未预订"){
			$(".Hotel-GoBook").fadeIn();
		}else if(p === "img/hotelXXX.png" && a === "已预订"){
			$(".BookInformationCover-HotelBookSuccess").fadeIn();
		}else if(p === "img/trainXXX.png" && a === "未预订"){
			$(".Train-GoBook").fadeIn();
		}else if(p === "img/trainXXX.png" && a === "已预订"){
			$(".BookInformationCover-TrainlBookSuccess").fadeIn();
		}
	});

	
	
	
	$(".travelBookList-ul").on("click","li p:nth-child(2)",function(){
		var i = $(this).parent().children();
		var a = i.eq(2).html();
		if(a === "机票预订"){
			$(".BookInformationCover-PlaneDetails").fadeIn();
		}else if(a === "火车票预订"){
			$(".BookInformationCover-TrainDetails").fadeIn();
		}else if(a === "酒店预订"){
			$(".BookInformationCover-HotelDetails").fadeIn();
		}
	});
	
	
	$(".travelBookList-ul-noGo").on("click","li p:nth-child(2)",function(){
		var i = $(this).parent().children();
		var a = i.eq(2).html();
		if(a === "机票预订"){
			$(".BookInformationCover-PlaneDetails").fadeIn();
		}else if(a === "火车票预订"){
			$(".BookInformationCover-TrainDetails").fadeIn();
		}else if(a === "酒店预订"){
			$(".BookInformationCover-HotelDetails").fadeIn();
		}
	});
	
	
	$(".move-safe-icon").click(function(){
		$(".Check-MoveCover").fadeIn();
	});
	$(".Check-MoveTop p img").click(function(){
		$(".Check-MoveCover").fadeOut();
	});
	
	$(".organizational-structure").on("mouseover",".border",function(){
		$(this).children(".border-move").show();
	});
	$(".organizational-structure").on("mouseout",".border",function(){
		$(this).children(".border-move").hide();
	});
	
	
	//点击小三角，弹出下拉员工选框
	$(".slideOptionDown").on("click","li",function(){
		var i = $(this).children("span").html();
		var Name = $(this).children("span").attr("n");
		var Index = $(this).index();
		if(Name=="true"){
		}else{
			$(".Select-content-scroll").append('<div class="Select-content"><span index='+Index+'>'+i+'</span><p><img src="img/close_box.png"></p></div>');
			$(this).children("span").attr("n","true").css("color","#999999");
		}
		var height = $(".Select-squre").height();
		$(".second-foot").css("height",height + 2);
	});
	
	//点击删除已选员工或部门
	$(".Select-squre").on("click",".Select-content > p img",function(){
		var $Index = $(this).parent().parent().children("span").attr("index");
		$(".slideOptionDown > li").eq($Index).children("span").css("color","#333333").attr("n","");
		$(this).parent().parent().remove();
		var height = $(".Select-squre").height();
		$(".second-foot").css("height",height + 2);
	});
	//点击切换小三角图片样式
	$(".Select-squre > p img").click(function(){
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("i","").attr("src","img/open.png");
			$(".slideOptionDown").slideUp();
		}else{
			$(this).attr("i","true").attr("src","img/slideup.png");
			$(".slideOptionDown").slideDown();
		}
	});
	
	//点击报表页面下的打卡和外勤，切换打卡和外勤版块内容
	$(".MyandAll-Check > div").click(function(){
		var index = $(this).index();
		$(".CheckInBlock-Check > div").eq(index).show().siblings().hide();
	});
	
	$(".MyandAll-Out > div").click(function(){
		var index = $(this).index();
		$(".CheckInBlock-Out > div").eq(index).show().siblings().hide();
	});
	
	
	
	//点击我的签到和全员统计版块，切换两个版块内容
	$(".MyandAll-Check > div:first-child").click(function(){
		$(this).children().attr("src","img/mycheckinGo.png").parent().siblings().children().attr("src","img/AllStatGo.png");	
	});
	
	$(".MyandAll-Check > div:last-child").click(function(){
		$(this).children().attr("src","img/AllStat.png").parent().siblings().children().attr("src","img/mycheckin.png");	
	});
	
	$(".MyandAll-Out > div:first-child").click(function(){
		$(this).children().attr("src","img/mycheckinGo.png").parent().siblings().children().attr("src","img/AllStatGo.png");	
	});
	
	$(".MyandAll-Out > div:last-child").click(function(){
		$(this).children().attr("src","img/AllStat.png").parent().siblings().children().attr("src","img/mycheckin.png");	
	});
	
	
	//点击查看考勤详情按钮，判断是否为详情或是统计页面，切换对应版块内容
	$(".FunIconList > div:last-child button:first-child").click(function(){
		var i = $(this).html();
		if(i == "查看考勤详情"){
			$(".AllStatTableDel").show().siblings().hide();
			$(this).html("查看考勤统计");
		}else if(i == "查看考勤统计"){
			$(".AllStatTable").show().siblings().hide();
			$(this).html("查看考勤详情");
		};
	});
	
	//点击外勤签到报表全员统计页面查看，弹出签到详情弹框
	$(".AllStatTable-Out").on("click",".click-look",function(){
		$(".CheckDelCover").fadeIn();
	});
	
	
	//点击关闭签到详情弹框
	$(document).on("click",".CheckDelTop > p",function(){
		$(".CheckDelCover").fadeOut();
	});
	
	$(document).on("click",".open-service-class1",function(){
		$(".parameter-cover").fadeIn();
	});
	$(document).on("click",".parameter-top p img",function(){
		$(".parameter-cover").fadeOut();
	});
	
	
	
});

	

	






