document.addEventListener("DOMContentLoaded", () => {
    const enrollButton = document.getElementById("enrollButton");
    const clearButton = document.getElementById("clearButton");
    const enrolledStudentsList = document.getElementById("enrolledStudents");
    const studentForm = document.getElementById("studentForm");
  
    enrollButton.addEventListener("click", () => {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const website = document.getElementById("website").value;
      const profileEmail = document.getElementById("profileEmail").value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const skills = [...document.querySelectorAll('input[name="skills"]:checked')].map(skill => skill.value);
  
      const studentInfo = `
        <div class="student-entry">
          <div class="student-details">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Website:</strong> ${website}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Skills:</strong> ${skills.join(", ")}</p>
          </div>
          <div class="profile-pic-container">
            <img src="${profileEmail}" alt="${name}'s Profile Picture" class="profile-pic">
          </div>
        </div>
      `;
  
      enrolledStudentsList.insertAdjacentHTML("beforeend", studentInfo);
      studentForm.reset();
    });
  
    clearButton.addEventListener("click", () => {
      enrolledStudentsList.innerHTML = "";
      studentForm.reset();
    });
  });
  