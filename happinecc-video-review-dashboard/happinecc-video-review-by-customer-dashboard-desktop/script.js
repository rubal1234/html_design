function toggleNav() {
 if($("#mySidepanel").css("width") == "0px"){
  $("#mySidepanel").css({
    "width" : "305px"
  })
}else{
    $("#mySidepanel").css({
    "width" : "0px"
  })
  $("#top-header").css({
    "margin-left" : "0px"
  })
    $(".main-content").removeClass("overlay-effect");
    
  }
}

$(document).on("click",".times_icon",function(e){
     $("#mySidepanel").css({
    "width" : "0px"
  })
})

$(document).on("change",".selectbox",function(e){
   var active_status = $(this).find("option:selected").text();
   if(active_status == "Approved"){

   $(this).closest("td").find(".active-status").css({
     'color' : '#08D15F'
   })
   $(this).closest("tr").find("td:nth-child(5)").text("Invite to the partnership program will be sent in 24 hours.");
   }else if(active_status == "Pending"){
    $(this).closest("td").find(".active-status").css({
     'color' : '#FF9100'
   })
     $(this).closest("tr").find("td:nth-child(5)").text("");
   }else{
     $(this).closest("td").find(".active-status").css({
     'color' : 'red'
   })
      $(this).closest("tr").find("td:nth-child(5)").text("");
   }
})

function show(){
  $(".video_text").show();
  $(".view_video_button").show();
}
function hide(){
  $(".video_text").hide();
    $(".view_video_button").hide();
}


// $('.dropdown-menu li').on('click', function() {
//   var getValue = $(this).text();
//   $(this).closest("div").find(".dropdown-toggle").text(getValue);
// });

