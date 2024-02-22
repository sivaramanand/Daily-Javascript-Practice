let btn = document.querySelector(".button");
let currMode = "light";
let bodies = document.querySelector("body");

btn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
    // document.querySelector(".para").style.color = "white";
    bodies.classList.add("dark");
    bodies.classList.remove("light");

    console.log(currMode);
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
    // document.querySelector(".para").style.color = "blue";
    bodies.classList.add("light");
    bodies.classList.remove("dark");


    console.log(currMode);
  }
});
