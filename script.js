function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var emptName = document.forms["form1"]["text2"].value
if(emptName!=""){
if(inputText.value.match(mailformat))
{
alert("Name and E-mail address successfully submitted!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}

}
else{
	alert('please enter your name')
}

}


function formsubmit() {
	alert(" Form successfully submitted");
  }