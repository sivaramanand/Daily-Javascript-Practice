// let heading2=document.querySelector(".heading2")
// console.log(heading2)
// heading2.innerText=heading2.innerText+ " from college students"

// let divs=document.querySelectorAll(".box")

// let ind=1;
// for (i of divs){
//     i.innertext= i.innertext+`new unique value ${ind}`;
//     ind++;
// }

// let div=document.querySelector("p")
// console.log(div.setAttribute("class","paragraph1"))
// div.style.backgroundColor="grey";

let newBtn=document.createElement("button");
newBtn.innerText="click me!"
console.log(newBtn)

let div=document.querySelector("div").before(newBtn)
// newBtn.remove()