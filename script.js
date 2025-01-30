document.body.style.fontFamily = "Arial";
const paragraphs = document.querySelectorAll('p');

const styles = [
    { color: 'orange', backgroundColor: 'yellow', fontSize: '16px', textAlign: 'center' },
    { color: 'blue', backgroundColor: 'lightBlue', fontSize: '14px', textAlign: 'right' },
    { color: 'red', backgroundColor: 'lightCoral', fontSize: '12px', textAlign: 'left' }
];


paragraphs.forEach((p, index) => {
    if (styles[index]) {
        Object.assign(p.style, styles[index]);
        p.style.padding = '5px';
    }
});


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
