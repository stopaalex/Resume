/* TIMEOUT OF WELCOME PAGE - TAKEN OUT

setTimeout(function(){
  if($('#welcome').length > 0) {
    $('#welcome').slideUp();
  }
}, 2000)
*/

$(document).ready(function(){
    
    $(".logocontent").hide();
    $(".logobtn").click(function(){
        $(".logocontent").slideToggle(1000);
      
       if ($("#logobtn").text() == "LOGO DESIGN") {
         $("#logobtn").html("x")
       }
       else {
         $("#logobtn").text("LOGO DESIGN")
       }
      
      if($("#logobtn").text() =="x") {
        $("#logobtn").css('text-align','right')
      }
      else {
        $("#logobtn").css('text-align','center')
      }
      
    });
  
    $(".mmcontent").hide();
    $(".mmbtn").click(function(){
        $(".mmcontent").slideToggle(1000);
      
      if ($("#mmbtn").text() == "MARKETING MATERIAL") {
         $("#mmbtn").html("x")
       }
       else {
         $("#mmbtn").text("MARKETING MATERIAL")
       }
      
      if($("#mmbtn").text() =="x") {
        $("#mmbtn").css('text-align','right')
      }
      else {
        $("#mmbtn").css('text-align','center')
      }
      
    });
  
    $(".wdcontent").hide();
    $(".wdbtn").click(function(){
        $(".wdcontent").slideToggle(1000);
      
      if ($("#wdbtn").text() == "WEB DESIGN") {
         $("#wdbtn").html("x")
       }
       else {
         $("#wdbtn").text("WEB DESIGN")
       }
      
      if($("#wdbtn").text() =="x") {
        $("#wdbtn").css('text-align','right')
      }
      else {
        $("#wdbtn").css('text-align','center')
      }
      
    });
  
/* VIEW ALL BUTTON*/
/* VIEW ALL BUTTON*/
  
    
    $(".logocontent").hide();
    $(".ptflo").click(function(){
        $(".logocontent").slideToggle(1000);
      
       if ($("#logobtn").text() == "LOGO DESIGN") {
         $("#logobtn").html("x")
       }
       else {
         $("#logobtn").text("LOGO DESIGN")
       }
      
      if($("#logobtn").text() =="x") {
        $("#logobtn").css('text-align','right')
      }
      else {
        $("#logobtn").css('text-align','center')
      }
      
/* VIEW ALL TEXT TOGGLE*/  
      
      if ($(".ptflo").text() == "VIEW ALL WORK") {
         $(".ptflo").html("x")
       }
       else {
         $(".ptflo").text("VIEW ALL WORK")
       }
      
      if($(".ptflo").text() =="x") {
        $(".ptflo").css('text-align','right')
      }
      else {
        $(".ptflo").css('text-align','center')
      }
      
    });
  
    $(".mmcontent").hide();
    $(".ptflo").click(function(){
        $(".mmcontent").slideToggle(1000);
      
      if ($("#mmbtn").text() == "MARKETING MATERIAL") {
         $("#mmbtn").html("x")
       }
       else {
         $("#mmbtn").text("MARKETING MATERIAL")
       }
      
      if($("#mmbtn").text() =="x") {
        $("#mmbtn").css('text-align','right')
      }
      else {
        $("#mmbtn").css('text-align','center')
      }
      
      
    });
  
    $(".wdcontent").hide();
    $(".ptflo").click(function(){
        $(".wdcontent").slideToggle(1000);
      
      if ($("#wdbtn").text() == "WEB DESIGN") {
         $("#wdbtn").html("x")
       }
       else {
         $("#wdbtn").text("WEB DESIGN")
       }
      
      if($("#wdbtn").text() =="x") {
        $("#wdbtn").css('text-align','right')
      }
      else {
        $("#wdbtn").css('text-align','center')
      }
      
      
    });
});
