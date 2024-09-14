const resumeForm = document.getElementById("resume-builder") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

// Handle form submission
resumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();    //prevent page reload

    // collect input value
    const name = (document.getElementById("name") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const education1 = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    // Generate the Resume content dynamically//
    const resumeHTML = `
    <h2><b>DYNAMIC RESUME</b></h2>
    <h3>Personal Inforamtion<b></b></h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Email:</b> ${email}</p>
    
    <h3>Education:</h3>
    <p> ${education1}</p>
  
    <h3><b>Experience:</b></h3>
    <p> ${experience}</p>
   
     <h3><b>Skills:</b></h3>
    <p> ${skills}</p>`;

    // Display the Generated Resume//
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error("The Resume display Element is missing")
    }

})
