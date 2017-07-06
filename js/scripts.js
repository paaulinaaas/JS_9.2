var arrayFemales = ['Paulina', 'Ola', 'Natalia', 'Iza', 'Asia'];
var arrayMales = ['Tomek', 'Adrian', 'Marcin', 'Kamil', 'Wojtek'];
var both = arrayFemales.concat(arrayMales);

console.log(both);

var newName = 'Ala';

//both.splice(0, 0, newName);
//console.log(both);


if (both.indexOf(newName) === -1) {
	both.push(newName);
}
// w jaki sposób funkcja wyłacza mozliwosc dodania drugi raz tego samego imienia?
// czemu przy probie dodania both.splice, rowniez funkcja zaczyna zachowywac się inaczej i dodaje do poczatku lini a nie konca nowe imie?

console.log(both);
