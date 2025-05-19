
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

const dropdownItems = document.querySelectorAll("#TimeDropdown a");
const dropdownItems2 = document.querySelectorAll("#TimeDropdown2 a");

let selectedTimeUnit = "Seconds"; // Standardwert für dropdown 1
let selectedTimeUnit2 = "Hours"; // Standardwert für dropdown 2

dropdownItems.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // Verhindert das Springen bei href="#"
    
    selectedTimeUnit = item.textContent; // Wert speichern
    dropdownButton.textContent = selectedTimeUnit; // Button-Text aktualisieren

    console.log("Ausgewählt für Dropdown 1:", selectedTimeUnit);
  });
});

dropdownItems2.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // Verhindert das Springen bei href="#"
    
    selectedTimeUnit2 = item.textContent; // Wert speichern
    dropdownButton2.textContent = selectedTimeUnit2; // Button-Text aktualisieren

    console.log("Ausgewählt für Dropdown 2:", selectedTimeUnit2);
  });
});

function Convert() {
  let inputTime = document.getElementById("inputTime").value;
  const outputTime = document.getElementById("converted-time");

  if (inputTime === "") {
      alert("Bitte eine Zeit eingeben.");
      return;
    }
  else{
    if (selectedTimeUnit === "Seconds") {

      if (selectedTimeUnit2 === "Hours") {
        let result = (inputTime / 3600).toFixed(4);
        outputTime.value = result;
        console.log("Converted time:", result);
        return result;
      } else if (selectedTimeUnit2 === "Minutes") {
        let result = (inputTime / 60).toFixed(4);
        console.log("Converted time:", result);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Seconds") {
        let result = inputTime;
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Days") {
        let result = (inputTime / 86400).toFixed(8);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Weeks") {
        let result = (inputTime / 604800).toFixed(10);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Months") {
        let result = (inputTime / 2592000).toFixed(10);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Years") {
        let result = (inputTime / 31536000).toFixed(12);
        outputTime.value = result;
        return result;
      }
    }
    else{
      alert("Bitte eine Zeit eingeben.");
      return;
    }
  }

}


