function fab(n){
    var a=0; var b=1;
    for(var i=0; i<n; i++){
        console.log(a);
        var c=a+b;
        a=b;
        b=c;
       
    }
} fab(10);