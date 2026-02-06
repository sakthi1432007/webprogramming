function validateForm() 
{
    const email = document.forms[0]["email"].value;
    const password = document.forms[0]["password"].value;
    if (email === "") 
    {
        alert("Email must be filled out.");
        return false;
    }
    if (password === "") 
    {
        alert("Password must be filled out.");
        return false;
    }
    alert("Login successful!");
    return true;
}