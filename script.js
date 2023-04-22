const keywords = ["void", "using", "namespace", "int", "include", "iostream", "std", "main", "cin", "cout", "return", "float", "double", "string"];
const operators = ["+", "-", "*", "/", "%", "++", "--", "==", "!=", "<", ">", "<=", ">=", "&&", "||", "!", "=", "+=", "-=", "*=", "/=", "%=", "&=", "|="];
const symbols = ["(", ")", "{", "}", "[", "]", ";", ",", ".", "->", "::", "<<", ">>", "#", "?", ":"];

const operatorsOutput = document.querySelector(".token-output1");
const keywordsOutput = document.querySelector(".token-output2");
const symbolsOutput = document.querySelector(".token-output3");
const identifiersOutput = document.querySelector(".token-output4");

function analyze() {
  const codeInput = document.querySelector(".code-input");
  const code = codeInput.value.split(/\s+/);
  const keywordsFound = new Set();
  const operatorsFound = new Set();
  const symbolsFound = new Set();
  const identifiersFound = new Set();

  code.forEach((token) => {
    if (keywords.includes(token)) {
      keywordsFound.add(token);
    }
    else if (operators.includes(token)) {
      operatorsFound.add(token);
    } 
    else if (symbols.includes(token)) {
      symbolsFound.add(token);
    } 
    else if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) {
      identifiersFound.add(token);
    }
  });

  keywordsOutput.value = [...keywordsFound].join("\n");
  operatorsOutput.value = [...operatorsFound].join("\n");
  symbolsOutput.value = [...symbolsFound].join("\n");
  identifiersOutput.value = [...identifiersFound].join("\n");
}
