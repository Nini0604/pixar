$(document).ready(function(){
  //################################visual#######################################
  $(".movieCharacter li a").bind("click focusin",function(){
	  $(".movieCharacter li.selected").removeClass().addClass($(this).parent("li").attr("class"));
	  $(this).parent("li").removeClass().addClass("selected");
  });

  //################################comingSoon#######################################
  $("#comingSoon #contentBg").css({"top":$("#comingSoon ul").offset().top});
  $("#comingSoon ul li a").bind("mouseenter focusin",function(){
	   $("#contentBg span").css({"fontSize":"18px","lineHeight":$(this).height()+"px"});
    $("#comingSoon #contentBg").stop().css({"width":$(this).width(),"height":$(this).height(),"left":$(this).offset().left,"top":$(this).offset().top});
  	var comingSoon = $(this).attr("id");
  	switch(comingSoon){
  		case "coco": $("#contentBg span").text("NOVEMBER 22, 2017");break;
  		case "incredible2": $("#contentBg span").text("JUNE 15, 2018");break;
  		case "toystory4": $("#contentBg span").text("JUNE 21, 2019");break;
  		default: $("#contentBg span").text("");break;
  	}
  }).bind("mouseout focusout",function(){
	$("#contentBg span").css({"fontSize":"0","lineHeight":"0"});
    $("#comingSoon #contentBg").stop().css({"width":"1px","height":"1px"});
  });

  //################################featureFilm######################################*/
  //select이어받기
  $(".filmSelect ul li a").bind("click focusin",function(){
    $(".filmSelect ul li a").parent().removeClass("selected");
    $(this).parent().addClass("selected");
  });

  //featureFilm prev next 슬라이딩 윈도우
  $(".filmScreen ul").css({"marginTop":"-744px"});
  $(".filmScreen ul").prepend($(".film:gt(12)"));

  $("#featureFilm .wNextBtn").bind("click focusin",function(){
    $(".filmScreen ul").stop().animate({"marginTop":"-=744px"},1000,"linear",function(){
      $(".filmScreen ul").append($(".film:lt(5)"));
      $(".filmScreen ul").css({"marginTop":"-744px"});
      $(".filmScreen ul li.selected").removeClass("selected").next().next().next().next().next().addClass("selected");
      featureFilmAutoText();
    });
  });

  $("#featureFilm .wPrevBtn").bind("click focusin",function(){
    $(".filmScreen ul").stop().animate({"marginTop":"+=744px"},1000,"linear",function(){
      $(".filmScreen ul").prepend($(".film:gt(12)"));
      $(".filmScreen ul").css({"marginTop":"-744px"});
      $(".filmScreen ul li.selected").removeClass("selected").prev().prev().prev().prev().prev().addClass("selected");
      featureFilmAutoText();
    });
  });

  $("#featureFilm .mNextBtn").bind("click focusin",function(){
    $(".filmScreen ul li.selected").removeClass("selected").next().addClass("selected");
    featureFilmAutoText();
    $(".filmScreen ul").append($(".film:first"));
  });

  $("#featureFilm .mPrevBtn").bind("click focusin",function(){
    $(".filmScreen ul").prepend($(".film:last"));
    $(".filmScreen ul li.selected").removeClass("selected").prev().addClass("selected");
    featureFilmAutoText();
  });

  //featureFilm클릭시 텍스트 변경
  $(".filmSelect ul .cars3 a").bind("click focusin",function(){cars3Text();featureFilmsText("cars3");});
  $(".filmSelect ul .dory a").bind("click focusin",function(){doryText();featureFilmsText("dory");});
  $(".filmSelect ul .dinosaur a").bind("click focusin",function(){dinosaurText();featureFilmsText("dinosaur");});
  $(".filmSelect ul .insideout a").bind("click focusin",function(){insideoutText();featureFilmsText("insideout");});
  $(".filmSelect ul .monstersUniver a").bind("click focusin",function(){monstersUniverText();featureFilmsText("monstersUniver");});
  $(".filmSelect ul .brave a").bind("click focusin",function(){braveText();featureFilmsText("brave");});
  $(".filmSelect ul .cars2 a").bind("click focusin",function(){cars2Text();featureFilmsText("cars2");});
  $(".filmSelect ul .toystory3 a").bind("click focusin",function(){toystory3Text();featureFilmsText("toyStory3");});
  $(".filmSelect ul .up a").bind("click focusin",function(){upText();featureFilmsText("up");});
  $(".filmSelect ul .walle a").bind("click focusin",function(){walleText();featureFilmsText("walle");});
  $(".filmSelect ul .ratatouille a").bind("click focusin",function(){ratatouilleText();featureFilmsText("ratatouille");});
  $(".filmSelect ul .cars a").bind("click focusin",function(){carsText();featureFilmsText("cars");});
  $(".filmSelect ul .incredibles a").bind("click focusin",function(){incrediblesText();featureFilmsText("incredibles");});
  $(".filmSelect ul .nemo a").bind("click focusin",function(){nemoText();featureFilmsText("nemo");});
  $(".filmSelect ul .monsters a").bind("click focusin",function(){monstersText();featureFilmsText("monsters");});
  $(".filmSelect ul .toystory2 a").bind("click focusin",function(){toystory2Text();featureFilmsText("toyStory2");});
  $(".filmSelect ul .bugsLife a").bind("click focusin",function(){bugsLifeText();featureFilmsText("bugsLife");});
  $(".filmSelect ul .toystory a").bind("click focusin",function(){toystoryText();featureFilmsText("toyStory");});

 //################################character######################################*/
  $("#characters .movieNameList .webFilmNameBtn").bind("click focusin",function(){
  	$(this).css({"display":"none"});
  	var classNameArray = $(this).attr("class").split(" ");
  	var className = classNameArray[0];
  	$(".movieNameList ul").prepend($(".movieNameList ul li:gt(8)"));

  	if(className == "wFilmNameNextBtn"){
  		$(".wFilmNamePrevBtn").css({"display":"block"});
  	} else{
  		$(".wFilmNameNextBtn").css({"display":"block"});
  	}
  });

  $("#characters .characterList ul li").hide();
  $("#characters .characterList ul li.cars3").show();

  function characterChange(){
    var classNameArray = $("#characters .movieNameList li.selected").attr("class").split(" ");
    var filmName = classNameArray[0];

    $(".characterList ul li").hide();

    for(i=0;i<5;i++){
      var percent=0;
      var j=i+1;
      $(".characterList ul li."+filmName+":eq("+i+")").stop().show(800*i);
      $(".characterProgress span").animate({"width":(j*=20)+"%"},350);
    }
  }

  $("#characters .movieNameList .mFilmNamePrevBtn").bind("click focusin",function(){
    var heightNum = $("#characters .characterList ul").height();
    $("#characters .characterList ul").css({"height":heightNum+"px"});
    $("#characters .movieNameList ul").prepend($(".movieNameList li:last"));
    $("#characters .movieNameList ul li.selected").removeClass("selected").prev().addClass("selected");
    characterChange();
  });

  $("#characters .movieNameList .mFilmNameNextBtn").bind("click focusin",function(){
    var heightNum = $("#characters .characterList ul").height();
    $("#characters .characterList ul").css({"height":heightNum+"px"});
    $("#characters .movieNameList ul li.selected").removeClass("selected").next().addClass("selected");
    $("#characters .movieNameList ul").append($(".movieNameList li:first"));
    characterChange();
  });

  $("#characters .movieNameList li a").bind("click focusin",function(){
    $(".characterProgress span").stop().clearQueue().css({"width":"0"});
    $("#characters .movieNameList li").removeClass("selected");
    $(this).parent("li").addClass("selected");
    characterChange();
  });

  $(".characterList ul li").mouseover(function(){
      var index = $(".characterList ul li").index(this);

      if(index%5==0){
        index=1;
      } else if(index%5==1){
        index=2;
      } else if(index%5==2){
        index=3;
      } else if(index%5==3){
        index=4;
      } else if(index%5==4){
        index=5;
      }

      $(".characterProgress span").animate({"width":(index*=20)+"%"},500);
  });

  $(window).resize(function(){
    $bodys = $("body").width();

    if($bodys >= 320 && $bodys<=767){
      $("#characters .characterList ul").css({"height":"auto"});
      $("#characters .movieNameList .webFilmNameBtn").css({"display":"none"});
    }else{
      $("#characters .movieNameList .wFilmNameNextBtn").css({"display":"block"});
      }

  });
  //################################shortFilms######################################*/
  function shortFilmsSelect(){
    $("#shortFilm li a .circleImgWrap").css({"border": "3px solid transparent","padding":"0"});
    $("#shortFilm li.selected a .circleImgWrap").css({"border": "3px solid #499df5","padding":"0","borderRadius": "100%"});
  }

  $("#shortFilm li a").bind("click focusin",function(){
    $("#shortFilm li").removeClass("selected");
	  $(this).parent().addClass("selected");
    shortFilmsSelect();
    //shortFilms 배경 css
    $("#shortFilm").css({"background":"cover center no-repeat"});
  });

  $("#shortFilm ul").prepend($("#shortFilm ul li:gt(13)"));

  $("#shortFilm .wNextBtn").bind("click focusin",function(){
    $("#shortFilm ul").stop().animate({"marginLeft":"-=806px"},1000,"linear",function(){
      $("#shortFilm ul").append($("#shortFilm li:lt(6)"));
      $("#shortFilm ul").css({"marginLeft":"-806px"});
      $("#shortFilm ul li.selected").removeClass("selected").next().next().next().next().next().next().addClass("selected");
      shortFilmAutoText();
      shortFilmsSelect();
    });
  });

  $("#shortFilm .wPrevBtn").bind("click focusin",function(){
    $("#shortFilm ul").stop().animate({"marginLeft":"+=806px"},1000,"linear",function(){
      $("#shortFilm ul").prepend($("#shortFilm li:gt(13)"));
      $("#shortFilm ul").css({"marginLeft":"-806px"});
      $("#shortFilm ul li.selected").removeClass("selected").prev().prev().prev().prev().prev().prev().addClass("selected");
      shortFilmAutoText();
      shortFilmsSelect();
    });
  });

  $("#shortFilm .mNextBtn").bind("click focusin",function(){
    $("#shortFilm ul li.selected").removeClass("selected").next().addClass("selected");
    $("#shortFilm ul").append($("#shortFilm li:first"));
    shortFilmAutoText();
    shortFilmsSelect();
  });

  $("#shortFilm .mPrevBtn").bind("click focusin",function(){
    $("#shortFilm ul li.selected").removeClass("selected").prev().addClass("selected");
    $("#shortFilm ul").prepend($("#shortFilm li:last"));
    shortFilmAutoText();
    shortFilmsSelect();
  });

  $("#shortFilm ul .lou a").bind("click focusin",function(){shortFilmsText("lou");louText();});
  $("#shortFilm ul .piper a").bind("click focusin",function(){shortFilmsText("piper");piperText();});
  $("#shortFilm ul .sanjaySuperTeam a").bind("click focusin",function(){shortFilmsText("sanjaySuperTeam");sanjaySuperTeamText();});
  $("#shortFilm ul .lava a").bind("click focusin",function(){shortFilmsText("lava");lavaText();});
  $("#shortFilm ul .blueUmbrella a").bind("click focusin",function(){shortFilmsText("blueUmbrella");blueUmbrellaText();});
  $("#shortFilm ul .partyCentral a").bind("click focusin",function(){shortFilmsText("partyCentral");partyCentralText();});
  $("#shortFilm ul .laLuna a").bind("click focusin",function(){shortFilmsText("laLuna");laLunaText();});
  $("#shortFilm ul .dayNight a").bind("click focusin",function(){shortFilmsText("dayNight");dayNightText();});
  $("#shortFilm ul .partlyCloudy a").bind("click focusin",function(){shortFilmsText("partlyCloudy");partlyCloudyText();});
  $("#shortFilm ul .presto a").bind("click focusin",function(){shortFilmsText("presto");prestoText();});
  $("#shortFilm ul .lifted a").bind("click focusin",function(){shortFilmsText("lifted");liftedText();});
  $("#shortFilm ul .oneManBand a").bind("click focusin",function(){shortFilmsText("oneManBand");oneManBandText();});
  $("#shortFilm ul .boundin a").bind("click focusin",function(){shortFilmsText("boundin");boundinText();});
  $("#shortFilm ul .forTheBirds a").bind("click focusin",function(){shortFilmsText("forTheBirds");forTheBirdsText();});
  $("#shortFilm ul .gerisGame a").bind("click focusin",function(){shortFilmsText("gerisGame");gerisGameText();});
  $("#shortFilm ul .knickKnack a").bind("click focusin",function(){shortFilmsText("knickKnack");knickKnackText();});
  $("#shortFilm ul .tinToy a").bind("click focusin",function(){shortFilmsText("tinToy");tinToyText();});
  $("#shortFilm ul .redDream a").bind("click focusin",function(){shortFilmsText("redsDream");redDreamText();});
  $("#shortFilm ul .luxo a").bind("click focusin",function(){shortFilmsText("luxoJr");luxoText();});
  $("#shortFilm ul .wally a").bind("click focusin",function(){shortFilmsText("andreWally");wallyText();});
});//닫는태그
