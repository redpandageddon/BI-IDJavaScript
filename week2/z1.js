let
    t_init = 'this is any sequence,solid groundthis is any sequence,solid ground',
    f_init = 'where the north wind meets the sea there s a river full of memory ';

    fn(t_init);
    fn(f_init);

function fn(argument){
    let 
        a   = argument.split(''),
        con = true;

    for(let i = 0, j = 33; i < 33, j < 66; i++ , j++){
        if(a[i]!=a[j]){
            con = false;
        }
    }

    if(con){
        console.log(argument);  
    }else{
        console.log(argument+argument); 
    }
}