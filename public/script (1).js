
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return true;
    }
    return false;
}

function clearFields() {
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('userid').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('cpass').value = '';
    document.getElementById('error1').innerHTML = '';
    document.getElementById('error2').innerHTML = '';
    document.getElementById('error3').innerHTML = '';
    document.getElementById('error4').innerHTML = '';
    document.getElementById('error5').innerHTML = '';
    document.getElementById('error6').innerHTML = '';
    document.getElementById('firstname').focus();
}
function validateform() {
    if (document.getElementById('firstname').value == "") {
        // alert("Please provide your first name!");
        document.getElementById('error1').innerHTML = "Please provide your first name!";
        document.getElementById('firstname').focus();
        return false;
    }
    else
    {
        document.getElementById('error1').innerHTML = '';
    }
    if (document.getElementById('lastname').value == "") {
        //alert("Please provide your last name!");
        document.getElementById('error2').innerHTML = "Please provide your last name!";
        document.getElementById('lastname').focus();
        return false;
    }
    else
    {
        document.getElementById('error2').innerHTML = '';
    }
    if (document.getElementById('email').value == "") {
        //alert("Please provide your email id!");
        document.getElementById('error3').innerHTML = "Please provide your email!";
        document.getElementById('email').focus();
        return false;
    }
    else
    {
        document.getElementById('error3').innerHTML = '';
    }
    if (!ValidateEmail(document.getElementById('email').value)){
        //alert("Email id is incorrect");
        document.getElementById('error3').innerHTML = "Incorrect email id!";
        document.getElementById('email').focus();
        return false;
    }
    else
    {
        document.getElementById('error3').innerHTML = '';
    }
    // if (document.getElementById('email').value != null || document.getElementById('email').value != "") {
    //     var emailID = document.getElementById('email').value;
    //     atpos = emailID.indexOf("@");
    //     dotpos = emailID.lastIndexOf(".");
    //     if (atpos < 1 || (dotpos - atpos < 2)) {
    //         alert("Please enter correct email ID")
    //         document.getElementById('email').focus();
    //         return false;
    //     }
    // }
    if (document.getElementById('userid').value == "") {
        //alert("Please provide a user-id!");
        document.getElementById('error4').innerHTML = "Please provide a user-id!";
        document.getElementById('userid').focus();
        return false;
    }
    else
    {
        document.getElementById('error4').innerHTML = '';
    }
    if (document.getElementById('pass').value == "") {
        //alert("Password cannot be blank!");
        document.getElementById('error5').innerHTML = "Password cannot be blank!";
        document.getElementById('pass').focus();
        return false;
    }
    else
    {
        document.getElementById('error5').innerHTML = '';
    }
    if (document.getElementById('cpass').value == "") {
        //alert("Password cannot be blank!");
        document.getElementById('error6').innerHTML = "Password cannot be blank!";
        document.getElementById('cpass').focus();
        return false;
    }
    else
    {
        document.getElementById('error6').innerHTML = '';
    }
    if(document.getElementById('pass').value != document.getElementById('cpass').value){
        //alert("Passwords do not match");
        document.getElementById('error6').innerHTML = "Passwords do not match!";
        document.getElementById('cpass').focus();
        return false;
    }
    else
    {
        document.getElementById('error6').innerHTML = '';
    }
        alert("Registered Sucessfully!:):)");
        clearFields();
        return true;
}
