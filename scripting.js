var arr=[];
var ans=0;
function fun1(){
    document.getElementById('Input_field').textContent+='1 ';
    arr.push(1);
}
function fun2(){
    document.getElementById('Input_field').textContent+='2 ';
    arr.push(2);
}
function fun3(){
    document.getElementById('Input_field').textContent+='3 ';
    arr.push(3);
}
function fun4(){
    document.getElementById('Input_field').textContent+='4 ';
    arr.push(4);
}
function fun5(){
    document.getElementById('Input_field').textContent+='5 ';
    arr.push(5);
}
function fun6(){
    document.getElementById('Input_field').textContent+='6 ';
    arr.push(6);
}
function fun7(){
    document.getElementById('Input_field').textContent+='7 ';
    arr.push(7);
}
function fun8(){
    document.getElementById('Input_field').textContent+='8 ';
    arr.push(8);
}
function fun9(){
    document.getElementById('Input_field').textContent+='9 ';
    arr.push(9);
}
function fun0(){
    document.getElementById('Input_field').textContent+='0 ';
    arr.push(0);
}
function funplus(){
    document.getElementById('Input_field').textContent+='+ ';
    arr.push("+");
}
function funmin(){
    document.getElementById('Input_field').textContent+='- ';
    arr.push("-");
}
function fundiv(){
    document.getElementById('Input_field').textContent+='/ ';
    arr.push("/");
}
function funx(){
    document.getElementById('Input_field').textContent+='x ';
    arr.push("x");
}
function funac(){
    document.getElementById('Input_field').textContent=' ';
    
}
function funeq(){
    ans=arr[0];
    if(arr[1]==="+"){
        ans+=arr[2];
        arr=[];
        arr.push(ans);
    }
    if(arr[1]==="-"){
        ans-=arr[2];
        arr=[];
        arr.push(ans);

    }
    if(arr[1]==="/"){
        ans/=arr[2];
        arr=[];
        arr.push(ans);

    }
    if(arr[1]==="x"){
        ans*=arr[2];
        arr=[];
        arr.push(ans);

    }
    document.getElementById('Input_field').textContent=ans;
}