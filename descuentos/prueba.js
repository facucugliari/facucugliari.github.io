function num(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.ceil(Math.random()* max);
}
let i=0;
let array1=[], array2=[], array3=[], array4=[];
for(i=0;i<1;i++){
    let res = num(1000,9999);
    array1.push(res);
    res = num(1000,9999);
    array2.push(res);
    res = num(1000,9999);
    array3.push(res);
    res = num(1000,9999);
    array4.push(res);
}
for(i=0;i<1;i++){ 
    let codigoDesc=array1[i]+'-'+array2[i]+'-'+array3[i]+'-'+array4[i];
    console.log(codigoDesc);
}
