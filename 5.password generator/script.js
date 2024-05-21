const lengthp = document.querySelector("#length-number");
const upperCase = document.querySelector("#Uppercase");
const downCase = document.querySelector("#Lowercase");
const Symbols = document.querySelector("#Symbols");
const numbers = document.querySelector("#Numbers");
const passinput = document.querySelector("#pass-input");
const copy = document.querySelector("#copy");
const generate = document.querySelector("#generate");


const upperCasestr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCasestr = "abcdefghijklmnopqrstuvwxyz";
const symbolsStr = "!@#$%^&*()_+=-";
const numbersstr = "0123456789";

generate.addEventListener("click", () => {
  let str = "";
  if (upperCase.checked) {
    str += upperCasestr;
  }
  if (downCase.checked) {
    str += lowerCasestr;
  }
  if (Symbols.checked) {
    str += symbolsStr;
  }
  if (numbers.checked) {
    str += numbersstr;
  }
  console.log(str);
  let password = "";
  for (let i = 0; i < lengthp.value; i++) {
    console.log(str.length, "str length");
    let index = Math.floor(Math.random() * str.length);
    console.log(Math.random(), "math random");
    console.log(Math.random() * str.length, "Math.random() * str.length");
    console.log(
      Math.floor(Math.random() * str.length),
      "Math.floor(Math.random() * str.length)"
    );
    console.log(index, "index");
    password = password + str[index];
    console.log(password);
  }
  passinput.value = password;
  copy.addEventListener("click", () => {
    if (passinput.value === "") {    
    alert("cant copy empty strings")
    }
    else {
      passinput.select();
      document.execCommand("copy");
      alert("password copied");
    }
  });
});
