$(document).ready(function(){
  
    $(".menubutton").click(function(){

      if($(".menubutton").text() == "☰"){
        $(".menubutton").text("🞬");
      }else{
        $(".menubutton").text("☰");
      }
      
      $("li").toggle("slow");
    });  
});

