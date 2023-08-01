// JavaScript
let currentResult = '';

function updateResult() {
  const resultElement = document.getElementById('result');
  resultElement.value = currentResult;
}

function appendToResult(value) {
  currentResult += value;
  updateResult();
}

function clearResult() {
  currentResult = '';
  updateResult();
}

function calculateResult() {
  try {
    currentResult = eval(currentResult);
    if (!isFinite(currentResult) || isNaN(currentResult)) {
      throw new Error('Invalid expression');
    }
  } catch (error) {
    currentResult = 'Error';
  }
  updateResult();
}
