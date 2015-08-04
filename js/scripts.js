$(document).ready(function(){

  //Hide Script
  $("#hideButton").click(function(){
      $("p#hideID").hide();
  });

//Show Script
  $("#showButton").click(function(){
      $("p#showID").show();
  });

//Add Class Demos

  //Background Texture
    $("#addTextureButton").click(function(){
  $( "body" ).addClass("addTexture");
  });

  //Font Color
  $("#fontColorButton").click(function(){
  $( "body" ).addClass("addFontColor");
  });

  //Font Family
  $("#newFontButton").click(function(){
  $( "body" ).addClass("newFont");
  });



});
