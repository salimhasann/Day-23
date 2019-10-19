function checkFirstName(){
	var firstName = $('#firstName').val();
	var reg = /^[a-zA-Z ]{2,10}$/;
	
	if(reg.test(firstName)){
		$('#firstNameErorr').text('');
	} else {
		$('#firstNameErorr').text('Hello');
	}
};


$('#firstName').keyup(function(){
	checkFirstName()
});

function checkLastName(){
	var lastName = $('#lastName').val();
	var reg = /^[a-zA-Z ]{2,10}$/;
	
	if(reg.test(lastName)){
		$('#lastNameErorr').text('');
	} else {
		$('#lastNameErorr').text('Hello');
	}
};


$('#lastName').keyup(function(){
	checkLastName()
});


function checkEmailAddress(){
	var emailAddress = $('#emailAddress').val();
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
	
	if(reg.test(emailAddress)){
		$('#emailAdderssErorr').text('');
	} else {
		$('#emailAdderssErorr').text('Hello');
	}
};


$('#emailAddress').keyup(function(){
	checkEmailAddress()
});


function checkPassword(){
	var password = $('#password').val();
	var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
	
	if(reg.test(password)){
		$('#passwordErorr').text(' ');
	} else {
		$('#passwordErorr').text('Hello');
	}
};


$('#password').keyup(function(){
	$('#passwordErorr').text(' ');
});
$('#password').blur(function(){
	checkPassword()
});
$('#password').click(function(){
	checkPassword()
});

function conformPassword(){
	var conformPassword = $('#conformPassword').val();
	var password = $('#password').val();
	if(conformPassword == password){
		$('#conformPasswordErorr').text('mached');
	}else{
		$('#conformPasswordErorr').text('This is not mached');
	}
};

$('#conformPassword').keyup(function(){
	$('#conformPasswordErorr').text('');
});
$('#conformPassword').blur(function(){
	conformPassword()
});
$('#conformPassword').click(function(){
	conformPassword()
});

$(window).scroll(function(){
	var menuPosition = $('#menuscroll').position();
	var menuScroll = $(window).scrollTop();
	if(menuScroll >= menuPosition.top){
		$('#menuul').css({
			'position' : 'fixed',
			'top' : '0px',
			'width' : '90%'
		});
	} else{
		$('#menuul').css({
			'position' : 'relative',
			'top' : '0px',
			'width' : '100%'
		});
	}
});