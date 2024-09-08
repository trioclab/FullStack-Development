// Show or Hide Menu
function show_menu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Change Profile Picture
const dpPictureInput = document.getElementById("dp-pic");
const profilePic = document.getElementById("profile-pic");

function changePic() {
  const file = dpPictureInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      profilePic.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
  menu.style.display = 'none'; // Hide the menu after changing the picture
}

// Event listener for file input change
dpPictureInput.addEventListener("change", changePic);

// Function to handle input value change
function myFunction(val) {
  alert("The input value has changed. The new value is: " + val);
}
