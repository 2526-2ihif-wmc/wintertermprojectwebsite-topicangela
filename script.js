// script.js

function calcBMR(age, weight, height, gender) {
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
}

// DOM ELEMENTS
const ageInput = document.getElementById('age');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const genderSelect = document.getElementById('gender');
const result = document.getElementById('result');
const calcBtn = document.getElementById('calcBtn');

// EVENT: Calculate calories when button clicked
calcBtn.addEventListener('click', () => {
  const age = parseInt(ageInput.value);
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const gender = genderSelect.value;

  const bmr = calcBMR(age, weight, height, gender);
  const tdee = Math.round(bmr * 1.55); // assume moderate activity

  result.textContent = `Your daily calorie need is about ${tdee} kcal.`;
});

// RECIPE DATA (mock calories)
const recipes = {
  salad: { name: "Salad Bowl", calories: 350 },
  pasta: { name: "Pasta Primavera", calories: 500 },
  curry: { name: "Curry Rice", calories: 450 }
};

const recipeSelect = document.getElementById('recipeSelect');
const recipeInfo = document.getElementById('recipeInfo');

// EVENT: Show recipe info when selected
recipeSelect.addEventListener('change', () => {
  const choice = recipeSelect.value;
  if (choice && recipes[choice]) {
    recipeInfo.textContent =
      `${recipes[choice].name} has about ${recipes[choice].calories} kcal.`;
  } else {
    recipeInfo.textContent = '';
  }
});