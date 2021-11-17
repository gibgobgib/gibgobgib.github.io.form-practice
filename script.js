function validation()
{
	var fname = document.registration.fname;
	var lname = document.registration.lname;
	var age = document.registration.age;
	var mail = document.registration.mail;

	if(allLettername(fname))
	{
		if(allLetterlast(lname))
		{
			if(enteremail(mail))
			{
				if(age(number))
				{
					if(enteruname(uname))
					{
						if(enterpword(pword))
						{

						}
					}
				}
			}
		}
	}
	return false;
}	

function allLettername(fname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(firstname.value.length==0)
	{
		alert('Please enter first name');
		fname.focus();
		return false;
	}

	else if(fname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('First name must have alphabet characters only');
		fname.focus();
		return false;
	}
}

function allLetterlast(lname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(lname.value.length==0)
	{
		alert('Please enter last name');
		lname.focus();
		return false;
	}
	else if(lname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('last name must have alphabet characters only');
		lname.focus();
		return false;
		
	}
}

function enteremail(mail)
{
	if(mail.value == "Default")
	{
		alert('Enter your email');
		mail.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function age(number)
{ 
	var numbers = /^[0-9]+$/;
	if(age.value.length==0 )
	{
		alert('Please enter an age');
		age.focus();
		return false;
	}
}

function enteruname(uname)
{ 
	var letters = /^[A-Za-z0-9]+$/;
	if(uname.value.length==0)
	{
		alert('Please enter a username');
		uname.focus();
		return false;
	}

	else if(funame.value.match(letters))
	{
		return true;
		
	}
}

function enterpword(pword)
{ 
	var letters = /^[A-Za-z0-9]+$/;
	if(pword.value.length==0)
	{
		alert('Please enter a password');
		pword.focus();
		return false;
	}

	else if(pword.value.match(letters))
	{
		return true;
		
	}
}