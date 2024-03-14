let bulb = document.querySelector("#img");
let btn = document.querySelector(".switch");

let flag = 0;

btn.addEventListener("change",function(){
    if(flag===0){
        img.src = "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
        Image
        flag = 1;
        
    }else{
        img.src ="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
        flag=0;
    }
})