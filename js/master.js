$(document).ready(function(){
  $("#about_button").click(function(){
    if($(".past_meetup").css("display")=="block")
    {
      $(".past_meetup").fadeOut("fast",function(){
        $(".about").fadeIn("fast");
      });
    }
    else {
      $(".contact").fadeOut("fast",function(){
        $(".about").fadeIn("fast");
      });
    }
  });
  $("#past_meetup_button").click(function(){
    if($(".contact").css("display")=="block")
    {
      $(".contact").fadeOut("fast",function(){
        $(".past_meetup").fadeIn("fast");
      });
    }
    else {
      $(".about").fadeOut("fast",function(){
        $(".past_meetup").fadeIn("fast");
      });
    }
  });
  $("#contact_button").click(function(){
    if($(".past_meetup").css("display")=="block")
    {
      $(".past_meetup").fadeOut("fast",function(){
        $(".contact").fadeIn("fast");
      });
    }
    else {
      $(".about").fadeOut("fast",function(){
        $(".contact").fadeIn("fast");
      });
    }
  });

  $("#nav_button").click(function(){
    if($("#nav_button").hasClass("nav_button_click"))
    {
      $("#nav_button").removeClass("nav_button_click");
      $(".nav_mobile").fadeOut("fast");
    }
    else {
      $("#nav_button").addClass("nav_button_click");
      $(".nav_mobile").fadeIn("fast");
    }
  });

  $("#about_button2").click(function(){
    $("#nav_button").removeClass("nav_button_click");
    $(".nav_mobile").fadeOut("fast", function() {
      if($(".past_meetup").css("display")=="block")
      {
        $(".past_meetup").fadeOut("fast",function(){
          $(".about").fadeIn("fast");
        });
      }
      else {
        $(".contact").fadeOut("fast",function(){
          $(".about").fadeIn("fast");
        });
      }
    });
  });
  $("#past_meetup_button2").click(function(){
    $("#nav_button").removeClass("nav_button_click");
    $(".nav_mobile").fadeOut("fast", function(){
      if($(".contact").css("display")=="block")
      {
        $(".contact").fadeOut("fast",function(){
          $(".past_meetup").fadeIn("fast");
        });
      }
      else {
        $(".about").fadeOut("fast",function(){
          $(".past_meetup").fadeIn("fast");
        });
      }
    });
  });
  $("#contact_button2").click(function(){
    $("#nav_button").removeClass("nav_button_click");
    $(".nav_mobile").fadeOut("fast", function(){
      if($(".past_meetup").css("display")=="block")
      {
        $(".past_meetup").fadeOut("fast",function(){
          $(".contact").fadeIn("fast");
        });
      }
      else {
        $(".about").fadeOut("fast",function(){
          $(".contact").fadeIn("fast");
        });
      }
    });
  });
});
