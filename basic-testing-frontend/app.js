import { calculateResult } from './src/math';
import { validateResult } from './src/util/validation';
import { outputResult } from './src/output.js';
import { extractEnteredNumberValues } from './src/parser';
const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();

  const numberValues = extractEnteredNumberValues(form);

  const result = calculateResult(numberValues);

  const resultText = validateResult(result);

  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
