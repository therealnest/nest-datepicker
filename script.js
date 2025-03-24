const datePicker = document.getElementById("datePicker");
const selectedDateDiv = document.getElementById("selected-date");

datePicker.addEventListener("change", function () {
  const date = new Date(this.value);
  const formatted = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  selectedDateDiv.textContent = "You selected: " + formatted;
  selectedDateDiv.style.display = "block";

  localStorage.setItem("selectedDate", formatted);
});