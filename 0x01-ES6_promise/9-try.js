export default function guardrail(mathFunction) {
  const queue = [];
  let mathFunctionValue;

  try {
    mathFunctionValue = mathFunction();
  } catch (err) {
    mathFunctionValue = err.toString();
  }

  queue.push(mathFunctionValue);
  queue.push('Guardrail was processed');

  return queue;
}
