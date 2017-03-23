
$(document).ready(function(){
	
	//员工管理，邀请新同事加入
	$(".invitation-one").click(function(){
		$(".invite-join").fadeIn();	
		$(".window-chat-right-inv").show();
	});
	$(".invite-join-delete").click(function(){
		$(".invite-join").fadeOut();		
	});
	
	//员工管理，批量邀请
	$(".invitation-all").click(function(){
		$(".edit-box").fadeIn();		
	});
	
	
	//一键选中，待分组员工
	$(".wait-all  > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".waitPacket-pepole > li >img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			$(".waitPacket-pepole > li >img").attr("src","img/checked.png").attr("i","true");
		}
	});
	
	//待分组员工选中按钮
	$(".waitPacket-pepole > li >img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".wait-all  > img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
		}
	});
	
	//一键选中，所有同事
	$(".all-all  > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true"){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".allstaff-list > li >img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			$(".allstaff-list > li >img").attr("src","img/checked.png").attr("i","true");
		}
	});
	
	//所有同事选中按钮

	$(".allstaff-list > li >img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".all-all  > img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
		}
	});
	//所有同事角色查看hover
		var $div_li =$(".allstaff-list > li > big"); 
		$div_li.mouseover(function(){ 
		var index = $div_li.index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。 
		$(".allstaff-list > li >big > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
		.eq(index).show(100) //显示 <li>元素对应的<div>元素 
		.siblings().hide(); //隐藏其它几个同辈的<div>元素 
		});
		$div_li.mouseout(function(){ 
		 // 获取当前点击的<li>元素 在 全部li元素中的索引。 
		$(".allstaff-list > li >big > div").hide(); //隐藏其它几个同辈的<div>元素 
		});
	
	//所有同事下拉列表
	$(".all-all > b").click(function(){ 	
		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
	});		
	$(".all-all > strong").click(function(){ 
		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
	});		
	$(".all-all > big").click(function(){ 			
		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
	});
	$(".all-all > small").click(function(){ 		
		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
	});
	$(".wait-all > small").click(function(){ 		
		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
	});
	
	//管理员设置
	$(".reset-set").click(function(){
		$(".reset-set").addClass("reset-manage").removeClass("reset-please");
		$(".reset-jurisdiction").addClass("reset-please").removeClass("reset-manage");
		$(".department-icon").addClass("reset-please").removeClass("reset-manage");
		$(".add-delete").fadeIn();
		$(".people-con").fadeIn();
		$(".manager-please-content").hide();	
	});	
	
	//管理员设置－邀请权限
	$(".reset-jurisdiction").click(function(){
		$(".reset-jurisdiction").addClass("reset-manage").removeClass("reset-please");
		$(".reset-set").addClass("reset-please").removeClass("reset-manage");
		$(".department-icon").addClass("reset-please").removeClass("reset-manage");
		$(".manager-please-content").fadeIn();
		$(".add-delete").hide();
		$(".people-con").hide();			
	});
	
	//邀请权限选中按钮	
	$(".only-please").click(function(){
		$(".manager-please-content > div > p >img").eq(0).attr("src","img/toyes-icon.png");		
		$(".manager-please-content > div > p >img").eq(1).attr("src","img/check-box-1.png");
	});
	$(".other-please").click(function(){
		$(".manager-please-content > div > p >img").eq(0).attr("src","img/check-box-1.png");
		$(".manager-please-content > div > p >img").eq(1).attr("src","img/toyes-icon.png");
	});	
	
	//管理员设置－添加管理员
	$(".settings-add").click(function(){
		$(".cover").fadeIn();		
	});
	$(".alert-top > div > img").click(function(){
		$(".cover").fadeOut();		
	});
	
	//管理员设置－添加管理员弹窗点击／选择	
	$(".kind .p1").click(function(){
		var index = $(".kind .p1").index(this);
		$(".kind ul").eq(index).slideToggle();		
	});
	//全选
	$(".kind .p2").click(function(){
		var index = $(".kind .p2").index(this);
		var i = $(this).children("img").attr("i");
		if(i == "true"){
			$(this).children("img").attr("src","img/check-box-3.png").attr("i","");
			$(".kind ul").eq(index).children("li").children("span").children("img").attr("src","img/check-box-1.png").attr("i","");
		}else{
			$(this).children("img").attr("i","true").attr("src","img/checked.png");
			$(".kind ul").eq(index).children("li").children("span").children("img").attr("src","img/checked-1.png").attr("i","true");
		}
	});
	//当子选项不全选时，全选按钮还原。
	$(".kind ul li span img").click(function(){
		var that = $(this).parent().parent().parent();
		var index = $(".kind ul").index(that);
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-1.png").attr("i","");
			$(".kind .p2").eq(index).children("img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked-1.png");
		}
	});
	
	//管理员设置－删除管理员
	$(".settings-delete").click(function(){
		$(".delete-cover").fadeIn();		
	});
	$(".delete-cover-alert-top > p > img").click(function(){
		$(".delete-cover").fadeOut();		
	});
	
	//导出员工信息		
	//点击导出按钮，弹出导出员工信息框
	$(".staff-right-export").click(function(){
		$(".popUpbox-exportEmployee").fadeIn();		
	});
	$(".exportEmployee-top > span").click(function(){
		$(".popUpbox-exportEmployee").fadeOut();		
	});

	//选择导出格式
	$(".exportEmployee-bottom-chice").click(function(){
		$(".exportEmployee-bottom-popUp").slideToggle();		
	});
	$(".exportEmployee-bottom-popUp > p").click(function(){
		var ht = $(this).html();
		$(".exportEmployee-bottom-chice > p").html(ht);	
		
		$(".exportEmployee-bottom-popUp").hide();	
	});
	
	//导出员工信息选中按钮
	
	$(".exportEmployee-bottom-disab img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-1.png").attr("i","").parent().siblings().children("img").attr("src","img/checked-1.png").attr("i","true");
		}else{
			$(this).attr("i","true").attr("src","img/checked-1.png").parent().siblings().children("img").attr("src","img/check-box-1.png").attr("i","");
		};
	});
	
	//点击待分组编辑，弹出员工信息框
	$(".waitPacket-pepole > li > p").click(function(){
		$(".edit-contentBox").fadeIn();
		$(".edit-contentBox .edit-under-nav li").eq(0).addClass("edit-gy").siblings().removeClass("edit-gy");
		$(".edit-contentBox .edit-under > div").eq(0).show().siblings().hide();
		$('.edit-nav').css('width','560px');
        $('.edit-under-nav').css('width','540px');
        $('.edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-under').css("width","560px");
	});
	//点击所有同事编辑，弹出员工信息框
	$(".allstaff-list > li > p").click(function(){
		$(".edit-contentBox-2").fadeIn();
		$(".edit-contentBox-2 .edit-under-nav li").eq(0).addClass("edit-gy").siblings().removeClass("edit-gy");
		$(".edit-contentBox-2 .edit-under > div").eq(0).show().siblings().hide();
		$('.edit-contentBox-2 .edit-nav').css('width','560px');
        $('.edit-contentBox-2 .edit-under-nav').css('width','540px');
        $('.edit-contentBox-2 .edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-contentBox-2 .edit-under').css("width","560px");
	});
	
	
	//点击禁用，弹出禁用操作单
	$(".forbidden-touse").click(function(){
		$(".forbiduse-cover").fadeIn();
		$(".content-top-list li").eq(0).addClass("edit-gy").siblings().removeClass("edit-gy");
		$(".controlBox .control").eq(0).show().siblings().hide();
	});
	
	$(".content-top-list li").click(function(){
			var index=$(".content-top-list li").index(this);
			$(".content-top-list li").eq(index).addClass("edit-gy").siblings().removeClass("edit-gy");
			$(".controlBox .control").eq(index).show().siblings().hide();
	});
	//点击关闭禁用操作单
	$(".forbiduse-alert-moveout").click(function(){
		$(".forbiduse-cover").fadeOut();		
	});
	//点击交接按钮，弹出权限交接人弹框
	$(".connect-per").click(function(){
		$(".permission-connect").fadeIn();
	});
	$(".close-connect").click(function(){
		$(".permission-connect").fadeOut();		
	});
	
	//点击管理员设置删除按钮，弹出删除管理员弹框
	$(".delete-sure-icon").click(function(){
		$(".delete-cover").fadeIn();
		var index = $(".delete-sure-icon").index(this);		
	});
	//点击确定，关闭弹框，同时删除对应管理员
	$(".sure-delete").click(function(){
		$(".delete-cover").fadeOut();
		$(".people-con-1").eq(index).hide();
	});
	
	//点击个人标准查看，弹出员工信息－个人标准－－待分组
	$(".waitPacket-pepole > li > span").click(function(){
		$(".edit-contentBox").fadeIn();	
		$(".edit-under-nav li").eq(4).addClass("edit-gy").siblings().removeClass("edit-gy");
		$(".edit-under > div").eq(4).show().siblings().hide();
        $('.edit-nav').css('width','560px');
        $('.edit-under-nav').css('width','540px');
        $('.edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-under').css("width","560px");
	});
	
	$(".wait-adjustment > a").eq(0).click(function(){
		$(".edit-contentBox").fadeIn();	
		$(".edit-under-nav li").eq(2).addClass("edit-gy").siblings().removeClass("edit-gy");
		$(".edit-under > div").eq(2).show().siblings().hide();
		$('.edit-nav').css('width','560px');
        $('.edit-under-nav').css('width','540px');
        $('.edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-under').css("width","560px");
	});
	
	$(".wait-adjustment > a").eq(1).click(function(){
		$(".edit-contentBox").fadeIn();	
		$(".edit-under-nav li").eq(3).addClass("edit-gy").siblings().removeClass("edit-gy");
		$(".edit-under > div").eq(3).show().siblings().hide();
		$('.edit-nav').css("width","806px");
        $('.edit-under-nav').css('width','786px');
        $('.edit-under-nav>div').eq(0).css("width","768px");
        $('.edit-under').css("width","806px");
	});
	
	
	//点击个人标准查看，弹出员工信息－个人标准-所有同事
	$(".allstaff-list > li > span").click(function(){
		$(".edit-contentBox-2").fadeIn();	
		$(".edit-contentBox-2 .edit-under-nav li").eq(4).addClass("edit-gy").siblings().removeClass("edit-gy");
		$(".edit-contentBox-2 .edit-under > div").eq(4).show().siblings().hide();
        $('.edit-contentBox-2 .edit-nav').css('width','560px');
        $('.edit-contentBox-2 .edit-under-nav').css('width','540px');
        $('.edit-contentBox-2 .edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-contentBox-2 .edit-under').css("width","560px");
	});

	
	//关闭待分组的编辑弹窗

	$(".edit-nav-close > img").click(function(){
		$(".edit-contentBox").fadeOut();		
	});
	//关闭所有同事的编辑弹窗
	$(".edit-nav-close > img").click(function(){
		$(".edit-contentBox-2").fadeOut();
	});
	//选择权限交接人－右边选择按钮
	
	$(".tosearch-content-right .content-right-list-icon > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-1.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/toyes-icon.png");
		};
	});
	//所有同事禁用操作－角色权限清单
	$('.travel-assistant-img-123 > div > div').click(function(){
		var other = $(this).parent(".travel-assistant");
		var index = $(".travel-assistant-img-123 > div").index(other);
		var that = $(this).children("p").children("img");
		var i = $(that).attr("i");
		if(i == "true" ){
			$(that).attr("src","img/close-role-icon.png").attr("i","");
			$(".assistant-list").eq(index).slideUp();
		}else{
			$(that).attr("i","true").attr("src","img/open-role-icon.png");
			$(".assistant-list").eq(index).slideDown();
		}
    });
	
	//所有同事禁用操作－角色权限清单hover效果
	$(".assistant-list-img-2 > img").mouseover(function(){	
		$(this).attr("src","img/move-2-icon.png");
	});
	$(".assistant-list-img-2 > img").mouseout(function(){	
		$(this).attr("src","img/move-1-icon.png");		
	});
	
	$(".assistant-list-img-1 > img").mouseover(function(){	
		$(this).attr("src","img/move-role-icon.png");
	});
	$(".assistant-list-img-1 > img").mouseout(function(){	
		$(this).attr("src","img/role-icon.png");		
	});
	//content-right-list-role
	
	//一键选中，功能配置－配置城市
	$(".function-businessCity-nav  > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".function-businessCity-ul > li >img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			$(".function-businessCity-ul > li >img").attr("src","img/checked.png").attr("i","true");
		}
	});
	
	//功能配置－配置城市,选中按钮
	$(".function-businessCity-ul > li >img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".function-businessCity-nav  > img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
		}
	});
	
	//功能配置－配置城市,导航下拉列表
	$(".function-businessCity-nav > b").click(function(){
		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
	});
	$(".function-businessCity-nav > strong").click(function(){
		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
	});
	$(".function-businessCity-nav > small").click(function(){
		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
	});
	//功能配置－配置城市,禁用。启用
	$(".function-businessCity-ul small").click(function(){ 
		$(".function-box").fadeIn();
		var html = $(this).html();
		if(html=="启用"){			
			$(".guration-disable").show();
			$(".guration-enable").hide();
		}else{
			
			$(".guration-enable").show();
			$(".configuration-disable").hide();
		};
	});
	$(".function-adjustment a").click(function(){ 
		$(".function-box").fadeIn();
		var html = $(this).html();
		if(html=="批量启用"){			
			$(".guration-enable").show();
			$(".guration-disable").hide();
		}else{
			$(".guration-disable").show();
			$(".guration-enable").hide();
		};
	});	
	$(".guration-enable > div > span >img").click(function(){ 
		$(".function-box").fadeOut();
	});
	$(".guration-disable > div > span >img").click(function(){ 
		$(".function-box").fadeOut();
	});
	//导出配置出差城市		
	$(".function-right-export").click(function(){
		$(".popUpbox-exportEmployee").fadeIn();		
	});
	$(".exportEmployee-city > span").click(function(){
		$(".popUpbox-exportEmployee").fadeOut();		
	});
	
	//功能配置－配置城市
	$(".function-add").click(function(){ 
		$(".edit-contentBox").fadeIn();
	});
	$(".configuration-businessTrip-top > span >img").click(function(){ 
		$(".edit-contentBox").fadeOut();
	});
	$(".businessTrip-bottom-country li").click(function(){
		var index = $(this).index();
		$(this).addClass("businessTrip-cover").siblings().removeClass("businessTrip-cover");
		$(this).children("img").css("display","block").parent().siblings().children("img").css("display","none");
		$(this).parent().parent().parent().children(".businessTrip-bottom-ChoiseCity").eq(index).show(500).siblings(".businessTrip-bottom-ChoiseCity").hide(500);
	});	
	$(".businessTrip-ChoiseCity-frist").click(function(){
		var index = $(this).index();
		//alert(index);
		var i = $(this).children("i").children("img").attr("i");
		if(i == "true" ){
			$(this).children("i").children("img").attr("src","img/triangle.png").attr("i","");
			
			$(this).parent("li").children(".businessTrip-ChoiseCity-second").slideUp();
		}else{
			$(this).children("i").children("img").attr("i","true").attr("src","img/open-role-icon.png");
			$(this).parent("li").children(".businessTrip-ChoiseCity-second").slideDown();
		}
	});
	$(".businessTrip-ChoiseCity-seconds").click(function(){
		//var index = $(this).index();
		//alert(index);
		var i = $(this).children("i").children("img").attr("i");
		if(i == "true" ){
			$(this).children("i").children("img").attr("src","img/triangle.png").attr("i","");
			
			$(this).parent(".businessTrip-ChoiseCity-second").children(".businessTrip-ChoiseCity-thired").slideUp();
		}else{
			$(this).children("i").children("img").attr("i","true").attr("src","img/open-role-icon.png");
			$(this).parent(".businessTrip-ChoiseCity-second").children(".businessTrip-ChoiseCity-thired").slideDown();
		};
	});
	$(".businessTrip-ChoiseCity-thired").click(function(){
		var i = $(this).children("span").children("img").attr("i");
		if(i == "true" ){
			$(this).children("span").children("img").attr("src","img/check-box-3.png").attr("i","");
			$(this).parent().children(".businessTrip-ChoiseCity-seconds").children("span").children("img").attr("src","img/check-box-3.png").attr("i","");
			$(this).parent().parent().children(".businessTrip-ChoiseCity-frist").children("span").children("img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).children("span").children("img").attr("i","true").attr("src","img/checked.png");
			
		};
	});
	$(".businessTrip-ChoiseCity-seconds > span > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(this).parent().parent().parent().children(".businessTrip-ChoiseCity-thired").children("span").children("img").attr("src","img/check-box-3.png").attr("i","");
			$(this).parent().parent().parent().parent().children(".businessTrip-ChoiseCity-frist").children("span").children("img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			$(this).parent().parent().parent().children(".businessTrip-ChoiseCity-thired").children("span").children("img").attr("src","img/checked.png").attr("i","true");
		}	
		return false;
	});
	$(".businessTrip-ChoiseCity-frist > span > img").click(function(){
		var $that = $(this).parent().parent().parent().children(".businessTrip-ChoiseCity-second");
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$that.children(".businessTrip-ChoiseCity-seconds").children("span").children("img").attr("src","img/check-box-3.png").attr("i","");
			$that.children(".businessTrip-ChoiseCity-thired").children("span").children("img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			$that.children(".businessTrip-ChoiseCity-seconds").children("span").children("img").attr("src","img/checked.png").attr("i","true");
			$that.children(".businessTrip-ChoiseCity-thired").children("span").children("img").attr("src","img/checked.png").attr("i","true");
		}	
		return false;
	});
	//导出设置项目
	$(".project-right-export").click(function(){
		$(".popUpbox-project").fadeIn();		
	});
	$(".exportEmployee-project > span").click(function(){
		$(".popUpbox-project").fadeOut();		
	});
	
	//功能配置－设置项目,导航下拉列表
	$(".project-businessCity-nav > b").click(function(){ 	
		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
	});	
	$(".project-businessCity-nav > small").click(function(){ 	
		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
	});
	
	//一键选中，功能配置－配置城市
	$(".project-businessCity-nav  > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".project-businessCity-ul > li >img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			$(".project-businessCity-ul > li >img").attr("src","img/checked.png").attr("i","true");
		}
	});
	
	//功能配置－设置项目,选中按钮
	$(".project-businessCity-ul > li >img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/check-box-3.png").attr("i","");
			$(".project-businessCity-nav  > img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
		}
	});
	//功能配置－创建项目
	$(".project-add").click(function(){ 
		$(".project-add-boxBo").fadeIn();
	});
	$(".project-box-top > span >img").click(function(){ 
		$(".project-add-box").fadeOut();
	});
	$(".newPro-firstMenu").click(function(){
		var index = $(this).index();
		//alert(index);
		var i = $(this).children("i").children("img").attr("i");
		if(i == "true" ){
			$(this).children("i").children("img").attr("src","img/triangle.png").attr("i","");
			
			$(this).parent("li").children(".newPro-secondMenu").slideUp();
		}else{
			$(this).children("i").children("img").attr("i","true").attr("src","img/open-role-icon.png");
			$(this).parent("li").children(".newPro-secondMenu").slideDown();
		}
	});
	$(".newPro-secondMenu-chiose").click(function(){
		//var index = $(this).index();
		//alert(index);
		var i = $(this).children("i").children("img").attr("i");
		if(i == "true" ){
			$(this).children("i").children("img").attr("src","img/triangle.png").attr("i","");
			
			$(this).parent(".newPro-secondMenu").children(".newPro-thirdMenu").slideUp();
		}else{
			$(this).children("i").children("img").attr("i","true").attr("src","img/open-role-icon.png");
			$(this).parent(".newPro-secondMenu").children(".newPro-thirdMenu").slideDown();
		};
	});
	$(".newPro-thirdMenu").click(function(){
		var i = $(this).children("span").children("img").attr("i");
		if(i == "true" ){
			$(this).children("span").children("img").attr("src","img/check-box-3.png").attr("i","");
		}else{
			$(this).children("span").children("img").attr("i","true").attr("src","img/checked.png");
		};
	});
	//功能配置－设置项目,禁用。启用。编辑
	$(".project-businessCity-ul small").click(function(){ 
		//$(".function-box").fadeIn();
		var html = $(this).html();
		if(html=="可编辑"){
			$(".project-edit-box").fadeIn();
			//$(".configuration-disable").hide();
		}else if(html=="禁用"){
			$(".setProject-box").fadeIn();
			$(".setProject-enable").show();
			$(".setProject-disable").hide();
		}else{			
			$(".setProject-box").fadeIn();
			$(".setProject-disable").show();
			$(".setProject-enable").hide();
		};
	});	
	$(".edit-box-top > span >img").click(function(){ 
		$(".project-edit-box").fadeOut();
	});
	$(".setProject-enable > div > span >img").click(function(){ 
		$(".setProject-box").fadeOut();
	});
	$(".setProject-disable > div > span >img").click(function(){ 
		$(".setProject-box").fadeOut();
	});
	
	//功能配置－创建费用设置项目
	$(".function-standard-twoBox .function-standard-create").click(function(){ 
		$(".moneyProject-add-box").fadeIn();
	});
	//功能配置－开支模块与标准－费用设置项目,禁用。启用。编辑
	$(".cunction-srcoll .function-standard-style3  p").click(function(){ 
		//$(".function-box").fadeIn();
		var html = $(this).html();
		if(html=="可编辑"){
			$(".moneyProject-editable-box").fadeIn();
		}else if(html=="禁用"){
			$(".money-setProject-box").fadeIn();
			$(".money-setProject-enable").show();
			$(".money-setProject-disable").hide();
		}else if(html=="启用"){			
			$(".money-setProject-box").fadeIn();
			$(".money-setProject-disable").show();
			$(".money-setProject-enable").hide();
		};
	});	
	$(".money-setProject-enable > div > span >img").click(function(){ 
		$(".money-setProject-box").fadeOut();
	});
	$(".money-setProject-disable > div > span >img").click(function(){ 
		$(".money-setProject-box").fadeOut();
	});
	//导出开支模块与标准、、、费用项目导出
	$(".function-standard-oneBox .function-standard-export").click(function(){
		$(".popUpbox-project-modular").fadeIn();		
	});
	$(".exportEmployee-project-modular > span").click(function(){
		$(".popUpbox-project-modular").fadeOut();		
	});
	$(".function-standard-twoBox .function-standard-export").click(function(){
		$(".popUpbox-project-monery").fadeIn();		
	});
	$(".exportEmployee-project-monery > span").click(function(){
		$(".popUpbox-project-monery").fadeOut();		
	});
	//功能配置－开支模块，市内交通－标准设置
	$(".cityChiose-left li").click(function(){
		var i = $(this).children("img").attr("i");
		if(i == "true" ){
			
		}else{
			$(this).children("img").attr("i","true").attr("src","img/checked.png").parent().siblings().children("img").attr("i","").attr("src","img/check-box-3.png");
		};
	});	
	
	$(".standardConfiguration-department-top > span >img").click(function(){ 
		$(".standardConfiguration-cover").fadeOut();
	});
	$(".munchMoney-department li").click(function(){
		var index = $(this).index();
		$(this).addClass("MuchMoney-nav-cover").siblings().removeClass("MuchMoney-nav-cover");
		$(".MuchMoney-list .standardConfiguration-department-choise").eq(index).fadeIn().siblings().hide();	
	});	
	$(".munchMoney-department-city li").click(function(){
		var index = $(this).index();
		$(this).addClass("MuchMoney-nav-cover").siblings().removeClass("MuchMoney-nav-cover");
		$(".cityAndDepartment .cityChiose").eq(index).fadeIn().siblings().hide();	
	});
	$(".munchMoney-rank-nav li").click(function(){
		var index = $(this).index();
		$(this).addClass("MuchMoney-nav-cover").siblings().removeClass("MuchMoney-nav-cover");
		$(".munchMoney-rank .freeAndRank-buttom").eq(index).fadeIn().siblings().hide();	
	});
	$(".munchAndRankAndCity-nav li").click(function(){
		var index = $(this).index();
		$(this).addClass("MuchMoney-nav-cover").siblings().removeClass("MuchMoney-nav-cover");
		$(".munchMoney-rank-city .cityAndRank").eq(index).fadeIn().siblings().hide();	
	});
	//功能配置－开支模块,创建，多币种导航宽度
	$(".MuchMoney-nav").each(function(){
	var w1 = 0;
	var $lis = $(this).children("ul").children("li");
		w1 = 82*$(this).children("ul").children("li").length;
	$(this).children("ul").width(w1);
	if($(this).children("ul").width()>$(this).width()){
		$(this).parent().children("img").fadeIn();
	}else{
		$(this).parent().children("img").hide();
	};
	});
	if(!$(this).parent().children(".MuchMoney-nav").children("ul").is(':animated')){
		$(".munchMoney-turnright").click(function(){
			var Depart_marginLeft = parseInt($(this).parent().children(".MuchMoney-nav").children("ul").css("marginLeft"));
			var Depart_surplusWidth = $(this).parent().children(".MuchMoney-nav").children("ul").width()+Depart_marginLeft;
			if(Depart_surplusWidth>$(this).parent().children(".MuchMoney-nav").width()){
				$(this).parent().children(".MuchMoney-nav").children("ul").animate({
				    marginLeft:-81+Depart_marginLeft+'px'
				  },100);
			  } 
			
		});
	};
	if(!$(this).parent().children(".MuchMoney-nav").children("ul").is(':animated')){
		$(".munchMoney-turnleft").click(function(){
			var Depart_marginLeft = parseInt($(this).parent().children(".MuchMoney-nav").children("ul").css("marginLeft"));
			var Depart_surplusWidth = $(this).parent().children(".MuchMoney-nav").children("ul").width()+Depart_marginLeft;
			if(Depart_marginLeft < 0){
				$(this).parent().children(".MuchMoney-nav").children("ul").animate({
				    marginLeft:81+Depart_marginLeft+'px'
				  },100);
			  }
		});
		};
	//功能配置－开支模块，创建点击
	$(".function-standard-oneBox .function-standard-create").click(function(){ 
		$(".expenditureEstablish-cover").fadeIn();
	});
	$(".expenditureEstablish > .standardConfiguration-department-top > span >img").click(function(){ 
		$(".expenditureEstablish-cover").fadeOut();
	});
	$(".expenditureEstablish-openMunchChiose > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("i","").attr("src","img/check-box-3.png");
			$(".expenditureEstablish-munchChiose").slideUp();	
			$(".expenditureEstablish-button > button").eq(1).hide().siblings().fadeIn();
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			$(".expenditureEstablish-munchChiose").slideDown();	
			$(".expenditureEstablish-button > button").eq(1).css("display","block").siblings().hide();
		};
	});		
	
	//功能配置－开支模块，创建点击－选择模版
	$(".expenditureEstablish-input").click(function(){
		$(this).children("div").slideToggle();
		$(this).parent().siblings().children(".expenditureEstablish-input").children("div").slideUp();//父级遍历
		$(this).parent().siblings().children().children(".expenditureEstablish-input").children("div").slideUp();//点击上面，下面遍历
		$(this).parent().parent().siblings().children(".expenditureEstablish-input").children("div").slideUp();//点击下面，上面遍历
		$(".expenditureEstablish-input > div > p").click(function(){
			var ht = $(this).html();
			$(this).parent().parent().children("span").html(ht).css("color","#000000");	
		});
	});
	
	//功能配置－开支模块，配置标准点击键	
		var address=0,money=0;
		$(".expenditureEstablish-open-munchMoney > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("i","").attr("src","img/check-box-3.png");
			money=0;
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			money=1;
		};
		});	
		$(".expenditureEstablish-open-aboutAddress > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("i","").attr("src","img/check-box-3.png");
			address=0;
		}else{
			$(this).attr("i","true").attr("src","img/checked.png");
			address=1;
		};
		});	
		$(".expenditureEstablish-button > button").eq(1).click(function(){
			var basisHtml = $(".expenditureEstablish-input-basis").children("span").html();
			if(basisHtml=="个人"){
				if(money==0&&address==0){
					$(".person-free").fadeIn();	
				}else if(money==1){
					if(address==0){
						$(".person-coin").fadeIn();	
					}else if(address==1){
						$(".person-city-coin").fadeIn();	
					}
				}else if(money==0&&address==1){
					$(".person-city").fadeIn();	
				}				
			}else if(basisHtml=="职级"){
				if(money==0&&address==0){
					$(".freeRank").fadeIn();	
				}else if(money==1){
					if(address==0){
						$(".MunchRank").fadeIn();	
					}else if(address==1){
						$(".munchAndRankAndCity").fadeIn();	
					}
				}else if(money==0&&address==1){
					$(".cityRank").fadeIn();	
				}
			}else if(basisHtml=="部门"){
				if(money==0&&address==0){
					$(".freeDeparment").fadeIn();	
				}else if(money==1){
					if(address==0){
						$(".freeAddMuchMoney").fadeIn();	
					}else if(address==1){
						$(".deparment-city-munchMoney").fadeIn();	
					}
				}else if(money==0&&address==1){
					$(".deparmentCity").fadeIn();	
				}
			};
			$(".expenditureEstablish-cover").fadeOut();
		});
		$(".standardConfiguration-department-button > button").click(function(){
			if($(this).index()==0){
				$(".standardConfiguration-cover").fadeOut();
				$(".expenditureEstablish-cover").fadeIn();
			}
		});
		$(".person-free-bt1").click(function(){
				$(".person-free").fadeOut();
				$(".expenditureEstablish-cover").fadeIn();
		});
		$(".person-coin-bt1").click(function(){
				$(".person-coin").fadeOut();
				$(".expenditureEstablish-cover").fadeIn();
		});
		$(".person-city-bt1").click(function(){
				$(".person-city").fadeOut();
				$(".expenditureEstablish-cover").fadeIn();
		});
		$(".person-city-coin-bt1").click(function(){
				$(".person-city-coin").fadeOut();
				$(".expenditureEstablish-cover").fadeIn();
		});
	//开支流水－23种类弹窗
	$(".expenditure-water > button").on("click",function(){
		$(".spendingOnWaterCover").fadeIn();
		var ox_width = $(".spendingOnWater-box").width();
		var $_Height = $(".spendingOnWater-box-right").height()
		$(".spendingOnWater-box-left").css("height",$_Height);
		$(".spendingOnWater-box-zoom").css("height",$_Height);	
		$(".spendingOnWater-box-right").css("width",ox_width-293);
		$(".spendingOnWater-box-leftIndex > .spendingOnWater-public").eq(0).fadeIn().siblings().hide();
		$(".spendingOnWater-box-zoomIndex > .spendingOnWater-public").siblings().hide();
		$(".spendingOnWater-box-left > ul >li").eq(0).children("span").show().parent().children("div").hide().parent("li").siblings().children("div").show().parent().children("span").hide();
		$(".spendingOnWater-box-move > ul >li").siblings().children("div").show().parent().children("span").hide();
		$(".spendingOnWater-box-allIcon").hide();
		$(".spendingOnWater-box-moreIcon").show();
		$(".spendingOnWater-box-move").css("left",200);
		$(".spendingOnWater-box-left").css("border-radius","8px 0 0 8px");
		$(".physicalExamination-input > div").hide();//所有下拉选择框隐藏
		$(".spendingOnWater-carInsurance-currencyBox").hide();//所有下拉选择框隐藏
	});
	$(".spendingOnWater-public-top > img").click(function(){
		$(".spendingOnWaterCover").fadeOut();
	});
	$(".spendingOnWater-public-footer > button:first-child").click(function(){
		$(".spendingOnWater-saveSucess").fadeIn().delay(1500).hide(300,function(){
			$(".spendingOnWaterCover").fadeOut();
		});
	});
	//左边部分
	$(".spendingOnWater-box-move > ul >li").click(function(){
		var index = $(this).index();
		var $height = $(".spendingOnWater-box-zoomIndex > .spendingOnWater-public").eq(index).height();
		$(this).children("span").show().parent().children("div").hide().parent().siblings().children("div").show().parent().children("span").hide();
		$(".spendingOnWater-box-left > ul >li").siblings().children("div").show().parent().children("span").hide();
		$(".spendingOnWater-box-leftIndex > .spendingOnWater-public").siblings().hide();
		$(".spendingOnWater-box-zoomIndex > .spendingOnWater-public").eq(index).fadeIn().siblings().hide();
		$(".spendingOnWater-box-left").css("height",$height);
		$(".spendingOnWater-box-zoom").css("height",$height);
	});
	$(".spendingOnWater-box-left > ul >li").click(function(){
		var index = $(this).index();
		var $height = $(".spendingOnWater-box-leftIndex > .spendingOnWater-public").eq(index).height();
		$(this).children("span").show().parent().children("div").hide().parent().siblings().children("div").show().parent().children("span").hide();
		$(".spendingOnWater-box-move > ul >li").siblings().children("div").show().parent().children("span").hide();
		$(".spendingOnWater-box-zoomIndex > .spendingOnWater-public").siblings().hide();
		$(".spendingOnWater-box-leftIndex > .spendingOnWater-public").eq(index).fadeIn().siblings().hide();
		$(".spendingOnWater-box-left").css("height",$height);
		$(".spendingOnWater-box-zoom").css("height",$height);
	});
	
	$(".spendingOnWater-box-moreIcon").click(function(){
		$(".spendingOnWater-box-move").stop().animate(
			{left:'0px'},"slow");
		$(".spendingOnWater-box-left").css("border-radius","0");
		$(".spendingOnWater-box-allIcon").show();
		$(this).hide();
	});
	$(".spendingOnWater-box-allIcon").click(function(){
		$(".spendingOnWater-box-move").stop().animate(
			{left:'200px'},"slow",function(){
			$(".spendingOnWater-box-left").css("border-radius","8px 0 0 8px");	
			});	
		$(".spendingOnWater-box-moreIcon").show();
		$(this).hide();
	});
	$(".spendingOnWater-public-enclosure >div > em").click(function(){
		$(this).parent().parent().children("div").eq(1).show();
		var Box_height = $(".spendingOnWater-box-right").height();
		$(".spendingOnWater-box-left").css("height",Box_height);
		$(".spendingOnWater-box-zoom").css("height",Box_height);
	});
	$(".spendingOnWater-public-enclosure > div:last-child > div").on("click","img:last-child",function(){
		var $_this = $(this).parent().parent();
		var Num = $(this).parent().parent().children("div").length;
		$(this).parent().remove();
		if(Num-1==0){
			$_this.hide();
		};
		var Box_height = $(".spendingOnWater-box-right").height();
		$(".spendingOnWater-box-left").css("height",Box_height);
		$(".spendingOnWater-box-zoom").css("height",Box_height);
	});
	//币种选择-车险弹窗
	$(".spendingOnWater-carInsurance-currency").click(function(){
		$(this).parent().children(".spendingOnWater-carInsurance-currencyBox").slideToggle();
		$(this).parent().siblings().children(".spendingOnWater-carInsurance-currencyBox").slideUp();//其他收起
		$(this).parent().parent().parent(".spendingOnWater-public-center").siblings().children().children().children(".spendingOnWater-carInsurance-currencyBox").slideUp();//其他收起
	});
	$(".spendingOnWater-carInsurance-currencyBox > p").click(function(){
		var html = $(this).html();
		$(this).parent().parent().children(".spendingOnWater-carInsurance-currency").children("p").html(html);
		$(this).parent().slideUp();
	});	
	//开支流水－体检费－体检类型
	$(".physicalExamination-input > input").click(function(){
		$(this).parent().children("div").slideToggle();
		$(this).parent().parent().parent(".spendingOnWater-public-center").siblings().children().children(".physicalExamination-input").children("div").slideUp();//其他隐藏
	});
	$(".physicalExamination-input > div > span").click(function(){
		var html = $(this).html();
		$(this).parent().slideUp();
		$(this).parent().parent().children("input").val(html);
	});
	//开支流水－出差－出差城市选择
	$(".physicalExamination-cityInput-sheep > input").click(function(){
		$(".spendingOnWater-chioseCityCover").fadeIn();
		$(".spendingOnWater-chioseCity-button > button:first-child").show().siblings().hide();
	});
	$(".physicalExamination-cityInput-startCity > input").click(function(){
		$(".spendingOnWater-chioseCityCover").fadeIn();
		$(".spendingOnWater-chioseCity-button > button:nth-child(2)").show().siblings().hide();
	});
	$(".physicalExamination-cityInput-endCity > input").click(function(){
		$(".spendingOnWater-chioseCityCover").fadeIn();
		$(".spendingOnWater-chioseCity-button > button:nth-child(3)").show().siblings().hide();
	});
	$(".spendingOnWater-chioseCity > div:first-child > img").click(function(){
		$(".spendingOnWater-chioseCityCover").fadeOut();
	});
	$(".spendingOnWater-cityFrist").click(function(){
		var index = $(this).index();
		//alert(index);
		var i = $(this).children("i").children("img").attr("i");
		if(i == "true" ){
			$(this).children("i").children("img").attr("src","img/triangle.png").attr("i","");	
			$(this).parent("li").children(".spendingOnWater-citySecond").slideUp();
		}else{
			$(this).children("i").children("img").attr("i","true").attr("src","img/open-role-icon.png");
			$(this).parent("li").children(".spendingOnWater-citySecond").slideDown();
		}
	});
	$(".spendingOnWater-citySeconds").click(function(){
		var i = $(this).children("i").children("img").attr("i");
		if(i == "true" ){
			$(this).children("i").children("img").attr("src","img/triangle.png").attr("i","");		
			$(this).parent(".spendingOnWater-citySecond").children(".spendingOnWater-city-thired").slideUp();
		}else{
			$(this).children("i").children("img").attr("i","true").attr("src","img/open-role-icon.png");
			$(this).parent(".spendingOnWater-citySecond").children(".spendingOnWater-city-thired").slideDown();
		};
	});
	$(".spendingOnWater-city-thired").click(function(){
		var i = $(this).children("span").children("img").attr("i");
		if(i == "true" ){
			$(this).children("span").children("img").attr("src","img/check-box-1.png").attr("i","");
		}else{
			$(this).children("span").children("img").attr("i","true").attr("src","img/checked-1.png").parent().parent().siblings().children("span").children("img").attr("src","img/check-box-1.png").attr("i","");//同市
			$(this).parent().siblings().children(".spendingOnWater-city-thired").children("span").children("img").attr("src","img/check-box-1.png").attr("i","");//同省
			$(this).parent().parent().siblings().children(".spendingOnWater-citySecond").children(".spendingOnWater-city-thired").children("span").children("img").attr("src","img/check-box-1.png").attr("i","");//同国
			$(this).parent().parent().parent().parent().siblings().children().children().children(".spendingOnWater-citySecond").children(".spendingOnWater-city-thired").children("span").children("img").attr("src","img/check-box-1.png").attr("i","");//不同国
		};
	});
	
	$(".spendingOnWater-chioseCity-centerInput img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){	
		}else{
			$(this).attr("i","true").attr("src","img/checked-1.png").parent().siblings().children("img").attr("src","img/check-box-1.png").attr("i","");
		};
	});
	
	//业务单据
	$(".businessDocument-top > ul > li").click(function(){
		$(this).children("img").show().parent().siblings().children("img").hide();	
	});
	
	$(".businessDocument-select > div").click(function(){
		$(this).children("div").slideToggle();
		$(this).siblings().children("div").slideUp();
	});
	$(".businessDocument-select > div > div > span").click(function(){
		var html = $(this).html();
		$(this).parent().parent().children("p").html(html);
	});
	
	//申请单查看-版块切换。
	$(".documentPublic-box-nav > ul > li").click(function(){
		var index = $(this).index();
		$(this).addClass("documentPublic-nav-cover").siblings().removeClass("documentPublic-nav-cover");
		$(this).parent().parent().parent().children(".documentPublic-box-footer").children("div").eq(index).fadeIn().siblings().hide();
	});
	$(".documentPublic-footerList-moneyChiose > div").click(function(){
		$(this).children("div").slideToggle();
	});
	$(".documentPublic-footerList-moneyChiose > div > div").on("click","p",function(){
		var Num = $(this).attr("class")-0;
		var Ben = $(this).parent().parent().parent().children("p").html()-0;
		var html = $(this).html();
		$(this).parent().parent().children("em").html(html);
		$(this).parent().parent().parent().children("span").html((Num*Ben).toFixed(2));
	});
	//业务单据、审批页面-查看弹窗。
	$(".documentPublic-box-top > img").click(function(){
		$(".documentPublic-cover").fadeOut();
		$(this).parent().parent().fadeOut();
	});	
	$(".businessDocument-list-bottom > ul > li > p:nth-child(1)").click(function(){
		var html = $(this).parent().children("p").eq(1).html();
		if(html=="出差申请单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(0).show().siblings().hide();
		}else if(html=="现金预支单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(1).show().siblings().hide();
		}else if(html=="预支还款单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(2).show().siblings().hide();
		}else if(html=="出差费用报销单"||html=="日常费用报销单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(3).show().siblings().hide();
		}else if(html=="日常开支申请单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(4).show().siblings().hide();
		};
	});
	//差旅/日常开支报销单查看－开支流水查看详细弹框
	$(".useMoney-ul > ul > li > p > img").click(function(){
		$(".detailedExpenditure-cover").fadeIn();
	});
	$(".detailedExpenditure-box-top > img").click(function(){
		$(".detailedExpenditure-cover").fadeOut();
	});
	//审批下拉
	$(".examinationApprova-select > div").click(function(){
		$(this).children("div").slideToggle();
		$(this).siblings().children("div").slideUp();
	});
	$(".examinationApprova-select > div > div > span").click(function(){
		var html = $(this).html();
		$(this).parent().parent().children("p").html(html);
	});
	//审批－单据审批，意见	
	$(".examination-approva").click(function(){
		$(".examinationApprova-cover").fadeIn();
	});
	//录入业务审批意见
	$(".examinationApprova-box-top > img").click(function(){
		$(".examinationApprova-cover").fadeOut();
	});
	$(".examinationApprova-buttonTwo").click(function(){
		$(".examinationApprova-cover").fadeOut();
	});
	$(".examinationApprova-conclusion > div").on('click',function(){
		var a = $(this).attr("a");	
		var i = $(this).children("img").attr("i");
		if(i == "true" ){
		}else{
			$(this).children("img").attr("i","true").attr("src","img/checked-1.png").parent().siblings().children("img").attr("src","img/check-box-1.png").attr("i","");
		};
		switch(a){
			case "1" : $(".examinationApprova-transfer").hide();break;
			case "2" : $(".examinationApprova-transfer").hide();break;
			case "3" : $(".examinationApprova-transfer").show();break;
		}
		//这里只是做个展示，实际效果是选了人之后 div才出现的哈。
	});
	$(".examinationApprova-conclusion > b").on('click',function(){
		var i = $(this).children("img").attr("i");
		if(i == "true" ){
			$(this).children("img").attr("i","").attr("src","img/check-box-1.png");
			$(".examinationApprova-other").hide();
		}else{
			$(this).children("img").attr("i","true").attr("src","img/checked-1.png");
			$(".examinationApprova-other").show();
		};
		//这里只是做个展示，实际效果是选了人之后 div才出现的哈。
		$(".mate-inviteCover").fadeIn();
		$("#mate-invite-group").show();
	});
	$(".examinationApprova-transfer > div ").on('click','img',function(){
		$(this).parent().parent().hide();
		$(this).parent().remove();
	});
	$(".examinationApprova-other > div ").on('click','div > img',function(){
		$(this).parent().remove();
	});
	$(".examinationApprova-conclusion > div:nth-child(4)").click(function(){
		$(".chiose-workmateCover").fadeIn();
		$("#choose-workmate").show();
	});
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
		$(".mate-inviteCover").hide();
	});
	//关闭选择同事end
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
	//关闭创建群组start
	$(".choose-workmate-top p:nth-child(2)").click(function(){
		$(".chiose-workmateCover").fadeOut();
	});
	//关闭创建群组end
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
	//差旅预订,主页面,差旅预订导航
	$(".travelBook-left-nav > div").click(function(){
		var html = $(this).children("span").html();
		var index = $(this).index();
		if(html=="差旅预订"){
			$(this).children("img").attr("src","img/travlBooklan.png").parent().siblings().children("img").attr("src","img/travlmake-gray.png");
		}else{
			$(this).children("img").attr("src","img/travlmakelan.png").parent().siblings().children("img").attr("src","img/travlBook-gray.png");
		};
			$(this).addClass("travelBook-left-navCover").siblings().removeClass("travelBook-left-navCover");
			$(".travelBook-right > div").eq(index).fadeIn().siblings().hide();
		});
	//差旅预订,主页面,已出行，未出行订单切换
	$(".travelBook-right-center > ul > li").click(function(){
			$(this).addClass("travelBook-right-centerCover").siblings().removeClass("travelBook-right-centerCover");
		});
	$(".travelBook-oneList > li").click(function(){
		var index = $(this).index();
			$(".travelBook-oneList-div > div").eq(index).fadeIn().siblings().hide();
			if(index==0){
				$(this).parent().parent().children("div").fadeIn().parent().children("button").fadeIn();
			}else{
				$(this).parent().parent().children("div").fadeOut().parent().children("button").fadeOut();
			}
		});
	//差旅预订,主页面,全部／等下拉框
	$(".travelBook-right-centerChiose").click(function(){
			$(this).children("div").slideToggle();
		});
	$(".travelBook-right-centerChiose > div >p").click(function(){
		var html = $(this).html();
			$(this).parent().parent().children("p").html(html);
		});
	//差旅预订,主页面,过滤已报销
	$(".travelBook-filter > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/filter-white.png").attr("i","");
			$(".travelBookList-ul > li").each(function(i,item){
			if($(this).find("p").eq(6).html()=="已报销"){
				$(this).show();
			};
			$(this).find("p").eq(0).html(i+1);
			});
		}else{
			var num=0;
			$(this).attr("i","true").attr("src","img/checked-3.png");
			$(".travelBookList-ul > li").each(function(i,item){
			if($(this).find("p").eq(6).html()=="已报销"){
				$(this).hide();
			}else{
				num++;
				$(this).find("p").eq(0).html(num);
			};
		});
		}
	});
	//差旅预订,主页面,已出行 选择
	$(".travelBookList-ul > li > p:nth-child(8) > img").click(function(){
		var html = $(this).parent().parent().find("p").eq(6).html();
		var i = $(this).attr("i");
		if(html=="未报销"){
		if(i == "true" ){
			$(this).attr("src","img/filter-white.png").attr("i","");
			
		}else{
			$(this).attr("i","true").attr("src","img/checked-3.png");
		}
		}
	});
	//差旅预订主页面-去报销
	$(".travelBook-reimbursement").click(function(){
		$(".report-expense1-box").fadeIn();
	});
	//差旅预订,主页面-行程预订,3种状态下拉框
	$(document).click(function(){
	$(".strokeFormulation-state > div > input").click(function(){
		$(this).parent().children("div").slideDown();
		$(this).parent().siblings().children("div").slideUp();
		return false;
	});
			$(".strokeFormulation-state > div > div").slideUp()
		});
		$(".strokeFormulation-state > div > div >p").click(function(){
		var html = $(this).html();
			$(this).parent().parent().children("input").val(html);
			$(this).parent().slideUp();
		});
	//差旅预订,主页面-行程预订,3种预订票切换
	$(".strokeFormulation-oneList > li").click(function(){
		var index = $(this).index();
			$(".strokeFormulation-switch > div").eq(index).fadeIn().siblings().hide();
			
		});
	//差旅预订主页面-导出
	$(".strokeFormulation-plane-export").click(function(){
		$(".strokeFormulation-plane-exportCover").fadeIn();
	});
	//预订处理主页面-导出
	$(".strokeFormulation-hotel-export").click(function(){
		$(".strokeFormulation-hotel-exportCover").fadeIn();
	});
	//预订处理主页面-导出
	$(".strokeFormulation-train-export").click(function(){
		$(".strokeFormulation-train-exportCover").fadeIn();
	});
	//预订处理,主页面,过滤未预订
	$(".reservationProcesse-booking > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/filter-white.png").attr("i","");
			$(".reservationProcesse-listUl > li").each(function(i,item){
			if($(this).find("p").eq(7).html()=="未预订"){
				$(this).show();
			};
			$(this).find("p").eq(0).html(i+1);
			});
		}else{
			var num=0;
			$(this).attr("i","true").attr("src","img/checked-3.png");
			$(".reservationProcesse-listUl > li").each(function(i,item){
			if($(this).find("p").eq(7).html()=="未预订"){
				$(this).hide();
			}else{
				num++;
				$(this).find("p").eq(0).html(num);
			};
		});
		}
	});
	//预订处理,主页面,过滤已预订
	$(".reservationProcesse-nobook > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/filter-white.png").attr("i","");
			$(".reservationProcesse-listUl > li").each(function(i,item){
			if($(this).find("p").eq(7).html()=="已预订"){
				$(this).show();
			};
			$(this).find("p").eq(0).html(i+1);
			});
		}else{
			var numb=0;
			$(this).attr("i","true").attr("src","img/checked-3.png");
			$(".reservationProcesse-listUl > li").each(function(i,item){
			if($(this).find("p").eq(7).html()=="已预订"){
				$(this).hide();
			}else{
				numb++;
				$(this).find("p").eq(0).html(numb);
			};
		});
		}
	});
	//预订处理主页面-去预订
	$(".reservationProcesse-listUl > li > p:last-child").click(function(){
		if($(this).attr("class")=="bookover"){
			return false;
		}else{
			alert("跳转");
		}
		});
	//预订处理主页面-出差申请单查看
	$(".reservationProcesse-listUl > li > p:nth-child(3)").click(function(){
		$(".documentPublic-box-1").show();
		$(".documentPublic-cover").fadeIn();
		});
	$(".reservationPro-ul > ul > li > p:last-child").click(function(){
		if($(this).attr("class")=="bookover"){
			return false;
		}else{
			alert("跳转");
		}
		});
	//预订处理主页面-导出
	$(".reservationProcesse-export").click(function(){
		$(".reservationProcesse-exportCover").fadeIn();
	});
//	业务单据、审批主页面表格行高
	$(".businessDocument-list-bottom > ul > li").each(function(){
		var Num = $(this).children("p").children("i");
		if(Num.length==1){
		Num.css({"line-height":"40px","height": "40px"});
		$(this).children("p").css("line-height",40+"px");
	}else{
		Num.css("line-height",24+"px");
		$(this).children("p").css("line-height",24*Num.length+"px");
	}
	});
	//财物审批－查看－单据签收－下拉菜单。	
	$(".propertyReceipt-div").click(function(){
		$(this).children("div").slideToggle().parent().parent().siblings().children("div").children("div").slideUp();
		$(".propertyReceipt-div > div > span").click(function(){			
			var html = $(this).html();
			$(this).parent().parent().children("p").html(html);
		});
	});
	//财物审批－查看－单据签收－签收成功。
	$(".propertyReceipt-buttonOne").click(function(){
		$(".examinationApprova-cover").fadeOut(function(){
			$(".propertyReceipt-saveSucess").fadeIn().delay(1500).hide(500);
		});
	});
	
	//结算及支付－3个主页－下拉菜单。	
	$(".paymentExamine-search > div").click(function(){
		$(this).children("div").slideToggle();
		$(this).siblings().children("div").slideUp();
		$(".paymentExamine-search > div > div > span").click(function(){			
			var html = $(this).html();
			$(this).parent().parent().children("span").html(html);
		});
	});
	//	结算及支付主页面表格有多币种时的行高
	$(".settlePublic-list > li").each(function(){
		var Num = $(this).children("p").children("span");
		if(Num.length==1){
		Num.css({"line-height":"40px","height": "40px"});
		$(this).children("p").css("line-height",40+"px");
	}else{
		Num.css("line-height",24+"px");
		$(this).children("p").css("line-height",24*Num.length+"px");
	}
	});
	
	//结算及支付,主页面,生成支付批次，选择
	var Batch_num = 0;
	$(".paymentBatch-list > li > p:nth-child(1) > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/filter-white.png").attr("i","");
			Batch_num--;
		}else{
			$(this).attr("i","true").attr("src","img/checked-3.png");
			Batch_num++;
		};
		if(Batch_num==$(this).parent().parent().parent().children("li").length){
			$(".paymentBatch-listHeader > p:nth-child(1) > img").attr("r","true").attr("src","img/checked-3.png");
		}else{
			$(".paymentBatch-listHeader > p:nth-child(1) > img").attr("src","img/filter-white.png").attr("r","");
		}
		if(Batch_num>0){
			$(".paymentBatch-botton").addClass("payment-bluecover");
		}else{
			$(".paymentBatch-botton").removeClass("payment-bluecover");
		}
	});
	$(".paymentBatch-listHeader > p:nth-child(1) > img").click(function(){
		var r = $(this).attr("r");
		if(r == "true" ){
			$(this).attr("src","img/filter-white.png").attr("r","");
			$(".paymentBatch-list > li > p:nth-child(1) > img").attr("i","").attr("src","img/filter-white.png");
			Batch_num=0;	
		}else{
			$(this).attr("r","true").attr("src","img/checked-3.png");
			$(".paymentBatch-list > li > p:nth-child(1) > img").attr("i","true").attr("src","img/checked-3.png");
			Batch_num=$(".paymentBatch-list > li").length;	
		};
		if(Batch_num>0){
			$(".paymentBatch-botton").addClass("payment-bluecover");
		}else{
			$(".paymentBatch-botton").removeClass("payment-bluecover");
		}
	});
//结算及支付,主页面-查看弹窗。
	$(".documentPublic-box-top > img").click(function(){
		$(".documentPublic-cover").fadeOut();
		$(this).parent().parent().fadeOut();
	});	
	$(".settlePublic-list > li > p:nth-child(2)").click(function(){
		var html = $(this).parent().children("p").eq(2).html();
		if(html=="出差申请单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(0).show().siblings().hide();
		}else if(html=="现金预支单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(1).show().siblings().hide();
		}else if(html=="预支还款单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(2).show().siblings().hide();
		}else if(html=="出差费用报销单"||html=="日常费用报销单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(3).show().siblings().hide();
		}else if(html=="日常开支申请单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(4).show().siblings().hide();
		};
	});
	//结算及支付,主页面-批量审批。
	$(".settleAllExamine-box-top > img").click(function(){
		$(".settleAllExamine-cover").fadeOut();
	});	
	$(".paymentExamine-moreExamine").click(function(){
		$(".settleAllExamine-cover").fadeIn();
	});	
	//结算及支付,主页面,财务结算审核，选择
	var Pay_num = 0;
	$(".paymentExamine-list > li > p:nth-child(1) > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/filter-white.png").attr("i","");
			Pay_num--;
		}else{
			$(this).attr("i","true").attr("src","img/checked-3.png");
			Pay_num++;
		};
		if(Pay_num==$(this).parent().parent().parent().children("li").length){
			$(".paymentExamine-listHeader > p:nth-child(1) > img").attr("r","true").attr("src","img/checked-3.png");
		}else{
			$(".paymentExamine-listHeader > p:nth-child(1) > img").attr("src","img/filter-white.png").attr("r","");
		}
		if(Pay_num>0){
			$(".paymentExamine-moreExamine").addClass("payment-bluecover");
		}else{
			$(".paymentExamine-moreExamine").removeClass("payment-bluecover");
		}
	});
	$(".paymentExamine-listHeader > p:nth-child(1) > img").click(function(){
		var r = $(this).attr("r");
		if(r == "true" ){
			$(this).attr("src","img/filter-white.png").attr("r","");
			$(".paymentExamine-list > li > p:nth-child(1) > img").attr("i","").attr("src","img/filter-white.png");
			Pay_num=0;	
		}else{
			$(this).attr("r","true").attr("src","img/checked-3.png");
			$(".paymentExamine-list > li > p:nth-child(1) > img").attr("i","true").attr("src","img/checked-3.png");
			Pay_num=$(".paymentExamine-list > li").length;	
		};
		if(Pay_num>0){
			$(".paymentExamine-moreExamine").addClass("payment-bluecover");
		}else{
			$(".paymentExamine-moreExamine").removeClass("payment-bluecover");
		}
	});
	
	//结算及支付,主页面,支付确认,表格点击，下拉，收起
	$(".confirmPayment-bottom-list > li > em > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/chart-open.png").attr("i","");
			$(this).parent().parent().children("ul").slideDown();
		}else{
			$(this).attr("i","true").attr("src","img/chart-close.png");
			$(this).parent().parent().children("ul").slideUp();
		}
	});
	
	//结算及支付,主页面,支付确认，选择
	var conFirm_num = 0;
	$(".confirmPayment-bottom-list > li > ul > li > p:nth-child(1) > img").click(function(){
		var i = $(this).attr("i");
		if(i == "true" ){
			$(this).attr("src","img/filter-white.png").attr("i","");
			conFirm_num--;
		}else{
			$(this).attr("i","true").attr("src","img/checked-3.png");
			conFirm_num++;
		};
		if(conFirm_num==$(this).parent().parent().parent().parent().parent().children("li").children("ul").children("li").length){
			$(".confirmPayment-bottom-scroll > nav > p:nth-child(1) > img").attr("r","true").attr("src","img/checked-3.png");
		}else{
			$(".confirmPayment-bottom-scroll > nav > p:nth-child(1) > img").attr("src","img/filter-white.png").attr("r","");
		}
		if(conFirm_num>0){
			$(".confirmPayment-button").addClass("payment-bluecover");
		}else{
			$(".confirmPayment-button").removeClass("payment-bluecover");
		}
	});
	$(".confirmPayment-bottom-scroll > nav > p:nth-child(1) > img").click(function(){
		var r = $(this).attr("r");
		if(r == "true" ){
			$(this).attr("src","img/filter-white.png").attr("r","");
			$(".confirmPayment-bottom-list > li > ul > li > p:nth-child(1) > img").attr("i","").attr("src","img/filter-white.png");
			conFirm_num=0;	
		}else{
			$(this).attr("r","true").attr("src","img/checked-3.png");
			$(".confirmPayment-bottom-list > li > ul > li > p:nth-child(1) > img").attr("i","true").attr("src","img/checked-3.png");
			conFirm_num=$(".confirmPayment-bottom-list > li > ul > li").length;	
		};
		if(conFirm_num>0){
			$(".confirmPayment-button").addClass("payment-bluecover");
		}else{
			$(".confirmPayment-button").removeClass("payment-bluecover");
		}
	});
	//结算及支付,主页面-支付确认-查看弹窗。
	$(".confirmPayment-bottom-list > li > ul > li > p:nth-child(2)").click(function(){
		var html = $(this).parent().children("p").eq(2).html();
		if(html=="出差申请单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(0).show().siblings().hide();
		}else if(html=="现金预支单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(1).show().siblings().hide();
		}else if(html=="预支还款单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(2).show().siblings().hide();
		}else if(html=="出差费用报销单"||html=="日常费用报销单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(3).show().siblings().hide();
		}else if(html=="日常开支申请单"){
			$(".documentPublic-cover").fadeIn();
			$(".documentPublic-cover > div").eq(4).show().siblings().hide();
		};
	});
	
	
	//点击其他地方， 当前下拉菜单隐藏
	$(document).bind("click",function(e){ 
		var target = $(e.target);
		//财物审批－查看－单据签收－下拉菜单。
		if(target.closest(".propertyReceipt-div").length == 0){ 
		$(".propertyReceipt-div > div").slideUp(); 
		};
		//结算及支付－3个主页－下拉菜单。
		if(target.closest(".paymentExamine-search > div").length == 0){ 
		$(".paymentExamine-search > div > div").slideUp(); 
		};
		//开支流水－弹窗－下拉菜单。
		if(target.closest(".physicalExamination-input > input").length == 0){
		$(".physicalExamination-input > div").slideUp(); 
		};
		if(target.closest(".spendingOnWater-carInsurance-currency").length == 0){
		$(".spendingOnWater-carInsurance-currencyBox").slideUp(); 
		};
		//功能配置－开支模版与标准－创建。
		if(target.closest(".expenditureEstablish-input").length == 0){
		$(".expenditureEstablish-input > div").slideUp(); 
		};
	});
});
