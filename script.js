const datePicker = document.getElementById("datePicker");

datePicker.addEventListener("change", function () {
  const date = new Date(this.value);
  const formatted = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  localStorage.setItem("selectedDate", formatted);
});
