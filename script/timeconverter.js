
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("TimeDropdown");

dropdownButton.addEventListener("click", function() {
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
});


