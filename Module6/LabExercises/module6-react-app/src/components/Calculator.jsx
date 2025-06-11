import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let result;
    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
    }
    setResult(result);
  };

  return (
    <form onSubmit={calculate}>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <button type="submit">Calculate</button>
      <div>Result: {result}</div>
    </form>
  );
}

export default Calculator;
