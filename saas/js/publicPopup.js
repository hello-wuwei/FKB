
//通用弹窗。－闪现框
function promptalert(type,title,content){
	//type==1,弹出确认alert框。
	if(type==1){
		$(".publicPopup-cover").fadeIn();
		$(".publicPopup-box-top > p").html(title);
		$(".publicPopup-box-bottom > p").html(content);
		$(".publicPopup-box-top > img").click(function(){
			$(".publicPopup-cover").fadeOut();
		});
		$(".publicPopup-box-bottom > button").click(function(){
			$(".publicPopup-cover").fadeOut();
		});
	};
	//type==2,弹出闪现框。
	if(type==2){
			$(".propertyReceipt-saveSucess").fadeIn().delay(1500).hide(500);
			$(".propertyReceipt-saveSucess > p").html(title);
	};
}
