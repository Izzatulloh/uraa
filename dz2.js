let example = +prompt("misol sonini kiriting");
function math(){
    let key = Math.ceil(Math.random()*4)
    let number = Math.floor(Math.random()*11)
    let secnumber= Math.floor(Math.random()*11)
    switch (key) {
        case 1:question_1=+prompt(number+'+'+secnumber);
        if(question_1==number+secnumber){
            console.log("Siznign javob to'g'ri - "+(number+secnumber));
        } else{
            console.log("Sizning javob noto'gri - "+question_1+"   To'g'ri javob - "+(number+secnumber));
            
        }
            break;
         case 2:question_2=+prompt(number+'-'+secnumber);
         if(question_2==number-secnumber){
            console.log("Siznign javob to'g'ri - "+(number-secnumber));
        } else{
            console.log("Sizning javob noto'gri - "+question_2+"  To'g'ri javob - "+(number-secnumber));
            
        }
            break;
        case 3:question_3=+prompt(number+'*'+secnumber);
        if(question_3==number*secnumber){
            console.log("Siznign javob to'g'ri - "+(number*secnumber));
        } else{
            console.log("Sizning javob noto'gri - "+question_3+"  To'g'ri javob - "+(number*secnumber));
            
        }
            break;
        case 4: question_4=+prompt(number+'/'+secnumber);
        if(question_4==number/secnumber){
            console.log("Siznign javob to'g'ri - "+(number/secnumber));
        } else{
            console.log("Sizning javob noto'gri - "+question_4+"  To'g'ri javob - "+(number/secnumber));
            
        };
            break;
    }   return key
}  
for(let i = 0; i < example; i++){
    (math());
}
