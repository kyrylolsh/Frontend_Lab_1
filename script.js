document.body.style.fontFamily = 'Arial';
const paragraphs = document.querySelectorAll('p');

//
document.body.style.fontFamily = 'Arial';
//
const cells = document.querySelectorAll('td');
cells.forEach((cell, index) => {
    if (index % 2 === 0) {
        cell.classList.add('selected');
    }
});
