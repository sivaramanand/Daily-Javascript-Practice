// console.log("1");
// console.log("2");
// setTimeout(()=>{
//     console.log("one two three")
// },3000)
// console.log("3")
// console.log("4")
//-------------------------------------------------//
// function  sum(a,b){
//     console.log(a+b)
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b)
// }

// calculator(1,2,(a,b)=>{
//     console.log(a+b)
// })

//------------------------------------------------//

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data", dataId);
//     if (getNextData) {
//         console.log(getNextData)
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//     console.log("gettingData2....")
//   getData(2, () => {
//     console.log("gettingData3....")
//     getData(3, () => {
//         console.log("gettingData4....")
//       getData(4);
//     });
//   });
// });

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      //   reject("failure");
      resolve("succcess");
      //   if (getNextData) {
      //     getNextData();
      //   }
    }, 2000);
  });
}

async function getAllData() {
    try{
  console.log("log 1");
  await getData(1);
  console.log("log 2");

  await getData(2);
  console.log("log 3");

  await getData(3);
  console.log("log 4");

  await getData(4);
  console.log("log 5");

  await getData(5);
  console.log("log 6");

  await getData(6);
}
catch{
    console.log('error occored')
}
}
getAllData();
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

//------------------------------------------------------------//
