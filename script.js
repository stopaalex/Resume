setTimeout(function(){
  if($('#welcome').length > 0) {
    $('#welcome').slideUp();
  }
}, 6000)

$(document).ready(function(){
    
    $(".logocontent").hide();
    $(".logobtn").click(function(){
        $(".logocontent").slideToggle(1000);
      
       if ($("#logobtn").text() == "LOGO DESIGN") {
         $("#logobtn").html("close")
       }
       else {
         $("#logobtn").text("LOGO DESIGN")
       }
      
    });
  
    $(".mmcontent").hide();
    $(".mmbtn").click(function(){
        $(".mmcontent").slideToggle(1000);
      
      if ($("#mmbtn").text() == "MARKETING MATERIAL") {
         $("#mmbtn").html("close")
       }
       else {
         $("#mmbtn").text("MARKETING MATERIAL")
       }
      
    });
  
    $(".wdcontent").hide();
    $(".wdbtn").click(function(){
        $(".wdcontent").slideToggle(1000);
      
      if ($("#wdbtn").text() == "WEB DESIGN") {
         $("#wdbtn").html("close")
       }
       else {
         $("#wdbtn").text("WEB DESIGN")
       }
      
    });
  
/* VIEW ALL BUTTON*/
/* VIEW ALL BUTTON*/
  
    
    $(".logocontent").hide();
    $(".ptflo").click(function(){
        $(".logocontent").slideToggle(1000);
      
       if ($("#logobtn").text() == "LOGO DESIGN") {
         $("#logobtn").html("close")
       }
       else {
         $("#logobtn").text("LOGO DESIGN")
       }
      
/* VIEW ALL TEXT TOGGLE*/  
      
      if ($(".ptflo").text() == "VIEW ALL WORK") {
         $(".ptflo").html("close all")
       }
       else {
         $(".ptflo").text("VIEW ALL WORK")
       }
      
    });
  
    $(".mmcontent").hide();
    $(".ptflo").click(function(){
        $(".mmcontent").slideToggle(1000);
      
      if ($("#mmbtn").text() == "MARKETING MATERIAL") {
         $("#mmbtn").html("close")
       }
       else {
         $("#mmbtn").text("MARKETING MATERIAL")
       }
      
    });
  
    $(".wdcontent").hide();
    $(".ptflo").click(function(){
        $(".wdcontent").slideToggle(1000);
      
      if ($("#wdbtn").text() == "WEB DESIGN") {
         $("#wdbtn").html("close")
       }
       else {
         $("#wdbtn").text("WEB DESIGN")
       }
      
    });
});

 
/*
function logodes(){
  document.getElementById("logobtn").innerHTML = "Click to View Content";
}
function logodesout() {
  document.getElementById("logobtn").innerHTML = "LOGO DESIGN";
}


function mmdes(){
  document.getElementById("mmbtn").innerHTML = "Click to View Content";
}
function mmdesout() {
  document.getElementById("mmbtn").innerHTML = "MARKETING MATERIAL";
}


function wddes(){
  document.getElementById("wdbtn").innerHTML = "Click to View Content";
}
function wddesout() {
  document.getElementById("wdbtn").innerHTML = "WEB DESIGN";
}
*/
