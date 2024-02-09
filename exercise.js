/* Problem:
Write a code to find area of rectangle!

Hint
1. Find out how to count area of rectangle
2. length x widht = area of rectangle (the formula)

Solutions in Pseudocode:
1. define variable and assign value to variable
        const rectangleLength = 10
        const rectangleWidth = 5
2. define variable to keep the result
    and implement the formula area of rectangle
        const rectangleArea = rectangleLength * rectangleWidht
*/

// 1. rectangleArea
// const rectangleLength = 5
// const renctangleWidth = 3
// const renctangleArea = rectangleLength * renctangleWidth

// function getRectangle (rectangle) {
//         let rectangleLength = 5
//         let rectangleWidth = 3
//         const rectangleArea = rectangleLength * rectangleWidth

// return [rectangleLength, rectangleWidth, rectangleArea]
// console.log (renctangleArea);
// ----- NOMOR 1 SELESAI -----

// 2. rectanglePerimeter
// const rectangleLength = 5
// const rectangleWidth = 3
// const rectanglePerimeter = (rectangleLength + rectangleWidth) * 2
// console.log (rectanglePerimeter)

// ----- NOMOR 2 SELESAI -----

// 3. Circle
// const circleRadius = 5
// const circleDiameter = circleRadius * 2
// const circleCircumference = 2 * (Math.PI * circleRadius)
// const circleArea = Math.PI * (circleRadius * circleRadius)

// console.log (circleDiameter)
// console.log (circleCircumference)
// console.log (circleArea)

// ----- NOMOR 3 SELESAI -----

//Triangle's angle
// const triangleA = 80
// const triangleB = 65
// const triangleAngle = 180 - triangleA - triangleB

// console.log (triangleAngle)

// ----- NOMOR 4 SELESAI -----


// 5. date
// var date1 = new Date();
// let date2 = new Date ("2025-1-1")
// var diffMil = date2 - date1;
// console.log("diffMilliseconds = ", diffMil); //masih dalam milisekon
// //convert milliseconds to days
// const daysRemaining = Math.ceil(diffMil / (1000 * 60 * 60 * 24));
// // const daysRemaining = diffDays / (1000 * 60 * 60 * 24);
// console.log("Date Differences = ", daysRemaining);
// function milisecondsToDays (Miliseconds) {
//         return Miliseconds / 24 / 60 / 60 / 1000

// }
// console.log(Math.floor(milisecondsToDays(28393529530)))

// let now = new Date ()
// let future = new Date ("01/01/2025")
// let diff = Math.floor (future.getTime() - now.getTime()) // getTime = mendapatkan nilai miliseconds
// let days = Math.floor (diff / (1000 * 60 * 60 * 24))

// console.log(now.getTime())
// console.log(future.getTime())
// console.log(diff)
// console.log(days)


        


// ----- NOMOR 5 SELESAI -----


// const days = 400
// const years = days / 365
// const months = days / 30 - 12
// const convert = {
//     years
//     months
//     days
// }

// console.log (`${years}, ${months}, ${days}`)

// 6.
// console.log("No. 6");
// function getNumberOfDays(jumlahHari) {
//   let years = Math.floor(jumlahHari / 365);
//   let months = Math.floor((jumlahHari % 365) / 30); // mod 365 dibagi 30 hari (dapet bulan)
//   let days = Math.floor((jumlahHari % 365) % 30);

//   return [years, months, days].join("-");
// }

// console.log("400 days=", getNumberOfDays(400));
// console.log("366 days=", getNumberOfDays(366));

// //versi manual
// let jumlahHari2 = 400;
// let tahun = Math.floor(jumlahHari2 / 365);
// let bulan = Math.floor((jumlahHari2 % 365) / 30); // mod 365 dibagi 30 hari (dapet bulan)
// let hari = Math.floor((jumlahHari2 % 365) % 30);
// console.log("400 hari = ", `${tahun} year, ${bulan} month, ${hari} days`);

// //versi manual
// jumlahHari2 = 366;
// tahun = Math.floor(jumlahHari2 / 365);
// bulan = Math.floor((jumlahHari2 % 365) / 30); // mod 365 dibagi 30 hari (dapet bulan)
// hari = Math.floor((jumlahHari2 % 365) % 30);
// console.log("366 hari = ", `${tahun} year, ${bulan} month, ${hari} days`);

let n = 999
let tahun = Math.floor (n / 365)
let sisa = n % 365 // (tahun * 365)
let bulan = Math.floor (sisa / 30)
let hari = sisa % 30 // sisa - (bulan *30)

console.log (`${tahun} tahun, ${bulan} bulan, ${hari} hari `)
// console.log (tahun)
// console.log (bulan)
// console.log (hari)

