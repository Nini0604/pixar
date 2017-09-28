$(document).ready(function(){
  $("#container .characterWrap ul li").hide();
  $("#container .characterWrap")
  $("#container .characterWrap ul li.cars3").show();

  $("#container .logoWrap ul li a").bind("click focusin",function(){
    $("#container .logoWrap ul li").removeClass("selected");
    $(this).parent("li").addClass("selected");

    $("#container .characterWrap ul li").hide(1000);
    $("."+($(this).attr("id"))+":first").show(1000);
    $("."+($(this).attr("id"))+":not(:first)").show(2000);
  });
});
