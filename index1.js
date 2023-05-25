

$(document).ready(function(){

    //rahul code
    
    $("#select").change(function(){
            var selectedCountry = $(this).children("option:selected").val();
            // alert("You have selected the country - " + selectedCountry);
           if(selectedCountry=="select city")
           {
           $('#selectcheck').show();
           $('#selectcheck').html("**Please select the city");
           $('#selectcheck').focus();
           $('#selectcheck').css("color","red");
           select_err=false;
           return false;
           }else{
               $('#selectcheck').hide();
           }
        });
    
    //rahul code end
    
    $('#usercheck').hide();
    $('#passcheck').hide();
    $('#conpasscheck').hide();
    $('#mobilenocheck').hide();
    $('#emailcheck').hide();
    $('#selectcheck').hide();
    $('#checkboxcheck').hide();
    
    
    var user_err = true;
    var pass_err = true;
    var conpass_err = true;
    var mobileno_err = true;
    var email_err = true;
    var select_err = true;
    var checkbox_err = true;
    
    
    
    $('#usernames').keyup(function(){
    username_check();
    });
    
    function username_check(){
    
    var user_val = $('#usernames').val();
    
    if(user_val.length == ''){
    $('#usercheck').show();
    $('#usercheck').html("**Please Fill the username");
    $('#usercheck').focus();
    $('#usercheck').css("color","red");
    user_err = false;
    return false;
    
    }else{
    $('#usercheck').hide();
    }
    
    if((user_val.length < 3 ) || (user_val.length > 10 ) ){
    $('#usercheck').show();
    $('#usercheck').html("**Username length must be between 3 and 10");
    $('#usercheck').focus();
    $('#usercheck').css("color","red");
    user_err = false;
    return false;
    
    }else{
    $('#usercheck').hide();
    }
    
    if(!isNaN(user_val)){
    $('#usercheck').show();
    $('#usercheck').html("**only character is allowed");
    $('#usercheck').focus();
    $('#usercheck').css("color","red");
    user_err = false;
    return false;
    
    }else{
    $('#usercheck').hide();
    }
    
    }
    
    $('#password').keyup(function(){
    password_check();
    });
    
    function password_check(){
    
    var passwrdstr = $('#password').val();
    
    if(passwrdstr.length == ''){
    $('#passcheck').show();
    $('#passcheck').html("**Please Fill the password");
    $('#passcheck').focus();
    $('#passcheck').css("color","red");
    pass_err = false;
    return false;
    
    }else{
    $('#passcheck').hide();
    }
    
    if((passwrdstr.length < 3 ) || (passwrdstr.length > 10 ) ){
    $('#passcheck').show();
    $('#passcheck').html("**password length must be between 3 and 10");
    $('#passcheck').focus();
    $('#passcheck').css("color","red");
    pass_err = false;
    return false;
    
    }else{
    $('#passcheck').hide();
    }
    }
    
    $('#conpassword').keyup(function(){
    con_passwrd();
    });
    
    function con_passwrd(){
    
    var conpass = $('#conpassword').val();
    var passwrdstr = $('#password').val();
    
    if(passwrdstr != conpass){
    $('#conpasscheck').show();
    $('#conpasscheck').html("** Password are not Matching");
    $('#conpasscheck').focus();
    $('#conpasscheck').css("color","red");
    conpass_err = false;
    return false;
    
    }else{
    $('#conpasscheck').hide();
    }
    
    }
    
    $('#mobilenumber').keyup(function(){
    mobileno_check();
    });
    
    function mobileno_check(){
    
    var mobileno_val = $('#mobilenumber').val();
    
    if(mobileno_val.length == ''){
    $('#mobilenocheck').show();
    $('#mobilenocheck').html("**Please Fill the mobileno");
    $('#mobilenocheck').focus();
    $('#mobilenocheck').css("color","red");
    mobileno_err = false;
    return false;
    
    }else{
    $('#mobilenocheck').hide();
    }
    
    if(isNaN(mobileno_val)){
    $('#mobilenocheck').show();
    $('#mobilenocheck').html("**mobile number should be in digits");
    $('#mobilenocheck').focus();
    $('#mobilenocheck').css("color","red");
    mobileno_err = false;
    return false;
    
    }else{
    $('#mobilenocheck').hide();
    }
    
    if(mobileno_val.length!=10){
    $('#mobilenocheck').show();
    $('#mobilenocheck').html("**mobile number should be in 10 digits not more or less than 10");
    $('#mobilenocheck').focus();
    $('#mobilenocheck').css("color","red");
    mobileno_err = false;
    return false;
    
    }else{
    $('#mobilenocheck').hide();
    }
    
    }
    
    $('#email').keyup(function(){
    email_check();
    });
    
    function email_check(){
    
    var email_val = $('#email').val();
    
    if(email_val.length == ''){
    $('#emailcheck').show();
    $('#emailcheck').html("**Please Fill the email address");
    $('#emailcheck').focus();
    $('#emailcheck').css("color","red");
    email_err = false;
    return false;
    
    }else{
    $('#emailcheck').hide();
    }
    
    if(email_val.indexOf('@') <= 0){
    $('#emailcheck').show();
    $('#emailcheck').html("**@ indvalid position");
    $('#emailcheck').focus();
    $('#emailcheck').css("color","red");
    email_err = false;
    return false;
    
    }else{
    $('#emailcheck').hide();
    }
    
    if((email_val.charAt(email_val.length-4)!=".") && (email_val.charAt(email_val.length-3)!=".")){
    $('#emailcheck').show();
    $('#emailcheck').html("**. indvalid position");
    $('#emailcheck').focus();
    $('#emailcheck').css("color","red");
    email_err = false;
    return false;
    
    }else{
    $('#emailcheck').hide();
    }
    
    }
    
    $('#select').keyup(function(){
    select_check();
    });
    
    function select_check(){
          
    var select_val = $('#select option:selected').val();
    
    if(select_val.length > 0){
    $('#selectcheck').show();
    $('#selectcheck').html("**Please Fill the city");
    $('#selectcheck').focus();
    $('#selectcheck').css("color","red");
    select_err = false;
    return false;
    
    }else{
    $('#selectcheck').hide();
    }
    }
    
    // $('#checkboxs').keyup(function(){
    // checkbox_check();
    // });
    
    // function checkbox_check(){
    
    // var checkbox_val = $('#checkboxs input[type="checkbox"]:checked').val();
    
    // if(checkbox_val.length > 0){
    // $('#checkboxcheck').show();
    // $('#checkboxcheck').html("**Please Fill the city");
    // $('#checkboxcheck').focus();
    // $('#checkboxcheck').css("color","red");
    // checkbox_err = false;
    // return false;
    
    // }else{
    // $('#checkboxcheck').hide();
    // }
    // }
    
    $('#submitbtn').click(function(){
    
    user_err = true;
    pass_err = true;
    conpass_err = true;
    mobileno_err = true;
    email_err = true;
    select_err = true;
    // checkbox_err = true;
    
    
    username_check();
    password_check();
    con_passwrd();
    mobileno_check();
    email_check();
    select_check();
    // checkbox_check();
    
    
    if((user_err == true ) && (pass_err == true) && (conpass_err == true) && (mobileno_err == true) && (email_err == true) && (select_err == true)){
    return true;
    }else{
    return false;
    }
    
    });
    
    });                    
    