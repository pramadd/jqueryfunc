$(document).ready(function() {
    $(".btn1").click(function() {

    $(".header").html("<b>HEY!!</b>");
    
    });
    $(".btn2").click(function(){
        $(".hidy").hide(); 
    });

    $(".btn3").click(function(){
        $(".hidy").show(); 
    });

    $( ".btn4" ).click(function() {
        $( ".showy" ).toggle();
      });

      $( ".slidy" ).click(function() {
        $( ".img1" ).slideDown("slow");
      });

      $( ".fading" ).click(function() {
        $( ".fade" ).fadeOut("slow");
      });

      $( ".text1" ).click(function() {
    //   $( ".text" ).append( $( ".text2" ) );
      $( ".text" ).append( $("<strong>  be happy  </strong>") );
      });
});