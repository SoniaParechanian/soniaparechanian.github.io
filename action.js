
/*javascript*/

/*EMAIL*/

function email() {
	var st1 = '<a ';
	var st2 = 'hre';
	var st3 = 'f="mai';
	var st4 ='lto:';

	var e1 = 'info';
	var e2 = '@';
	var e3 = 'evessanctuary';
	var e4 = '.';
	var e5 = 'com'
	var eDone = e1+e2+e3+e4+e5;

	var end1 = '</';
	var end2 = 'a>';

	document.write(st1+st2+st3+st4+eDone+'">'+eDone+end1+end2);
}

function emailToBuy() {
	var st1 = '<a class="buy-button" ';
	var st2 = 'hre';
	var st3 = 'f="mai';
	var st4 ='lto:';

	var e1 = 'info';
	var e2 = '@';
	var e3 = 'evessanctuary';
	var e4 = '.';
	var e5 = 'com'
	var eDone = e1+e2+e3+e4+e5;

	var end1 = '</';
	var end2 = 'a>';

	document.write(st1+st2+st3+st4+eDone+'">'+'Email to Buy Poochee Harness'+end1+end2);
}

/* If I wanted  to put a subject in I would add:  
var subject = "?theparam=Inquiry";
document.write(st1+st2+st3+st4+eDone+params+">"+eDone+end1+end2); */

/*Facebook

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}
(document, 'script', 'facebook-jssdk'));
*/

// form
function clearFirstName() {
	if(document.getElementById('firstNameField').value == 'First Name')
		document.getElementById('firstNameField').value = '';
	}
function resetFirstName() {
	if(document.getElementById('firstNameField').value == '')
		document.getElementById('firstNameField').value = 'First Name';
	}
function clearLastName() {
	if(document.getElementById('lastNameField').value == 'Last Name')
		document.getElementById('lastNameField').value = '';
	}
function resetLastName() {
	if(document.getElementById('lastNameField').value == '')
		document.getElementById('lastNameField').value = 'Last Name';
	}
function clearEmail() {
	if(document.getElementById('emailField').value == 'example: info@evessanctuary.com')
		document.getElementById('emailField').value = '';
	}
function resetEmail() {
	if(document.getElementById('emailField').value == '')
		document.getElementById('emailField').value = 'example: info@evessanctuary.com';
	}
