let example = +prompt("misol sonini kiriting");
function math(){
    let number = Math.round(Math.random()*10)
    let secnumber= Math.round(Math.random()*10)
    let symbol = " + "
    let misol = (number+secnumber)
    return misol

}  


for(let i = 0; i < example; i++){
   
    console.log(math());
}
