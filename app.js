const showAlart = ()=>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){

        alert('this is promt')
    }
}


const confirmm = () =>{
    const isconfirm =  confirm('this is confirm detels')
     console.log(isconfirm);
     if(isconfirm === true){
        console.log( 'yes is true');
     }
     else{
        console.log('no is not');
     }
}