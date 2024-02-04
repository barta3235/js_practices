function add(n1,n2){
    return n1+n2;
}

function subs(n1,n2){
    return n1-n2;
}

function mult(n1,n2){
    return n1*n2;
}

function div(n1,n2){
    return n1/n2;
}



function calculator(a,b,operation){
    if(operation==='+'){
        console.log(add(a,b));
    }else if(operation==="-"){
        console.log(subs(a,b));
    }else if(operation==='*'){
        console.log(mult(a,b));
    }else if(operation==='/'){
        console.log(div(a,b));
    }else{
        console.log("Invalid");
    }
}

calculator(10,5,'-');
