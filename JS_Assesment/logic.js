function validateForm(event) {

    event.preventDefault();

    // get values from input field
    const username = document.getElementById("n1").value.trim()
    const lastname = document.getElementById("n2").value.trim()
    const email = document.getElementById("n3").value.trim()
    const phone = document.getElementById("n4").value.trim()
    const genderMale = document.querySelector("input[name='Gender']:nth-child(1)").checked;
    const genderFemale = document.querySelector("input[name='Gender']:nth-child(2)").checked;
    const date = document.getElementById("n6").value.trim()
    const address = document.getElementById("n7").value.trim()
    const city = document.getElementById("n8").value.trim()
    const area = document.getElementById("n9").value.trim()
    const state = document.getElementById("n10").value.trim()
    const qualification = document.getElementById("n11").value.trim()
    const password = document.getElementById("n12").value.trim()

    //validations
    let errormessage = ""
    if (username === "") {
        errormessage += "First name is Required \n";
        document.getElementById("n1").focus()
    }
    else if (username.length > 6 || username.length < 3) {
        errormessage += "First name is Should be 3 to 6 Character Long \n"
        document.getElementById("n1").focus();
    }

    else if (lastname === "") {
        errormessage += "Last name is Required \n"
        document.getElementById("n2").focus();
    }

    else if (email === "") {
        errormessage += "Emaill is Required \n"
        document.getElementById("n3").focus()
    }
    else if (!email.includes("@")) {
        document.getElementById("n3").focus()
        errormessage += "Enter the valid emaill address "
    }
    else if (phone === "" || phone.length < 10 || phone.length > 10) {
        document.getElementById("n4").focus()
        errormessage += "Enter the valid Phone number."
    }
    else if (!genderFemale && !genderMale) {
        errormessage += "Please select an Gender."
    }
    else if (date === "") {
        errormessage += "Plese enter the Date of the Birth."
        document.getElementById("n6").focus()
    }
    else if (address === "") {
        document.getElementById("n7").focus()
        errormessage += "Please Enter Address"
    }
    else if (city === "") {
        errormessage += "Please enter the city name."
        document.getElementById("n8").focus()
    }
    else if (area === "") {
        errormessage += "Please enter the Area code."
        document.getElementById("n9").focus()
    }
    else if (state === "") {
        errormessage += "Please enter state."
        document.getElementById("n10").focus()
    }
    else if (qualification === "") {
        errormessage += "Please select your Qualification."
        document.getElementById("n11").focus()
    }
    else if (password === "") {
        errormessage += "Please enter passowrd."
        document.getElementById("n12").focus()
    }
    else if (password.length < 6) {
        errormessage += "Password length should be 6 character minimum."
        document.getElementById("n12").focus()
    }



    if (errormessage !== "") {
        alert(errormessage)
    }
    else {
        alert("Form Submitted Succesfully !")
        document.getElementById("form").submit()
    }
}