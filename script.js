// Function to scroll to blog section
function scrollToBlog() {
  document.getElementById("blog").scrollIntoView({ behavior: "smooth" });
}

// Function to expand blog articles
function expandBlog(blogNumber) {
  var blogExpandId = "blog-expand-" + blogNumber;
  var blogElement = document.getElementById(blogExpandId);

  // Check if the blog content is already visible
  if (blogElement.classList.contains("show")) {
    blogElement.classList.remove("show");
  } else {
    blogElement.classList.add("show");
  }
}

// Function to validate contact form
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var contactMessage = document.getElementById("contact-message");

  // Check if all fields are filled
  if (name == "" || email == "" || message == "") {
    contactMessage.textContent = "Please fill all fields.";
    contactMessage.classList.remove("success");
    contactMessage.classList.add("error");
  } else {
    contactMessage.textContent = "Thank you for contacting me!";
    contactMessage.classList.remove("error");
    contactMessage.classList.add("success");

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}
