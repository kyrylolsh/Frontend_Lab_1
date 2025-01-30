document.body.style.fontFamily = "Arial";
const paragraphs = document.querySelectorAll('p');

paragraphs[0].style.color = 'orange';
paragraphs[0].style.backgroundColor = 'yellow';
paragraphs[0].style.fontSize = '16px';
paragraphs[0].style.padding = '5px';
paragraphs[0].style.textAlign = 'center';

paragraphs[1].style.color = 'blue';
paragraphs[1].style.backgroundColor = 'lightBlue';
paragraphs[1].style.fontSize = '14px';
paragraphs[1].style.padding = '5px';
paragraphs[1].style.textAlign = 'right';

paragraphs[2].style.color = 'red';
paragraphs[2].style.backgroundColor = 'lightCoral';
paragraphs[2].style.fontSize = '12px';
paragraphs[2].style.padding = '5px';
paragraphs[2].style.textAlign = 'left';

const cells = document.querySelectorAll('td');

cells.forEach((cell, index) => {
    if (cells.length > 0) {
    cells.forEach((cell, index) => {
        if (index % 2 === 0) {
            cell.classList.add('selected');
        }
    });
}
});
