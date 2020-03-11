let
    c   = 2,
    n   = 10,
    arr = [2, 37, 73 ,1, 2, 1, 1, 1, 1, 1];

    console.log(max(arr));

function max(arg){
    let
        max = 0,
        s   = 0,
        f   = 0;

    for(let i = 0; i < 10; i++){
        if(natural(arg[i])){
            if(len(arg, i)>max){
                max = len(arg, i);
            }
        }
    }
    return max;
}

function len(arg1, agr2){
    let
        counter = 1;
    for(let i = agr2 + 1; i < 10; i++){
        if(!natural(arg1[i])){
            break;
        }
        counter++;
    }
    return counter;
}

function natural(arg){
    if(arg<2){
        return false;
    }else{
        let
            s = Math.sqrt(arg);
        for(let i = 2; i <=s; i++){
            if(arg%i==0){
                return false;
            }
        }
        return true;
    }
}