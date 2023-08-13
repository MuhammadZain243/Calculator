const inputBox = document.getElementById("input-box");

const setInput = (value) => {
  inputBox.value = value;
};

const perform = (value) => {
  if (inputBox.value === "Error") {
    inputBox.value = value;
  } else {
    inputBox.value += value;
  }
};

const Clear = () => {
  setInput("");
};

const answer = () => {
  const expression = inputBox.value;

  try {
    const modifiedExpression = expression.replace(/\^/g, "**");
    const result = eval(modifiedExpression);
    inputBox.value = result;
  } catch (error) {
    inputBox.value = "Error";
  }
};

const back = () => {
  const inputBox = document.getElementById("input-box");
  const currentValue = inputBox.value;

  if (currentValue !== "") {
    const newValue = currentValue.slice(0, -1);
    inputBox.value = newValue;
  }
};
