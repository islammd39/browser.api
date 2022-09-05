const showAlart = ()=>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){

        alert('this is promt')
    }
}


const confirmm = () =>{
    const isconfirm =  confirm('this is confirm detels orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
     console.log(isconfirm);
     if(isconfirm === true){
        alert( 'yes is true');
     }
     else{
        alert('no is not');
     }
}

const isproft = () =>{
    const promt = prompt('yes fill up')
    console.log(promt);
}