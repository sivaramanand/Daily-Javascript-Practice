const input=document.querySelector(".inputs")
const output=document.querySelector(".outputlabel")

input.addEventListener("input",()=>{ 
    let vars = input.value;
    let val = vars*2.2;
    output.innertext=val.toFixed(2)
   })