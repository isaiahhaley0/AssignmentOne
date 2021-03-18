function validateForm(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;
    emailField = form.email.value;
    userField = form.Username.value;
    var username = document.forms['signupForm'].elements['Username'];
    var email = document.forms['signupForm'].elements['email'];
    var colorpass1 = document.forms['signupForm'].elements['password1'];
    var colorpass2 = document.forms['signupForm'].elements['password2'];



    if (emailField == ''){
        alert ("Please enter an email address");
        email.style.backgroundColor = "yellow";
        return false;
    }
    //username field left empty
    if (userField == '') {
        alert ("Please enter a username");
        username.style.backgroundColor = "yellow";
        return false;
    }
    //if password not entered at all 
    if (password1 == '') {
        
        alert("Please enter a password");
        colorpass1.style.backgroundColor = "yellow";
        return false;

    }
    re = /^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/;
    if (re.test(form.password1.value)) {
        
        alert("Error: Invalid character used in password.")
        colorpass1.style.backgroundColor = "yellow";
        return false;
    }
    re = /^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/;
    if (re.test(form.Username.value)) {
        alert("Error: Invalid character used in username.")
        username.style.backgroundColor = "red";
        return false;
    }
    re = /[0-9]/;
    if (!re.test(form.password1.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        colorpass1.style.backgroundColor = "yellow";
        form.password1.focus();
        return false;
    }
    re = /[a-z]/;
    if (!re.test(form.password1.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        colorpass1.style.backgroundColor = "yellow";
        form.password1.focus();
        return false;
    }
    re = /[A-Z]/;
    if (!re.test(form.password1.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        colorpass1.style.backgroundColor = "yellow";
        form.password1.focus();
        return false;
    }
    //if secondary password not entered
    else if (password2 == '') {
        alert("Please confirm password");
        colorpass2.style.backgroundColor = "yellow";
        return false;
    }
    //if not the same return error 
    else if (password1 != password2) {
        alert("Error: Passwords do not match. Please try re-entering passwords");
        colorpass1.style.backgroundColor = "red";
        colorpass2.style.backgroundColor = "red";
        return false;
    }
    //if they are the same allow passwords
    else {
        // alert("Thank you for signing up for Vibez.")
        return true;
    }

}


