let myarr= [0,1,2,3,4,5];
console.log(myarr.push(6));
console.log(myarr);
console.log(myarr.pop());
console.log(myarr);
console.log(myarr.unshift(9));
console.log(myarr);
console.log(myarr.shift());
console.log(myarr);
console.log(myarr.includes(9));
console.log(myarr.indexOf(3));
 
 const newArr=myarr.join();
 console.log(myarr);
 console.log(typeof(newarr));
 
 console.log("A",myarr);
 const myn1=myarr.slice(1,3);
 console.log(myn1);
 
 console.log("B",myarr);
 const myn2=myarr.splice(1,3);
 console.log(myn2);
 
 console.log("C", myarr);


 const arr1=[1,2,3];
 const arr2=[4,5,6];
 console.log(arr1.concat(arr2))
 
 console.log(Array.isArray("Shashi"));
 console.log(Array.from("Shashi"))
 
 const a=8;
 const b=2;
 const c=3;
 console.log(Array.of(a,b,c));
 