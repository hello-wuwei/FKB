$(function(){
    //分配角色权限
    $('.edit-under-nav>li').eq(3).click(function(){
        $('.edit-under>div').not('.edit-root').css('display','none');
        $('.edit-root').css('display','block');
        $('.edit-nav').css("width","806px");
        $('.edit-under-nav').css('width','786px');
        $('.edit-under-nav>div').eq(0).css("width","768px");
        $('.edit-under').css("width","806px");
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
        $('.edit-under-ul>li:last').css('border-bottom','none');
    });  
    //基本信息
    $('.edit-under-nav>li').eq(0).click(function(){
        $('.edit-under>div').not('.edit-msg').css('display','none');
        $('.edit-msg').css('display','block');
        $('.edit-nav').css('width','560px');
        $('.edit-under-nav').css('width','540px');
        $('.edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-under').css("width","560px");
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
    });
    //业务信息
    $('.edit-under-nav>li').eq(1).click(function(){
        $('.edit-under>div').not('.edit-bmsg').css('display','none');
        $('.edit-bmsg').css('display','block');
        $('.edit-nav').css('width','560px');
        $('.edit-under-nav').css('width','540px');
        $('.edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-under').css("width","560px");
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
    });
    //分配职位与部门
    $('.edit-under-nav>li').eq(2).click(function(){
        $('.edit-under>div').not('.edit-job').css('display','none');
        $('.edit-job').css('display','block');
        $('.edit-nav').css('width','560px');
        $('.edit-under-nav').css('width','540px');
        $('.edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-under').css("width","560px");
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
        //    $('#edit-under-nav>li').eq(2).css({'border-top-color':'#4990D6',
        //        'border-top-width':'2px','border-bottom-color':'white','height':'37px'});
    });
    
    
    
    
    
    //树中图片切换
    $('.floor-3-head').click(function(){
        var sx=$(this).children().eq(0).children().eq(0).attr('src');
        if(sx=='img/check-box-1.png'){
            $(this).children().eq(0).children().eq(0).attr('src','img/toyes-icon.png')
        }else if(sx=='img/toyes-icon.png'){
            $(this).children().eq(0).children().eq(0).attr('src','img/check-box-1.png')
        }
    });
    //edit-arr1是第一层的
    $('.floor-1-head').click(function(){
        if($(this).parent().hasClass('floor-class')){
            $(this).parent().removeClass('floor-class');
            $(this).children().eq(0).children().eq(0).attr('src','img/triangle.png');         
        }else {
            $(this).parent().addClass("floor-class");
            $(this).children().eq(0).children().eq(0).attr('src','img/open-role-icon.png');
        }
    });
    //edit-arr2是第二层的
    $('.floor-2-head').click(function(){
        if($(this).parent().hasClass('floor-class')){
            $(this).parent().removeClass('floor-class');
            $(this).children().eq(0).children().eq(0).attr('src','img/triangle.png');
        }else {
            $(this).parent().addClass("floor-class");
            $(this).children().eq(0).children().eq(0).attr('src','img/open-role-icon.png');
        }
    });

    //个人标准
    $('.edit-under-nav>li').eq(4).click(function(){
        $('.edit-under>div').not('.edit-stan').css('display','none');
        $('.edit-stan').css('display','block');
        $('.edit-nav').css('width','560px');
        $('.edit-under-nav').css('width','540px');
        $('.edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-under').css("width","560px");
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
    });


    //禁用


    $('.edit-disable-cont>div').eq(3).click(function(){
        $('.edit-disable-bg').css('display','none')
    });
    $('.edit-disable-nav>div').children().eq(1).click(function(){
        $('.edit-disable-bg').css('display','none')
    });
    $('.edit-nav>div').eq(1).click(function(){
        $('.edit-disable-bg').css('display','block');
    });
    //邀请弹框
    $('.edit-invite-sty1').siblings().click(function(){
        $('.edit-box').css('display','none')
    });
    
    //待分组－角色分配权限制定角色选择
    $(function(){
    		var $div_list = $(".edit-under-ul > li");
	    $div_list.click(function(){
	    		var index = $div_list.index(this);
	    		$(".edit-under-ul > li > div").eq(index).toggle();	    	
	    });
    });
    
    //待分组－角色分配职位－单选
    $(function(){ 
		var $div_li =$(".edit-job-box2 ul > li"); 
		$div_li.click(function(){ 			
		var index = $div_li.index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。 
		$(".edit-job-box2 ul > li > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
		.eq(index).toggle();

		});		
	});
	
	
	
	//所有同事栏目编辑弹窗切换设置
	
	//分配角色权限
    $('.edit-contentBox-2 .edit-under-nav>li').eq(3).click(function(){
        $('.edit-under>div').not('.edit-root').css('display','none');
        $('.edit-root').css('display','block');
        $('.edit-nav').css("width","806px");
        $('.edit-under-nav').css('width','786px');
        $('.edit-under-nav > div').css("width","768px");
        $('.edit-under').css("width","806px");
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
        $('.edit-under-ul>li:last').css('border-bottom','none');
    });
    //基本信息
    $('.edit-contentBox-2 .edit-under-nav>li').eq(0).click(function(){
        $('.edit-under>div').not('.edit-msg').css('display','none');
        $('.edit-msg').css('display','block');
        $('.edit-nav').css('width','560px');
        $('.edit-under-nav').css('width','540px');
        $('.edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-under').css("width","560px");
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
    });
    //业务信息
    $('.edit-contentBox-2 .edit-under-nav>li').eq(1).click(function(){
        $('.edit-under>div').not('.edit-bmsg').css('display','none');
        $('.edit-bmsg').css('display','block');
        $('.edit-nav').css('width','560px');
        $('.edit-under-nav').css('width','540px');
        $('.edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-under').css("width","560px");
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
    });
    //分配职位与部门
    $('.edit-contentBox-2 .edit-under-nav>li').eq(2).click(function(){
        $('.edit-under>div').not('.edit-job').css('display','none');
        $('.edit-job').css('display','block');
        $('.edit-nav').css('width','560px');
        $('.edit-under-nav').css('width','540px');
        $('.edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-under').css("width","560px");
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
        
    });
    //个人标准
    $('.edit-contentBox-2 .edit-under-nav>li').eq(4).click(function(){
        $('.edit-under>div').not('.edit-stan').css('display','none');
        $('.edit-stan').css('display','block');
        $('.edit-nav').css('width','560px');
        $('.edit-under-nav').css('width','540px');
        $('.edit-under-nav>div').eq(0).css('width','520px');
        $('.edit-under').css("width","560px");
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
    });
    //公司组织架构弹框
    $(function(){
        //产看-禁用弹框
        $('.disable-button').click(function(){
            $('.organ-view').css('display','block');
        });
        $('.organ-closebt').click(function(){
            $('.organ-view').css('display','none');
        });
        //产看-启用弹框
        $('.use-button').click(function(){
            $('.organ-view-c').css('display','block');
        });
        $('.organ-closebt-c').click(function(){
            $('.organ-view-c').css('display','none');
        });
        //启用弹框
        $('.certain').click(function(){
            $('.organ-view-qy').css('display','block');
        });
        $('.organ-qy-closebt').click(function(){
            $('.organ-view-qy').css('display','none');
        });
        //编辑弹框
        $('.first-div').click(function(){
            $('.organ-view-edit').css('display','block');
        });
        $('.organ-edit-closebt').click(function(){
            $('.organ-view-edit').css('display','none');
        });
        //新建部门弹框
        $('.add').click(function(){
            $('.organ-view-add').css('display','block');
        });
        $('.organ-add-closebt').click(function(){
            $('.organ-view-add').css('display','none');
        })


    });
    //配置出差城市导航
    $('.function-coin>li').click(function(){
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
    });
    $('.function-coin-nav1').click(function(){
       $('.function-coin-style').css('display','block');
       $('.function-pay-type').css('display','none');
       $('.function-coin-set').css('display','none');
    });
    $('.function-coin-nav2').click(function(){
        $('.function-coin-style').css('display','none');
        $('.function-pay-type').css('display','block');
        $('.function-coin-set').css('display','none');
    });
    $('.function-coin-nav3').click(function(){
        $('.function-coin-style').css('display','none');
        $('.function-pay-type').css('display','none');
        $('.function-coin-set').css('display','block');
    });
    //币种升级弹窗
    $('.function-coin-closebt').click(function(){
        $('.function-coin-upset').css('display','none');
    });
    $('.function-coin-more').click(function(){
        $('.function-coin-upset').css('display','block');
    });
    //币种维护弹窗
    $('.function-coin-closebt1').click(function(){
        $('.function-coin-type').css('display','none');
    });
    $('.function-coin-style1>div:nth-child(7)').click(function(){
        $('.function-coin-type').css('display','block');
    });
    $('.function-coin-closebt2').click(function(){
        $('.function-coin-jy').css('display','none')
    });
    $('.function-coin-jy-bt').click(function(){
        $('.function-coin-jy').css('display','block')
    });
    //选中支付方式
    $('.function-coin-check>li>div:nth-child(1)').click(function(){
        if($(this).children().eq(0).attr('src')=='img/check-box-3.png'){
            $(this).children().eq(0).attr('src','img/checked.png');
            $(this).siblings().css('color','#333333');
        }
        else{
            $(this).children().eq(0).attr('src','img/check-box-3.png');
            $(this).siblings().css('color','#666666');
        }
    });
    //预支期限设置
    $('.function-coin-set-box>li:nth-child(1)>div>img').click(function(){
            $(this).attr('src','img/toyes-icon.png');
            $('.function-coin-set-box>li:nth-child(1)>p').css('color','#333333');
            $('.function-coin-set-box>li:nth-child(1)>input').css('color','#333333');
            $('.function-coin-set-box>li:nth-child(1)>input:nth-child(4)').removeAttr('readonly');
            $('.function-coin-set-box>li:nth-child(1)>input:nth-child(6)').removeAttr('readonly');
            $('.function-coin-set-box>li:nth-child(2)>p').css('color','#666666');
            $('.function-coin-set-box>li:nth-child(2)>div>img').attr('src','img/check-box-1.png')
    });
    $('.function-coin-set-box>li:nth-child(2)>div>img').click(function(){
        $(this).attr('src','img/toyes-icon.png');
        $('.function-coin-set-box>li:nth-child(2)>p').css('color','#333333');
        $('.function-coin-set-box>li:nth-child(1)>div>img').attr('src','img/check-box-1.png');
        $('.function-coin-set-box>li:nth-child(1)>p').css('color','#666666');
        $('.function-coin-set-box>li:nth-child(1)>input').css('color','#666666');
        $('.function-coin-set-box>li:nth-child(1)>input:nth-child(4)').attr('readonly','readonly');
        $('.function-coin-set-box>li:nth-child(1)>input:nth-child(6)').attr('readonly','readonly');
    });
    //设为本币选框
    $('.function-coin-type-box2>div:nth-child(6)').click(function(){
        if($(this).children().eq(0).attr('src')=='img/check-box-3.png'){
            $(this).children().eq(0).attr('src','img/checked.png')
        }
        else{
            $(this).children().eq(0).attr('src','img/check-box-3.png');
        }
    });
    //开支模板与标准导航
    $('.function-standard-nav>li').click(function(){
        $(this).addClass("edit-gy").siblings().removeClass("edit-gy");
    });
    $('.function-standard-nav1').click(function(){
    		$('.function-standard-oneBox').css('display','block');
        $('.function-standard-twoBox').css('display','none');
        $('.function-standard-box').css('display','block');
        $('.function-project-box').css('display','none');
    });
    $('.function-standard-nav2').click(function(){
        $('.function-standard-box').css('display','none');
        $('.function-project-box').css('display','block');
        $('.function-standard-twoBox').css('display','block');
        $('.function-standard-oneBox').css('display','none');
    });
    //开支模板与标准勾选
    $('.function-standard-check').click(function(){
        if($(this).children().eq(0).attr('src')=='img/checked.png'){
            $(this).children().eq(0).attr('src','img/check-box-3.png');
            $('.function-standard-checkbox>img').attr('src','img/check-box-3.png')
        }else{
            $(this).children().eq(0).attr('src','img/checked.png');
            $('.function-standard-checkbox>img').attr('src','img/checked.png')
        }
    });
    $('.function-standard-checkbox').click(function(){
        if($(this).children().eq(0).attr('src')=='img/checked.png'){
            $(this).children().eq(0).attr('src','img/check-box-3.png');
            $('.function-standard-check>img').attr('src','img/check-box-3.png')
        }else{
            $(this).children().eq(0).attr('src','img/checked.png')
        }
    });
    //费用项目设置勾选
    $('.function-standard-check1').click(function(){
        if($(this).children().eq(0).attr('src')=='img/checked.png'){
            $(this).children().eq(0).attr('src','img/check-box-3.png');
            $('.function-standard-checkbox1>img').attr('src','img/check-box-3.png')
        }else{
            $(this).children().eq(0).attr('src','img/checked.png');
            $('.function-standard-checkbox1>img').attr('src','img/checked.png')
        }
    });
    $('.function-standard-checkbox1').click(function(){
        if($(this).children().eq(0).attr('src')=='img/checked.png'){
            $(this).children().eq(0).attr('src','img/check-box-3.png');
            $('.function-standard-check1>img').attr('src','img/check-box-3.png')
        }else{
            $(this).children().eq(0).attr('src','img/checked.png')
        }
    });
    //币种显示顺序
    $('.function-coin-up').click(function(){
        if($(this).parent().prev())
            $(this).parent().prev().before($(this).parent());
        var a=$('.function-coin-style2>li:nth-child(1)>div:last-child>div:nth-child(1)>img');
        if(a.attr('src')=='img/up-use.png'){
            a.attr('src','img/up-nouse.png')
        }
        var b=$('.function-coin-style2>li:not(:first-child)>div:last-child>div:nth-child(1)>img');
        if(b.attr('src')=='img/up-nouse.png'){
            b.attr('src','img/up-use.png')
        }
    });
    //币种下拉
    $('.function-standard-style1>b').click(function(){
        $(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
    });
    $('.function-standard-style1>strong').click(function(){
        $(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
    });
    $('.function-standard-style1>small').click(function(){
        $(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
    });
    $('.function-standard-style1 > i').click(function(){
    		$(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
    });
    $('.function-standard-style1>em').click(function(){
        $(this).children("div").slideToggle(500).parent().siblings().children("div").slideUp();
    });
    //关闭个人城市币种弹窗
    $('.person-city-coin-bt').click(function(){
        $('.person-city-coin').css('display','none');
    });
    //关闭个人城市弹窗
    $('.person-city-bt').click(function(){
        $('.person-city').css('display','none');
    });
    //关闭个人币种弹窗
    $('.person-coin-bt').click(function(){
        $('.person-coin').css('display','none');
    });
    //关闭个人免费版弹窗
    $('.person-free-bt').click(function(){
        $('.person-free').css('display','none');
    });
    //关闭修改头像1弹窗
    $('.msg-change-photo-closebt1').click(function(){
        $('.msg-change-photo').css('display','none');
    });
    //关闭修改头像2弹窗
    $('.msg-change-photo-closebt2').click(function(){
        $('.msg-change-photo2').css('display','none');
    });
    $('.msg-change-photo2-bt2').click(function(){
        $('.msg-change-photo2').css('display','none');
    });
    $('.mypicture-reset-change').click(function(){
        $('.msg-change-photo2').css('display','block');
    });
    //关闭重新绑定手机1弹窗
    $('.rebind-phone1-bt').click(function(){
        $('.rebind-phone1').css('display','none');
    });
    //关闭重新绑定邮箱1弹窗
    $('.rebind-mail1-bt').click(function(){
        $('.rebind-mail1').css('display','none');
    });
    //关闭重新绑定手机2弹窗
    $('.rebind-phone2-bt').click(function(){
        $('.rebind-phone2').css('display','none')
    });
    $('.rebind-phone2-bt1').click(function(){
        $('.rebind-phone2').css('display','none')
    });
    $('.account-security-box2>div:nth-child(5)').click(function(){
       $('.rebind-phone2').css('display','block');
    });
    //关闭重新绑定邮箱2弹窗
    $('.rebind-mail2-bt').click(function(){
        $('.rebind-mail2').css('display','none');
    });
    $('.rebind-mail2-bt1').click(function(){
        $('.rebind-mail2').css('display','none');
    });
    $('.account-security-box3>div:nth-child(5)').click(function(){
        $('.rebind-mail2').css('display','block');
    });
    //关闭绑定邮箱弹窗
    $('.rebind-mail-bt').click(function(){
        $('.rebind-mail').css('display','none');
    });
    $('.rebind-mail-bt1').click(function(){
        $('.rebind-mail').css('display','none');
    });
    $('.bangding').click(function(){
        $('.rebind-mail').css('display','block');
    });
    //关闭修改密码弹窗1
    $('.change-psd1-bt').click(function(){
        $('.change-psd1').css('display','none');
    });
    $('.change-psd1-bt1').click(function(){
        $('.change-psd1').css('display','none');
    });
    $('.account-security-box4>div:nth-child(3)').click(function(){
        $('.change-psd1').css('display','block');
    });
    //关闭修改密码弹窗2
    $('.change-psd2-bt').click(function(){
        $('.change-psd2').css('display','none');
    });
    //公司职位禁用弹窗
    $('.organ-job-disable1-closebt').click(function(){
       $('.organ-job-disable1').css('display','none')
    });
    $('.organ-job-disable2-closebt').click(function(){
        $('.organ-job-disable2').css('display','none')
    });
    $('.organ-job-use-closebt').click(function(){
        $('.organ-job-use').css('display','none')
    });
    $('.organ-job-use2-closebt').click(function(){
        $('.organ-job-use2').css('display','none')
    });
    $('.function-disable-box-closebt').click(function(){
        $('.function-disable').css('display','none')
    });
    $('.function-able-box-closebt').click(function(){
        $('.function-able').css('display','none')
    });
    //验证手机提示
    $(".rebind-phone2-box2>input:nth-child(2)").bind('input propertychange', function(){
            var phone=$(".rebind-phone2-box2>input:nth-child(2)").val();
            if(phone.match(/^1[3|4|5|8]\d{9}$/)){

                $(".rebind-phone2-box2>p:nth-child(7)").html("正确");
            }else{

                $(".rebind-phone2-box2>p:nth-child(7)").html("请输入正确的手机号！");
            }
        }
    );
    $(".rebind-mail2-box2>input:nth-child(2)").bind('input propertychange', function(){
            var phone=$(".rebind-mail2-box2>input:nth-child(2)").val();
            if(phone.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){

                $(".rebind-mail2-box2>p:nth-child(7)").html("正确");
            }else{

                $(".rebind-mail2-box2>p:nth-child(7)").html("请输入正确的邮箱！");
            }
        }
    );

    //选择城市
    $('.person-city-coin-content1>ul>li').click(function(){
        $(this).children().eq(0).attr('src','img/checked.png');
        $(this).siblings().each(function(){
            $(this).children().eq(0).attr('src','img/check-box-2.png')
        });
    });
    //个人城市币种导航切换
    $('.person-city-coin-nav>li').click(function(){
        $(this).addClass('edit-gy').siblings().removeClass('edit-gy');
    });
    $('.person-city-coin-nav>li:nth-child(1)').click(function(){
        $('.person-city-coin-content-box1').css('display','block');
        $('.person-city-coin-content-box2').css('display','none');
        $('.person-city-coin-content-box3').css('display','none');
    });
    $('.person-city-coin-nav>li:nth-child(2)').click(function(){
        $('.person-city-coin-content-box1').css('display','none');
        $('.person-city-coin-content-box2').css('display','block');
        $('.person-city-coin-content-box3').css('display','none');
    });
    $('.person-city-coin-nav>li:nth-child(3)').click(function(){
        $('.person-city-coin-content-box1').css('display','none');
        $('.person-city-coin-content-box2').css('display','none');
        $('.person-city-coin-content-box3').css('display','block');
    });
    //个人币种导航切换
    $('.person-coin-nav>li').click(function(){
        $(this).addClass('edit-gy').siblings().removeClass('edit-gy');
    });
    $('.person-coin-nav>li:nth-child(1)').click(function(){
        $('.person-coin-content-box1').css('display','block');
        $('.person-coin-content-box2').css('display','none');
        $('.person-coin-content-box3').css('display','none');
    });
    $('.person-coin-nav>li:nth-child(2)').click(function(){
        $('.person-coin-content-box1').css('display','none');
        $('.person-coin-content-box2').css('display','block');
        $('.person-coin-content-box3').css('display','none');
    });
    $('.person-coin-nav>li:nth-child(3)').click(function(){
        $('.person-coin-content-box1').css('display','none');
        $('.person-coin-content-box2').css('display','none');
        $('.person-coin-content-box3').css('display','block');
    });
    //消息通知导航切换
    $('.msg-tip-nav>li').click(function(){
        $(this).addClass('edit-gy').siblings().removeClass('edit-gy');
    });
    $('.msg-tip-nav>li:nth-child(1)').click(function(){
        $('.msg-tip-box2').css('display','block');
        $('.msg-tip-box3').css('display','none');
        $('.msg-tip-box4').css('display','none');
    });
    $('.msg-tip-nav>li:nth-child(2)').click(function(){
        $('.msg-tip-box2').css('display','none');
        $('.msg-tip-box3').css('display','block');
        $('.msg-tip-box4').css('display','block');
    });
    //桌面提醒切换
    $('.msg-tip-box2>div:nth-child(2)>img').click(function(){
        if( $('.msg-tip-box2>div:nth-child(2)>img').attr('src')=='img/check-box-1.png'){
            $('.msg-tip-box2>div:nth-child(2)>img').attr('src','img/toyes-icon.png');
            $('.msg-tip-box2>div:nth-child(4)>img').attr('src','img/check-box-1.png');
        }
        else{
            $('.msg-tip-box2>div:nth-child(4)>img').attr('src','img/toyes-icon.png');
            $('.msg-tip-box2>div:nth-child(2)>img').attr('src','img/check-box-1.png');
        }
    });
    $('.msg-tip-box2>div:nth-child(4)>img').click(function(){
        if( $('.msg-tip-box2>div:nth-child(2)>img').attr('src')=='img/check-box-1.png'){
            $('.msg-tip-box2>div:nth-child(2)>img').attr('src','img/toyes-icon.png');
            $('.msg-tip-box2>div:nth-child(4)>img').attr('src','img/check-box-1.png');
        }
        else{
            $('.msg-tip-box2>div:nth-child(4)>img').attr('src','img/toyes-icon.png');
            $('.msg-tip-box2>div:nth-child(2)>img').attr('src','img/check-box-1.png');
        }
    });


    $('.msg-tip-box3>div:nth-child(2)>img').click(function(){
        if( $('.msg-tip-box3>div:nth-child(2)>img').attr('src')=='img/check-box-1.png'){
            $('.msg-tip-box3>div:nth-child(2)>img').attr('src','img/toyes-icon.png');
            $('.msg-tip-box3>div:nth-child(4)>img').attr('src','img/check-box-1.png');
        }
        else{
            $('.msg-tip-box3>div:nth-child(4)>img').attr('src','img/toyes-icon.png');
            $('.msg-tip-box3>div:nth-child(2)>img').attr('src','img/check-box-1.png');
        }
    });
    $('.msg-tip-box3>div:nth-child(4)>img').click(function(){
        if( $('.msg-tip-box3>div:nth-child(2)>img').attr('src')=='img/check-box-1.png'){
            $('.msg-tip-box3>div:nth-child(2)>img').attr('src','img/toyes-icon.png');
            $('.msg-tip-box3>div:nth-child(4)>img').attr('src','img/check-box-1.png');
        }
        else{
            $('.msg-tip-box3>div:nth-child(4)>img').attr('src','img/toyes-icon.png');
            $('.msg-tip-box3>div:nth-child(2)>img').attr('src','img/check-box-1.png');
        }
    });

    $('.msg-tip-box4>div:nth-child(2)>img').click(function(){
        if( $('.msg-tip-box4>div:nth-child(2)>img').attr('src')=='img/check-box-3.png'){
            $('.msg-tip-box4>div:nth-child(2)>img').attr('src','img/checked.png');
            $('.msg-tip-box4>div:nth-child(4)>img').attr('src','img/check-box-3.png');
        }
        else{
            $('.msg-tip-box4>div:nth-child(4)>img').attr('src','img/checked.png');
            $('.msg-tip-box4>div:nth-child(2)>img').attr('src','img/check-box-3.png');
        }
    });
    $('.msg-tip-box4>div:nth-child(4)>img').click(function(){
        if( $('.msg-tip-box4>div:nth-child(2)>img').attr('src')=='img/check-box-3.png'){
            $('.msg-tip-box4>div:nth-child(2)>img').attr('src','img/checked.png');
            $('.msg-tip-box4>div:nth-child(4)>img').attr('src','img/check-box-3.png');
        }
        else{
            $('.msg-tip-box4>div:nth-child(4)>img').attr('src','img/checked.png');
            $('.msg-tip-box4>div:nth-child(2)>img').attr('src','img/check-box-3.png');
        }
    });

    //开支模板-费用标准-编辑弹窗
    $('.function-standard-style1>p:nth-child(8)').click(function(){
        var a=$(this).text();
        if(a=='编辑'){
            $('.expenditureEstablish-cover').css('display','block');
        }else{}
    });
    $('.function-standard-style1>p:nth-child(9)').click(function(){

        var z=$(this).text();
        if(z=='启用'){

            $('.function-disable').css('display','block');
        }
        else if(z=='禁用'){
            $('.function-able').css('display','block');
        }
    });
    $("#load").hide();

    //日常开支清单
    $('.all-list-select-box').mousedown(function(event){

        if($(this).children().eq(2).css("display")=="none"){
            $('.all-list-select-box').each(function(i,item){
                $(item).children().eq(2).slideUp(500);
            });
            $(this).children().eq(2).slideToggle(500);
        }else{
            $('.all-list-select-box').each(function(i,item){
                $(item).children().eq(2).slideUp(500);
            })
        }

    });
    //function foo(){
    //        if($(this).children().eq(2).css("display")=="none"){
    //            $('.all-list-select-box').each(function(i,item){
    //                $(item).children().eq(2).slideUp(500);
    //            });
    //            $(this).children().eq(2).slideToggle(500);
    //        }else {
    //            $('.all-list-select-box').each(function (i, item) {
    //                $(item).children().eq(2).slideUp(500);
    //            })
    //        }
    //}
    $('.add-list-style2>div:nth-child(3)').click(function(){
        $(this).children().eq(2).slideToggle();
        $(this).parent().parent().siblings().children(".add-list-style").children("div").children("div").slideUp();
//      alert(5)
    });
    $('.add-list-style>div:nth-child(3)').click(function(){
        $(this).children().eq(2).slideToggle();
        $(this).parent().parent().siblings().children(".add-list-style").children("div").children("div").slideUp();
        $(".add-list-style2").children("div").children("div").slideUp();
//        alert(4)
    });
    $('.all-list-add').click(function(){
        $('.all-list-content4').append('<div class="add-list"> ' +
        '<div class="all-list-select "> <p>费用项目<span class="add-list-style-color">＊</span>:</p> ' +
        '<div class="all-list-select-box1"><p>请选择费用项目</p> ' +
        '<div><img src="img/fkb(14).png" alt=""/></div> ' +
        '<div> ' +
        '<p>1111111111</p> ' +
        '<p>2222222222</p> ' +
        '<p>2222222222</p> ' +
        '<p>2222222222</p> ' +
        '<p>2222222222</p> ' +
        '</div> ' +
        '</div> ' +
        '</div> ' +
        '<div class="all-list-select add-list-style"> ' +
        '<p>金额<span class="add-list-style-color">＊</span>:</p> ' +
        '<input type="text" placeholder="请输入金额"/><div class="add-list-style3"><p>CNY</p><img src="img/fkb(14).png" alt=""/> ' +
        '<div> ' +
        '<p>111</p> ' +
        '<p>222</p> ' +
        '<p>222</p> ' +
        '<p>222</p> ' +
        '<p>222</p> ' +
        '</div> ' +
        '</div> ' +
        '<div class="add-list-remove"><img src="img/delete(2).png" alt=""/></div> ' +
        '</div> ' +
        '</div>')
    });
    $('.add-list-remove').click(function(){
        $(this).parent().parent().remove();
    });

    $('.businessDocument-top>ul>li:nth-child(6)').click(function(){
        $('.general-expense-box').css('display','block')
    });

    $('.advance-expense').click(function(){
        if ( $('.advance-expense>img').attr('src')=='img/check-box-3.png'){
            $('.all-list-content5').css('display','block');
            $('.all-list-content6').css('display','block');
            $('.advance-expense>img').attr('src','img/checked-10.png')
        }else if($('.advance-expense>img').attr('src')=='img/checked-10.png'){
            $('.all-list-content5').css('display','none');
            $('.all-list-content6').css('display','none');
            $('.advance-expense>img').attr('src','img/check-box-3.png');
        }
    });

    $('.full-pay').click(function(){
        if ( $('.full-pay>img').attr('src')=='img/check-box-3.png'){
            $('.full-pay>img').attr('src','img/checked-10.png')
        }else if($('.full-pay>img').attr('src')=='img/checked-10.png'){
            $('.full-pay>img').attr('src','img/check-box-3.png');
        }
    });
    $('.all-list-content4').on("click",".all-list-select-box1",function(){
        $(this).children().eq(2).slideToggle();
    });
    $('.all-list-content4').on("click",".add-list-style3",function(){
        $(this).children().eq(2).slideToggle();
        $(this).parent().parent().siblings().children(".add-list-style").children("div").children("div").slideUp();
//      alert(3)
    });
    $('.all-list-content4').on("click",".add-list-remove",function(){
        $(this).parent().parent().remove();
    });
    $('.general-expense-ss').click(function(){
        $('.general-expense-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.general-expense-save').click(function(){
        $('.general-expense-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.general-expense-del').click(function(){
        $('.general-expense-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });


    //--------------出差申请-------------------------------------------------
    $('.businessDocument-top>ul>li:nth-child(1)').click(function(){
        $('.business-application-box').css('display','block')
    });
    $('.business-application-ss').click(function(){
        $('.business-application-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.business-application-save').click(function(){
        $('.business-application-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.business-application-del').click(function(){
        $('.business-application-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.all-list-add-1').click(function(){
        $('.all-list-content4-1').append('<div class="add-list"> ' +
        '<div class="all-list-select "> <p>费用项目<span class="add-list-style-color">＊</span>:</p> ' +
        '<div class="all-list-select-box1"><p>请选择费用项目</p> ' +
        '<div><img src="img/fkb(14).png" alt=""/></div> ' +
        '<div> ' +
        '<p>1111111111</p> ' +
        '<p>2222222222</p> ' +
        '</div> ' +
        '</div> ' +
        '</div> ' +
        '<div class="all-list-select add-list-style"> ' +
        '<p>金额<span class="add-list-style-color">＊</span>:</p> ' +
        '<input type="text" placeholder="请输入金额"/><div class="add-list-style3"><p>CNY</p><img src="img/fkb(14).png" alt=""/> ' +
        '<div> ' +
        '<p>111</p> ' +
        '<p>222</p> ' +
        '</div> ' +
        '</div> ' +
        '<div class="add-list-remove"><img src="img/delete(2).png" alt=""/></div> ' +
        '</div> ' +
        '</div>');
        $('.all-list-content6-1').show();
    });
    $('.all-list-content4-1').on("click",".add-list-remove",function(){
        $(this).parent().parent().remove();
    });
    $('.advance-expense2').click(function(){
        if ( $('.advance-expense2>img').attr('src')=='img/check-box-3.png'){
            $('.all-list-content5-1').show();
            $('.advance-expense2>img').attr('src','img/checked-10.png')
        }else if($('.advance-expense2>img').attr('src')=='img/checked-10.png'){
            $('.all-list-content5-1').hide();
            $('.advance-expense2>img').attr('src','img/check-box-3.png');
        }
    });
    $('.all-list-content4-1').on("click",".add-list-style3",function(){
        $(this).children().eq(2).slideToggle();
        $(this).parent().parent().siblings().children(".add-list-style").children("div").children("div").slideUp();
        $(".add-list-style2").children("div").children("div").slideUp();
//      alert(2)
    });
    $('.all-list-content4-1').on("click",".all-list-select-box1",function(){
        $(this).children().eq(2).slideToggle();
    });
    $('.full-pay1').click(function(){
        if ( $('.full-pay1>img').attr('src')=='img/check-box-3.png'){
            $('.full-pay1>img').attr('src','img/checked-10.png')
        }else if($('.full-pay1>img').attr('src')=='img/checked-10.png'){
            $('.full-pay1>img').attr('src','img/check-box-3.png');
        }
    });
    $('.add-list-style5>div:nth-child(1)>span').click(function(){
       $('.advance-book-tc').show();
    });
    $('.advance-bool-close-bt').click(function(){
       $('.advance-book-tc').hide();
    });
    $('.advance-book-add').click(function(){
        $('.advance-book-tc').hide();
        $('.all-list-content4-3').show();
    });
    //----------------------------日常费用报销单
    $('.businessDocument-top>ul>li:nth-child(5)').click(function(){
        $('.report-expense-box').css('display','block')
    });
    $('.report-expense-ss').click(function(){
        $('.report-expense-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.report-expense-save').click(function(){
        $('.report-expense-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.report-expense-del').click(function(){
        $('.report-expense-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.advance-expense1').click(function(){
        if ( $('.advance-expense1>img').attr('src')=='img/check-box-3.png'){
            $('.wait-apply-tc').show();
            $('.advance-expense1>img').attr('src','img/checked-10.png')
        }else if($('.advance-expense1>img').attr('src')=='img/checked-10.png'){
            $('.all-list-content1-1').hide();
            $('.advance-expense1>img').attr('src','img/check-box-3.png');
        }
    });
    $('.wait-apply-close-bt').click(function(){
        $('.wait-apply-tc').hide();
        $('.advance-expense1>img').attr('src','img/check-box-3.png');
    });
    $('.wait-apply-add').click(function(){
        $('.wait-apply-tc').hide();
        $('.all-list-content1-1').show();
    });
    $('.all-list-content5-2>div:nth-child(1)>span').click(function(){
       $('.report-expense-tc1').css('display','block');
    });
    $('.apply-day-alert-closebt1').click(function(){
        $('.report-expense-tc1').css('display','none');
    });
    $('.report-expense-bt1').click(function(){
        $('.all-list-content5-2>ul').css('display','block');
        $('.report-expense-tc1').css('display','none');
    });

    $('.all-list-content5-3>div:nth-child(1)>span').click(function(){
        $('.report-expense-tc2').css('display','block');
    });
    $('.apply-day-alert-closebt2').click(function(){
        $('.report-expense-tc2').css('display','none');
    });
    $('.report-expense-bt2').click(function(){
        $('.daily-expense-wait-pay1').css('display','block');
        $('.report-expense-tc2').css('display','none');
    });
    //现金预支单
    $('.businessDocument-top>ul>li:nth-child(2)').click(function(){
        $('.cash-expense-box').show();
    });
    $('.cash-expense-ss').click(function(){
        $('.cash-expense-box').hide();
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.cash-expense-save').click(function(){
        $('.cash-expense-box').hide();
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.cash-expense-del').click(function(){
        $('.cash-expense-box').hide();
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.advance-expense3').click(function(){
        if ( $('.advance-expense3>img').attr('src')=='img/check-box-3.png'){
            $('.cash-expense-tc').show();
            $('.advance-expense3>img').attr('src','img/checked-10.png')
        }else if($('.advance-expense3>img').attr('src')=='img/checked-10.png'){
            $('.advance-expense3>img').attr('src','img/check-box-3.png');
            $('.all-list-content1-2').hide();
        }
    });
    $('.cash-expense-bt').click(function(){
        $('.cash-expense-tc').hide();
        $('.all-list-content1-2').show();
    });
    $('.cash-expense-cbt').click(function(){
        $('.cash-expense-tc').hide();
        $('.advance-expense3>img').attr('src','img/check-box-3.png');
    });
    $('.all-list-add1').click(function(){
        $('.all-list-content4-2').append('<div class="all-list-select add-list-style ">' +
        '<p>金额<span class="add-list-style-color">＊</span>:</p> ' +
        '<input type="text" placeholder="请输入金额"/> ' +
        '<div div class="add-list-style3"><p>CNY</p><img src="img/fkb(14).png" alt=""/> ' +
        '<div> ' +
        '<p>111</p> ' +
        '<p>222</p> ' +
        '<p>222</p> ' +
        '<p>222</p> ' +
        '<p>222</p> ' +
        '</div> ' +
        '</div> ' +
        '<div class="add-list-remove1" ><img src="img/delete(2).png" alt=""/></div> ' +
        '</div>')
    });
    $('.all-list-content4-2').on("click",".add-list-remove1",function(){
        $(this).parent().remove();
    });
    $('.all-list-content4-2').on("click",".add-list-style3",function(){
        $(this).children().eq(2).slideToggle();
        $(this).parent().siblings().children("div").children("div").slideUp();
//      alert(1)
    });
    //预支还款单
    $('.businessDocument-top>ul>li:nth-child(3)').click(function(){
        $('.pay-back-box').show();
    });
    $('.pay-back-ss').click(function(){
        $('.pay-back-box').hide();
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.pay-back-save').click(function(){
        $('.pay-back-box').hide();
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.pay-back-del').click(function(){
        $('.pay-back-box').hide();
        $(".businessDocument-top > ul > li > img").hide();
    });
    //点击添加 出来弹框
    $('.add-list-style9').click(function(){
        $('.wait-pay-tc').show();
    });
    //出来弹框后点X
    $('.wait-pay-close-bt').click(function(){
        $('.wait-pay-tc').hide();
    });
    //添加成功后
    $('.wait-pay-add').click(function(){
        $('.wait-pay-tc').hide();
        $('.wait-pay-tc-show').show();
        $('.add-list-style7').hide();
        $('.all-list-content1-2-1').show();
    });
    $('.add-class-del').click(function(){
        $('.all-list-content1-2-1').hide();
        $('.add-list-style7').show();
    });
    //出差费用报销单
    $('.businessDocument-top>ul>li:nth-child(4)').click(function(){
        $('.report-expense1-box').css('display','block')
    });
    $('.report-expense1-ss').click(function(){
        $('.report-expense1-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.report-expense1-save').click(function(){
        $('.report-expense1-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });
    $('.report-expense1-del').click(function(){
        $('.report-expense1-box').css('display','none');
        $(".businessDocument-top > ul > li > img").hide();
    });
    //------根据出差申请单填制
    $('.report-expense1').click(function(){
        if ( $('.report-expense1>img').attr('src')=='img/check-box-3.png'){
            $('.wait-pay-tc1').show();
            $('.report-expense1>img').attr('src','img/checked-10.png')
        }else if($('.report-expense1>img').attr('src')=='img/checked-10.png'){
            $('.all-list-content1-3').hide();
            $('.report-expense1>img').attr('src','img/check-box-3.png');
        }
    });
    $('.wait-pay-close-bt1').click(function(){
        $('.wait-pay-tc1').hide();
        $('.report-expense1>img').attr('src','img/check-box-3.png');
    });
    $('.wait-pay-add1').click(function(){
        $('.wait-pay-tc1').hide();
        $('.all-list-content1-3').show();
    });
    $('.all-list-content5-2-1>div:nth-child(1)>span').click(function(){
        $('.report-expense-tc1-1').css('display','block');
    });
    $('.apply-day-alert-closebt1-1').click(function(){
        $('.report-expense-tc1-1').css('display','none');
    });
    $('.report-expense-bt1-1').click(function(){
        $('.all-list-content5-2-1>ul').css('display','block');
        $('.report-expense-tc1-1').css('display','none');
    });

    $('.all-list-content5-3-1>div:nth-child(1)>span').click(function(){
        $('.report-expense-tc2-1').css('display','block');
    });
    $('.apply-day-alert-closebt2-1').click(function(){
        $('.report-expense-tc2-1').css('display','none');
    });
    $('.report-expense-bt2-1').click(function(){
        $('.daily-expense-wait-pay2').css('display','block');
        $('.report-expense-tc2-1').css('display','none');
    });
    //打印页面
    $('.print-page-bt1').click(function(){
        $('.print-page1').show();
        $('.print-page1').jqprint();
    });
    $('.print-page-bt2').click(function(){
        $('.print-page2').show();
        $('.print-page2').jqprint();
    });
    $('.print-page-bt3').click(function(){
        $('.print-page3').show();
        $('.print-page3').jqprint();
    });
    $('.print-page-bt4').click(function(){
        $('.print-page4').show();
        $('.print-page4').jqprint();
    });
    $('.print-page-bt5').click(function(){
        $('.print-page5').show();
        $('.print-page5').jqprint();
    });
    //出差费用报销单 报销及应付金额表格
    $('.business-table1-change').click(function(){
        if($(this).children().eq(0).attr('src')=='img/triangle.png'){
            $(this).children().eq(0).attr('src','img/open.png');
            $(this).parent().parent().children('.business-table2').show();
        }else if($(this).children().eq(0).attr('src')=='img/open.png'){
            $(this).children().eq(0).attr('src','img/triangle.png');
            $(this).parent().parent().children('.business-table2').hide();
        }
    });
    $('.business-table2-del').click(function(){
        $(this).parent().parent().children('.business-table2').remove();
    });
    //查看日常费用报销申请信息
    $('.check-daily-team-build').click(function(){
        $('.daily-team-build').show();
    });
    $('.check-business-team-build').click(function(){
        $('.business-team-build').show();
    });
    $('.daily-team-build-cbt').click(function(){
        $('.daily-team-build').hide();
    });
    $('.business-team-build-cbt').click(function(){
        $('.business-team-build').hide();
    });

    //关闭开通服务tc
    $('.apply-for-open').click(function(){
        $('.open-service-confirm-tc').show();
    });
    $('.open-service-no').click(function(){
        $('.open-service-confirm-tc').hide();
    });
    $('.open-service-closebt').click(function(){
        $('.open-service-confirm-tc').hide();
    });
    $('.open-service-yes').click(function(){
        $('.open-service-confirm-tc').hide();
        $('.open-service-tip-tc').show();
    });
    $('.open-service-closebt').click(function(){
        $('.open-service-tip-tc').hide();
    });
    $('.open-service-donor-closebt').click(function(){
        $('.open-service-donor-tc').hide();
    });
    $('.open-service-donor-no').click(function(){
        $('.open-service-donor-tc').hide();
    });
    $('.open-service-donor-yes').click(function(){
        $('.open-service-donor-tc').hide();
    });
    $('.can-set-open-service').click(function(){
        $('.open-service-donor-tc').show();
    });
    //酒店房型弹窗
    $('.hotel-house-type-closebt').click(function () {
        $('.hotel-house-type-tc').hide();
    });
    $('.hotel-house-type-checkbtn').click(function () {
        $('.hotel-house-type-tc').hide();
    });
    $('.hotel-house-type-check').click(function(){
        var a = $(this);
       if(a.children().attr('src')=='img/choose-table-2.png'){
           a.children().attr('src','img/choose-table-1.png');
           a.parent().siblings('li').children('p').children('img').attr('src','img/choose-table-2.png');
       }
    });
    $('.hotel-level-closebt').click(function () {
        $('.hotel-level-tc').hide();
    });
    $('.hotel-level-checkbtn').click(function () {
        $('.hotel-level-tc').hide();
    });
    $('.hotel-level-check').click(function(){
        var a = $(this);
        if(a.children().attr('src')=='img/choose-table-2.png'){
            a.children().attr('src','img/choose-table-1.png');
            a.parent().siblings('li').children('p').children('img').attr('src','img/choose-table-2.png');
        }
    });
    $('.train-seat-closebt').click(function () {
        $('.train-seat-tc').hide();
    });
    $('.train-seat-checkbtn').click(function () {
        $('.train-seat-tc').hide();
    });
    $('.train-seat-check').click(function(){
        var a = $(this);
        if(a.children().attr('src')=='img/choose-table-2.png'){
            a.children().attr('src','img/choose-table-1.png');
            a.parent().siblings('li').children('p').children('img').attr('src','img/choose-table-2.png');
        }
    });
    $('.plane-seat-closebt').click(function () {
        $('.plane-seat-tc').hide();
    });
    $('.plane-seat-checkbtn').click(function () {
        $('.plane-seat-tc').hide();
    });
    $('.plane-seat-check').click(function(){
        var a = $(this);
        if(a.children().attr('src')=='img/choose-table-2.png'){
            a.children().attr('src','img/choose-table-1.png');
            a.parent().siblings('li').children('p').children('img').attr('src','img/choose-table-2.png');
        }
    });
    $('.airlineCheckBtn').click(function () {
        $('.airlineChooseCover').hide();
    });
    $('.airline-closebt').click(function () {
        $('.airlineChooseCover').hide();
    });
    $('.airlineCheck').click(function(){
        var a = $(this);
        if(a.children().attr('src')=='img/choose-table-2.png'){
            a.children().attr('src','img/choose-table-1.png');
            a.parent().siblings('li').children('.airlineCheck').children('img').attr('src','img/choose-table-2.png');
        }
    });
    //	业务单据－日常费用报销单－已关联清单表格行高
	$(".all-list-content1-1 > ul").each(function(){
		var Num = $(this).children("li").children("span");
		if(Num.length==1){
		Num.css({"line-height":"32px","height": "32px"});
		$(this).children("li").css("line-height",32+"px");
	}else{
		Num.css("line-height",25+"px");
		$(this).children("li").css("line-height",25*Num.length+"px");
	}
	});
	$(".all-list-content1-2 > ul").each(function(){
		var Num = $(this).children("li").children("span");
		if(Num.length==1){
		Num.css({"line-height":"32px","height": "32px"});
		$(this).children("li").css("line-height",32+"px");
	}else{
		Num.css("line-height",25+"px");
		$(this).children("li").css("line-height",25*Num.length+"px");
	}
	});
	$(".all-list-content1-3 > ul").each(function(){
		var Num = $(this).children("li").children("span");
		if(Num.length==1){
		Num.css({"line-height":"32px","height": "32px"});
		$(this).children("li").css("line-height",32+"px");
	}else{
		Num.css("line-height",25+"px");
		$(this).children("li").css("line-height",25*Num.length+"px");
	}
	});
    //开支模板标准个人币种导航 ul宽
    var l1 = $('.person-city-coin-nav li').length;
    var l2 = $('.person-coin-nav li').length;
        $('.person-coin-nav').width(82*l2+1);
        $('.person-city-coin-nav').width(82*l1+1);

    //开支模板标准个人币种导航左右滚动
    a=0;
    a1=0;
    var b=$('.person-coin-nav li').length-6;
    var b1=$('.person-city-coin-nav li').length-9;
    var c=b*82;
    var c1=b1*82;
    $('.expenditureEstablish-button button:nth-child(2)').each(function(){

        if(b>0){
            $('.person-coin-turn-left').show();
            $('.person-coin-turn-right').show();
        }
        else if(b1>0){
            $('.person-city-coin-turn-left').show();
            $('.person-city-coin-turn-right').show();
        }
    });

        $('.person-coin-turn-right').click(function(){
            if(a<=0&&a>-c){
            $('.person-coin-nav').animate({marginLeft:a-82+'px' });
            a=a-82;
            }
        });

        $('.person-city-coin-turn-right').click(function(){
            if(a1<=0&&a1>-c1){
                $('.person-city-coin-nav').animate({marginLeft:a1-82+'px' });
                a1=a1-82;
            }
        });

        $('.person-coin-turn-left').click(function(){
            if(a>=-c&&a<0){
            a=a+82;
            $('.person-coin-nav').animate({marginLeft:a+'px' });
            }
        });
        $('.person-city-coin-turn-left').click(function(){
            if(a1>=-c1&&a1<0){
                a1=a1+82;
                $('.person-city-coin-nav').animate({marginLeft:a1+'px' });
            }
        });
    //批量分配职位与部门
    $('.add-class9').click(function(){
        $('.edit-contentBox-lot').hide();
    });
    $('.add-class11').click(function(){
        $('.edit-contentBox-lot1').hide();
    });
    $('.all-adjustment>a').eq(0).click(function(){
        $('.edit-contentBox-lot').show();
    });
    $('.all-adjustment>a').eq(1).click(function(){
        $('.edit-contentBox-lot1').show();
    });
    //隐藏无单据关联弹窗
    $('.msg-no-doc-del').click(function(){
        $('.msg-no-doc-tc').hide();
    })
    
    
    
    
    
    
    
    	//点击其他地方， 当前下拉菜单隐藏
	$(document).bind("click",function(e){ 
		var target = $(e.target);
		//业务审批－新建－下拉菜单。
		if(target.closest(".add-list-style3").length == 0){ 
		$(".add-list-style3").children("div").slideUp(); 
		};

		if(target.closest(".add-list-style>div").length == 0){ 
		$('.add-list-style>div').children("div").slideUp(); 
		};
		if(target.closest(".add-list-style2>div").length == 0){ 
		$('.add-list-style2>div').children("div").slideUp(); 
		};
		if(target.closest(".all-list-select-box").length == 0){ 
		$(".all-list-select-box").children("div:nth-child(3)").slideUp();
		};
	});

    
   
    
});


