
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("TimeDropdown");

dropdownButton.addEventListener("click", function() {
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
});

const dropdownButton2 = document.getElementById("dropdownButton2");
const dropdownContent2 = document.getElementById("TimeDropdown2");

dropdownButton2.addEventListener("click", function() {
  dropdownContent2.style.display = (dropdownContent2.style.display === "block") ? "none" : "block";
});


