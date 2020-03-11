let
    n   = prompt('Enter rows ammount '),
    arr = new Array(n),
    a   = new Array(0,0,0,0),
    output = '';


for(let i = 0; i < n; i++){
  arr[i] = new Array(9);
}

for(let i = 0; i < n; i++){
    for(let j = 0; j < 9; j++){
        arr[i][j] = Math.round(Math.random()*20);
        output += arr[i][j] + '\t';
    }
    output += '\n';
}

for(let i = 0; i < n; i++){
    for(let j = 0; j < 9; j++){
        if(j==1){
            a[0] += arr[i][j];
        }
        if(j==3){
            a[1] += arr[i][j];
        }
        if(j==5){
            a[2] += arr[i][j];
        }
        if(j==7){
            a[3] += arr[i][j];
        }
    }
}

a.forEach(element => {
    element /= n;
    output += element + '\t';
});

console.log(output);