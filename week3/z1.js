let
    p = '7 * x * x * x * x * x + 4 * x * x * x * x + 2 * x * x * x + x * x + x';

    fn(p);

function fn (arg){
    let
        lst = new Array(),
        a   = arg.split(''),
        str = '';

        for(let i = 0; i < a.length; i++){
            if(a[i]!=' '){
                lst.push(a[i]);
            }
        }

    lst.forEach(element => {
        str += element;
    });   

    let
        arr = new Array();

        arr = str.split('+');

    str = '';

    arr.forEach(element => {
        element = ff(element);
        str += element + '+';
    });
    
    let
        q = str.split('', str.length - 1);
    
    str = '';
    
        q.forEach(element => {
            str += element;
        });


    console.log(str);
    
}

function ff(arg){
    let
        xcount = 0,
        arr = new Array();

    arr = arg.split('*');
    
    arr.forEach(element => {
        if(element == 'x') 
             xcount++;
     });

    if(arr.length == xcount){
        return xcount + '*' + 'x^' + (xcount - 1);
    }
    else{
        return (arr[0] * xcount) + '*' + 'x^' + (xcount - 1);
    }
}