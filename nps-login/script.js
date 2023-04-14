$(document).on("click",".eye_icon",function(){
	var input_type = $("#password-area");
	if(input_type.attr("type") == "password"){
		input_type.attr("type","text");
	}else{
		input_type.attr("type","password");
	}
})
$(document).on("click","#otp_eye",function(){
	var input_type = $("#otp-area");
	if(input_type.attr("type") == "password"){
		input_type.attr("type","text");
	}else{
		input_type.attr("type","password");
	}
})


function checkValidation(){
	var input_text_val = $("#email").val();
	var password_text_val = $("#password-area").val();
	if(input_text_val.trim() == ""){
		$(".alert").show();
		$(".icon2").css({
			"margin-top" : "0px"
		})
	}else{
		$(".alert").hide();
		$(".icon2").css({
			"margin-top" : "8px"
		})
	}
	if(password_text_val.trim() == ""){
		$(".alert2").show();
	}else{
		$(".alert2").hide();
	}
}

function validate(){
	var otp_val = $("#otp-area").val();
	if(otp_val.trim() == ""){
		$(".alert3").show();
	}else{
		$(".alert3").hide();
	}
}