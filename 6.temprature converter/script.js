const input = document.querySelector("#inputTemprature");
const output = document.querySelector("#outputFarenheit");

input.addEventListener("input", () => {

  let inputTemprature = input.value;

  if (inputTemprature === "") {
    output.innerText = "";
  } else {
    let outputTemprature = ((inputTemprature * 9) / 5 + 32).toFixed(2);
    output.innerText = outputTemprature;
  }
});
