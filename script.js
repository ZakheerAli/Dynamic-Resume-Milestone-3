var resumeForm = document.getElementById("resume-builder");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    // collect input value
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var education1 = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate the Resume content dynamically//
    var resumeHTML = "\n    <h2><b>DYNAMIC RESUME</b></h2>\n    <h3>Personal Inforamtion<b></b></h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    \n    <h3>Education:</h3>\n    <p> ").concat(education1, "</p>\n  \n    <h3><b>Experience:</b></h3>\n    <p> ").concat(experience, "</p>\n   \n     <h3><b>Skills:</b></h3>\n    <p> ").concat(skills, "</p>");
    // Display the Generated Resume//
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume display Element is missing");
    }
});
