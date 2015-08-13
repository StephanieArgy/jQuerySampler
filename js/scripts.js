$(document).ready(function(){

  //Hide Script
  $("#hideButton").click(function(){
      $("#hideID").hide();
  });

//Show Script
  $("#showButton").click(function(){
      $("#showID").show();
  });

  //Toggle Script
    $("#toggleButton").click(function(){
        $("#toggler").toggleClass("listShow");
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

  //All Three at Once
  $("#changeEverythingButton").click(function(){
  $( "body" ).addClass("secondTexture").addClass("secondFontColor").addClass("secondFont");
  });

  //Reload
  $("#reloadButton").click(function(){
  location.reload();
  });

  //Slider

  $("#sliderButton").click(function() {
    $( ".slidingBox" ).toggleClass('off');
  });

//New HTML

  $("#changeMyAuthor").click(function() {
  $(".authorText").html("You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was things which he stretched, but mainly he told the truth. That is nothing. I never seen anybody but lied one time or another, without it was Aunt Polly, or the widow, or maybe Mary. Aunt Polly -- Tom's Aunt Polly, she is -- and Mary, and the Widow Douglas is all told about in that book, which is mostly a true book, with some stretchers, as I said before.").addClass("twainFont");
  });


});
