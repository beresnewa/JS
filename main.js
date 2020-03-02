
for (let i=0; i<10; i++){
    setTimeout (function (){
        console.log (i)
    }, 1000*i, i);
};

function a (seconds){
    console.log ('¯\\_(ツ)_/¯    ' , seconds);
    setTimeout (a, seconds*1000, seconds + 1);
}

a (1);

function factorial (n) {
    if (n>1){
        return n * factorial(n-1);
    } else {
        return n;
    }
};
 console.log (factorial (6));