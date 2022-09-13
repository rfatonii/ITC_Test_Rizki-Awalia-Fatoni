// const konversiRomawi = function(nomor){

//     var desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
//     var hasil = '';
  
//     for(var index = 0; index < desimal.length; index++){
//       while(desimal[index] <= nomor) {
//         hasil += romawi[index];
//         nomor -= desimal[index];
//       }
//     }
//     return hasil;
//   }
  
//   console.log(konversiRomawi(2019));


  // let numbersAndNumerials = [
//     { number: 1000, roman: 'M'},
//     { number: 900, roman: 'CM'},
//     { number: 500, roman: 'D'},
//     { number: 400, roman: 'CD'},
//     { number: 100, roman: 'C'},
//     { number: 90, roman: 'XC'},
//     { number: 50, roman: 'L'},
//     { number: 40, roman: 'XL'},
//     { number: 10, roman: 'X'},
//     { number: 9, roman: 'IX'},
//     { number: 5, roman: 'V'},
//     { number: 4, roman: 'IV'},
//     { number: 1, roman: 'I'}
// ];

// function convert(arabicNumber) {
//     let romanLetter = '';
//     let number = arabicNumber;
//     for(let i = 0; i < numbersAndNumerials.length; i++){
//         if(numbersAndNumerials[i].number <= arabicNumber){
//             number = arabicNumber - numbersAndNumerials[i].number;
//             //10 -10
//             romanLetter = romanLetter + numbersAndNumerials[i].roman
//             i++;
    
//         }
//     }
//     console.log(`angka ${arabicNumber} sama dengan ${romanLetter} dalam angka romawi`)
// }

// convert(25);

