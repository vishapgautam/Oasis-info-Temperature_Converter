    let a=document.getElementById('e')
    let b=document.getElementById('inputGroupSelect01')
    document.getElementById('a4').addEventListener('click',click)
    function click(){
    console.log(b.value)
     if (b.value==1 || b.value=='temp'){
     let temp_f=a.value;
     let temp_cel=(temp_f-32)*(5/9);
     document.getElementById('result').innerHTML=temp_cel+'°C'
     }else{
     let temp_cel=a.value;
     let temp_f=((temp_cel/5)*9)+32
     document.getElementById('result').innerHTML=temp_f+'°F'   
     }
    }