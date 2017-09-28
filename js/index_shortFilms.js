function shortFilmAutoText(){
  if($("#shortFilm ul li.lou").hasClass("selected")){shortFilmsText("lou");louText();}
  if($("#shortFilm ul li.piper").hasClass("selected")){shortFilmsText("piper");piperText();}
  if($("#shortFilm ul li.sanjaySuperTeam").hasClass("selected")){shortFilmsText("sanjaySuperTeam");sanjaySuperTeamText();}
  if($("#shortFilm ul li.lava").hasClass("selected")){shortFilmsText("lava");lavaText();}
  if($("#shortFilm ul li.blueUmbrella").hasClass("selected")){shortFilmsText("blueUmbrella");blueUmbrellaText();}
  if($("#shortFilm ul li.partyCentral").hasClass("selected")){shortFilmsText("partyCentral");partyCentralText();}
  if($("#shortFilm ul li.laLuna").hasClass("selected")){shortFilmsText("laLuna");laLunaText();}
  if($("#shortFilm ul li.dayNight").hasClass("selected")){shortFilmsText("dayNight");dayNightText();}
  if($("#shortFilm ul li.partlyCloudy").hasClass("selected")){shortFilmsText("partlyCloudy");partlyCloudyText();}
  if($("#shortFilm ul li.presto").hasClass("selected")){shortFilmsText("presto");prestoText();}
  if($("#shortFilm ul li.lifted").hasClass("selected")){shortFilmsText("lifted");liftedText();}
  if($("#shortFilm ul li.oneManBand").hasClass("selected")){shortFilmsText("oneManBand");oneManBandText();}
  if($("#shortFilm ul li.boundin").hasClass("selected")){shortFilmsText("boundin");boundinText();}
  if($("#shortFilm ul li.forTheBirds").hasClass("selected")){shortFilmsText("forTheBirds");forTheBirdsText();}
  if($("#shortFilm ul li.gerisGame").hasClass("selected")){shortFilmsText("gerisGame");gerisGameText();}
  if($("#shortFilm ul li.knickKnack").hasClass("selected")){shortFilmsText("knickKnack");knickKnackText();}
  if($("#shortFilm ul li.tinToy").hasClass("selected")){shortFilmsText("tinToy");tinToyText();}
  if($("#shortFilm ul li.redDream").hasClass("selected")){shortFilmsText("redsDream");redDreamText();}
  if($("#shortFilm ul li.luxo").hasClass("selected")){shortFilmsText("luxoJr");luxoText();}
  if($("#shortFilm ul li.wally").hasClass("selected")){shortFilmsText("andreWally");wallyText();}
}

function shortFilmsText(filmName){
  $("#shortFilm").css({"background-image":"url(img/bg/"+filmName+".jpg)"});
  $("#shortFilm .shortViewMore").attr("href","html/shortFilms/"+filmName+".html");
}

function louText(){
  $("#shortFilm .filmName").text("Lou");
  $("#shortFilm .filmText").html("Lou must manage the unkind"+"<br/>"+"behavior of the schoolyard"+"<br/>"+"bully J.J., who has not yet learned"+"<br/>"+"that giving can be so much"+"<br/>"+"more fulfilling than taking away."+"<br/>");
}

function piperText(){
  $("#shortFilm .filmName").text("Piper");
  $("#shortFilm .filmText").html("'Piper' tells the story of a hungry"+"<br/>"+"sandpiper hatchling who ventures"+"<br/>"+"from her nest for the first time to"+"<br/>"+"dig for food by the shoreline."+"<br/>"+"The only problem is, the food is"+"<br/>"+"buried beneath the sand where"+"<br/>"+"scary waves roll up onto the shore."+"<br/>");
}

function sanjaySuperTeamText(){
  $("#shortFilm .filmName").text("Sanjay Super Team");
  $("#shortFilm .filmText").html("In 'Sanjay's Super Team'"+"<br/>"+"accomplished artist Sanjay Patel"+"<br/>"+"uses his own experience to tell"+"<br/>"+"the story of a young,"+"<br/>"+"first-generation Indian-American"+"<br/>"+"boy whose love for western pop"+"<br/>"+"culture comes into conflict"+"<br/>"+"with his father’s traditions."+"<br/>");
}

function lavaText(){
  $("#shortFilm .filmName").text("Lava");
  $("#shortFilm .filmText").html("Inspired by the isolated beauty"+"<br/>"+"of tropical islands and the explosive"+"<br/>"+"allure of ocean volcanoes,"+"<br/>"+"LAVA is a musical love story"+"<br/>"+"that takes place over millions of years."+"<br/>");
}

function blueUmbrellaText(){
  $("#shortFilm .filmName").text("The Blue Umbrella");
  $("#shortFilm .filmText").html("It is just another evening commute"+"<br/>"+"until the rain starts to fall,"+"<br/>"+"and the city comes alive to"+"<br/>"+"the sound of dripping rain pipes,"+"<br/>"+"whistling awnings and gurgling gutters."+"<br/>"+" And in the midst, two umbrellas—one blue,"+"<br/>"+"one not—fall eternally in love."+"<br/>");
}

function partyCentralText(){
  $("#shortFilm .filmName").text("Party Central");
  $("#shortFilm .filmText").html("Mike and Sulley return to Monsters"+"<br/>"+"University for a fun-filled weekend"+"<br/>"+"with their Oozma Kappa fraternity brothers."+"<br/>"+"The gang is throwing their first party,"+"<br/>"+"but no one’s showing up."+"<br/>");
}

function laLunaText(){
  $("#shortFilm .filmName").text("La Luna");
  $("#shortFilm .filmText").html("'La Luna' is the timeless fable"+"<br/>"+"of a young boy coming of age"+"<br/>"+"in the most peculiar circumstances."+"<br/>");
}

function dayNightText(){
  $("#shortFilm .filmName").text("Day & Night");
  $("#shortFilm .filmText").html("When Day, a sunny fellow,"+"<br/>"+"encounters Night, a stranger of"+"<br/>"+"distinctly darker moods, sparks fly!"+"<br/>"+"But as their suspicions turn to"+"<br/>"+"curiosity, they are delighted to"+"<br/>"+"find that this budding friendship can"+"<br/>"+"offer a new perspective on the world."+"<br/>");
}

function partlyCloudyText(){
  $("#shortFilm .filmName").text("Partly Cloudy");
  $("#shortFilm .filmText").html("Everyone knows that the stork"+"<br/>"+"delivers babies, but where does the"+"<br/>"+"stork get the babies?"+"<br/>"+"The answer lies up in the stratosphere,"+"<br/>"+"where cloud people sculpt babies"+"<br/>"+"from clouds and bring them to life."+"<br/>");
}

function prestoText(){
  $("#shortFilm .filmName").text("Presto");
  $("#shortFilm .filmText").html("Dignity. Poise. Mystery."+"<br/>"+"We expect nothing less from the"+"<br/>"+"great turn-of-the-century magician Presto."+"<br/>"+"But when Presto neglects to feed"+"<br/>"+"his rabbit one too many times,"+"<br/>"+"the magician finds he isn't the only"+"<br/>"+"one with a few tricks up his sleeves!"+"<br/>");
}

function liftedText(){
  $("#shortFilm .filmName").text("Lifted");
  $("#shortFilm .filmText").html("When an overconfident teen"+"<br/>"+"alien gets behind the controls"+"<br/>"+"of a spaceship, he must attempt"+"<br/>"+"to abduct a slumbering farmer under"+"<br/>"+"a critical instructor's watchful eye."+"<br/>");
}

function oneManBandText(){
  $("#shortFilm .filmName").text("One Man Band");
  $("#shortFilm .filmText").html("With one coin to make a wish"+"<br/>"+"at the piazza fountain, a peasant girl"+"<br/>"+"encounters two competing street"+"<br/>"+"performers who'd prefer the coin"+"<br/>"+"to find its way into their tip jars."+"<br/>");
}

function boundinText(){
  $("#shortFilm .filmName").text("Boundin'");
  $("#shortFilm .filmText").html("On a high mountain plain"+"<br/>"+"lives a lamb with wool of such"+"<br/>"+"remarkable sheen that he breaks"+"<br/>"+"into high-steppin' dance. But there comes"+"<br/>"+"a day when he loses his lustrous coat"+"<br/>"+"and his pride along with it."+"<br/>");
}

function forTheBirdsText(){
  $("#shortFilm .filmName").text("For The Birds");
  $("#shortFilm .filmText").html("One by one, a flock of small"+"<br/>"+"birds perch on a telephone wire."+"<br/>"+"Sitting close together has problems"+"<br/>"+"enough, but then along comes a"+"<br/>"+"large dopey bird that tries to"+"<br/>"+"join them."+"<br/>");
}

function gerisGameText(){
  $("#shortFilm .filmName").text("Geri's Game");
  $("#shortFilm .filmText").html("An aging codger named Geri"+"<br/>"+"plays a daylong game of chess"+"<br/>"+"in the park against himself."+"<br/>"+"Somehow, he begins losing to"+"<br/>"+"his livelier opponent."+"<br/>");
}

function knickKnackText(){
  $("#shortFilm .filmName").text("Knick Knack");
  $("#shortFilm .filmText").html("Life on a shelf as a snowman trapped in"+"<br/>"+"a snow-globe blizzard can become wearing,"+"<br/>"+"especially when you're surrounded by"+"<br/>"+"knickknacks from sunnier locales."+"<br/>");
}

function tinToyText(){
  $("#shortFilm .filmName").text("Tin Toy");
  $("#shortFilm .filmText").html("Babies are hardly monster-like,"+"<br/>"+"unless you're a toy. After escaping"+"<br/>"+"a drooling baby, Tinny realizes that"+"<br/>"+"he wants to be played with after all."+"<br/>");
}

function redDreamText(){
  $("#shortFilm .filmName").text("Red's Dream");
  $("#shortFilm .filmText").html("Life as the sole sale item in the"+"<br/>"+"clearance corner of Eben's Bikes can"+"<br/>"+"get lonely. So Red, a unicycle,"+"<br/>"+"dreams up a clown owner and his own"+"<br/>"+"juggling act that steals the show."+"<br/>");
}

function luxoText(){
  $("#shortFilm .filmName").text("Luxo Jr");
  $("#shortFilm .filmText").html("A baby lamp finds a ball to play with"+"<br/>"+"and it's all fun and games until the ball"+"<br/>"+"bursts. Just when the elder Luxo thinks"+"<br/>"+"his kid will settle down for a bit, Luxo Jr. finds"+"<br/>"+"another ball—ten times larger."+"<br/>");
}

function wallyText(){
  $("#shortFilm .filmName").text("Andre and Wally B");
  $("#shortFilm .filmText").html("There's nothing like a restful nap in"+"<br/>"+"a pleasant wooded valley. But when"+"<br/>"+"André awakens and is greeted by a pesky"+"<br/>"+"yellow-and-black striped insect with a nasty"+"<br/>"+"stinger, he ends up taking a quick hike."+"<br/>");
}
