// function sum(x,y){
//     s=x+y
//     console.log("before return")
//     return s;
//     console.log("after return")
// }

// console.log(sum(3,4))
// console.log(sum)


// function sum1(a,b){
//     return a+b;
// }

// const sum=(a,b)=>{
//     console.log(a+b)
// }

// function mul(a,b){
//     return a*b
// }

// console.log(sum(1,4))
// console.log(sum)
// console.log(mul(4,7))



//create a fucntiuon keyword that takes string as a argument and returns the number of vowels in the string

// const countVowels =(str)=>{
//     count=0
// for (const char of str){
// if(char ==="a"||char ==="e"||char ==="i"||char ==="o"||char ==="u"){
//     count=count+1
// }
// }
// console.log(count)}

// countVowels("aeiou")

//For eeach

// arr=['coimbatre','banglore','madurai','pune']

// arr.forEach((val) => {
//     console.log(val+ " hai")
// });

//Higer Order functions (functions wihin a function)

// const nums=[1,3,56,65]
// let multiply=(num)=>{
//     console.log(num*num)
// }
// nums.map(multiply)


//filter

// let arr=[1,2,3,4,5,6,7,8,9,0]

// evenarr=arr.filter((val)=>{
//   return  val%2==0;
// })

// console.log(evenarr)


//Reduce

// let arr=[5,6,7,11,33,456,54]
// const output=arr.reduce((prev,current)=>{
//     return prev>current?prev:current
// });

// console.log(output)


let n = prompt("please enter an number")

let arr=[]

for (let i=1;i<=n;i++)
{
    arr[i-1]=i
}

console.log(arr)

sum=arr.reduce((prev,current)=>{
   return prev+current
})

console.log(sum)

multiply=arr.reduce((prev,current)=>{
    return prev*current
 })

 console.log(multiply)