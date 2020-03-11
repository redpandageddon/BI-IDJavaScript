let
    a = [1,2,3,4,5,6],
    res = 0;

    for(let i = 0; i < a.length; i++){
        res += a[i]/factorial(i);
        console.log(res);
        
    }

    console.log(res);    

function factorial(n){
    if(n==0)
    return 1;
    let res = 1;
    for(let i = 1; i <= n; i++){
        res *= i;
    }
    return res;
}