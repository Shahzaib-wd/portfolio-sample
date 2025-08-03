document.getElementById("portfolioForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const profileFile = document.getElementById("profileInput").files[0];
  const name = document.getElementById("nameInput").value;
  const bio = document.getElementById("bioInput").value;
  const experience = document.getElementById("experience").value;
  const email = document.getElementById("emailInput").value.trim();
  const phoneNumber = document.getElementById("phoneInput").value.trim();
  const skills = document.getElementById("skillsInput").value;
  const location = document.getElementById("locationInput").value;
  const linkedin = document.getElementById("linkedinInput").value;
  const theme = document.getElementById("themeInput").value;

  // Collect social links
  const socialInputs = document.querySelectorAll(".socialLinkInput");
  const socialLinks = [];
  socialInputs.forEach(input => {
    if (input.value.trim()) {
      socialLinks.push(input.value.trim());
    }
  });

  const reader = new FileReader();
  reader.onload = function () {
    localStorage.setItem("userName", name.toUpperCase());
    localStorage.setItem("userBio", bio);
    localStorage.setItem("profileImage", reader.result);
    localStorage.setItem("experience", experience);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phoneNumber);
    localStorage.setItem("skills", skills);
    localStorage.setItem("location", location);
    localStorage.setItem("linkedin", linkedin);
    localStorage.setItem("theme", theme);
    localStorage.setItem("socialLinks", JSON.stringify(socialLinks));

    window.location.href = "preview.html";
  };

  if (profileFile) {
    reader.readAsDataURL(profileFile);
  } else {
    alert("Please upload a profile image.");
  }
});

// 🔧 Function to add more social link inputs
function addSocialLink() {
  const container = document.getElementById("socialLinksContainer");
  const input = document.createElement("input");
  input.type = "url";
  input.placeholder = "Social Link URL";
  input.className = "socialLinkInput";
  container.appendChild(input);
}
