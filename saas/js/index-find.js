window.onload = function() {
height = $(this).height();
saas_topHeight =$(".saas-top").height();
$(".saas-left").css("height",height-saas_topHeight-60);
}
$(window).resize(function() {
height = $(this).height();
$(".saas-home-Main").css("height",height - "100" +"px");
$(".saas-left").css("height",height-saas_topHeight-60);
});