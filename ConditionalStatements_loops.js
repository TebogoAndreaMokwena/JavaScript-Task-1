//Exercise 1: temperature Check
let temperature= 18;
//if-else version
if(temperature,0){
    console.log("It's freezing!");

}else if (temperature<=15){
    console.log("It's cold");
}else if (temperature<=25){
    console.log("It's mild");
}else{
    console.log("It's warm");
}

//switch version
switch(true){
    case(temperature<0):
    console.log("it's freezing");
    break;
    case(temperature<=15):
    console.log("It's cold.");
    break;
    case(temperature<=25):
console.log("It's miild.");
break;
default:
    console.log("It's warm.");
   }

   //Exercise 2: Divisibility check
   let numbe= 6;
   //if-else version
   if(number%2===0 && number%3===0){
    console.log("Divisible by both.");
   }else if(number%2===0){
    console.log("Divisible by 2.");
   } else if(number%3===0){
    console.log("Divisible by 3.");
   } else{
    console.log("Not dvisible by 2 or 3.");
   }
   //switch version
   switch(true){
    case(number%2===0 && number%3===0):
    console.log("Divisible by both.");
    break;
    case(number%2===0):
    console.log("Divisible by 2.");
break;
case(number%3===0):
console.log("Divisible by 3.");
break;
default:
    console.log("Not dvisible by 2 or 3.");
   }

   //Exercise 3: For loops
   //1. Numbers from 1-10
   for(let i=1; i<=10; i++){
    console.log(i);
   }

   //3. Even numbers b/n 1 & 20
   for(let ii=2; i<=10; i++){
    if(i%2===0)console.log(i);
   }

   //3. sum from 1-100
   let sum= 0;
   for(let i=1; i<=100; i++){
    sum+=i;
   }
   console.log("Sum from 1 to 100:", sum);

   //4. print elements in an array
   const numbers1=[1,2,3,4,5];
   for(let i=0; i<numbers1.length; i++){
    console.log(numbers1[i]);
   }

   //5.Find largest number
   const numbers2=[3,7,2,5,10,6];
   let largest= numbers2[0];
   for(let i=1;i<numbers2.length; i++){
    if(numbers2[i]>largest){
        largest=numbers2[i];
    }
   }
console.log("Largest number is:", largest);

//Exercise 4: While loops
//1. Numbers from 1-10
let i=1;
while(i<=10);{
    console.log(i);
    i++;
}

//2. Even numbers b/n 1 & 20
let j=1;
while(j<=20){
    if(j%2===0)console.log(j);
    j++;
}

//3.sum from 1-100
let k=1, total=0;
while(k<=100){
    total+=k;
    k++;
}
console.log("Sum from 1 to 100:", total);

//4. Multiples of 5 less than 50
let m=1;
while(m<50){
    if(m%5===0) console.log(m);
    m++;
}

//Exercise 5: Do While loops
//1. Numbers from 1 to 10
let a=1;
do{
    console.log(a);
    a++;
}while (a<=10);

//2. Sum from 1 to 100
let b=1, sum2=0;
do{
    sum2+=b;
    b++
}while(b<=100);
console.log("sum from 1 to 100:", sum2);

//3. Prompt for number greater than 10
let userNumber;
do{
    userNumber=parseInt(prompt("Enter a number greater than 10:"));
}while(userNumber<=10);

//4. Guessing game
const correctNumber= Math.floor(Math.random()*10)+1;
let guess;
do{
    guess=parseInt(prompt("Guess a number between 1 and 10:"));
}while(guess !==correctNumber);
console.log("Correct! The number was:", correctNumber);