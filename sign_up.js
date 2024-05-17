function required(){
    var first;
    var last;
    var email;
    var phone;
    var state;

    full_name = document.form.full_name.value;
    email = document.form.email.value
    phone = document.form.phone_number.value;
    state = document.form.state.value;

    if(state == " ") {
        alert("You have not selected a Location!");
    }
    else {
        alert("Thank you " + full_name +
        " for your interest in our gym. We will be in contact with you soon!");
    }
}