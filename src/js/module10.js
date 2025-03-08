// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.



// const answer = prompt('Enter something');

// function checkAnswer(answer) {
//     return new Promise((resolve, reject) => {
    
//         const numberAnswer = Number(answer);
//         if (Number.isNaN(numberAnswer)) {
//             reject("error");
//         }
        
//         if (numberAnswer % 2 === 0) {
//             setTimeout(() => {
//                 resolve("even")
//             }, 1000);
//         }

//         if (numberAnswer % 2 !== 0) {
//             setTimeout(() => {
//                 resolve ("odd")
//             }, 2000)
//         }
//     }) 
      
// }
 
// checkAnswer(answer)
//     .then((data) => {
//         console.log(data)
//     })
     
//     .catch((error) => {
//         console.log(error)
//     })




// Додай відображення дати і часу в реальному часі
    
// const date = document.querySelector(".date span");

// date.textContent = new Date().toLocaleString();

// setInterval(() => {
// date.textContent = new Date().toLocaleString();
// }, 1000)


// Напишіть функцію calculateAge(birthDate), яка приймає дату народження у форматі YYYY-MM-DD і повертає поточний вік.
// Підказка: Використайте об'єкт Date для обчислення різниці між сьогоднішньою датою і датою народження.

function calculateAge(birthDate) {
    const currentDate = new Date();
    const birth = new Date(birthDate);


    let year = currentDate.getFullYear() - birth.getFullYear();
    const month = currentDate.getMonth() - birth.getMonth();
    const day = currentDate.getDate() - birth.getDate();

    if ((month === 0 && day < 0) || (month < 0)) {
        year -= 1; 
       
   } 
    
    return year


}

console.log(calculateAge("2000-01-01"));
console.log(calculateAge("2000-03-10"));
console.log(calculateAge("2000-10-15"));




