const num1 = Number(prompt('Введите первое число'));
const num2 = Number(prompt('Введите второе число'));

if (num1 > num2) {
    document.write(`<h1 align="center">${num1} больше ${num2}</h1>`);
} else if (num1 < num2) {
    document.write(`<h1 align="center">${num1} меньше ${num2}</h1>`);
} else {
    document.write(`<h1 align="center">${num1} = ${num2}</h1>`);
}