for(let a=0; a<10; a++) {
    if(a === 5) {
        continue; // Skip the rest of the loop when a is 5
    }
    console.log(a); // This will print numbers from 0 to 9, skipping 5
}
 for(let b=0; b<10; b++) {
    if(b === 3) {
        break; // Exit the loop when b is 3
    }
    console.log(b);} // This will print numbers from 0 to 2