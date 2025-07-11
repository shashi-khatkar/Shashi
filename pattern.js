for (let i = 1; i <= 5; i++) {
    let spaces = "";
    let stars = "";

    
    for (let j = i; j < 5; j++) {
        spaces += " ";
    }

    
    for (let k = 1; k <= (2 * i - 1); k++) {
        stars += "*";
    }

    
    console.log(spaces + stars);
}
