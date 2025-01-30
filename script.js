document.body.style.fontFamily = "Arial";
const paragraphs = document.querySelectorAll("p");

const paragraphStyles = [
  {
    color: "orange",
    backgroundColor: "yellow",
    fontSize: "16px",
    padding: "5px",
    textAlign: "center",
  },
  {
    color: "blue",
    backgroundColor: "lightBlue",
    fontSize: "14px",
    padding: "5px",
    textAlign: "right",
  },
  {
    color: "red",
    backgroundColor: "lightCoral",
    fontSize: "12px",
    padding: "5px",
    textAlign: "left",
  },
];

paragraphs.forEach((paragraph, index) => {
  const style = paragraphStyles[index];
  Object.assign(paragraph.style, style);
});

const cells = document.querySelectorAll("td");

cells.forEach((cell, index) => {
  if (index % 2 === 0) {
    cell.classList.add("selected");
  }
});
