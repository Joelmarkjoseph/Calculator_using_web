var arr=[];
var ans=0;
var inpnum=0;
//Numbers

function fun1(){
    document.getElementById('Input_field').textContent+='1';
    take(1);
}
function fun2(){
    document.getElementById('Input_field').textContent+='2';
    take(2);
}
function fun3(){
    document.getElementById('Input_field').textContent+='3';
    take(3);
}
function fun4(){
    document.getElementById('Input_field').textContent+='4';
    take(4);
}
function fun5(){
    document.getElementById('Input_field').textContent+='5';
    take(5);
}
function fun6(){
    document.getElementById('Input_field').textContent+='6';
    take(6);
}
function fun7(){
    document.getElementById('Input_field').textContent+='7';
    take(7);
}
function fun8(){
    document.getElementById('Input_field').textContent+='8';
    take(8);
}
function fun9(){
    document.getElementById('Input_field').textContent+='9';
    take(9);
}
function fun0(){
    document.getElementById('Input_field').textContent+='0';
    take(0);
}

//operators

function funplus(){
    document.getElementById('Input_field').textContent+='+';
    arr.push(inpnum);
    inpnum=0;
    arr.push("+");
}
function funmin(){
    document.getElementById('Input_field').textContent+='-';
    arr.push(inpnum);
    inpnum=0;
    arr.push("-");
}
function fundiv(){
    document.getElementById('Input_field').textContent+='/';
    arr.push(inpnum);
    inpnum=0;
    arr.push("/");
}
function funx(){
    document.getElementById('Input_field').textContent+='x';
    arr.push(inpnum);
    inpnum=0;
    arr.push("x");
}
function funper(){
    document.getElementById('Input_field').textContent+='%';
    arr.push(inpnum);
    inpnum=0;
    arr.push("%");
}
function funac(){
    document.getElementById('Input_field').textContent='0';
    ans=0;
    inpnum=0;
    arr=[];
}
function funcl(){
    inpnum=Math.floor(inpnum/10);
    document.getElementById('Input_field').textContent=inpnum;
}

function funeq(){
    arr.push(inpnum);
    inpnum=0;
    ans=arr[0];
    if(arr[1]==="+"){
        ans+=arr[2];
        arr=[];
        inpnum=ans;
    }
    if(arr[1]==="-"){
        ans-=arr[2];
        arr=[];
        inpnum=ans;

    }
    if(arr[1]==="/"){
        ans/=arr[2];
        arr=[];
        inpnum=ans;

    }
    if(arr[1]==="x"){
        ans*=arr[2];
        arr=[];
        inpnum=ans;

    }
    if(arr[1]==="%"){
        ans%=arr[2];
        arr=[];
        inpnum=ans;

    }
    document.getElementById('Input_field').textContent=ans;
}

function take(n){
    inpnum=inpnum*10+n;
}