let background = document.querySelector(".background");
let hamburger = document.querySelector(".hamburger-trigger");
let hamburgerHide = document.querySelector(".hamburger-trigger-delete")
let sidebar = document.querySelector(".hamburger");
let dropdown = document.querySelector(".dropdownd");
let dropdownTrigger = document.querySelector(".dropdownd-trigger");
let dropdownHide = document.querySelector(".dropdownd-trigger-delete");
let leftBTN =document.querySelector(".left");
let rightBTN =document.querySelector(".right");
let autoBTN =document.querySelector(".auto");
let counter = 0;
let imagesContainer = document.querySelector(".images-container");
let images = document.querySelectorAll(".img");
let blocks = document.querySelectorAll(".block");

blocks = Array.from(blocks)
hamburger.addEventListener("click",()=>{

    sidebar.style.left="0";
    background.style.opacity = "0.6"
    background.style.zIndex = "1000";

})
hamburgerHide.addEventListener("click",()=>{
    sidebar.style.left="-100%";
    background.style.opacity = "0"
    background.style.zIndex = "-1000";
})
dropdownTrigger.addEventListener("click",()=>{

    dropdown.style.top="0";
    background.style.opacity = "0.6"
    background.style.zIndex = "1000";

})
dropdownHide.addEventListener("click",()=>{
    dropdown.style.top="-100%";
    background.style.opacity = "0"
    background.style.zIndex = "-1000";
})
rightBTN.addEventListener("click",()=>{
    counter = counter -100;
    if (counter < -500){
        counter = 0;
    }
        imagesContainer.style.left = `${counter}%`;
        leCheckOfBlock();
        clearInterval(auto);
        autoBTN.classList.remove("active-auto")
})
leftBTN.addEventListener("click",()=>{
    counter = counter +100;
    if (counter > 0){
        counter = -500;
    }
        imagesContainer.style.left = `${counter}%`;
        leCheckOfBlock();
        clearInterval(auto);
        autoBTN.classList.remove("active-auto")
    })
    var auto = setInterval(function(){
    
        counter = counter -100;
        if (counter < -500){
            counter = 0;
        }
            imagesContainer.style.left = `${counter}%`;
            leCheckOfBlock();
    }, 1000);

function leAuto(){
     auto = setInterval(function(){
    
        counter = counter -100;
        if (counter < -500){
            counter = 0;
        }
            imagesContainer.style.left = `${counter}%`;
            leCheckOfBlock();
    }, 1000);
}
clearInterval(auto)

    function leCheckOfBlock(){
        if( counter === 0){
            blocks.forEach((block)=>{
                block.classList.remove("active")
                
            })
            blocks[0].classList.add("active")
        }
        if( counter === -100){
            blocks.forEach((block)=>{
                block.classList.remove("active")
             
            })
            blocks[1].classList.add("active")
        }
        if( counter === -200){
            blocks.forEach((block)=>{
                block.classList.remove("active")
                
            })
            blocks[2].classList.add("active")
        }
        if( counter === -300){
            blocks.forEach((block)=>{
                block.classList.remove("active")
   
            })
            blocks[3].classList.add("active")
        }
        if( counter === -400){
            blocks.forEach((block)=>{
                block.classList.remove("active")
            
            })
            blocks[4].classList.add("active")
        }
        if( counter === -500){
            blocks.forEach((block)=>{
                block.classList.remove("active")
        
            })
            blocks[5].classList.add("active")
        }
    }

    blocks.forEach((block)=>{
        block.addEventListener("click",(event)=>{
            counter = 0;
           
            let id = event.target.id * -100;
             counter = counter+ id

             imagesContainer.style.left = `${counter}%`;
             leCheckOfBlock();
             
        })
    })
    autoBTN.addEventListener("click", function(){
        if(autoBTN.classList.contains("active-auto")){
            autoBTN.classList.remove("active-auto")
            imagesContainer.style.left = `${counter}%`;
        clearInterval(auto)
        }else{
            autoBTN.classList.add("active-auto")
            leAuto()
        }
 
    });