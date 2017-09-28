function featureFilmAutoText(){
  if($(".filmScreen ul li.cars3").hasClass("selected")){cars3Text();featureFilmsText("cars3");}
  if($(".filmScreen ul li.dory").hasClass("selected")){doryText();featureFilmsText("dory");}
  if($(".filmScreen ul li.dinosaur").hasClass("selected")){dinosaurText();featureFilmsText("dinosaur");}
  if($(".filmScreen ul li.insideout").hasClass("selected")){insideoutText();featureFilmsText("insideout");}
  if($(".filmScreen ul li.monstersUniver").hasClass("selected")){monstersUniverText();featureFilmsText("monstersUniver");}
  if($(".filmScreen ul li.brave").hasClass("selected")){braveText();featureFilmsText("brave");}
  if($(".filmScreen ul li.cars2").hasClass("selected")){cars2Text();featureFilmsText("cars2");}
  if($(".filmScreen ul li.toystory3").hasClass("selected")){toystory3Text();featureFilmsText("toyStory3");}
  if($(".filmScreen ul li.up").hasClass("selected")){upText();featureFilmsText("up");}
  if($(".filmScreen ul li.walle").hasClass("selected")){walleText();featureFilmsText("walle");}
  if($(".filmScreen ul li.ratatouille").hasClass("selected")){ratatouilleText();featureFilmsText("ratatouille");}
  if($(".filmScreen ul li.cars").hasClass("selected")){carsText();featureFilmsText("cars");}
  if($(".filmScreen ul li.incredibles").hasClass("selected")){incrediblesText();featureFilmsText("incredibles");}
  if($(".filmScreen ul li.nemo").hasClass("selected")){nemoText();featureFilmsText("nemo");}
  if($(".filmScreen ul li.monsters").hasClass("selected")){monstersText();featureFilmsText("monsters");}
  if($(".filmScreen ul li.toystory2").hasClass("selected")){toystory2Text();featureFilmsText("toyStory2");}
  if($(".filmScreen ul li.bugsLife").hasClass("selected")){bugsLifeText();featureFilmsText("bugsLife");}
  if($(".filmScreen ul li.toystory").hasClass("selected")){toystoryText();featureFilmsText("toyStory");}
}

function featureFilmsText(filmName){
	$("#featureFilm .left .filmTextArea .character img").attr("src","img/character/featureFilms/"+filmName+"_00.png");
	$("#featureFilm .left .filmTextArea .subCharacter img").attr("src","img/character/featureFilms/"+filmName+"_01.png");
	$("#featureFilm .left .filmMoreBtn #readMore").attr("href","html/featureFilms/film_"+filmName+".html");
	$("#featureFilm .left .filmMoreBtn #watchTrailer").attr("href","html/featureFilms/film_"+filmName+".html#trailerContent");
	$("#featureFilm .right").css({"backgroundImage":"url('img/poster/"+filmName+"_poster.jpg')","background":"cover center no-repeat"});
	$("#featureFilm .right span img").attr("src","img/poster/"+filmName+"_poster.jpg");
}

function cars3Text(){
  $("#featureFilm .left .filmTextArea .filmName").text("CARS3");
  $("#featureFilm .left .filmTextArea .filmDate").text("JULY 2017");
  $("#featureFilm .left .filmTextArea .firstText").html("Blindsided by a new generation"+"<br/>"+"of blazing-fast racers, the"+"<br/>"+"legendary Lightning McQueen is"+"<br/>"+"suddenly pushed out of"+"<br/>"+"the sport he loves.");
  $("#featureFilm .left .filmTextArea .secondText").html("To get back in the game,"+"<br/>"+"he will need the help of an"+"<br/>"+"eager young race technician"+"<br/>"+"with her own plan to win,"+"<br/>"+"inspiration from the late"+"<br/>");
  $("#featureFilm .left .filmTextArea .thirdText").html("Fabulous Hudson Hornet,"+"<br/>"+"and a few unexpected turns."+"<br/>"+"Proving that #95 isn’t through"+"<br/>"+"yet will test the heart"+"<br/>"+"of a championon on Piston");
  $("#featureFilm .left .filmTextArea .lastText").html("Cup Racing’s biggest stage!");
}

function doryText(){
  $("#featureFilm .left .filmTextArea .filmName").text("FINDING DORY");
  $("#featureFilm .left .filmTextArea .filmDate").text("July 2016");
  $("#featureFilm .left .filmTextArea .firstText").html("Forgetful blue tang Dory is"+"<br/>"
  +"living happily in the reef with"+"<br/>"+"Marlin and Nemo. When Dory"+"<br/>"+"suddenly remembers that she"+"<br/>"+"has a family out there who may"+"<br/>");
  $("#featureFilm .left .filmTextArea .secondText").html("be looking for her."+"<br/>"+"The trio takes off on a life-"+"<br/>"+"changing adventure across the"+"<br/>"+"ocean to California’s prestigious"+"<br/>"+"Marine Life Institute, a rehabili"+"<br/>");
  $("#featureFilm .left .filmTextArea .thirdText").html("-tation center and aquarium"+"<br/>"+"In an effort to find her mom and"+"<br/>"+"dad, Dory enlists the help of"+"<br/>"+"three of the MLI’s most"+"<br/>"+"intriguing residents: Hank,"+"<br/>");
  $("#featureFilm .left .filmTextArea .lastText").text("a cantankerous 'septopus' who frequently gives employees the slip; Bailey, a beluga whale who is convinced his biological sonar skills are on the fritz; and Destiny, a nearsighted whale shark. Deftly navigating the complex inner workings of the MLI, Dory and her friends discover the magic within their flaws, friendships and family.");
}

function dinosaurText(){
  $("#featureFilm .left .filmTextArea .filmName").text("THE GOOD DINOSAUR");
  $("#featureFilm .left .filmTextArea .filmDate").text("NOVEMBER 2015");
  $("#featureFilm .left .filmTextArea .firstText").html("The Good Dinosaur asks the"+"<br/>"+"question: What if the asteroid that"+"<br/>"+"forever changed life on Earth"+"<br/>"+"missed the planet completely and"+"<br/>"+"giant dinosaurs never");
  $("#featureFilm .left .filmTextArea .secondText").html("became extinct? Pixar takes"+"<br/>"+"you on an epic journey into the"+"<br/>"+"world of dinosaurs where an"+"<br/>"+"Apatosaurus named Arlo"+"<br/>"+"makes an unlikely human");
  $("#featureFilm .left .filmTextArea .thirdText").html("friend. While traveling"+"<br/>"+"through a harsh and"+"<br/>"+"mysterious landscape, Arlo"+"<br/>"+"learns the power of confronting"+"<br/>"+"his fears and discovers");
  $("#featureFilm .left .filmTextArea .lastText").html("what he is truly capable of.");
}

function insideoutText(){
  $("#featureFilm .left .filmTextArea .filmName").text("INSIDE OUT");
  $("#featureFilm .left .filmTextArea .filmDate").text("JUNE 2015");
  $("#featureFilm .left .filmTextArea .firstText").html("Growing up can be a bumpy road,"+"<br/>"+"and it’s no exception for"+"<br/>"+"Riley, who is uprooted from her"+"<br/>"+"Midwest life when her father"+"<br/>"+"starts a new job in San Francisco."+"<br/>");
  $("#featureFilm .left .filmTextArea .secondText").html("Like all of us, Riley is"+"<br/>"+"guided by her emotions"+"<br/>"+"– Joy, Fear, Anger, Disgust"+"<br/>"+"and Sadness. The emotions live"+"<br/>"+"in Headquarters, the control"+"<br/>");
  $("#featureFilm .left .filmTextArea .thirdText").html("center inside Riley’s mind,"+"<br/>"+"where they help advise her"+"<br/>"+"through everyday life."+"<br/>"+"As Riley and her emotions"+"<br/>"+"struggle to adjust to a new life"+"<br/>");
  $("#featureFilm .left .filmTextArea .lastText").html("in San Francisco, turmoil ensues in Headquarters.Although Joy, Riley’s main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school.");
}

function monstersUniverText(){
  $("#featureFilm .left .filmTextArea .filmName").text("MONSTERS UNIVERSITY");
  $("#featureFilm .left .filmTextArea .filmDate").text("SEPTEMBER 2015");
  $("#featureFilm .left .filmTextArea .firstText").html("We all know Mike Wazowski"+"<br/>"+"and James P. Sullivan to be an"+"<br/>"+"inseparable pair, but that"+"<br/>"+"wasn’t always the case."+"<br/>"+"From the moment these"+"<br/>");
  $("#featureFilm .left .filmTextArea .secondText").html("two mismatched monsters"+"<br/>"+"met they couldn't stand"+"<br/>"+"each other. Monsters"+"<br/>"+"University unlocks");
  $("#featureFilm .left .filmTextArea .thirdText").html("the door to how Mike and"+"<br/>"+"Sulley overcame their"+"<br/>"+"differences and became the"+"<br/>"+"best of friends.");
  $("#featureFilm .left .filmTextArea .lastText").html("");
}

function braveText(){
    $("#featureFilm .left .filmTextArea .filmName").text("BRAVE");
    $("#featureFilm .left .filmTextArea .filmDate").text("SEPTEMBER 2012");
    $("#featureFilm .left .filmTextArea .firstText").html("Since ancient times,"+"<br/>"+"stories of epic battles and"+"<br/>"+"mystical legends have been"+"<br/>"+"passed through the"+"<br/>"+"generations across the");
    $("#featureFilm .left .filmTextArea .secondText").html("rugged and mysterious"+"<br/>"+"Highlands of Scotland."+"<br/>"+"A new tale joins the"+"<br/>"+"lore when the courageous");
    $("#featureFilm .left .filmTextArea .thirdText").html("Merida confronts tradition"+"<br/>"+" and challenges destiny"+"<br/>"+" to change her fate.");
    $("#featureFilm .left .filmTextArea .lastText").html("");
}

function cars2Text(){
    $("#featureFilm .left .filmTextArea .filmName").text("CARS2");
    $("#featureFilm .left .filmTextArea .filmDate").text("JULY 2011");
    $("#featureFilm .left .filmTextArea .firstText").html("Star racecar Lightning McQueen"+"<br/>"+"and the incomparable tow truck"+"<br/>"+"Mater take their friendship"+"<br/>"+"to exciting new places in"+"<br/>"+"Cars 2 when they head");
    $("#featureFilm .left .filmTextArea .secondText").html("overseas to compete in"+"<br/>"+"the first-ever World Grand"+"<br/>"+"Prix to determine the"+"<br/>"+"world's fastest car.");
    $("#featureFilm .left .filmTextArea .thirdText").html("But the road to the"+"<br/>"+"championship is filled with"+"<br/>"+"plenty of potholes, detours,"+"<br/>"+"and hilarious surprises"+"<br/>");
    $("#featureFilm .left .filmTextArea .lastText").html("when Mater gets caught up in an intriguing adventure of his own: international espionage.");
}

function toystory3Text(){
    $("#featureFilm .left .filmTextArea .filmName").text("TOY STORY3");
    $("#featureFilm .left .filmTextArea .filmDate").text("AUGUST 2010");
    $("#featureFilm .left .filmTextArea .firstText").html("The creators of the beloved"+"<br/>"+"Toy Story films re-open the"+"<br/>"+"toy box and bring moviegoers"+"<br/>"+"back to the delightful"+"<br/>"+"world of our favorite gang"+"<br/>");
    $("#featureFilm .left .filmTextArea .secondText").html("of toy characters in"+"<br/>"+"Toy Story 3. As Andy prepares"+"<br/>"+"to depart for college,"+"<br/>"+"Buzz, Woody, and the"+"<br/>");
    $("#featureFilm .left .filmTextArea .thirdText").html("rest of his loyal toys"+"<br/>"+"are troubled about their uncertain"+"<br/>"+"future.Toy Story 3 is a"+"<br/>"+"comical adventure that lands the");
    $("#featureFilm .left .filmTextArea .lastText").html("toys.in a room full of untamed tots who can't wait to get their sticky little fingers on these 'new' toys. It's pandemonium as the toys try to stay together, ensuring that 'no toy gets left behind.'");
}

function upText(){
    $("#featureFilm .left .filmTextArea .filmName").text("UP");
    $("#featureFilm .left .filmTextArea .filmDate").text("JULY 2009");
    $("#featureFilm .left .filmTextArea .firstText").html("A 78-year-old curmudgeonly"+"<br/>"+"balloon salesman, is"+"<br/>"+"not your average hero."+"<br/>"+"When he ties thousands"+"<br/>"+"of balloons to his house"+"<br/>");
    $("#featureFilm .left .filmTextArea .secondText").html("and flies away to the wilds of"+"<br/>"+"South America, he finally"+"<br/>"+"fulfills his lifelong dream"+"<br/>"+"of adventure. But after"+"<br/>"+"Carl discovers an 8-year-old");
    $("#featureFilm .left .filmTextArea .thirdText").html("stowaway named Russell, "+"<br/>"+"this unlikely duo soon finds"+"<br/>"+"themselves on a hilarious"+"<br/>"+"journey in a lost world filled"+"<br/>"+"with danger and surprises.");
    $("#featureFilm .left .filmTextArea .lastText").html("");
}

function walleText(){
    $("#featureFilm .left .filmTextArea .filmName").text("WALL-E");
    $("#featureFilm .left .filmTextArea .filmDate").text("AUGUST 2008");
    $("#featureFilm .left .filmTextArea .firstText").html("What if mankind had to"+"<br/>"+"leave Earth and somebody"+"<br/>"+"forgot to turn the last "+"<br/>"+"robot off? After hundreds of"+"<br/>"+"years doing what he was"+"<br/>");
    $("#featureFilm .left .filmTextArea .secondText").html("built for, WALL•E discovers"+"<br/>"+"a new purpose in life"+"<br/>"+"when he meets a sleek"+"<br/>"+"search robot named EVE."+"<br/>"+"EVE comes to realize that");
    $("#featureFilm .left .filmTextArea .thirdText").html("WALL•E has inadvertently"+"<br/>"+"stumbled upon the key to the"+"<br/>"+"planet's future, and races"+"<br/>"+"back to space to report"+"<br/>"+"to the humans.");
    $("#featureFilm .left .filmTextArea .lastText").html("Meanwhile, WALL•E chases EVE across the galaxy and sets into motion one of the most imaginative adventures ever brought to the big screen.");
}

function ratatouilleText(){
    $("#featureFilm .left .filmTextArea .filmName").text("RATATOUILLE");
    $("#featureFilm .left .filmTextArea .filmDate").text("JUNE 2007");
    $("#featureFilm .left .filmTextArea .firstText").html("A rat named Remy dreams of"+"<br/>"+"becoming a great chef despite"+"<br/>"+"his family's wishes, and the"+"<br/>"+"obvious problem of"+"<br/>"+"being a rat in a decidedly"+"<br/>");
    $("#featureFilm .left .filmTextArea .secondText").html("rodent-phobic profession."+"<br/>"+"When fate places Remy in"+"<br/>"+"the sewers of Paris,"+"<br/>"+"he finds himself ideally"+"<br/>"+"situated beneath a restaurant"+"<br/>");
    $("#featureFilm .left .filmTextArea .thirdText").html("made famous by his culinary"+"<br/>"+"hero,Auguste Gusteau."+"<br/>"+"Remy's passion for cooking soon"+"<br/>"+"sets into motion a hilarious"+"<br/>"+"and exciting rat race that"+"<br/>");
    $("#featureFilm .left .filmTextArea .lastText").html("turns the world of Paris upside down.");
}

function carsText(){
    $("#featureFilm .left .filmTextArea .filmName").text("CARS");
    $("#featureFilm .left .filmTextArea .filmDate").text("JULY 2006");
    $("#featureFilm .left .filmTextArea .firstText").html("Aspiring champion race car"+"<br/>"+"Lightning McQueen is on the"+"<br/>"+"fast track to success, fame,"+"<br/>"+"and everything he's ever"+"<br/>"+"hoped for—until");
    $("#featureFilm .left .filmTextArea .secondText").html("until he takes an unexpected"+"<br/>"+"detour on dusty Route 66."+"<br/>"+"His have-it-all-now attitude is"+"<br/>"+"thrown into a tailspin"+"<br/>");
    $("#featureFilm .left .filmTextArea .thirdText").html("when a small-town community"+"<br/>"+"that time forgot shows"+"<br/>"+"McQueen what he's been missing"+"<br/>"+"in his high-octane life.");
    $("#featureFilm .left .filmTextArea .lastText").html("");
}

function incrediblesText(){
    $("#featureFilm .left .filmTextArea .filmName").text("THE INCREDIBLES");
    $("#featureFilm .left .filmTextArea .filmDate").text("DECEMBER 2004");
    $("#featureFilm .left .filmTextArea .firstText").html("It takes a will of steel to"+"<br/>"+"hide your superhero talents"+"<br/>"+"from a world that still needs"+"<br/>"+"you, yet no longer appreciates"+"<br/>"+"what you can do.");
    $("#featureFilm .left .filmTextArea .secondText").html("Battling a bulging belly"+"<br/>"+"and a boring job, Mr. Incredible"+"<br/>"+"longs for the glory days"+"<br/>"+"of upholding law and order"+"<br/>"+"while his superhuman family"+"<br/>");
    $("#featureFilm .left .filmTextArea .thirdText").html("tries to fit in with their"+"<br/>"+"'normal' life. Relief from"+"<br/>"+"quiet suburbia finally "+"<br/>"+"comes years later, when"+"<br/>"+"the family uncovers a diabolical");
    $("#featureFilm .left .filmTextArea .lastText").html("plan and must bring together their respective strengths to save the day.");
}

function nemoText(){
    $("#featureFilm .left .filmTextArea .filmName").text("FINDING NEMO");
    $("#featureFilm .left .filmTextArea .filmDate").text("JUNE 2003");
    $("#featureFilm .left .filmTextArea .firstText").html("In the colorful and warm tropical"+"<br/>"+"waters of the Great Barrier Reef,"+"<br/>"+"a Clown Fish named Marlin lives"+"<br/>"+"safe and secluded in his"+"<br/>"+"anemone home with his only son,");
    $("#featureFilm .left .filmTextArea .secondText").html("Nemo. Fearful of the ocean and"+"<br/>"+"its unpredictable risks,"+"<br/>"+"he struggles to protect his"+"<br/>"+"son. Nemo, like all young fish,"+"<br/>");
    $("#featureFilm .left .filmTextArea .thirdText").html("is eager to explore the mysterious"+"<br/>"+"reef. When Nemo is unexpectedly"+"<br/>"+"taken far from home and"+"<br/>"+"thrust into a tacky dentist’s"+"<br/>");
    $("#featureFilm .left .filmTextArea .lastText").html("office fish tank, Marlin finds himself the unlikely hero on an epic journey to rescue his son.");
}

function monstersText(){
    $("#featureFilm .left .filmTextArea .filmName").text("MONSTERS INC");
    $("#featureFilm .left .filmTextArea .filmDate").text("DECEMBER 2001");
    $("#featureFilm .left .filmTextArea .firstText").html("There's a reason why"+"<br/>"+"there are monsters in"+"<br/>"+"children's closets—it's their job."+"<br/>"+"Monsters, Inc. is the most"+"<br/>"+"successful scream-processing"+"<br/>");
    $("#featureFilm .left .filmTextArea .secondText").html("factory in the monster world,"+"<br/>"+"and there is no better"+"<br/>"+"Scarer than James P. Sullivan."+"<br/>"+"But when 'Sulley' accidentally"+"<br/>");
    $("#featureFilm .left .filmTextArea .thirdText").html("lets a little human girl into"+"<br/>"+"Monstropolis, life turns"+"<br/>"+"upside down for him and"+"<br/>"+"his buddy Mike.");
    $("#featureFilm .left .filmTextArea .lastText").html("");
}

function toystory2Text(){
    $("#featureFilm .left .filmTextArea .filmName").text("TOY STORY2");
    $("#featureFilm .left .filmTextArea .filmDate").text("DECEMBER 1999");
    $("#featureFilm .left .filmTextArea .firstText").html("Buzz, Woody, and their friends"+"<br/>"+"are back as Andy heads off to"+"<br/>"+"Cowboy Camp, leaving his toys"+"<br/>"+"to their own devices."+"<br/>"+"Things shift into high gear");
    $("#featureFilm .left .filmTextArea .secondText").html("when an obsessive toy collector"+"<br/>"+"name Al McWhiggin, owner of"+"<br/>"+"Al's Toy Barn, kidnaps"+"<br/>"+"Woody.  At Al's apartment,"+"<br/>"+"Woody discovers that he is"+"<br/>");
    $("#featureFilm .left .filmTextArea .thirdText").html("a highly valued collectible from"+"<br/>"+"a 1950s TV show called 'Woody's"+"<br/>"+"Roundup.' He meets the other"+"<br/>"+"prized toys from the show:"+"<br/>"+"Jessie the Cowgirl, Bullseye"+"<br/>");
    $("#featureFilm .left .filmTextArea .lastText").html("the Horse, and Stinky Pete the Prospector. Andy's toys mount a daring rescue mission, Buzz Lightyear meets his match, and Woody has to decide where he and his heart truly belong.");
}

function bugsLifeText(){
    $("#featureFilm .left .filmTextArea .filmName").text("A BUG'S LIFE");
    $("#featureFilm .left .filmTextArea .filmDate").text("DECEMBER 1998");
    $("#featureFilm .left .filmTextArea .firstText").html("Meet Flik. Independent-thinker"+"<br/>"+"ant. The only insect capable"+"<br/>"+"of throwing a kink in the"+"<br/>"+"food chain. After one of"+"<br/>"+"Flik's inventions goes"+"<br/>");
    $("#featureFilm .left .filmTextArea .secondText").html("terribly wrong, he embarks"+"<br/>"+"on a mission to help"+"<br/>"+"save the colony from a"+"<br/>"+"gang of freeloading"+"<br/>"+"grasshoppers in order to get"+"<br/>");
    $("#featureFilm .left .filmTextArea .thirdText").html("back in good graces with"+"<br/>"+"the Queen. But when the group"+"<br/>"+"of 'warrior bugs' that Flik recruits"+"<br/>"+"turns out to be a bumbling"+"<br/>"+"circus troupe,"+"<br/>");
    $("#featureFilm .left .filmTextArea .lastText").html("he must believe in himself and his inventions to save Ant Island once and for all.");
}

function toystoryText(){
    $("#featureFilm .left .filmTextArea .filmName").text("TOY STORY");
    $("#featureFilm .left .filmTextArea .filmDate").text("DECEMBER 1995");
    $("#featureFilm .left .filmTextArea .firstText").html("Ever wonder what toys do"+"<br/>"+"when people aren't around?"+"<br/>"+"Toy Story answers that question"+"<br/>"+"with a fantastic fun-filled"+"<br/>"+"journey, viewed mostly"+"<br/>");
    $("#featureFilm .left .filmTextArea .secondText").html("through the eyes of two"+"<br/>"+"rival toys – Woody, the lanky,"+"<br/>"+"likable cowboy,and Buzz"+"<br/>"+"Lightyear, the fearless"+"<br/>"+"space ranger. Led by Woody,");
    $("#featureFilm .left .filmTextArea .thirdText").html("Andy's toys live happily in"+"<br/>"+"his room until Andy's birthday"+"<br/>"+"brings Buzz Lightyear onto"+"<br/>"+"the scene. Afraid of losing"+"<br/>"+"his place in Andy's heart,"+"<br/>");
    $("#featureFilm .left .filmTextArea .lastText").html("Woody plots against Buzz.But when circumstances separate Buzz and Woody from their owner, the comically-mismatched duo eventually learn to put aside their differences, and they find themselves on a hilarious adventure-filled mission where the only way they can survive is to form an uneasy alliance.");
  }
