//your JS code here. If required.
 let progress = document.getElementById("progress")
 let circles = document.querySelectorAll(".circle")
 let prev = document.getElementById("prev")
 let next = document.getElementById("next")

 let currentActivate =1;
 prev.addEventListener("click",()=>{
    currentActivate--
    if(currentActivate < 1){
        currentActivate = 1
    }
    update()

 })
 next.addEventListener("click",()=>{
    currentActivate++
    if(currentActivate > circles.length){
        currentActivate = circles.length
    }
    update()

 })
 function update(){ 
    circles.forEach((circles,index) => {
        if(currentActivate>index){
            circles.classList.add("active")
        }
        else{
            circles.classList.remove("active")
        }
          });
         let progressWidth = ((currentActivate-1)/(circles.length-1))*100;
         progress.style.width = progressWidth +"%"

         prev.disabled = currentActivate === 1
         next.disabled = currentActivate === circles.length
         
}
