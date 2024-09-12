let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

let selectedWords = text[12] + text[6] + text[18] + text[25];
console.log('Сформований рядок', selectedWords)

let lowerCaseText = text.toLowerCase();
console.log("Рядок в нижньому реєстрі:", lowerCaseText);

let positions = [];
let position = text.indexOf('in');
while (position !== -1) {
    positions.push(position);
    position = text.indexOf('in', position + 1);
}
console.log("Позиції 'in':", positions);

let wordsArray = text.split(' ');
console.log("Масив підрядків:", wordsArray);

let invertedText = text.split('').reverse().join('');
console.log("Інвертований рядок:", invertedText);

function ucFirst(txt) {
    let newText = txt.charAt(0).toUpperCase() + txt.slice(1);
    return newText;
}

console.log("Перша буква в верхньому реєстрі:", ucFirst(text));