// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i=0; i < foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan == false) {
        foodSchedule[i]["name"] = fruits[Math.floor(Math.random() * fruits.length)]
    }
};

console.log(foodSchedule);