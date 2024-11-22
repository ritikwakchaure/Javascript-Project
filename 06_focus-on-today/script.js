const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-l");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    
    const allGoalsAdded = [...inputFields].every((input) => {
      
      
      
      return input.value;
    });

    if (allGoalsAdded) {
      checkbox.parentElement.classList.toggle("completed");
      progressValue.style.width = "33.33%";
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

inputFields.forEach((input) => {
  input.value = allGoals[input.id].name;

  if (allGoals[input.id].completed) {
    input.parentElement.classList.add("completed");
  }

  input.addEventListener("focus", () => {
    progressBar.classList.add("show-error");
  });

  input.addEventListener("input", (e) => {
    allGoals[input.id] = {
      name: input.value,
      completed: false,
    };
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});

