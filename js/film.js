$(function(){
  $("#content .contentWrap:not(:first)").hide();
  $("#tab li a").bind("click focusin",function(){
    $("#content .contentWrap").hide();
    $("#tab li a").removeClass("selected");
    $(this).addClass("selected");
    $($(this).attr("href")).show();
  });
});
