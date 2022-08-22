let string="";
let buttons=document.querySelectorAll('.button');


Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        try{

        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }

        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }

        else if(e.target.innerHTML=='M+'){
            string+="+1";
            console.log(string);
            document.querySelector('input').value=string;
        }


        else{
        console.log(e.target)

        string+=e.target.innerHTML;
        document.querySelector('input').value=string;}
    }

    catch(err){
        string="WRONG-INPUT";
        document.querySelector('input').value=string;
    }
})
})