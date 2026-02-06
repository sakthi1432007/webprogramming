function validateForm() 
{
    const name = document.forms[0]["name"].value;
    const phone = document.forms[0]["phonenumber"].value;
    const email = document.forms[0]["email"].value;
    const password1 = document.forms[0]["password1"].value;
    const password2 = document.forms[0]["password2"].value;
    const phonePattern = /^\d{10}$/;
    if (name === "")
    {
        alert("Name must be filled out.");
        return false;
    }
    if (email === "") 
    {
        alert("Email must be filled out.");
        return false;
    }
    if (!phonePattern.test(phone)) 
    {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }
    if (password1 !== password2) 
    {
        alert("Passwords do not match.");
        return false;
    }
    alert("Registration successful!");
    return true;
}