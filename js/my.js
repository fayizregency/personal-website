$(document).ready(function(){
	$("#submit-form").validate({
		rules:{
			name:{
				required:true,
				minlength:2
			},
			Email:{
				required:true,
				email:true
			},
			Phone:{
				required:true,
				minlength:10,
				maxlength:15
				
			},
			Message:{
				required:true,
				maxlength:100
			}
		},
		messages: {
			// Name: "Please enter your name",
			// Email: "Please enter a valid email address",
				Phone:"Check your phone number"
	  },
	 	 submitHandler: function(form){
			$.ajax({
			url:"https://script.google.com/macros/s/AKfycbz-fAepN2mj2QSr0W5LIMrYqomgsRdLMf6ghPTm/exec",
			data:$("#submit-form").serialize(),
			method:"post",
			success:function (response){
				alert("Form submitted successfully")
				window.location.reload()
				//window.location.href="https://google.com"
			},
			error:function (err){
				alert("Something Error")

			}
		})
	  }
	});

});



// $(document).ready(function () {
//   $('[data-toggle="popover"]').popover({
//     html: true,
//     placement: "right",
//     trigger: "click",
//   });
//   $("#formButton").click(function () {
//     var fullName = $("#Name").val();
//     var email = $("#Email").val();
//     var phone = $("#phone").val();
//     var message = $("#msg").val();
//     // console.log("FullName : " + fullName);
//     // console.log("Email : " + email);
//     // console.log("Mobile No : " + phone);
//     // console.log("Message : " + message);
//     if (validator()) {
//       console.log("Form Submitted");
//       $("#submit-form").submit();
//       alert("Thank you for Submission");
//       //var formData = $(this).serializeArray();
//       //console.log(formData);
//     } else {
//       event.preventDefault();
//       alert("Error While submitting");
//       //   console.log("error while submitting");
//     }
//   });

//   function validator() {
//     var fullName = $("#Name").val();
//     var email = $("#Email").val();
//     var phone = $("#phone").val();
//     var message = $("#msg").val();
//     var emailValidator = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     //console.log("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;");
//     //console.log("FullName : "+fullName);
//     // console.log("Email : "+email);
//     if (!emailValidator.test(email)) {
//       alert("Invalid Email ID...!!!!!");
//       return false;
//     } else if (phone.length !== 10) {
//       alert("Please enter the correct mobile No...!!!!! ");
//     } else if (message === "") {
//       alert("Enter Something");
//       return false;
//     } else {
//       return true;
//     }
//   }
// });
