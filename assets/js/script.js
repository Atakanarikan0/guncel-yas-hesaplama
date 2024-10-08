let year = Number(prompt('Hangi yılda doğdunuz :'))
let month = Number(prompt('Hangi ayda doğdunuz(Sayı olarak giriniz):'))
let day = Number(prompt('Hangi günde doğdunuz:'))

let totalYear = 2024 - year;
let totalMonth = 10 - month;
let totalDay = 8 - day;

if (totalMonth < 0) {
  totalYear -= 1;
  totalMonth =  12 + totalMonth;
} else {}

if (totalDay < 0) {
  totalMonth -= 1;
  totalDay = 30 + totalDay;
}else {}

alert(totalYear + ' yıl ' + totalMonth + ' ay ' + totalDay + ' gün'); 

