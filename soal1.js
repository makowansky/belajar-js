//latihan ikhwan

const prompt = require('prompt-sync')({sigint: true});

const number = prompt('Enter the number: ');
if (number<=0){
    console.log('Tidak bisa input bilangan negatif');
    
} else if (number%2==0){
    result = Math.sqrt(number);
    console.log(`Akar pangkat 2 dari ${number} adalah ${result}`);
    
} else if (number%2!=0){
     console.log('Tidak bisa input bilangan ganjil');
}


