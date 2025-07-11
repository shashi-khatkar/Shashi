let rows = 5;
let startWidth = 5;

for (let i = 0; i < rows; i++) {
    let stars = "";
    let spaces = "";

    
    let starCount = startWidth + 1 * i;

    
    for (let j = 0; j < rows - i - 1; j++) {
        spaces += " ";
    }

    
    for (let k = 0; k < starCount; k++) {
        stars += "*";
    }

    
    console.log(spaces + stars);
}