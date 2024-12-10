// fonction pour ajouter 2 nombres

const add = (a, b) => a + b;

// fonction pour soustraire 2 nombres

const subtract = (a, b) => a - b;

// Fonction pour Multiplier 2 nombres
const multiply = (a, b) => a * b;

// Fonction pour Diviser 2 nombres
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

module.exports = { add, subtract, multiply, divide };