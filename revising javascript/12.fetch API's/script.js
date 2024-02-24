const url = "https://cat-fact.herokuapp.com/facts";
const factslistner = document.querySelector(".facts_para");
const btn = document.querySelector(".button_Selector");
// const getFacts = async () => {

//   console.log("getting data...W")
//   let response = await fetch(url);
//   console.log(response)
//   let data=await response.json();
//  factslistner.innerHTML= data[4].text

// };

function getFacts() {
  fetch(url)
    .then((Response) => {
      console.log(Response)
      console.log(Response.json())
      return Response.json();
    })
    .then((data) => {
      console.log(data);
      factslistner.innerText = data[2].text;
    });
}

btn.addEventListener("click", getFacts);
