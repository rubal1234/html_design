$(document).on("keyup",".revenue_text",function(e){
	$(this).closest("td").find(".save_btn").show();
})

$(document).on("click",".save_btn",function(e){
	$(".modal").show();
})
$(document).on("click",".ok_btn",function(e){
	$(".modal").hide();
})