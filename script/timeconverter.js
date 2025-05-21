
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("TimeDropdown");

const dropdownButton2 = document.getElementById("dropdownButton2");
const dropdownContent2 = document.getElementById("TimeDropdown2");

dropdownButton.addEventListener("click", function() {
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
});

document.addEventListener("click", (event) => {
  if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)
  || dropdownButton2.contains(event.target) && dropdownContent2.contains(event.target)) {
  dropdownContent.style.display = "none";
}});


dropdownButton2.addEventListener("click", function() {
  dropdownContent2.style.display = (dropdownContent2.style.display === "block") ? "none" : "block";
});

document.addEventListener("click", (event) => {
  if (!dropdownButton2.contains(event.target) && !dropdownContent2.contains(event.target)
  || dropdownButton.contains(event.target) && dropdownContent.contains(event.target)) {
  dropdownContent2.style.display = "none";
}});

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
    e.preventDefault();
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



function Convert(e) {

  e.preventDefault(); // Verhindert das Standardverhalten des Formulars
  let inputTime = document.getElementById("inputTime").value; // Eingabewert
  const outputTime = document.getElementById("converted-time"); // Ausgabe-Element / Konvertierte Zeit

  if (inputTime === "") {
      alert("Bitte eine Zeit eingeben.");
      return;
  }
  else if (isNaN(inputTime)) { // Überprüfen, ob die Eingabe eine Zahl ist
      alert("Bitte eine gültige Zahl eingeben.");
      return;
  } //Hier werden die Einheiten umgewandelt
  else {
    if (selectedTimeUnit === "Seconds") { //von Sekunden in andere Einheiten

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
      }
      else if (selectedTimeUnit2 === "Months (28 days)") {
        let result = (inputTime / 2419200).toFixed(10);
        outputTime.value = result;
        return result;    
      } 
      else if (selectedTimeUnit2 === "Months (30 days)") {
        let result = (inputTime / 2592000).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (31 days)") {
        let result = (inputTime / 2678400).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Years") {
        let result = (inputTime / 31536000).toFixed(12);
        outputTime.value = result;
        return result;
      }
    }
    else if (selectedTimeUnit === "Minutes") { // von Minuten in andere Einheiten
      if (selectedTimeUnit2 === "Hours") {
        let result = (inputTime / 60).toFixed(2);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Seconds") {
        let result = (inputTime * 60).toFixed(2);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Days") {
        let result = (inputTime / 1440).toFixed(8);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Weeks") {
        let result = (inputTime / 10080).toFixed(10);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Months") {
        let result = (inputTime / 43800).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (28 days)") {
        let result = (inputTime / 40320).toFixed(10);
        outputTime.value = result;
        return result;    
      }
      else if (selectedTimeUnit2 === "Months (30 days)") {
        let result = (inputTime / 43200).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (31 days)") {
        let result = (inputTime / 44640).toFixed(10);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Years") {
        let result = (inputTime / 525600).toFixed(12);
        outputTime.value = result;
        return result;
      }
    }
    else if (selectedTimeUnit === "Hours") { // von Stunden in andere Einheiten
      if (selectedTimeUnit2 === "Seconds") {
        let result = (inputTime * 3600).toFixed(2);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Minutes") {
        let result = (inputTime * 60).toFixed(2);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Days") {
        let result = (inputTime / 24).toFixed(8);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Weeks") {
        let result = (inputTime / 168).toFixed(10);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Months") {
        let result = (inputTime / 730).toFixed(10);
        outputTime.value = result;
        return result;
      } 
      else if (selectedTimeUnit2 === "Months (28 days)") {
        let result = (inputTime / 672).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (30 days)") {
        let result = (inputTime / 720).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (31 days)") {
        let result = (inputTime / 744).toFixed(10);
        outputTime.value = result;
        return result;
      } 
      else if (selectedTimeUnit2 === "Years") {
        let result = (inputTime / 8760).toFixed(12);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Hours") {
        let result = inputTime;
        outputTime.value = result;
        return result;
      }
    }
    else if (selectedTimeUnit === "Days") { // von Tagen in andere Einheiten
      if (selectedTimeUnit2 === "Seconds") {
        let result = (inputTime * 86400);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Minutes") {
        let result = (inputTime * 1440);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Hours") {
        let result = (inputTime * 24);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Weeks") {
        let result = (inputTime / 7).toFixed(10);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Months") {
        let result = (inputTime / 30.44).toFixed(8);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (28 days)") {
        let result = (inputTime / 28).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (30 days)") {
        let result = (inputTime / 30).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (31 days)") {
        let result = (inputTime / 31).toFixed(10);
        outputTime.value = result;
        return result;
      }
       else if (selectedTimeUnit2 === "Years") {
        let result = (inputTime / 365).toFixed(12);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Days") {
        let result = inputTime;
        outputTime.value = result;
        return result;
      }
    }
    else if (selectedTimeUnit === "Weeks") { // von Wochen in andere Einheiten
      if (selectedTimeUnit2 === "Seconds") {
        let result = (inputTime * 604800);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Minutes") {
        let result = (inputTime * 10080);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Hours") {
        let result = (inputTime * 168);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Days") {
        let result = (inputTime * 7);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Months") {
        let result = (inputTime / 4.345).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (28 days)") {
        let result = (inputTime / 4).toFixed(10);
        outputTime.value = result;
        return result;    
      }
      else if (selectedTimeUnit2 === "Months (30 days)") {
        let result = (inputTime / 4.345).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (31 days)") {
        let result = (inputTime / 4.345).toFixed(10);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Years") {
        let result = (inputTime / 52.143).toFixed(12);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Weeks") {
        let result = inputTime;
        outputTime.value = result;
        return result;
      }
    }
    else if (selectedTimeUnit === "Months") { // von Monaten in andere Einheiten
      if (selectedTimeUnit2 === "Seconds") {
        let result = (inputTime * 2592000);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Minutes") {
        let result = (inputTime * 43800);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Hours") {
        let result = (inputTime * 730);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Days") {
        let result = (inputTime * 30.44).toFixed(6);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Weeks") {
        let result = (inputTime * 4.345).toFixed(6);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Months (28 days)") {
        let result = (inputTime / 0.9198423127).toFixed(6);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (30 days)") {
        let result = (inputTime / 0.98554543351).toFixed(6);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (31 days)") {
        let result = (inputTime / 1.016796875).toFixed(6);
        outputTime.value = result;
        return result;
      } 
       else if (selectedTimeUnit2 === "Years") {
        let result = (inputTime / 12).toFixed(12);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months") {
        let result = inputTime;
        outputTime.value = result;
        return result;
      }
    }
    else if (selectedTimeUnit === "Years") { // von Jahren in andere Einheiten
      if (selectedTimeUnit2 === "Seconds") {
        let result = (inputTime * 31536000);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Minutes") {
        let result = (inputTime * 525600);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Hours") {
        let result = (inputTime * 8760);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Days") {
        let result = (inputTime * 365);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Weeks") {
        let result = (inputTime * 52.143);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Months") {
        let result = (inputTime * 12).toFixed(2);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (28 days)") {
        let result = (inputTime * 12).toFixed(2);
        outputTime.value = result;
        return result;    
      }
      else if (selectedTimeUnit2 === "Months (30 days)") {
        let result = (inputTime * 12).toFixed(2);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (31 days)") {
        let result = (inputTime * 12).toFixed(2);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Years") {
        let result = inputTime;
        outputTime.value = result;
        return result;
      }
    }
    else if (selectedTimeUnit === "Months (28 days)") { // von Monaten (28 Tage) in andere Einheiten
      if (selectedTimeUnit2 === "Seconds") {
        let result = (inputTime * 2419200);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Minutes") {
        let result = (inputTime * 40320);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Hours") {
        let result = (inputTime * 672);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Days") {
        let result = (inputTime * 28);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Weeks") {
        let result = (inputTime * 4).toFixed(10);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Months") {
        let result = (inputTime * 0.9198423127).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (28 days)") {
        let result = inputTime;
        outputTime.value = result;
        return result;    
      }
      else if (selectedTimeUnit2 === "Months (30 days)") {
        let result = (inputTime * 1.0306885363).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (31 days)") {
        let result = (inputTime * 1.0328767123).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Years") {
        let result = (inputTime / 336).toFixed(12);
        outputTime.value = result;
        return result;
      }
    }
    else if (selectedTimeUnit === "Months (30 days)") { // von Monaten (30 Tage) in andere Einheiten
      if (selectedTimeUnit2 === "Seconds") {
        let result = (inputTime * 2592000);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Minutes") {
        let result = (inputTime * 43200);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Hours") {
        let result = (inputTime * 720);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Days") {
        let result = (inputTime * 30);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Weeks") {
        let result = (inputTime * 4.345).toFixed(10);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Months") {
        let result = (inputTime * 1.0306885363).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (28 days)") {
        let result = (inputTime * 1.0306885363).toFixed(10);
        outputTime.value = result;
        return result;    
      }
      else if (selectedTimeUnit2 === "Months (30 days)") {
        let result = inputTime;
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (31 days)") {
        let result = (inputTime * 1.0328767123).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Years") {
        let result = (inputTime / 360).toFixed(12);
        outputTime.value = result;
        return result;
      }
    }
    else if (selectedTimeUnit === "Months (31 days)") { // von Monaten (31 Tage) in andere Einheiten
      if (selectedTimeUnit2 === "Seconds") {
        let result = (inputTime * 2678400);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Minutes") {
        let result = (inputTime * 44640);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Hours") {
        let result = (inputTime * 744);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Days") {
        let result = (inputTime * 31);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Weeks") {
        let result = (inputTime * 4.345).toFixed(10);
        outputTime.value = result;
        return result;
      } else if (selectedTimeUnit2 === "Months") {
        let result = (inputTime * 1.0328767123).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (28 days)") {
        let result = (inputTime * 1.0328767123).toFixed(10);
        outputTime.value = result;
        return result;    
      }
      else if (selectedTimeUnit2 === "Months (30 days)") {
        let result = (inputTime * 1.0328767123).toFixed(10);
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Months (31 days)") {
        let result = inputTime;
        outputTime.value = result;
        return result;
      }
      else if (selectedTimeUnit2 === "Years") {
        let result = (inputTime / 372).toFixed(12);
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


document.getElementById("copy-button").addEventListener("click", () => {
  const outputTime = document.getElementById("converted-time").value; // Wert des Ausgabe-Elements
  
  navigator.clipboard.writeText(outputTime)
    .then(() => {
      alert("Kopiert in die Zwischenablage ✅");
    })
    .catch(err => {
      console.error("Fehler beim Kopieren:", err);
    });
  });