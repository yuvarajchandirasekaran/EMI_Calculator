
const principle = document.getElementById("principle");
const intrest = document.getElementById("intrest");
const time = document.getElementById("time");
const input=document.getElementsByTagName("input")
let totalIntrest = document.getElementById("total-intrest");
let totalAmount = document.getElementById("total-amount");
const submitbtn = document.querySelector(".calcibtn")
let payAmount = document.getElementById("pay-amount");
const mbtn=document.querySelector(".mbtn")
const ybtn=document.querySelector(".ybtn")
const output=document.querySelector(".output")
const error=document.querySelector(".error")



mbtn.addEventListener("click",()=>{   
   
    mbtn.classList.add("show")
    ybtn.classList.remove("show")
    submitbtn.addEventListener('click', () => { 
       
        if (principle.value!=="" && intrest.value!=="" && time.value!=="" && principle.value!==0 && intrest.value!==0 && time.value!==0) {
          let r1 = intrest.value / 1200
            
            let formula1 = (principle.value * r1) * (1 + r1) ** time.value
            let formula2 = ((1 + r1) ** time.value - 1)

            let EmiAmount = formula1 / formula2

            payAmount.innerText = Math.round(EmiAmount).toLocaleString()

            Tamount = EmiAmount * time.value
            totalAmount.innerText = Math.round(Tamount).toLocaleString()

            Tint = (EmiAmount * time.value) - principle.value
            totalIntrest.innerText = Math.round(Tint).toLocaleString()
            output.classList.add("show1")
            setTimeout(() => {
                output.classList.remove("show1")
            }, 5000);
        }
        
    })
})


ybtn.addEventListener("click",()=>{
   let period=time.value*12

    mbtn.classList.remove("show")
    ybtn.classList.add("show")

    submitbtn.addEventListener("click",()=>{
        if (principle.value!=="" && intrest.value!=="" && time.value!=="" && principle.value!==0 && intrest.value!==0 && time.value!==0) {
                
            
            let r1 = intrest.value / 1200

            let formula1 = (principle.value * r1) * (1 + r1) ** period
            let formula2 = ((1 + r1) ** period - 1)

            let EmiAmount = formula1 / formula2

            payAmount.innerText = Math.round(EmiAmount).toLocaleString()

            Tamount = EmiAmount * period
            totalAmount.innerText = Math.round(Tamount).toLocaleString()

            Tint = (EmiAmount * period) - principle.value
            totalIntrest.innerText = Math.round(Tint).toLocaleString()
            output.classList.add("show1")   
            setTimeout(() => {
                output.classList.remove("show1")
            }, 5000);

        }
        
    })

    })

    submitbtn.addEventListener('click', () => { 

        if(principle.value=="" || intrest.value=="" || time.value=="" || principle.value==0 || intrest.value==0 || time.value==0){
            error.style.color="red"
            setTimeout(() => {
                error.style.color=""
            }, 1800);
        }
     
    })








