
// function hello(name) {
//       alert (`salom ${name}`)
//       hello('akobir')
// }

// function calcArea(width, height){
//       let result = width * height;
//       return result;
//       console.log()
// }
// function sum(...args){
//       let total = 0;
//       for (let i = 0; i < args.length; i++){
//             total += args[i];
//       }
//       return total;
// }
// console.log(sum(2, 3, 3,4 ,5 , 3, 5, 6))

// const numberFour = 4

// function five(){
//       const numberFive = numberFour + 1
//       return numberFive
// }

// console.log(numberFour)
// console.log(five())

// const divider = (number) => number/2








// function fac(n){
//       if (n < 2){
//             return 1
//       } else{
//             return n * fac(n - 1)
//       }
// }
// console.log(fac(4))


// const cars = ['1','3' , '4', '5']
// let x = cars[2]




// let num1=+prompt("a=")
// let num2=+prompt("b=")

// const isname = function (a,b){
//       alert(a+b)
// }
// isname(nam1, num2)

// const arrow = (a,b) => a+b
// console.log(arrow(11,10))



// const isName= "Akabir"

// console.log(isName.toLowerCase());
// console.log(isName.toUpperCase());
// console.log(isName.length);
// console.log(isName.substring(0,4))

// function nam(a, b, c){
//       return a+b*c
// }




// const counter = document.querySelectorAll(".one span")

// counter.forEach((element) => {
//       const lim = parseInt(element.dataset.name)
//       let begin = 0;
//       function updateCount(){
//             if (begin <= lim){
//                   element.innerText = begin
//                   begin++
//                   setTimeout(updateCount, 50)
//             }
//       }
//       updateCount()
// }) 

// const btn=document.querySelector('btn');
// const box=document.querySelector('box')
// const card=document.querySelectorAll('.card')

// console.log(card);

//  card[0].style.cssText='background-color: green';



// function addStyle(){
//       for (let i=0; i<=card.length; i++){
//             if(i%2==1){
//                   card[i].style.cssText='background-color:green';
//             }
//       }
// }
//  btn.onclick = function() {
      
//       for (let i=0; i<=card.length; i++) {
//        if(i%2==0){
//          card[i].style.cssText='background-color:green';
//        }
// }
// }


// const yourNumber = +prompt("Raqam kiriting?");
// const numbers = Math.round(Math.random() * 100);
// if (yourNumber === numbers) {
//   alert("Siz g`alaba qozondingiz!");
// } else {
//   alert(`Siz yutqizdingiz!Javobingiz: ${yourNumber}, togri javob: ${numbers}`);
// }
// console.log(numbers);

// let number=Math.random()*10
// console.log(number);
// console.log(number.toFixed(0));
// for(let num=1; num<=10; num++ ){
// if(num >= console){
//       prompt("son kiriting")
//       alert('yuqoriroq son kiriting')
//       break
// }else if(num == console){
//       alert('topvoldingay tabriklar')
//       break
// }else if(num <= console){
//       prompt('pasroq tush')
//       break
// }else{
//       alert('sur bettam')
//       break
// }
// }
// let numbers;

// for (let i = 1; true; i++) {
//   const yourNumber = +prompt("Iltimos, 0 dan 100 gacha bo'lgan son kiriting?");
//   numbers = Math.round(Math.random() * 100);

//   if (yourNumber === numbers) {
//     alert(`Tabriklayman, siz ${i} ta urinishda g'alaba qozondingiz!`);
//     break;
//   } else {
//     alert(` Afsuski, siz yutqazdingiz! Javobingiz: ${yourNumber}, tog'ri javob: ${numbers}`);
//   }
// }







// let yourNumber;
// let numbers;
// numbers = Math.round(Math.random() * 10);
// do {
//   yourNumber = +prompt("Iltimos, 0 dan 100 gacha bo'lgan son kiriting:");
  
  
//   if (yourNumber === numbers) {
//     alert("Tabriklayman, siz g'alaba qozondingiz!");
//   } else {
//     alert(`Afsuski, siz yutqazdingiz! Javobingiz: ${yourNumber}, tog'ri javob: ${numbers}`);
//   }
// } while (yourNumber !== numbers);



// let numbers;
// numbers = Math.round(Math.random() * 2);
// for (let i = 1; true; i++) {
//   const yourNumber = +prompt("Iltimos, 0 dan 100 gacha bo'lgan son kiriting?");
  
//   console.log(numbers)

//   if (yourNumber === numbers) {
//     alert(`Tabriklayman, siz ${i} ta urinishda g'alaba qozondingiz!`);
//       break
// }else{
//     alert('topdolmadizmi');
//     break
//   }
// }
// let number = 2000;

//    for (let i= 0; true; i++){
//     const youNumber = +prompt('Tugilgan yilizni kiriting')
//     // alert(number)
   

//   if (youNumber === number){
//     alert (`sizning yilingiz ${youNumber}`);
//     break
//   }else{
//     alert('mavjud emas');
//     break
//   }
//  }


let age = +prompt ('Tugilgan yilizni kiriting')

let curentYear = new Date().getFullYear()
let yearOfBirth = curentYear - age;

if(yearOfBirth <= 2000){
  alert("Siz 2023-yilda" + " " + yearOfBirth + "-da bo'lasiz")
}else{
  alert("afsus hech balo topilamdi !!! ")
}

































// do{
//   yourNumber = +prompt('yoshingizni kiriting:');
  
//   if (yourNumber > number){
//     alert(`sizning tugilgan yiliz ${number}`)
//   }else{
//     alert(`sizning yilinggiz mavjud emas`)
//   }

// }while (yourNumber === number)